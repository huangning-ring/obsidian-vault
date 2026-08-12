---
author: 逛逛
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247535843&idx=1&sn=9b1a388391a85d00b267f2f9084a5225&chksm=f8a52a2f2438ce3b09fcc212d2e1f5a2121cb0f8e5093493afc4cffd525c86ef9fef4a03b0f6&mpshare=1&scene=1&srcid=08081h3dQu42XotxZQXIJGgT&sharer_shareinfo=3cedc4308d41d0b9c9e3599f8e1f5f36&sharer_shareinfo_first=3cedc4308d41d0b9c9e3599f8e1f5f36#rd
saved: 2026-08-08 10:31:33
tags:
  - 笔记同步助手
id: bfc609a6-9a3f-4593-98b7-0b0b465aec2c
---

公众号名称：逛逛GitHub

作者名称：逛逛

发布时间：2026-08-08 14:36

写 Skill，本质上是在把你一套熟练的工作流程翻译给 AI。

很多人在写 Skill 时，会先列出一个大概的执行顺序：第一步先干嘛，第二步调用什么工具，第三步检查哪些结果。

然后让 Agent 试跑一遍，根据暴露出来的问题继续补充规则、示例和上下文。

这类 Skill 经常需要跟着试跑结果继续修改。

如果要把同一项工作教给刚入职的同事，直接手把手演示讲解 是最高效的。

边操作边讲解，让对方看到每一步发生在哪里，也能听到你为什么这么处理。

前段时间 Claude Cowork 就新增了一个功能。

录屏教 Claude 一项技能。

![[笔记同步助手/images/69dac5611e687682c0f96e9c1f2b7f66_MD5.png]]

微软最近开源的 Skill Recorder 也沿用了这个思路：你演示一次，它会尝试还原整个过程，并整理成可供 Agent 复用的 Skill 或 Automation。

![[笔记同步助手/images/1141fb98c7a7489e8c406bc896de8ddb_MD5.png]]

01

**微软做了一个 Agent 操作录像机**

Skill Recorder 是一款桌面端开源工具。

它能记录一次真实的电脑操作，包括屏幕上的操作、应用与窗口切换、访问的页面，以及可选的语音讲解。

录制结束并点击「分析」后， AI 会分析这些信息，整理出任务意图和一组有顺序的操作步骤。

确认步骤没有问题后，你可以继续生成两种结果：

-   Skill：一份按需调用的 `SKILL.md`，Agent 遇到匹配任务时可以使用。
    
-   Automation：一套按照时间或条件触发的多步骤流程。
    

![[笔记同步助手/images/051bc412afc6804586cfcb898c3babf1_MD5.png]]

![[笔记同步助手/images/a89ccf5372a59d8f838b8456719e2a5d_MD5.png]]

录制只是输入。最终得到的是一套可以检查、修改和重复使用的流程。

它的实际操作链路可以分成四步。

第一步，Record。

点击录制按钮，然后照常完成手头的任务。

你也可以在任何位置按下 ⌘⇧R，Windows 上则是 Ctrl+Shift+R，快速开始或结束录制。

第二步，Control。

录制期间，屏幕上会显示一条置顶控制栏。

你可以查看录制和麦克风状态，随时静音、切换麦克风，录错了也能放弃这一条记录。

第三步，Analyze。

点击 Analyze 后，GitHub Copilot 会从录制内容中提取一个总体意图，再生成按顺序排列的步骤。

你可以先阅读和修改，直到这套流程符合自己的真实做法。

第四步，Create。

确认分析结果后，再选择生成 Skill、Automation，或者两种都生成。

![[笔记同步助手/images/ba64cee43b3212fde41a34cebc39ad71_MD5.png]]

整个链路可以概括为：

> 录制操作 → 提取意图与步骤 → 人工检查 → 生成 Skill 或 Automation

这个人工检查环节很重要。

屏幕录像里会混入等待、切错窗口、临时返回等无关动作，最终留下的流程需要比原始操作更干净。

![[笔记同步助手/images/d2b4a974d65fe20c193adb5b48f90884_MD5.png]]

02

**如何安装和使用**

macOS 是项目目前的主要目标平台，Windows 11 的 x64 和 ARM64 版本也已经得到支持。

macOS 第一次打开时，需要授予屏幕录制权限。

第一次点击 Analyze 时，如果还没有登录，应用会提示你登录 GitHub Copilot。

安装完成后，剩下的流程就是录制、分析、检查和创建。

```
开源地址：https://github.com/microsoft/skill-recorder
最新版本：https://github.com/microsoft/skill-recorder/releases/tag/v0.3.1
```

![[笔记同步助手/images/63282d314accb92e0f6574fa8001f7fe_MD5.png]]

项目目前仍然很新，复杂任务能否稳定泛化，还需要更多真实场景来检验。

不过，它已经提供了一种很有意思的 Skill 制作方式：先把工作做一遍，再把写流程这件事交给 Agent。

03

**点击下方卡片，关注逛逛 GitHub**

这个公众号历史发布过很多有趣的开源项目，如果你懒得翻文章一个个找，你直接关注微信公众号：逛逛 GitHub ，后台对话聊天就行了：

![[笔记同步助手/images/d4a5cc67ea6474599b76e537904f937b_MD5.png]]

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/d2291a57_1786181492180?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzUxNjg4NDEzNA%3D%3D%26mid%3D2247535843%26idx%3D1%26sn%3D9b1a388391a85d00b267f2f9084a5225%26chksm%3Df8a52a2f2438ce3b09fcc212d2e1f5a2121cb0f8e5093493afc4cffd525c86ef9fef4a03b0f6%26mpshare%3D1%26scene%3D1%26srcid%3D08081h3dQu42XotxZQXIJGgT%26sharer_shareinfo%3D3cedc4308d41d0b9c9e3599f8e1f5f36%26sharer_shareinfo_first%3D3cedc4308d41d0b9c9e3599f8e1f5f36%23rd&s=obsidian)