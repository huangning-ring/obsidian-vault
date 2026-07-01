﻿---
author: 新世界圆圆圆
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzYzNDI1MTg0Nw==&mid=2247484035&idx=1&sn=50f9922aff304bff779736f1f732b7f9&chksm=f11b0734c8b900a08c1a5c580ca80408a1c0290ed3ff41e4e92e46822a1c5e6ec34103e1287d&mpshare=1&scene=1&srcid=0624TzXaJ1A7vRlQMyjWluUn&sharer_shareinfo=82babf51021c547fc530b5fd3fbdb730&sharer_shareinfo_first=82babf51021c547fc530b5fd3fbdb730#rd
saved: 2026-06-24 02:12:58
tags:
  - 笔记同步助手
id: 5250fe3d-c862-4e88-a240-932da4053026
***
公众号名称：赛博虾酱
作者名称：新世界圆圆圆
发布时间：2026-05-29 08:07
> GitHub: https://github.com/luongnv89/claude-howto  
> Stars: 34,429 ⭐ | Forks: 4,210  
> 版本：v2.1.145（同步最新 Claude Code 发行版）

**不是一份 API 文档。是一个完整的 Cluade Code 学习体系——10 个模块、从 slash command 到 Agents 全栈、每个功能配合 Mermaid 图解和可直接复制的模板配置。** 适合零基础，也适合用了半年但没用全的人。
***
 这个项目为什么有 34,000+ Star
Claude Code 发布一年多了。如果你安装过、跑过几条 prompt，大概率卡在这些地方：
-   • 知道 slash commands 存在，不知道哪些命令能一起用
-   • 知道有 Skills，但自己的 skill 总是触发的时机不对
-   • 知道有 Hooks，不知道什么时候该用 Hook 什么时候该用 Skill
-   • 知道 MCP 协议，配了之后 Agent 根本不掉用
官方文档描述功能。但它不回答"我该按什么顺序学"以及"它们组合起来能干什么"。
**Claude How To 补的就是这个缺口。**
它不重复 API 文档的内容。它做三件事：
1.  1.  **给学习路径**——先学什么再学什么，每个模块约多久
2.  2.  **给图解**——每个功能内部怎么工作的 Mermaid 图
3.  3.  **给模板**——可复制的配置，不是"照着文档配"，是"拿到你的项目里就能跑"
34,000 Star 说明这个缺口确实存在，而且很多人都有。
***
 10 个模块，分三级，循序渐进
整个教程分成三大梯级，10 个模块：
**Level 1：基础功力（入门级，约 2.5 小时）**
-   -   **Slash Commands**（30 分钟）——会写 `/command`，会配自定义命令
-   -   **Memory**（45 分钟）——懂 Chewie.md 怎么写、项目级和目录级 CAUDE.md 的区别
-   -   **Checkpoints**（45 分钟）——/checkpoint、/diff、/rewind，把 checkpoint 当代码版本管理用
-   -   **CLI Basics**（30 分钟）——claude 的命令行参数、批量模式、--print 用法
学完 4 个，能用 Claude 日常写代码，能在多项目间切换时上下文不丢。
**Level 2：组合能力（进阶级，约 3.5 小时）**
-   -   **Skills**（1 小时）——写自己的 skill，理解 progressive disclosure 原理
-   -   **Hooks**（1 小时）——事件驱动的自动化，pre/post tool use 钩子
-   -   **MCP**（1 小时）——配 MCP server，让 Agent 用外部工具和数据
**Level 3：系统思维（高级，约 5 小时）**
-   -   **Subagents**（1.5 小时）——子 Agent，独立上下文、工具、模型
-   -   **Advanced Features**（2-3 小时）——Planning mode、background tasks、cross-model review
-   -   **Plugins**（2 小时）——插件市场、私有插件、技能包管理
全文下来大约 11-13 小时，但每次你只需要学一个模块，5 分钟就能开始用。
***
 和其他教程最不一样的地方
 1\. 内置自测系统
每个模块学完之后，可以在 Claude Code 里直接跑一条命令：
```
/lesson-quiz hooks
```
它会针对"hooks"模块出题，答完马上知道哪些点漏了。可以在漏掉的地方打 `/lesson-quiz hooks read-only` 直接补。
还有一个总的自测：
```
/self-assessment
```
不问"讲一下 Agent Teams 是什么"。问"你的项目里最近用过哪些功能"、"你能不能说清楚 Skills 和 Command 的区别"、"配过几次 hook"。选择题形式，选完给你推荐一个学习路径。
 2\. 不是"给代码"——是"给可复制的模板"
大多数技术教程给的代码是**展示用例**你看了知道"哦，原来这样"。然后关掉文档，自己手动配一遍，出错了，再回来查。
Claude How To 给的配置是**可以直接复制到你项目里用的**：
```
cp claude-howto/01-slash-commands/optimize.md → .claude/commands/
cp claude-howto/02-memory/project-CLAUDE.md → ./CLAUDE.md
cp -r claude-howto/03-skills/code-review-specialist → ～/.claude/skills/
```
不需要改。直接跑。跑通了再理解为什么这么写。
 3\. Mermaid 图解每个功能
每个功能配了一张 Mermaid 图，展示它内部的调用链。
知识不是文字。是图。看完图再去看配置，知道"这行配置对应图上的哪个部分"。
 4\. 同步最新发行版
版本号 `v2.1.145` 对应 Claude Code 的发行版号。不是"2025 年之前更新的教程"。Claude Code 出了新版本，教程同步更新。这比你网上搜到的很多"Claude Code 教程"靠谱很多。
***
 不是英文教程——支持 5 种语言
项目内置了多语言版本：
-   • English
-   • 中文
-   • Tiếng Việt
-   • 日本語
-   • Українська
中文版本直接在 `zh/` 目录下。不需要开翻译插件读英文。
***
 快速开始
```
git clone https://github.com/luongnv89/claude-howto.git

 2. 复制第一条 slash command 到你的项目
cp claude-howto/01-slash-commands/optimize.md /path/to/your-project/.claude/commands/

 3. 试试
 在 Claude Code 里输入：
/optimize

 4. 配项目记忆
cp claude-howto/02-memory/project-CLAUDE.md /path/to/your-project/CLAUDE.md

 5. 装一个技能
cp -r claude-howto/03-skills/code-review-specialist ～/.claude/skills/
```
**一小时全配置：**
```
cp 01-slash-commands/*.md .claude/commands/    # 15 分钟
cp 02-memory/project-CLAUDE.md ./CLAUDE.md     # 15 分钟
cp -r 03-skills/code-review-specialist ～/.claude/skills/  # 15 分钟
```
**离线阅读：**`uv run scripts/build_epub.py` 生成全量 EPUB 电子书。
***
 常见问题
**和 Best Practices guide 有什么区别？**  
Best Practices 聚焦 Tips 和概念对比。Claude How To 聚焦学习体系和模板。前者适合"想找一条 tip"，后者适合"想系统学一遍"。
**能离线看吗？**  
可以。模板和配置文件在本地，不需要联网。也可以生成 EPUB 保存到阅读器。
**零基础能看懂吗？**  
能。Level 1 从头教起，不需要你先配过什么。
***
 总结
Claude How To 不是技术含量最高、不是代码量最多的项目。但它可能是对 Claude Code 用户**最有实操价值**的项目。
原因很简单：它回答的不是"Claude Code 有什么功能"，而是"你该怎么学会这些功能"。
 点击下方名片「关注我们」第一时间收到推送
***
内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/00ad4390_1782263576695?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzYzNDI1MTg0Nw%3D%3D%26mid%3D2247484035%26idx%3D1%26sn%3D50f9922aff304bff779736f1f732b7f9%26chksm%3Df11b0734c8b900a08c1a5c580ca80408a1c0290ed3ff41e4e92e46822a1c5e6ec34103e1287d%26mpshare%3D1%26scene%3D1%26srcid%3D0624TzXaJ1A7vRlQMyjWluUn%26sharer_shareinfo%3D82babf51021c547fc530b5fd3fbdb730%26sharer_shareinfo_first%3D82babf51021c547fc530b5fd3fbdb730%23rd&s=obsidian)