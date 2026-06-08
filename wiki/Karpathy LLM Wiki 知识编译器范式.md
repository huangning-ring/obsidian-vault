# Karpathy LLM Wiki 知识编译器范式
## 概述
本文档综合整理自原始设计文档（Karpathy Gist）、社区实践以及本库初始化过程中的讨论。记录了 LLM Wiki 范式的核心思想、架构、操作流程、最佳实践与注意事项。本库已于 2026-06-08 基于此范式初始化，详情见 [[wiki/log.md]]。
***
## 来源
- **原始设计**：Andrej Karpathy 于 2026 年 4 月发布的 Gist — [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- **社区验证**：至顶网完整翻译、腾讯云开发者社区深度实测、知乎系列讨论、GitHub 多个开源实现（Astro-Han/karpathy-llm-wiki、liangdabiao/llm-wiki、TrueHOOHA/LLM-Wiki-Skilled 等）
- **验证日期**：2026-06-08
- **验证方式**：WebFetch + WebSearch + 原始 Gist 全文阅读
***
## 核心思想：从解释器到编译器
Karpathy 的核心洞察是：传统 RAG 像**解释器**——每次查询时从零检索、重新理解、生成回答，知识无法积累。LLM Wiki 则像**编译器**——在摄入资料时就将其"编译"为持久化的结构化 Wiki，知识被编译一次后持续沉淀，实现复利式增长。关键对比：RAG 是 amnesiac（健忘的），每次查询等于重新开始；LLM Wiki 是 compounding（复利的），每篇新资料都会让整个知识库变得更丰富。一个核心动作可能触发 10-15 个 Wiki 页面的级联更新。
***
## 三层架构
**Raw（原材料）**——只读源文件目录，存放论文、文章、PDF、笔记截图等原始资料。LLM 只读不写，是事实来源和溯源锚点。本库对应 [[raw/]]。**Wiki（知识库）**——LLM 生成并维护的结构化 Markdown 页面集合，包含实体页、概念页、摘要、综合分析和归档问答。LLM 全权负责创建、更新、交叉引用和一致性维护。人类负责阅读和引导。本库对应 [[wiki/]]。**Schema（规范）**——定义 Wiki 结构、约定和工作流的配置文件。在本库中即为 [[CLAUDE.md]] 中追加的 `LLM Wiki — 知识编译器模式` 章节。Schema 是让 LLM 从通用聊天机器人变成"守纪律的 Wiki 维护者"的关键，需要人类与 LLM 共同迭代演化。
***
## 三大核心操作
**Ingest（编译）**——将新资料放入 raw/，LLM 读取、提炼关键信息，写入摘要页，并级联更新所有相关实体/概念页面，最后更新 index.md 和 log.md。建议逐个资料交互式编译，人类阅读摘要、检查更新、引导 LLM 关注重点。
**Query（查询）**——对 Wiki 提问。LLM 先读 index.md 定位相关页面，深入阅读后综合回答（带来源引用）。**重要原则：好的问答结果必须归档回 Wiki**，作为新的综合页面存入，不让有价值的信息流失在对话历史中。
**Lint（体检）**——定期健康检查。LLM 扫描 Wiki 查找：页面间的矛盾断言、已被新资料取代的过时陈述、无入链的孤儿页面、提及但未独立成页的缺失概念、缺失的交叉引用。**建议每周至少一次。**
***
## 目录结构约定
```
vault/
├── CLAUDE.md              # Schema（含 LLM Wiki 范式章节）
├── raw/                    # 原材料（只读，LLM 不修改）
│   └── .gitkeep
├── wiki/
│   ├── index.md            # 内容目录，每次 Ingest 后更新
│   ├── log.md              # 追加式操作日志
│   └── *.md                # 实体页、概念页、摘要、综合等
└──（其他现有目录和文件保持不动）
```
***
## 五项关键原则
**LLM 是维护者，人类是策展人和提问者。** LLM 负责所有"苦力活"（总结、交叉引用、归档、一致性检查），人类负责策展来源、引导分析方向、提出好问题。**知识被编译一次，持久沉淀。** 不依赖每次查询时的临时检索，知识增量编译后永久位于 Wiki 中，每次新资料加入都会让已有页面变得更丰富。**好的问答结果归档回 Wiki。** 有价值的问答不应该消失在聊天历史中，应该作为新的 Wiki 页面沉淀下来，让探索本身也成为复利的一部分。**不手动编辑 Wiki 页面。** 所有 Wiki 修改应通过 LLM 完成，手动编辑会破坏 LLM 对页面状态的认知，导致后续维护混乱。**定期 Lint。** 知识库随规模增长会自然产生矛盾、过时和碎片化，定期体检是保持健康的关键。
***
## 社区实现概览
**Astro-Han/karpathy-llm-wiki**（GitHub 644⭐）——Agent Skills 兼容，一行 npx 命令安装。截至 2026 年 4 月起已维护 94 篇文章 99 个源，经受住日常使用考验。兼容 Claude Code、Cursor、Codex CLI。**liangdabiao/llm-wiki**——支持网页、推特、公众号、小红书、知乎、YouTube、PDF 等多素材源自动摄入。支持通过 Quartz 发布为静态 Wiki 网站，含 Claude Agent SDK API 接口。**TrueHOOHA/LLM-Wiki-Skilled**——强调用 Agent Skills 强制执行工作流刚性，减少 LLM 行为漂移。含测试夹具目录用于验证。**lucasastorian/llmwiki**——完整开源实现，含 MCP 服务器、Web UI（Next.js）、FastAPI 后端。一键命令启动，支持 Claude Desktop/Code、OpenCode、Cursor 等。**harrylabs/llm-wiki-karpathy**（npm）——确定性运行时，支持多模态（文本、PDF、图片、CSV、JSON），含 Gap Mapping 和 Representation Tracking 等高级功能。
***
## 规模演进路径
**0-100 页**——Obsidian + Claude Code + Git 即可，index.md 文件足够定位。**100-500 页**——添加 BM25 搜索引擎（推荐 qmd：本地 Markdown 搜索，混合 BM25/向量 + LLM 重排序，支持 CLI 和 MCP 两种模式）。**500 页以上**——可引入更高级的检索基础设施（如 GraphRAG 或向量数据库）。根据社区实测，Karpathy 的纯 index.md 方案在约 100 个源、数百个 Wiki 页面的规模下表现令人惊讶地好，无需急于上复杂架构。
***
## 常见陷阱
**不设 Schema 规则就让 LLM 自由发挥**——Wiki 结构会迅速混乱，失去一致性。应先定义好页面类型和约定。**手动编辑 Wiki 页面**——破坏 LLM 对页面状态的追踪，后续维护会逐渐出错。所有修改通过 LLM 进行。**忽视原始素材溯源**——如果 raw/ 中丢失了原文，LLM 的断言将无法验证，hallucination 风险上升。**查询结果不归档**——最有价值的产出（synthesis、对比分析、跨领域连接）若仅留在对话中，就失去了复利效应。**一开始就上复杂架构**——GraphRAG、向量索引等带来大量运维成本。从最简单的文件结构开始，遇到瓶颈再升级。
***
## 参考资料
- [Karpathy 原始 Gist：LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [至顶网中文完整翻译与解读](https://maker.zhiding.cn/2026/0405/3183262.shtml)
- [腾讯云开发者社区：Karpathy LLM Wiki 实测报告](https://cloud.tencent.cn/developer/article/2658818)
- [知乎：从个人 LLM Wiki 到 10 人团队知识系统——阶段性实践总结](https://zhuanlan.zhihu.com/p/2026427723661197514)
- [Astro-Han/karpathy-llm-wiki](https://github.com/Astro-Han/karpathy-llm-wiki)
- [liangdabiao/llm-wiki](https://github.com/liangdabiao/llm-wiki)
