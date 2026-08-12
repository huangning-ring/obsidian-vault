---
author: AI兴观点
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=Mzk3NTM5NjU1Mw==&mid=2247497401&idx=1&sn=20deaae8003ef1af27c9da8d5899e4b7&chksm=c5555efb75b19af81e358c21f563b26c9b56c45fe1d632d83474f57d187c670da08e06d45292&mpshare=1&scene=1&srcid=0807HM5ysMOkTQhvo0nKl216&sharer_shareinfo=ffd0b50279bdf8101fb3ce383c5c4065&sharer_shareinfo_first=ffd0b50279bdf8101fb3ce383c5c4065#rd
saved: 2026-08-06 19:18:44
tags:
  - 笔记同步助手
id: 655b273e-0c9f-4aff-96c3-e46c9ee6fa96
---

公众号名称：程叙架构与AI.

作者名称：AI兴观点

发布时间：2026-08-06 21:21

原文链接：[https://github.com/mattpocock/skills/releases/tag/v1.2.0](https://github.com/mattpocock/skills/releases/tag/v1.2.0)

✅点击上方🔺公众号🔺关注我✅

GitHub 全站历史 star 排名第 19、下载量 1350 万次的 AI 编程技能库 mattpocock/skills，昨天发了 v1.2。这版干了三件大事：上线了整套文档站、进了 Claude Code 官方插件市场、补齐了 Codex 支持，还新增了 /wizard、/to-questionnaire、/wait-what 三个技能。

作者是 Matt Pocock，TypeScript 圈的老熟人，Total TypeScript 课程作者。他的这套 skills 就是给 AI 编程助手用的「工作方法包」——25 个技能，每个都是把资深工程师的一个好习惯编码成指令：拷问方案、写规格、拆 ticket、写测试、审代码。装上之后，在编辑器里打一个斜杠命令，agent 就按你信得过的流程干活。

![[笔记同步助手/images/a87fce2e9ee740d619b02d41654ae070_MD5.jpg]]

---

## 文档站：社区呼声最高的一件事

v1.2 之前，这套 skills 只有 GitHub 仓库里的 README，想搞清楚每个技能怎么用、什么时候用，全靠翻代码。这次 Matt 直接给每个技能都写了独立文档页，全部挂在 aihero.dev/skills。

每页都有两块内容：**Common questions（常见问题）**，来自大家真实问过的问题；**It's working if（做到什么程度算成功）**，给你一个可验证的验收标准。文中的术语第一次出现会链到 AI Coding Dictionary，比如 ticket 这个词，点进去就是他对 ticket 的定义。

![[笔记同步助手/images/9d07bb8fee7d64224b2f332949417677_MD5.jpg]]

主流程在左侧栏一目了然：`/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement` → `/code-review`。想学技能可以读文档，想搞懂 AI 编程是怎么回事，也可以读文档。

---

## Claude Code 官方插件：一条命令装全套

v1.2 把整套技能打包成了 Claude Code 的原生插件，直接上架官方插件市场，不用先加任何 marketplace。装上之后是只读托管包，自动更新：

```
claude plugins install mattpocock-skills
```

会话里也可以直接打：

```
/plugin install mattpocock-skills
```

之前只能用 `npx skills` 把文件拷进项目里自己维护，现在有了官方托管渠道。skills.sh 依然是通用安装器，也是 Codex 等其他工具链目前的路子。

---

## Codex 支持：每个技能都配了 openai.yaml

之前 user-invoked / model-invoked 的区分只在 Claude Code 里成立，Codex 里没有。v1.2 给每个 `SKILL.md` 旁边都加了一个 `agents/openai.yaml` sidercar文件，带上 Codex 界面需要的元数据（`interface.display_name`、`interface.short_description`），两个工具链共用同一份文件，不需要生成两份拷贝。

决定 Codex 行为的是这一行：

```
policy.allow_implicit_invocation:false
```

这是 Codex 版的 `disable-model-invocation: true`。所有 user-invoked 技能都带上它，Codex 就不会把这些技能塞进 agent 的上下文，直到你显式输入 `$skill` 才加载。另外 `AGENTS.md` 现在是指向 `CLAUDE.md` 的符号链接，Codex 读到的仓库指令和 Claude Code 完全一致。

---

## 新技能 /wizard：让人干活的部分，交给脚本

/wizard 从 in-progress 转正进了 Engineering 分组，而且变成 model-invoked——agent 一旦遇到只有人才能做的步骤（第三方后台点按钮、配密钥、填表单），会自动召唤它，把「在聊天里丢一堆编号指令让你照着做」这条路直接砍掉。

它生成一个交互式 bash 脚本，带你走完整个手动流程：打开每个 URL、告诉你点什么、收集你粘贴的值、写进 `.env` 文件和 GitHub Actions secrets。脚本是确定性的，你输入的密钥不会经过任何 agent。

体验部分由自带的 `template.sh` 解决：进度显示带剩余时间、确认关卡、跨平台打开 URL（含 WSL）、密钥输入不回显、`.env` 幂等写入、`gh secret`/`gh variable` 优雅降级、结束时的跳过总结。`STAGES` 标记以上的部分是固定库，永远不用手改——技能的工作只是界定流程、写好 stages。

---

## 新技能 /to-questionnaire：问不出来就做成问卷

/to-questionnaire 从 in-progress 转正进了 Productivity 分组。它把一个你单独回答不了的决策，变成一份 Markdown 问卷，发给唯一能回答的那个人——异步填，或者开会时一起过。

它的设计很有意思：普通 grilling 拷问的是主题，但这里你恰恰回答不了主题。所以它只问你两件事：问卷发给谁、你需要拿回什么，然后把所有问题对准这两者之间的缺口。Matt 自己是在规划花园小屋（garden office）的时候用到它的——agent 在拷问他，但真正该回答的人是老婆。问卷进了 Google Doc，两人过完，答案再回到 agent。

---

## 新技能 /wait-what：一个字，让模型重新说人话

/wait-what 是给模型话痨准备的。消息没看懂，打一个词，agent 就重新讲一遍：带一点上下文、用 ASD-STE100 简化技术英语、用你 `CONTEXT.md` 里的领域语言。整个技能只有三行。

名字本身就是机制。命名成描述输出的（`/tldr`、`/no-fluff`）只会让模型删词，越删越听不懂；命名成听者状态的，一次要到了两样——更少的词，和你缺的上下文。它只修复当前这一条消息，不预防下一条。根治术语问题要靠 `/grill-with-docs` 提前建共同语言，还没有共同语言的时候，就用它。

---

## /grilling 改成轮询：13 个问题，3 轮问完

/grilling 从一问一答改成按轮提问。它把工作映射成一棵设计树，每个决策分支出一串依赖它的决策；frontier 就是所有前置条件已经满足、现在就能问的问题。每轮把整个 frontier 一次性列出来，根据你的回答重算 frontier，再问下一轮。同一个 13 问，原来 13 轮，现在大概 3 轮。

环境能回答的事实会派给后台子 agent，研究不阻塞提问轮次。每轮问题用固定格式输出：

```
❓ Q1 - <问题标题> <问题正文，可以是多段，含选项>  ➡️ <推荐答案>
```

`/grill-me`、`/grill-with-docs`、`/triage` 也都改成了按轮跑。想退回一问一答，在全局 `CLAUDE.md` 里加一行即可。

---

## /prototype 改成 HTML：双击就能玩

/prototype 的逻辑分支不再生成终端应用，而是产出一个自包含的 HTML 文件——纯 HTML/CSS/JS，无构建无服务端。不懂开发的人双击打开就能在自己的领域语言里操作：带标签的状态面板、随时可点的自由按钮、分标签的 guided walkthroughs，每个场景下面标着按顺序该点哪些按钮。可移植的纯逻辑模块依然能提出来放进真实代码，HTML 外壳是扔掉的。

「扔掉」也不再等于删除。原型会被捕获到主分支外的 `prototype/<name>` 分支上，作为可复现的证据保存，实现 issue 上留一个上下文指针。主分支只保留验证过的决策，探索过程始终可追溯。结论（判定 + 问题）照旧落进 issue / ADR / commit。

---

## /writing-great-skills 改名 /writing-for-agents

breaking change：/writing-great-skills 改名为 /writing-for-agents，没有别名，旧名直接消失。改名跟着范围走——这份参考现在覆盖 agent 会读的任何文档：技能、`AGENTS.md`、`CLAUDE.md`、被指针引用的文档，不止技能本身。用它可以把你那份臃肿的 `AGENTS.md` 拆成多个技能，避免开头就灌爆上下文。

结构上三处变化：`GLOSSARY.md` 并进 `SKILL.md`（每个术语只有一处权威解释）；技能专属机制（frontmatter、model/user-invoked、router 技能）挪到 `SKILL-MECHANICS.md`；技能改为 model-invoked——创建或编辑技能、修改 `AGENTS.md`/`CLAUDE.md` 时自动触发。

修剪章节新增了一个词：**cache**。环境本身就是事实来源——`package.json` 脚本、配置文件、目录结构、`--help` 输出。文档如果只是在复述它们，那它就是一次查表的缓存，只有当这次查询很贵时才值得加载。该缓存的是 agent 查不到的东西：没写下来的约定、某个选择背后的原因、任何配置都不会承认的边界情况。

---

## 砍掉了 6 个技能

四个被吸收进更好的技能：`/ubiquitous-language` → `/domain-modeling`（维护完整领域模型，而不是从一次对话里倒出一份术语表）；`/design-an-interface` → `/codebase-design`（「设计两次」技法原样保留在 `DESIGN-IT-TWICE.md`）；`/qa` → `/triage` + `/to-tickets`；`/request-refactor-plan` → `/to-spec` + `/improve-codebase-architecture`。

还有两个本来就只属于 Matt 自己、绑在他自己机器上的个人技能，`/edit-article` 和 `/obsidian-vault`，连同 personal 目录一起删了。`skills/deprecated/` 留作空目录，`skills/in-progress/` 定位成 beta 频道。

---

## 怎么更新

```
npx skills update
```

或者直接更新你的 Claude Code 插件，插件是自动更新的。

---

仓库现在 star 20 万+，全 GitHub 历史第 19，下载 1350 万次。这套 skills 正在从一个「TypeScript 大神的个人配置」变成「AI 编程工作流的事实标准」——25 个技能、跨 Claude Code / Cursor / Codex / Copilot、MIT 协议，怎么装都行。

你平时给 AI 助手配过 skills 吗？用的是什么组合？评论区聊聊。

_如果觉得这篇文章有帮助，欢迎点赞、在看、转发！有问题也可以在评论区留言，我会尽量回复！_

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/912b3d7b_1786040321373?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk3NTM5NjU1Mw%3D%3D%26mid%3D2247497401%26idx%3D1%26sn%3D20deaae8003ef1af27c9da8d5899e4b7%26chksm%3Dc5555efb75b19af81e358c21f563b26c9b56c45fe1d632d83474f57d187c670da08e06d45292%26mpshare%3D1%26scene%3D1%26srcid%3D0807HM5ysMOkTQhvo0nKl216%26sharer_shareinfo%3Dffd0b50279bdf8101fb3ce383c5c4065%26sharer_shareinfo_first%3Dffd0b50279bdf8101fb3ce383c5c4065%23rd&s=obsidian)