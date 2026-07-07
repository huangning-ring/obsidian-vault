# PDF 下载状态
目标论文：Wang et al., 2022, Journal of Biological Chemistry, PALMD regulates aortic valve calcification via altered glycolysis and NF-κB–mediated inflammation
DOI：10.1016/j.jbc.2022.101887
PII：S0021925822003271
状态：未能自动下载到真实 PDF 文件。
已成功保存：官方全文 Markdown，路径为 [[Wang 2022 PALMD JBC]]。
失败路径：
1. `paper-fetch fetch_paper`：超过 300 秒超时，只留下过临时 envelope 索引，未保存 PDF。
2. `scansci-pdf smart_download`：返回 `no PDF found`；Tor/Sci-Hub 不可达，Elsevier API key 未配置。
3. JBC 官方 PDF 路由 `https://www.jbc.org/article/S0021-9258(22)00327-1/pdf`：命令行被 Cloudflare JavaScript challenge 拦截，浏览器自动化未触发真实下载。
4. JBC `action/showPdf` 路由：返回 HTML，不是 PDF。
5. ScienceDirect `pdfft` 路由：返回验证码/反爬页面，不是 PDF。
验证规则：只有文件头为 `%PDF` 才保留为 PDF；返回 `<!DOCTYP` 的伪 PDF 已删除。
后续最短路径：配置 Elsevier API key 后重跑 `scansci_pdf_smart_download`，或在浏览器里手动完成 ScienceDirect/JBC 验证后保存 PDF 到本文件夹。
