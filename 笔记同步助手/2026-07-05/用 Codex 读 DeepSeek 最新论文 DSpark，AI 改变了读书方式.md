---
author: 成峰
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzU3MjU5Mzc2Nw==&mid=2247489964&idx=1&sn=d115b3d5ce035c6d0fa3cfced8966bfb&chksm=fd5695ef321c2ae80f8fddfc1c4ecea810ef84193c72c9c74afba6d33f35d29e7e138f88c8a4&mpshare=1&scene=1&srcid=0706LF9RTWbP1qltkd9SqbBe&sharer_shareinfo=19b08396d7478868c3baed78b57a5038&sharer_shareinfo_first=19b08396d7478868c3baed78b57a5038#rd
saved: 2026-07-05 22:53:44
tags:
  - 笔记同步助手
id: b62a113b-257e-48c0-b7d9-7a42d492a0e3
---
公众号名称：AI产品自由
作者名称：成峰
发布时间：2026-07-02 18:20
我用 Codex 加“论文 Skill”读 DeepSeek 的最新论文，省了一半时间。
还留下了一份图文并茂的中文解读材料。
> ![[笔记同步助手/images/fcc190198dbc0d8d278a1998a1a09c83_MD5.jpg]]

这个论文 Skill，我已经打磨了一个月。现在开源出来。
它能根据我的阅读习惯，重新组织论文。读到哪里卡住，就在哪里标记，Codex 会把解释重新写回正文，最后变成一份能继续写、能进知识库的论文解读。
# 怎么用
打开 Codex App，直接跟它说：
> 帮我安装 paper-reading 这个读论文 Skill。安装命令是 `npx -y github:Agentchengfeng/paper-reading-skills install`。执行前先给我确认一下。
> ![[笔记同步助手/images/5d9a1a558afa24e94f1a5c68d5e70258_MD5.png]]

整个过程不用打开终端。
装好以后，把 DeepSeek DSpark 的论文链接或者 PDF 丢给 Codex。
> ![[笔记同步助手/images/31ddb178708412929b8a9e99119c2be4_MD5.png]]

接下来就可以让 Codex 生成阅读页面，再按自己的疑问一路读下去。
# 为什么用 Codex 读论文
这里其实叠了三层东西。
第一层是模型能力。它要能读懂论文里的技术关系，否则只能停在逐句翻译。
第二层是 Codex 的交互。Codex 内置浏览器，论文页面、聊天窗口和生成的 HTML 可以放在同一个工作区。
第三层是工具能力。Computer Use 和浏览器操控让 Agent 能看到页面里的文字、按钮和标记，也能把解释、图和重写后的段落放回正文。
这三层叠起来，我不用在 PDF、翻译软件和聊天框之间来回切。
> ![[笔记同步助手/images/a70e7897d1958347d8712e753434ed58_MD5.jpg]]

**读论文开始变成一件共读的事。**
我负责提出问题，Agent 负责读上下文、查资料、补解释，再把有用内容写回正文。
# 读论文变成一个页面
把论文发给 Codex 以后，它会生成一个 HTML 页面。
> ![[笔记同步助手/images/77cf62ffcd197a1a92e73fb53b0aace2_MD5.jpg]]

这个页面先把英文论文变成中文材料。
再按我的问题，把论文重新组织成一篇能读下去的解读。
左边是 Codex 的聊天窗口，右边是 Codex 新编写的 HTML 文章。
> ![[笔记同步助手/images/6dbcf57624fe32466d2fa647aab7e116_MD5.jpg]]

一个屏幕就能放下。
我看到哪里不懂，就在左边问；Codex 读右边的页面，再把解释写回右边的正文里。
# 词不懂，先划线解释
读论文最先卡住的，通常是一个词。
有些技术名词我没见过，就把它们批量划线，再补一句具体问题。
> ![[笔记同步助手/images/155d273f211baeec29013175a5e550e2_MD5.jpg]]

划线成功后，页面会保留这些标记。
> ![[笔记同步助手/images/549c7306a2d39b29629cd2afc383fc1f_MD5.jpg]]

我再让 Codex 解读这些划线。
> ![[笔记同步助手/images/9653f8880cd96b8531b458ea9e4cacdf_MD5.jpg]]

解释会直接出现在词语下方。
> ![[笔记同步助手/images/2bf1f5b0848833f15961b6671c453194_MD5.jpg]]

# 一段读不懂，就重构这一段
很多时候，我卡在一整段逻辑上。
这时候我会把这一段标出来，直接告诉 Agent：这一段我没看懂，帮我重新解读。
> ![[笔记同步助手/images/1f534003251dd2aa8b190ecb7a4775f4_MD5.jpg]]

如果只是术语问题，它补一句解释。
如果是推导断了，它会把这一段重新写一遍。
这一步把聊天里的回答，变成了正文里的材料。
解释会回到原句下面。
# 读完整篇，还能重组成新正文
词和段落都处理完以后，整篇文章还能再往上整理一层。
> ![[笔记同步助手/images/e84e2b8d05627a40a24f1e642c5c29b8_MD5.jpg]]

我可以直接跟 Codex 说：
> 整合一下这一段/篇。

这一步会直接产出一段新正文。
它把原文、解释、我的问题和保留下来的图，合成一版新的中文解读。
旧的疑问卡删掉，有用的图留下。
页面从“哪里看不懂”，变成“这一段已经写清楚”。
> ![[笔记同步助手/images/2d45b5d090f64a4f11f26e8a895c932e_MD5.jpg]]

# 读书从翻译，变成重构
英文翻成中文，只解决第一层问题。
后面还有三件事：
这个词是什么意思
这段在推什么
整篇文章能不能变成自己的材料
Codex 和论文 Skill 把这三件事放到同一个页面里。
一个词能被解释，一段逻辑能被重写，整篇论文能被整理成自己的知识材料。
我不用再一个人对着译文硬啃。
我和 Agent 在同一个页面里，把论文拆开、理解，再重新写成我能用的东西。
***
内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/df1c7e9f_1783288419198?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzU3MjU5Mzc2Nw%3D%3D%26mid%3D2247489964%26idx%3D1%26sn%3Dd115b3d5ce035c6d0fa3cfced8966bfb%26chksm%3Dfd5695ef321c2ae80f8fddfc1c4ecea810ef84193c72c9c74afba6d33f35d29e7e138f88c8a4%26mpshare%3D1%26scene%3D1%26srcid%3D0706LF9RTWbP1qltkd9SqbBe%26sharer_shareinfo%3D19b08396d7478868c3baed78b57a5038%26sharer_shareinfo_first%3D19b08396d7478868c3baed78b57a5038%23rd&s=obsidian)