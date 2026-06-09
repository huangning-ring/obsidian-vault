# CLAUDE.md — 跨对话记忆
每次对话开始时我会自动读取此文件。
***
## 思考与交互原则
### 第一性原理
- 从问题本质出发思考，拒绝经验主义与路径盲从。
- 不假设"以前这么做所以现在也该这么做"。
### 苏格拉底提问法
- 遇到模糊请求时，追问：**定义**（你说的 X 具体指什么？）、**前提**（依赖于哪些条件？）、**证据**（如何验证？）、**约束**（有哪些限制？）、**真正目标**（最终要达成什么？）。
- 主动识别用户表述中的隐藏假设与模糊措辞，澄清后再行动。
### 默认偏好与用户指令
- 默认偏好（如本文件中的字号、路径等）**不能覆盖**用户的明确指令。
- 仅在以下情况才暂停并提出挑战：
  - 目标模糊不清；
  - 涉及删除/覆盖用户原有文件；
  - 存在明显风险；
  - 当前路径显著低效。
### 模糊目标与删除操作
- 若目标模糊，或操作涉及删除用户原有文件，**先停下讨论，再执行**。
### 路径优化
- 若目标清晰但路径非最优，直接建议更简短、更低成本的替代方案。
### 奥卡姆剃刀
- 在满足目标的前提下，优先选择：假设更少、步骤更短、维护成本更低的方案。
---
## 联系人（中文名对照）
- **Paul Tang** → 唐奇宇
- **April Tan** → 谭笑
- Harry→林清鸿
- Rosalind→李秀娟
- Ricky→余春华
- Ring→黄宁（我）
- Weng Xiong→翁熊
---
## 用户偏好
### 文档字号
- 在 Word 中创建或修改文档时，描述和设置字号必须使用中文字号名（如 **三号、小四、五号**），不允许使用磅数（如 14pt、10.5pt）。
- 禁止使用夹在两个相邻中文字号之间的"不三不四"的数字磅数（如 13pt、17pt），这类字号命名和设置都不可取。
- **PPT 不受此限制**，可正常使用数字磅数。
### 文件操作
- 默认桌面路径：`C:\Users\29731\OneDrive\Desktop`
- 不要默认使用 `C:\Users\29731\Desktop`
### 信息调研与验证
- 当用户提供视频/文章等二手信息源，要求整理为文档时，**必须亲自联网验证**每条关键描述，不能直接照搬原文。
- 每项工具/方法的信息需区分三个层次：
  - **他人描述**：视频或文章中原始说法。
  - **已验证**：亲自通过 WebFetch / WebSearch 确认属实的部分（标注 ✅）。
  - **未验证**：无法确认、发现不符或尚待考证的部分（标注 ❌ 或 ⚠️）。
- 每个文档末尾标注**验证日期**与**验证方式**（如 "WebFetch + WebSearch"）。
- 对于他人描述中的**明显错误**（如免费额度、数据库规模等数字），必须明确指出并纠正。
### 语言
- 永远用中文回复。除非是明显的约定俗成或缩写
### 文档格式
- 除非用户有特殊要求，否则文档正文字号默认使用 **小四**（12pt）。
- Markdown 输出必须**紧凑**，**全文零空行**。标题与下方内容之间不空行，段落之间不空行，章节之间也不空行。**需要分隔时用 `***` 分隔线，禁止使用 `---`。**
- 所有顶级章节标题必须用 `#`（H1），不能降级为 `##`。正文第一个顶级章节标题就必须是 `#` 开头。
- 第一个 H1 **不能与文件名重复，也不能是文件名的复述**。文件名和 H1 是两回事，H1 是最高级章节标题，写在正文里，用不同的文字。
### 表格输出
%% - **不要输出 Markdown 表格**，除非用户明确要求。Claudian 插件渲染表格有问题，输出表格在聊天界面中是纯文本格式，无法正常显示。 %%
- 需要展示结构化数据时，改用：编号列表、分段描述、或直接文字说明来代替表格。
- 此规则仅在用户明确要求输出表格时才可打破。
---
## 识图能力
系统 vision skill 已禁用，使用 vision.js 替代。遇到图片时**不要用 Read 工具**，改用 vision.js：
```
node vision.js "<图片路径>" "用中文描述这张图片"
```
如需 URL 识图：
```
node vision.js --url "<图片链接>" "用中文描述这张图片"
```
<br>
***
## 网页抓取注意事项
### 浏览器引擎（bb-browser）
电脑上已安装 **bb-browser**（`npm install -g bb-browser`，v0.14.2），连接到一个**永久的无头 Edge 引擎**（端口 9226），已注入黄宁主 Edge 的 2818 个 cookies（含知乎、B站、微博等登录态）。
- 后台引擎通过 `launch-headless.vbs` 随开机自启管理，完全静默，**不弹出窗口、不干扰主 Edge**。
- 145 个社区适配器覆盖约 50 个平台（知乎/B站/微博/小红书/GitHub/Twitter/Youtube 等）。
- 使用命令：`bb-browser site <site>/<command> --json`
- 检查引擎状态：`bb-browser daemon status`
- 若 daemon 断连：检查 cdp-port 文件（`~/.bb-browser/browser/cdp-port`）确认端口是否正确，或重启 daemon
### 抓取优先级
1. **bb-browser site 命令**（首选） — 用于需要登录态或可能触发反爬的网站（知乎、B站、小红书、微博、GitHub等）。动态网站、登录后才能看的内容、高频抓取均优先走此通道。
2. **defuddle skill** — 标准静态网页，不需要登录态：`defuddle parse <URL> --md`
3. **Bash + curl** — 原始内容抓取，配合 defuddle 或手动分析
4. **WebFetch** — 仅作为最终后备，不应依赖其成功
### 常用 bb-browser 命令
```
# ===== 中文平台 =====
bb-browser site zhihu/hot --json                # 知乎热榜
bb-browser site zhihu/search "关键词"            # 知乎搜索
bb-browser site zhihu/question ID               # 知乎问题详情（含回答）
bb-browser site bilibili/popular --json          # B站热门视频
bb-browser site bilibili/ranking --json          # B站排行榜
bb-browser site bilibili/search "关键词"         # B站搜索
bb-browser site bilibili/video BV_ID            # B站视频详情
bb-browser site bilibili/comments BV_ID         # B站视频评论
bb-browser site bilibili/feed --json             # B站动态时间线
bb-browser site weibo/hot --json                 # 微博热搜
bb-browser site weibo/search "关键词"            # 微博搜索
bb-browser site weibo/feed --json                # 微博首页时间线
bb-browser site weibo/user ID                   # 微博用户信息
bb-browser site xiaohongshu/search "关键词"      # 小红书搜索
bb-browser site xiaohongshu/note ID             # 小红书笔记详情
bb-browser site xiaohongshu/comments ID         # 小红书笔记评论
bb-browser site xiaohongshu/feed --json          # 小红书首页推荐
bb-browser site douban/search "关键词"           # 豆瓣搜索
bb-browser site douban/movie ID                # 豆瓣电影详情
bb-browser site douban/movie-hot --json         # 豆瓣热门影视
bb-browser site douban/top250 --json            # 豆瓣 Top250
bb-browser site eastmoney/stock "股票名"        # 东方财富股票行情
bb-browser site eastmoney/news --json           # 东方财富财经新闻
bb-browser site boss/search "职位"              # BOSS直聘搜索
bb-browser site boss/detail JOB_ID             # BOSS直聘职位详情
bb-browser site toutiao/hot --json              # 今日头条热榜
bb-browser site toutiao/search "关键词"         # 今日头条搜索
bb-browser site v2ex/hot --json                 # V2EX 最热主题
bb-browser site v2ex/latest --json              # V2EX 最新主题
bb-browser site v2ex/topic ID                  # V2EX 主题详情
bb-browser site hupu/hot --json                 # 虎扑热帖
bb-browser site jike/feed --json                # 即刻推荐 Feed
bb-browser site jike/search "关键词"            # 即刻搜索
bb-browser site xueqiu/hot --json               # 雪球热门动态
bb-browser site xueqiu/stock "代码"            # 雪球股票行情
bb-browser site xueqiu/hot-stock --json         # 雪球热门股票榜
bb-browser site xiaoyuzhoufm/podcast ID        # 小宇宙播客详情
bb-browser site xiaoyuzhoufm/episode ID        # 小宇宙单集详情
bb-browser site smzdm/search "关键词"           # 什么值得买搜索
bb-browser site sogou/weixin "关键词"           # 搜狗微信搜索
bb-browser site 36kr/newsflash --json           # 36氪快讯
bb-browser site linuxdo/hot --json              # Linux.do 热门
bb-browser site csdn/search "关键词"            # CSDN 技术文章搜索

# ===== 国际平台 =====
bb-browser site github/repo "owner/repo"        # GitHub 仓库信息
bb-browser site github/issues "owner/repo"     # GitHub issue 列表
bb-browser site twitter/search "关键词"          # 搜索推文
bb-browser site twitter/user "用户名"           # Twitter 用户信息
bb-browser site twitter/tweets "用户名"         # 用户最近推文
bb-browser site twitter/thread TWEET_ID        # 推文讨论线程
bb-browser site youtube/video VIDEO_ID         # YouTube 视频详情
bb-browser site youtube/transcript VIDEO_ID    # YouTube 字幕
bb-browser site youtube/search "关键词"         # YouTube 搜索
bb-browser site youtube/channel CHANNEL_ID     # YouTube 频道信息
bb-browser site reddit/hot "subreddit"         # subreddit 热门
bb-browser site reddit/search "关键词"          # Reddit 搜索
bb-browser site reddit/thread URL              # Reddit 完整讨论树
bb-browser site hackernews/top --json           # HN 热门
bb-browser site hackernews/thread ID           # HN 评论树
bb-browser site producthunt/today --json        # Product Hunt 今日产品
bb-browser site instagram/profile "用户名"      # Instagram 用户资料
bb-browser site instagram/post URL             # Instagram 帖子详情
bb-browser site wikipedia/search "关键词"       # 维基百科搜索
bb-browser site wikipedia/summary "关键词"      # 维基百科摘要
bb-browser site arxiv/search "关键词"           # arXiv 论文搜索
bb-browser site openrouter/models --json        # OpenRouter 模型列表
bb-browser site google/search "关键词"          # Google 搜索
bb-browser site bing/search "关键词"            # Bing 搜索
bb-browser site duckduckgo/search "关键词"      # DuckDuckGo 搜索

# ===== 通用操作 =====
bb-browser open <URL> --json                    # 打开页面并提取内容
bb-browser site list | grep <关键词>            # 搜索可用适配器
bb-browser daemon status                        # 检查引擎状态
```
### bb-browser 响应字段对照（常见中文站）
| 站点 | 列表字段 | 标题字段 | 热度/数值字段 | 其他 |
|------|---------|---------|-------------|------|
| 知乎 | `result.items` | `title` | `heat` | `answer_count`, `follower_count`, `excerpt` |
| B站 | `result.videos` | `title` | `view`(播放) | `like`, `danmaku`, `author`, `duration` |
| 微博热搜 | `result.items` | `word` | `hot_value` | `category` |
| 微博帖子 | `result.statuses` / `result.posts` | `text` | `reposts_count` | `comments_count`, `attitudes_count`, `user` |
| 小红书 | `result.items` | `title` | `liked_count` | `author`, `collected_count`, `comment_count`, `cover` |
| 东方财富 | `result.quote` | `name` | `changePercent`, `price` | `volume`, `marketCap`, `high`, `low` |
| BOSS直聘 | `result.jobs` | `jobName` | `salaryDesc` | `companyName`, `areaDistrict`, `experience`, `education` |
| 豆瓣 | `result.subjects` | `title` | `rating.value` | `year`, `genres`, `directors`, `cast` |
| 今日头条 | `result.items` | `title` | `hot_value` | `source`, `comment_count`, `url` |
| 虎扑 | `result.posts` | `title` | `replies` | `forum`, `author`, `last_reply` |
| V2EX | `result.topics` | `title` | `replies` | `node`, `author`, `last_touched` |
| 雪球动态 | `result.statuses` | `text` | `retweet_count` | `user`, `comment_count`, `created_at` |
| 雪球股票 | `result.quote` | `name` / `code` | `current`(股价) | `chg_pct`, `volume`, `market_capital` |
| 即刻 | `result.items` | `content` | `like_count` | `author`, `comment_count`, `topic` |
| 小宇宙 | `result.episodes` | `title` | `play_count` | `duration`, `podcastName`, `published_at` |
| 36氪快讯 | `result.items` | `title` | - | `description`, `timestamp` |
| Twitter | `result.tweets` | `text` | `like_count`, `retweet_count` | `reply_count`, `author`, `created_at` |
| YouTube | `result.videos` | `title` | `view_count` | `like_count`, `channel`, `duration` |
| GitHub仓库 | `result` | `name` / `full_name` | `stars` | `forks`, `language`, `description`, `open_issues` |
| Reddit | `result.posts` | `title` | `upvotes`(score) | `subreddit`, `num_comments`, `author` |
| HN | `result.stories` | `title` | `points` | `comments_count`, `author`, `url` |
| Instagram | `result.items` | `caption` | `like_count` | `comment_count`, `author`, `media_type` |
| 豆瓣电影 | `result` | `title` | `rating` | `year`, `genres`, `directors`, `actors`, `duration` |
### IMAP 邮箱（QQ邮箱 / foxmail）
已接入 **QQ邮箱（IMAP）**，可直接查询邮件，无需浏览器。
- 邮箱地址：`huangning.ring@foxmail.com`
- IMAP 服务器：`imap.qq.com:993`（SSL）
- 授权码：`icjrnupcfxbbdcfj`
- 获取邮件：`node "C:\Users\29731\.bb-browser\fetch-email.js"`
- 支持：读收件箱、看未读数、搜索邮件（后续可按需扩展）
- **优先于浏览器方案**——IMAP 查询远快于浏览器抓取，零弹窗零干扰
### WebFetch 不可靠
- WebFetch 工具经常返回 400 错误（如 `options type cannot be disabled when reasoning_effort is set`），不可作为主要的网页抓取手段。
### .jsp 动态下载链接需带 Referer 头
- 高校教务系统等网站的附件下载链接常为 `.jsp` 动态地址（如 `download.jsp?urltype=...&wbfileid=...`）。
- 不带 `Referer` 头直接下载会拿到错误页面（HTML 而非真实文件），大小仅 3-4K。
- **必须在 curl 中添加 `-e <来源页面URL>`** 参数：
  ```
  curl -sL -o "附件名.docx" -e "https://来源页面.htm" "https://.../download.jsp?urltype=..."
  ```
- 也可用 `-H "Referer: <URL>"` 等效替代。
***
## 中文字号对照（参考）

| 字号 | 磅数 |
|------|------|
| 初号 | 42 |
| 小初 | 36 |
| 一号 | 26 |
| 小一 | 24 |
| 二号 | 22 |
| 小二 | 18 |
| 三号 | 16 |
| 小三 | 15 |
| 四号 | 14 |
| 小四 | 12 |
| 五号 | 10.5 |
| 小五 | 9 |
***
## LLM Wiki — 知识编译器模式
本仓库遵循 Karpathy LLM Wiki 范式。
### 三层架构
- **raw/** — 只读源文件。论文、文章、PDF、笔记截图等原始资料。LLM 只读不写，是事实来源。
- **wiki/** — LLM 生成并维护的结构化 Markdown 页面。LLM 全权负责创建、更新、交叉引用。
- **CLAUDE.md（本文）** — 定义 Wiki 结构、约定和工作流的 Schema 文件。
### 三大操作
- **Ingest（编译）**：将新资料放入 raw/，LLM 读取、提炼关键信息，整合到现有 Wiki 中（更新实体页、概念页、索引、日志）。
- **Query（查询）**：对 Wiki 提问，LLM 搜索索引、阅读相关页面、综合回答。好的问答结果归档回 Wiki。
- **Lint（体检）**：定期检查 Wiki 健康状况——矛盾、过时断言、孤立页面、缺失概念。
### 文件约定
- `wiki/index.md` — 全库内容目录，LLM 每次编译后更新
- `wiki/log.md` — 追加式操作日志，每条以 `## [YYYY-MM-DD] 操作类型 | 标题` 开头
### 关键原则
- LLM 是 Wiki 的维护者，人类是策展人和提问者
- 知识被**编译一次，持久沉淀**，而非每次查询时重新检索
- 好的问答结果应归档回 Wiki，不流失在对话历史中