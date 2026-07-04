---
author: 啥都懂的小灰
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzI3ODI5MjMxMw==&mid=2247489006&idx=1&sn=91f1e88250e76fd41c522e36fd4cca48&chksm=ea8448879e1f47a45a8283ee64d27dab434827b5774e5e018e0823d53b5bc79c31f7510da9e4&mpshare=1&scene=1&srcid=0623DVJ9f1kvJAYilw6AZn5d&sharer_shareinfo=f10c7c333c5074958f61212082a588dd&sharer_shareinfo_first=f10c7c333c5074958f61212082a588dd#rd
saved: 2026-06-22 23:41:04
tags:
  - 笔记同步助手
id: aeea0785-de09-4fe1-8cec-f5656d75480d
---

公众号名称：小灰的自习室

作者名称：啥都懂的小灰

发布时间：2026-04-26 23:15

很多人以为，Claude Code 好不好用，主要取决于模型够不够强。但用久了你会发现，真正把人和人拉开差距的，往往不是模型本身，而是另一层东西：**你有没有把一批高频、稳定、可复用的 Skills 装进自己的工作流。**

Skills 的生态已经爆炸了。光社区仓库就有 **1200+** 个，Anthropic 官方的、第三方验证的、个人开发者随手写的，什么都有。但你要是真的全装上，Claude 不会变强——**只会变慢**。

**我的筛选标准很简单，就三个：**

✓ 是不是真的能装进 Claude Code 生态  
✓ 会不会高频用到  
✓ 能不能明显提升结果质量

下面这 10 个，是我筛完之后留下来的。**大部分免费。**

---

## 01 agent-browser

**把 Claude Code 从代码编辑器里放出来**

如果只选一个最值得优先装的 Skill，我会把票投给它。

**原因很简单。** 很多真实工作，根本不发生在终端里，也不发生在代码文件里，而是发生在网页上。你要登录后台、点按钮、填表单、截图、抓页面信息、测试 Web App、跑自动化流程，这些事都离不开浏览器。

一旦你接上浏览器能力，Claude Code 就不只是会写，还能执行。它可以先打开页面，再识别交互元素，然后点击、输入、等待页面更新，最后把结果拉回来。

而且它有一个很实在的优势——**token 消耗比 Playwright 那套方案少 93%**。简单讲，就是速度快、成本低，日常“看看网页、填个表、截个图”的活儿，它是最优解。

💡 **安装：**`npx skills add vercel-labs/agent-browser`

---

## 02 gstack

**给 Claude Code 配一个 23 人的虚拟团队**

你可能听过 superpowers——那是社区里最早火起来的工程流程框架。但最近越来越多人开始换成 gstack。

**代码写得差不是问题，方向做错了才是问题。** superpowers 解决的是“怎么写代码”（TDD、执行流程、自动 review），但它的前提是你已经想清楚了要做什么。现实是，大部分项目翻车不在执行，在决策。

gstack 解决的是上游那一层——**该不该做、做什么、做成什么样。**

它是 Y Combinator CEO Garry Tan 自己做的，思路很野：不是给 Claude 加工具，而是给它加角色。装上之后，Claude 会模拟一个 **23 人团队**——CEO、产品经理、工程主管、QA、设计、安全审计——每个角色在各自的环节审查你的方案。

核心命令是 `/office-hours` 和 `/plan-ceo-review`。在你动手写代码之前，先从产品视角过一遍：这个功能真的需要吗？用户场景对不对？有没有更简单的方案？

![[笔记同步助手/images/0ac5339b1a3802332e6dcacb2e11ad61_MD5.png]]

**简单讲：**

-   superpowers 像一个严格的工程 leader，盯着你把代码写对
    
-   gstack 像一个产品合伙人，先帮你确认方向没跑偏
    

两个可以一起装，但如果只选一个，我现在会选 gstack——**因为做对的事比把事做对重要。**

💡 **安装：**`git clone https://github.com/garrytan/gstack.git ～/.claude/skills/gstack && cd ～/.claude/skills/gstack && ./setup`

---

## 03 skill-creator

**造 Skill 的 Skill**

Anthropic 官方出的 meta 工具。你不需要会写代码，只需要描述你想要什么样的 Skill，它会反复问你问题、帮你生成、然后跑测试验证。

很多人不知道的是，skill-creator 有 **四个模式**：

-   **Create**（创建）
    
-   **Eval**（评估）
    
-   **Improve**（改进）
    
-   **Benchmark**（跑分）
    

不只是帮你造，还能帮你测、帮你改、帮你量化效果。

这个 Skill 跟第 10 个“你自己造的 Skill”直接相关——后面会讲为什么它可能是你最值钱的 Skill。

💡 **调用：**`/skill-creator`

---

## 04 Lark CLI

**让 Claude Code 直接操作飞书**

飞书官方今年 3 月底开源的命令行工具，**200+ 条命令**覆盖消息、文档、多维表格、日历、会议、邮箱、任务——基本上你在飞书里干的所有事，Claude Code 都能帮你干了。

**最值钱的能力是文档。** Lark CLI 支持飞书文档和 Markdown 双向转换，而且保留格式——图片、表格、画板全在。之前用 MCP 接飞书，拿回来的只有纯文本，格式全丢。光这一条就值得装。

**举个场景：** 你跟 Claude Code 说“帮我把本周的 commit 记录整理成周报，发到项目群里”。它会自己读代码仓库、生成周报内容、调 Lark CLI 创建飞书文档、发群消息。你只说了一句话。

还有个细节很加分——Lark CLI 的报错信息是专门为 AI 设计的。不是甩你一个 404，而是告诉 Agent “哪个参数错了、下一步执行什么命令修复”。AI 拿到之后可以自己重试，不需要你介入。

💡 **安装：**`npm install -g @larksuite/cli && npx skills add larksuite/cli -y -g`

---

## 05 Firecrawl

**让 Claude Code 能抓网页**

“抓网页”这事听着不需要 Skill——直接让 Claude 读 URL 不就行了？

**问题在于**，现在大量网页是 JS 动态渲染的，直接读 URL 拿到的是一堆空壳 HTML。Firecrawl 解决的就是这个问题：它能渲染 JavaScript、处理反爬、还把结果写入文件而不是塞进 context window——**不吃你的上下文额度**。

**对运营人来说最实用的场景：** 抓竞品页面、抓定价信息、批量采集内容做分析。

💡 **安装方式一（推荐）：** 在 Claude Code 中运行 `/plugin` 搜索 firecrawl，安装后运行 `/firecrawl: setup` 配置 API key

💡 **安装方式二（CLI）：**`npm install -g firecrawl-cli && npx -y firecrawl-cli @latest init --all --browser`

---

## 06 Playwright MCP

**跟 agent-browser 不一样的浏览器方案**

你可能会问：前面已经有 agent-browser 了，为什么还需要 Playwright？

**一句话：**

-   agent-browser 适合“看看网页、填个表”的轻量活儿
    
-   Playwright 适合“跑一遍完整的登录→下单→支付→退出流程”的重活儿
    

Playwright 是微软出的，走的是完整的浏览器自动化路线，稳定性更强，适合回归测试和多步骤自动化。代价是 token 消耗高、速度慢。

**简单讲：** 日常用 agent-browser，测试用 Playwright。两个都装，按场景切换。

💡 **安装：** Playwright MCP 需要通过 MCP 配置文件安装，具体步骤参考 Playwright MCP 官方文档

---

## 07 + 08 内置双子星

**/simplify 和 /batch**

这两个不需要装——Claude Code 自带的，但大部分人从来没用过。

`/simplify` 是我用得最多的内置 Skill。每次改完一批代码，跑一下 `/simplify`，它会启动三个并行的子 Agent，分别从代码复用、质量问题、效率提升三个角度 review 你刚才的改动，然后自动修复。相当于免费的 code review。

`/batch` 解决的是重复性任务——比如你有 20 个文件需要做同样的修改，或者需要批量生成测试用例。一个个跑太慢，`/batch` 让 Claude 并行处理。

**这两个被严重低估了。** 不需要任何配置，下次试试就知道。

---

## 09 Auto Memory + Auto Dream

**让项目记忆不随 session 消失**

这个可能是你最值得关注的一条——**因为大部分人根本不知道这个功能已经默认开着了。**

从 v2.1.59 开始，Claude Code 有一套自动记忆系统。你跟它协作的过程中，它会自己判断哪些信息值得记住——构建命令、调试发现、代码规范、踩过的坑——然后写进项目的 `MEMORY.md` 里。下次开新 session，这些记忆自动加载。

**所谓：**

-   `CLAUDE.md` 是你写给 Claude 的指令
    
-   `MEMORY.md` 是 Claude 写给自己的笔记
    

这两个东西一个是你的规矩，一个是它的经验——搞清楚这个区别很重要。

更进一步，还有一个叫 **Auto Dream** 的机制——当你的 session 积累到一定量（默认 24 小时 + 5 个 session），Claude 会自动跑一次“记忆整理”，把散乱的笔记压缩成结构化的主题文件，清理过时信息，解决矛盾记录。

但这套系统有个使用技巧是官方没怎么强调的：

> **每次 session 结束前，主动说一句“把这次的关键决策和发现更新到 memory 里”。**

Auto memory 的默认策略偏保守——它只记“觉得值得记”的，但你协作过程中的很多决策（为什么选了方案 A 不选方案 B、为什么某个参数设成这个值），Claude 可能不会主动存。手动触发一次，下次就不用重新解释了。

💡 打 `/memory` 看一眼你的项目有没有在积累记忆。大概率已经有了。

---

## 10 最值钱的 Skill

**你自己造的那个**

前面 9 个都是别人造的。但用了一段时间你会发现，**最高频、最趁手、最不可替代的 Skill，永远是你根据自己工作流定制的那个。**

原因很简单——别人的 Skill 解决的是通用问题，你的工作流里一定有别人覆盖不到的环节。其实本质上就是这样：**通用 Skill 是地基，你自己的 Skill 才是房子。**

你写周报的格式、你做竞品分析的步骤、你审稿的标准、你跟客户沟通的话术模板——这些东西，不可能有现成的 Skill 恰好匹配。

而且造一个 Skill 的成本比你想象的低得多。有了前面的 skill-creator，你甚至不需要写代码——描述你想要什么，它帮你生成、测试、迭代。

花叔做了 53 个自己的 Skill。他说过一句话我觉得很有代表性：

> **把自己的工作流程 Skill 化的人，恰恰是最不容易被 Skill 替代的人。因为他把重复的部分交给了 Skill，自己腾出手来去想新的东西。他永远跑在自己的Skill 前面。**

---

这10 个 Skill 够你用一阵子了。但真正的分水岭不在于你装了多少个别人的skill，而在于**你什么时候开始造自己的。**

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/501f9e5e_1782168061547?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzI3ODI5MjMxMw%3D%3D%26mid%3D2247489006%26idx%3D1%26sn%3D91f1e88250e76fd41c522e36fd4cca48%26chksm%3Dea8448879e1f47a45a8283ee64d27dab434827b5774e5e018e0823d53b5bc79c31f7510da9e4%26mpshare%3D1%26scene%3D1%26srcid%3D0623DVJ9f1kvJAYilw6AZn5d%26sharer_shareinfo%3Df10c7c333c5074958f61212082a588dd%26sharer_shareinfo_first%3Df10c7c333c5074958f61212082a588dd%23rd&s=obsidian)