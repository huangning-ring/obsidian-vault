# AGENTS-Obsidian
# 记忆信息
**知识编译一次，持久沉淀，不流失在对话历史中。**
## LLM Wiki 架构（Karpathy 范式）
- **raw/** — 只读源文件。论文、PDF、笔记截图等原始资料。只读不写，是事实来源。
- **wiki/** — LLM 生成并维护的结构化 Markdown 页面。LLM 全权负责创建、更新、交叉引用。
- **AGENTS.md（本文）** — 定义 Wiki 结构、约定和工作流的 Schema 文件。
## 三大操作
- **Ingest（编译）**：新资料放入 raw/，读取、提炼、整合到现有 Wiki（更新实体页、概念页、索引、日志）。
- **Query（查询）**：对 Wiki 提问，搜索索引、阅读相关页面、综合回答。好的问答结果归档回 Wiki。
- **Lint（体检）**：定期检查 Wiki 健康——矛盾、过时断言、孤立页面、缺失概念。
## 文件约定
- `wiki/index.md` — 全库内容目录，每次编译后更新。
- `wiki/log.md` — 追加式操作日志，每条以 `## [YYYY-MM-DD] 操作类型 | 标题` 开头。
## 联系人
Paul Tang → 唐奇宇 / April Tan → 谭笑 / Harry → 林清鸿 / Rosalind → 李秀娟 / Ricky → 余春华 / Ring → 黄宁（我）/ Weng Xiong → 翁熊
## 中文字号对照
初号42pt / 小初36pt / 一号26pt / 小一24pt / 二号22pt / 小二18pt / 三号16pt / 小三15pt / 四号14pt / **小四12pt** / 五号10.5pt / 小五9pt
