from __future__ import annotations

import hashlib
import json
import re
import shutil
import subprocess
import unicodedata
from difflib import SequenceMatcher
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader


POOL = Path(__file__).resolve().parent
INCOMING = POOL / "_incoming"
METADATA = INCOMING / "_metadata.json"
DOI_INDEX = INCOMING / ".doi_index.json"
RESULTS = POOL / "_qa_results.json"
RENDERS = POOL / "_renders"
PDFTOPPM = Path(
    r"C:\Users\29731\.cache\codex-runtimes\codex-primary-runtime"
    r"\dependencies\native\poppler\Library\bin\pdftoppm.exe"
)

EXISTING = {
    "10.1073/pnas.0906850106": INCOMING / "Rock-2009-Airway-basal-stem-cells.pdf",
    "10.1016/j.stem.2017.03.001": INCOMING / "McCauley-2017-PSC-airway-epithelium-Wnt.pdf",
    "10.15252/embj.2018100300": INCOMING / "Sachs-2019-Long-term-airway-organoids.pdf",
    "10.1016/j.stem.2016.05.012": INCOMING / "Mou-2016-Dual-SMAD-basal-cell-expansion.pdf",
    "10.1038/s41598-022-11700-z": INCOMING / "Stroulios-2022-Apical-out-airway-organoids.pdf",
}

STOPWORDS = {
    "a", "an", "and", "as", "at", "by", "for", "from", "in", "into", "of",
    "on", "the", "to", "using", "with", "via", "derived", "human",
}

ACCESS_PAGE_MARKERS = (
    "access denied",
    "captcha",
    "enable javascript",
    "just a moment",
    "purchase this article",
    "sign in to access",
    "this content is not available",
    "verify you are human",
)

KNOWN_INVALID_DOWNLOADS = {
    "10.1038/nbt.2328": "下载到补充图文件，不是论文正文",
    "10.1038/nbt.2754": "下载到补充材料文件，不是论文正文",
    "10.1038/s41390-020-0925-3": "下载到单细胞测序补充图文件，不是论文正文",
    "10.1038/ncb3510": "下载到 Supplementary Information，不是论文正文",
    "10.1038/s41596-020-00476-z": "下载到 Supplementary Information，不是论文正文",
}


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFKD", value or "")
    value = "".join(ch for ch in value if not unicodedata.combining(ch))
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def doi_plain(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", (value or "").lower())


def safe_ascii(value: str) -> str:
    value = unicodedata.normalize("NFKD", value or "")
    value = value.encode("ascii", "ignore").decode("ascii")
    value = re.sub(r"[^A-Za-z0-9]+", "-", value).strip("-")
    return value or "Unknown"


def short_title(title: str) -> str:
    words = re.findall(r"[A-Za-z0-9]+", unicodedata.normalize("NFKD", title or ""))
    useful = [w for w in words if w.lower() not in STOPWORDS]
    chosen = useful[:7] if useful else words[:7]
    return "-".join(chosen)[:72].strip("-") or "Untitled"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest().upper()


def inspect_pdf(path: Path) -> dict:
    result = {
        "path": str(path),
        "valid_structure": False,
        "pages": 0,
        "bytes": path.stat().st_size if path.exists() else 0,
        "sha256": "",
        "text": "",
        "error": "",
    }
    try:
        with path.open("rb") as handle:
            if handle.read(5) != b"%PDF-":
                result["error"] = "missing_pdf_magic"
                return result
        if result["bytes"] <= 10 * 1024:
            result["error"] = "file_too_small"
            return result
        reader = PdfReader(str(path), strict=False)
        if reader.is_encrypted:
            result["error"] = "encrypted"
            return result
        result["pages"] = len(reader.pages)
        if result["pages"] < 1:
            result["error"] = "zero_pages"
            return result
        pieces = []
        for page in reader.pages[:3]:
            try:
                pieces.append(page.extract_text() or "")
            except Exception:
                pieces.append("")
        result["text"] = re.sub(r"\s+", " ", " ".join(pieces)).strip()
        result["sha256"] = sha256(path)
        result["valid_structure"] = True
        return result
    except Exception as exc:
        result["error"] = f"{type(exc).__name__}: {exc}"
        return result


def identity_score(record: dict, pdf: dict) -> tuple[int, str]:
    if not pdf["valid_structure"]:
        return -1000, pdf["error"]
    text = normalize(pdf["text"])
    title = normalize(record["title"])
    doi_hit = doi_plain(record["doi"]) in doi_plain(pdf["text"])
    title_ratio = SequenceMatcher(None, title[:400], text[:2500]).ratio()
    title_tokens = set(title.split())
    text_tokens = set(text.split())
    overlap = len(title_tokens & text_tokens) / max(1, len(title_tokens))
    first_family = ""
    if record.get("authors"):
        first_family = normalize(record["authors"][0]).split()[-1]
    author_hit = bool(first_family and first_family in text)
    year_hit = str(record.get("year") or "") in text
    access_page = any(marker in text for marker in ACCESS_PAGE_MARKERS)
    body_markers = sum(
        marker in text
        for marker in ("abstract", "introduction", "methods", "materials", "results", "references")
    )
    if access_page:
        return -500, "access_page_marker"
    if pdf["pages"] == 1 and len(text) < 1800 and body_markers == 0:
        return -300, "single_page_without_article_body"
    score = 0
    if doi_hit:
        score += 100
    if overlap >= 0.80:
        score += 80
    elif overlap >= 0.62:
        score += 55
    elif overlap >= 0.45:
        score += 30
    score += int(title_ratio * 20)
    if author_hit:
        score += 15
    if year_hit:
        score += 8
    if body_markers >= 2:
        score += 12
    evidence = (
        f"doi={'yes' if doi_hit else 'no'};"
        f"title_overlap={overlap:.2f};author={'yes' if author_hit else 'no'};"
        f"year={'yes' if year_hit else 'no'};body_markers={body_markers}"
    )
    if not doi_hit and not (overlap >= 0.62 and author_hit):
        return min(score, 49), evidence
    return score, evidence


def infer_source(name: str, pmcid: str) -> str:
    lower = name.lower()
    if "sci-hub" in lower or "scihub" in lower:
        return "Sci-Hub"
    if "semanticscholar" in lower:
        return "Semantic Scholar"
    if "arxiv" in lower or "biorxiv" in lower or "medrxiv" in lower:
        return "预印本仓储"
    if pmcid and pmcid.lower() in lower:
        return f"PMC ({pmcid})"
    return "来源未追溯"


def canonical_name(record: dict, used: dict[str, str]) -> str:
    author = record.get("authors", ["Unknown"])[0] if record.get("authors") else "Unknown"
    family = author.split()[-1] if author else "Unknown"
    base = f"{safe_ascii(family)}-{record.get('year') or 'n.d.'}-{safe_ascii(short_title(record['title']))}"
    name = f"{base}.pdf"
    if name.lower() in used and used[name.lower()] != record["doi"]:
        suffix = safe_ascii(record["doi"].split("/")[-1])[-24:]
        name = f"{base}-{suffix}.pdf"
    used[name.lower()] = record["doi"]
    return name


def render_first_page(path: Path, label: str, output: Path) -> dict:
    try:
        stem = output.with_suffix("")
        completed = subprocess.run(
            [
                str(PDFTOPPM),
                "-f",
                "1",
                "-l",
                "1",
                "-singlefile",
                "-png",
                "-r",
                "120",
                str(path),
                str(stem),
            ],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=60,
            check=False,
        )
        if completed.returncode != 0 or not output.exists():
            raise RuntimeError(
                f"pdftoppm exit={completed.returncode}: {completed.stderr[-500:]}"
            )
        return {"ok": True, "path": str(output), "error": ""}
    except Exception as exc:
        return {"ok": False, "path": str(output), "error": f"{type(exc).__name__}: {exc}"}


def make_contact_sheets(render_items: list[tuple[Path, str]]) -> list[str]:
    sheet_paths = []
    thumb_w, thumb_h, label_h = 480, 620, 58
    for sheet_no, start in enumerate(range(0, len(render_items), 12), 1):
        chunk = render_items[start : start + 12]
        canvas = Image.new("RGB", (thumb_w * 4, (thumb_h + label_h) * 3), "white")
        draw = ImageDraw.Draw(canvas)
        for pos, (png, label) in enumerate(chunk):
            image = Image.open(png).convert("RGB")
            image.thumbnail((thumb_w - 12, thumb_h - 12))
            x = (pos % 4) * thumb_w + (thumb_w - image.width) // 2
            y = (pos // 4) * (thumb_h + label_h) + (thumb_h - image.height) // 2
            canvas.paste(image, (x, y))
            label_y = (pos // 4) * (thumb_h + label_h) + thumb_h + 4
            draw.text((pos % 4 * thumb_w + 8, label_y), label[:72], fill="black")
        sheet = RENDERS / f"contact-sheet-{sheet_no:02d}.png"
        canvas.save(sheet, quality=92)
        sheet_paths.append(str(sheet))
    return sheet_paths


def main() -> None:
    records = json.loads(METADATA.read_text(encoding="utf-8"))
    index = {}
    if DOI_INDEX.exists():
        index = {k.lower(): Path(v) for k, v in json.loads(DOI_INDEX.read_text(encoding="utf-8")).items()}
    all_pdfs = sorted(INCOMING.glob("*.pdf"))
    inspected = {str(path): inspect_pdf(path) for path in all_pdfs}
    used_source_paths: set[str] = set()
    used_names: dict[str, str] = {}
    selected_hashes: dict[str, str] = {}
    results = []
    render_queue: list[tuple[Path, str]] = []
    RENDERS.mkdir(exist_ok=True)
    for record in records:
        doi = record["doi"].lower()
        preferred = []
        if doi in EXISTING and EXISTING[doi].exists():
            preferred.append(EXISTING[doi])
        if doi in index and index[doi].exists() and index[doi] not in preferred:
            preferred.append(index[doi])
        candidates = preferred
        scored = []
        for path in candidates:
            if str(path) in used_source_paths:
                continue
            pdf = inspected[str(path)]
            score, evidence = identity_score(record, pdf)
            preference = 30 if path in preferred else 0
            scored.append((score + preference, score, path, evidence))
        scored.sort(key=lambda item: (item[0], inspected[str(item[2])]["bytes"]), reverse=True)
        chosen = scored[0] if scored and scored[0][1] >= 70 else None
        base = {
            **record,
            "status": "failed_manual_needed",
            "file": "",
            "source": "",
            "pages": 0,
            "bytes": 0,
            "sha256": "",
            "identity_evidence": "",
            "failure_reason": "未获得通过结构与身份双重核验的 PDF",
            "attempted": "PMC/Europe PMC；DOI 落地页；scansci-pdf oa_first（含 Sci-Hub/LibGen 补充入口）",
        }
        if doi in KNOWN_INVALID_DOWNLOADS:
            invalid_path = preferred[0] if preferred else None
            invalid_pdf = inspected.get(str(invalid_path), {}) if invalid_path else {}
            base.update(
                {
                    "status": "rejected_invalid",
                    "source": infer_source(
                        invalid_path.name if invalid_path else "",
                        record.get("pmcid", ""),
                    ),
                    "pages": invalid_pdf.get("pages", 0),
                    "bytes": invalid_pdf.get("bytes", 0),
                    "sha256": invalid_pdf.get("sha256", ""),
                    "failure_reason": KNOWN_INVALID_DOWNLOADS[doi],
                }
            )
            results.append(base)
            continue
        if not chosen:
            results.append(base)
            continue
        _, _, source_path, evidence = chosen
        pdf = inspected[str(source_path)]
        if pdf["sha256"] in selected_hashes:
            base["status"] = "rejected_invalid"
            base["failure_reason"] = (
                f"与 {selected_hashes[pdf['sha256']]} 哈希重复，不能作为不同论文归档"
            )
            base["identity_evidence"] = evidence
            results.append(base)
            continue
        target_name = canonical_name(record, used_names)
        target = POOL / target_name
        if target.exists() and sha256(target) != pdf["sha256"]:
            suffix = safe_ascii(record["doi"].split("/")[-1])[-24:]
            target = POOL / f"{target.stem}-{suffix}.pdf"
        if not target.exists():
            shutil.copy2(source_path, target)
        used_source_paths.add(str(source_path))
        selected_hashes[pdf["sha256"]] = record["doi"]
        status = "existing_valid" if doi in EXISTING else "downloaded"
        render_path = RENDERS / f"{len(render_queue) + 1:03d}-{target.stem}.png"
        render_result = render_first_page(target, target.name, render_path)
        if not render_result["ok"]:
            target.unlink(missing_ok=True)
            base["status"] = "rejected_invalid"
            base["failure_reason"] = f"首页渲染失败：{render_result['error']}"
            base["identity_evidence"] = evidence
            results.append(base)
            continue
        render_queue.append((render_path, target.name))
        base.update(
            {
                "status": status,
                "file": target.name,
                "source": infer_source(source_path.name, record.get("pmcid", "")),
                "pages": pdf["pages"],
                "bytes": pdf["bytes"],
                "sha256": pdf["sha256"],
                "identity_evidence": evidence,
                "failure_reason": "",
                "render": str(render_path),
            }
        )
        results.append(base)
    contact_sheets = make_contact_sheets(render_queue)
    payload = {
        "record_count": len(records),
        "results": results,
        "incoming_pdf_count": len(all_pdfs),
        "unassigned_files": [
            str(path) for path in all_pdfs if str(path) not in used_source_paths
        ],
        "contact_sheets": contact_sheets,
    }
    RESULTS.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(
        json.dumps(
            {
                "records": len(results),
                "existing_valid": sum(x["status"] == "existing_valid" for x in results),
                "downloaded": sum(x["status"] == "downloaded" for x in results),
                "failed_manual_needed": sum(
                    x["status"] == "failed_manual_needed" for x in results
                ),
                "rejected_invalid": sum(x["status"] == "rejected_invalid" for x in results),
                "rendered": len(render_queue),
                "contact_sheets": len(contact_sheets),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
