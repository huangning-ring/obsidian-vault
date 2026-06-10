# CLAUDE.md — 跨对话记忆
每次对话开始时自动读取此文件。
***
# 思考
**先想清楚，再动手。不假设，不隐瞒困惑，把分歧摆上台面。**
在行动前，必须做到：
- 明确说出你的假设。不确定就问，不要悄悄选一个然后跑。
- 若请求存在多种解读，列出来让用户选，不要私自挑一个。
- 若存在更简单的路径，说出来，推回去。
- 若目标模糊、存在删除/覆盖风险、或当前路径明显低效，停下来讨论，再执行。
**自检：** 如果你发现自己在"合理化"一个假设而非确认它，停下来问。
***
# 调用命令
**调用最小必要的工具，走最短路径。优先用已知可靠的通道。**
## 抓取优先级
1. **bb-browser site 命令**（首选）— 登录态、反爬、动态内容。
2. **defuddle skill** — 静态网页：`defuddle parse <URL> --md`
3. **Bash + curl** — 原始抓取，搭配手动分析
4. **WebFetch** — 最终后备，不可依赖（400报错频发，原因：`options type cannot be disabled when reasoning_effort is set`）
## 识图
系统 vision skill 已禁用，使用 vision.js：
```
node vision.js "<图片路径>" "用中文描述这张图片"
node vision.js --url "<图片链接>" "用中文描述这张图片"
```
## 邮件
QQ邮箱（foxmail）已接入 IMAP，优先于浏览器：
- 地址：`huangning.ring@foxmail.com` / 服务器：`imap.qq.com:993`（SSL）
- 授权码：`icjrnupcfxbbdcfj`
- 读取：`node "C:\Users\29731\.bb-browser\fetch-email.js"`
## .jsp 动态下载
高校教务系统附件必须带 Referer，否则拿到的是错误页（3-4K）：
```
curl -sL -o "文件名.docx" -e "https://来源页面URL" "https://.../download.jsp?..."
```
## bb-browser 响应字段速查
知乎：`result.items` → `title` / `heat` / `answer_count`
B站：`result.videos` → `title` / `view` / `like` / `author`
微博热搜：`result.items` → `word` / `hot_value`
微博帖子：`result.statuses` → `text` / `reposts_count` / `comments_count`
小红书：`result.items` → `title` / `liked_count` / `author`
东方财富：`result.quote` → `name` / `price` / `changePercent`
BOSS直聘：`result.jobs` → `jobName` / `salaryDesc` / `companyName`
豆瓣：`result.subjects` → `title` / `rating.value` / `year`
今日头条：`result.items` → `title` / `hot_value` / `source`
虎扑：`result.posts` → `title` / `replies` / `author`
V2EX：`result.topics` → `title` / `replies` / `node`
雪球动态：`result.statuses` → `text` / `retweet_count`
雪球股票：`result.quote` → `name` / `current` / `chg_pct`
即刻：`result.items` → `content` / `like_count` / `author`
小宇宙：`result.episodes` → `title` / `play_count` / `duration`
36氪：`result.items` → `title` / `description`
Twitter：`result.tweets` → `text` / `like_count` / `retweet_count`
YouTube：`result.videos` → `title` / `view_count` / `channel`
GitHub：`result` → `name` / `stars` / `forks` / `language`
Reddit：`result.posts` → `title` / `upvotes` / `num_comments`
HN：`result.stories` → `title` / `points` / `comments_count`
Instagram：`result.items` → `caption` / `like_count`
豆瓣电影：`result` → `title` / `rating` / `directors`
***
# 输出
**直接给结论，零废话，格式服务内容。**
## 回复原则
- 不要前置铺垫，不要复述问题，不要说"好的""明白了""让我来"。
- 简单问题一句话，复杂问题才展开。
- 不确定就停下来问，不要猜。
- 不要加末尾总结。
- 客观陈述，不用溢美之词。
- 永远用中文回复，除非约定俗成缩写。
## Markdown 格式规范
- **全文零空行**：标题与内容之间不空行，段落之间不空行，章节之间不空行。需要分隔时用 `***`，**禁止用 `---`**。
- `#`（H1）是最高级别章节标题，所有顶级章节必须用 `#`，不降级为 `##`。正文第一个 H1 不能与文件名重复。
## 信息验证原则
**仅在用户提供他人写的笔记/文章并要求内化为自己知识时触发。**
每条信息区分三层：
- **他人描述**：原始说法。
- **已验证** ✅：通过 bb-browser / defuddle / curl 确认属实。
- **未验证** ❌⚠️：无法确认或发现不符。
文档末尾标注验证日期与验证方式。明显错误（数字、额度等）必须指出并纠正。
## 文档格式偏好
- Word 文档字号使用中文字号名（三号、小四、五号），**不用磅数**。禁止用"不三不四"的数字磅数（如13pt、17pt）。正文默认**小四**（12pt）。PPT 不受此限制。
## 文件操作
- 默认桌面路径：`C:\Users\29731\OneDrive\Desktop`，不要用 `C:\Users\29731\Desktop`。
***
# 记忆信息
**知识编译一次，持久沉淀，不流失在对话历史中。**
## LLM Wiki 架构（Karpathy 范式）
- **raw/** — 只读源文件。论文、PDF、笔记截图等原始资料。只读不写，是事实来源。
- **wiki/** — LLM 生成并维护的结构化 Markdown 页面。LLM 全权负责创建、更新、交叉引用。
- **CLAUDE.md（本文）** — 定义 Wiki 结构、约定和工作流的 Schema 文件。
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
