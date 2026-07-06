---
author: Agent 实战日记
source: AI整理 - 小红书
url: https://www.xiaohongshu.com/discovery/item/6a497ea70000000011017bd3?app_platform=android&ignoreEngage=true&app_version=9.35.1&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBSq1U8B_RuKsai9mzcas66S0NvaHsypH_pcPcinVOV4M%3D&author_share=1&xhsshare=&shareRedId=ODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9&apptime=1783296906&share_id=90cb41badd1840a89c4feb06fc24f069&share_channel=wechat
saved: 2026-07-06 01:18:49
tags:
  - 笔记同步助手
id: 2203c1db-980d-4034-85d8-f2b7c0f670bc
---
# 科研画图新王，scipilot-figure-skill
## 科研画图新王，scipilot-figure-skill
熬了两天，终于用 Figure 把图画好了。配色高级，字体统一，线条流畅。你把图发给导师，等着被夸。
导师只回了一句："你这个图，想说明什么？"
你愣住。图例写了。数据对了。配色也没毛病。那问题到底在哪？
问题根本不在"会不会画"，而在画图之前有没有想清楚这张图要让审稿人理解什么。
### 大多数科研人都经历过这种时刻
配色调了三版，字体换了两次，线条调得无比流畅。图本身已经挑不出毛病了。然后导师一句话，把你打回原点。
那一刻你才意识到：图例写清楚了，数据算对了，配色好看了，但审稿人根本不知道你想说明什么。
#### 这是技术自恋
你把"画得漂亮"当成了终点。但对审稿人来说，画图不是炫技，是传达。你画的是信息，不是艺术品。
#### 这是方向迷雾
你开始怀疑是不是配色不够高级？是不是字体不够讲究？你拼命在工具层面打转，却没人告诉你："想让审稿人理解什么"才是画图的第一步。
#### 这个最扎心：孤立无援
网上教画图的教程一搜一把，Stack Overflow 能教你怎么画，顶刊模板能给你好看。但没有人在乎你想没想清楚这张图的目标是什么。
你一个人，在迷宫里摸索。
### 科研画图的第一性原理
不是"怎么画得好看"，而是"先想清楚想让审稿人理解什么，再决定怎么画"。
以前画图，你的内心 OS 是："这个配色好看！"
现在画图，你应该先问自己的是："这张图我想让审稿人理解什么？"
就这么一个问题的切换，画图这件事就变了。
### scipilot-figure-skill，把这个原则工具化了
它不是执行指令的执行者，它是先帮你把关这张图合不合适的参谋。
> 你："帮我画 3 组各 5 个样本的均值柱状图。"
> scipilot-figure-skill：n=5 太小，均值柱掩盖分布——审稿人很可能要求"show individual points"。我建议改成箱线 + stripplot 叠加：5 个点直接可见，分布一目了然。要按原方案画，还是改？

有图有真相，对比看这一张：
-   **左：普通做法（均值柱）**——审稿人只看到三根柱子，分布和异常值全被盖住。
-   **右：Scipilot 建议（箱线 + stripplot）**——同样的数据，分布形状、异常值一目了然。
### scipilot 的 7 步工作流
1.  **数据剖析**（n / 分布 / 异常值）
2.  **选图推荐**（主动拦截不合适的选择）
3.  **期刊规范**（栏宽 / 字号 / DPI）
4.  **样式配置**（CJK 字体 / 色盲友好配色）
5.  **绘制**（9 类图配方）
6.  **自检闭环**（程序 + AI 读图双重复核）
7.  **导出**（PDF 矢量 + 灰度预览）
每一步都在帮你把关：这张图合不合适，而不是你说什么它画什么。
#### 普通画图工具 vs scipilot-figure-skill

| 检查项      | 普通画图工具     | scipilot-figure-skill            |
| -------- | ---------- | -------------------------------- |
| n=5 画均值柱 | 直接画        | 主动拦截 → 建议箱线 + stripplot          |
| 图表乱码     | 手动调字体      | CJK 字体自动配置，从不乱码                  |
| 图例压数据    | 肉眼检查       | 程序 + AI 双重视觉自检                   |
| 期刊格式     | 手动对照作者指南   | 一键按 Nature / Science / IEEE 规范导出 |
| 子图标签对齐   | 手调容易歪      | 一行代码统一对齐                         |
| 配色色盲友好   | 默认 jet 彩虹图 | Okabe-Ito 默认 + 灰度预览              |
| 导出格式     | 手动存 PNG    | 矢量 PDF / SVG / EPS 优先，绝不 JPEG    |
这 7 项检查，你原来每个都要靠踩坑、靠运气、靠反复返工。scipilot 帮你兜底。
### 来自顶刊开发者的共识
PLOS Computational Biology 的 matplotlib 核心开发者在论文里写过：
> "Only after identifying the message will it be worth the time to develop your figure."

说人话：先想清楚让审稿人理解什么，再动手画。这不是玄学，是学术圈顶级共识。而 scipilot-figure-skill，正是把这条原则工具化的产物。
**先判断，后画图。**
这就是 scipilot-figure-skill 的核心逻辑。
画图之前，先问自己一句："我想让审稿人理解什么？"
这一句，比任何配色技巧都重要。
安装超简单。把 skill 名字丢给 Codex 或 Claude Code，让它帮你装。
下次画图前，先想三秒：这张图，我到底想让审稿人看懂什么？
让 scipilot 做你的参谋，不做你的执行者。
![[笔记同步助手/images/f19e73756cc03cdcd6b7e3dff1287884_MD5.jpg|Image]]![[笔记同步助手/images/cb40e0066f6b8b110a05af9181efd871_MD5.jpg|Image]]![[笔记同步助手/images/b30e84d1ff8c4382ca9fdc8045f75b5a_MD5.jpg|Image]]![[笔记同步助手/images/9f91f8233ef8acca4fccba4efbd5ad3e_MD5.jpg|Image]]![[笔记同步助手/images/431426e5c4b8cadc060db3a98beab84f_MD5.jpg|Image]]![[笔记同步助手/images/e8304643c5578781f5701b03ea33a997_MD5.jpg|Image]]
#howto入门codex #howto入门vibecoding #agent开发实战 #agent #AI工具 #科研绘图
***
内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/a464c35c-1724-40e8-9701-5ec50462889b?u=https%3A%2F%2Fwww.xiaohongshu.com%2Fdiscovery%2Fitem%2F6a497ea70000000011017bd3%3Fapp_platform%3Dandroid%26ignoreEngage%3Dtrue%26app_version%3D9.35.1%26share_from_user_hidden%3Dtrue%26xsec_source%3Dapp_share%26type%3Dnormal%26xsec_token%3DCBSq1U8B_RuKsai9mzcas66S0NvaHsypH_pcPcinVOV4M%253D%26author_share%3D1%26xhsshare%3D%26shareRedId%3DODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9%26apptime%3D1783296906%26share_id%3D90cb41badd1840a89c4feb06fc24f069%26share_channel%3Dwechat&s=vtoa)