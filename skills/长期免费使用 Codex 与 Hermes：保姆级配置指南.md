---
author: 技术爬爬虾
source: 小红书
url: https://www.xiaohongshu.com/discovery/item/6a1fd451000000003601e5c9?app_platform=android&app_version=9.33.0&apptime=1780568066&author_share=1&ignoreEngage=true&shareRedId=ODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9&share_from_user_hidden=true&share_id=ccf7c689055c43ec88f05aa6f3441164&type=video&xhsshare=WeixinSession&xsec_source=app_share&xsec_token=CBxj5y_5yO-iTqeXf638Ku__xChRTTOh_UcIfVqtyzWb0=&xstag=1
saved: 2026-06-04 11:20:21
tags:
  - 笔记同步助手
id: 50368c3d-4839-496c-b5f0-7fe1b7ce1738
---

**作者：**技术爬爬虾

**适用场景：**个人学习笔记，用于配置免费 API 驱动的 Agent 工具链

## 概述

本教程介绍如何通过 **Agnes API**（免费）替换 Codex 和 Hermes Agent 的默认模型，实现长期免费的 Agent 体验。核心工具包括：

-   **Codex++**：开源辅助工具，为 Codex 换模型。
-   **Agnes**：提供免费 API 的模型公司，覆盖文本/Agent、图片生成、视频生成三种能力。

配置完成后，可零成本获得一线模型的 Agent 能力，覆盖日常任务。

## 一、为 Codex 接入免费 API

### 1\. 获取 Codex++ 并配置供应商

在 GitHub 找到开源项目 **Codex++**，进入其管理控制台。在“供应商配置”中点击“添加”：

-   名称：填写 `Agnes`
-   接入方式：选择“纯 API”
-   Base URL：填写 Agnes 提供的端点地址
-   API Key：从 Agnes 平台创建并复制密钥
-   上游协议：选择 `Chat`
-   模型列表：点击“从上游获取”

保存后，点击右上角“重启 Codex”。重启后，在 Codex 的模型选择中即可看到 **Agnes 2.0 Flash**。

![[笔记同步助手/images/a65708c515bf71e7d5b894c4efed906b_MD5.jpg|Codex++ 供应商配置界面，填写名称、Base URL 和 API Key]]

Codex++ 供应商配置界面，填写名称、Base URL 和 API Key

![[笔记同步助手/images/7f3b1583ed7ae5a5127cb31a5e57da2e_MD5.jpg|在 Agnes 平台创建并复制 API 密钥]]

在 Agnes 平台创建并复制 API 密钥

![[笔记同步助手/images/37938ecb5cb95dc0c09b71b3f92f13ff_MD5.jpg|Codex 模型选择中选中 Agnes 2.0 Flash，测试对话成功]]

Codex 模型选择中选中 Agnes 2.0 Flash，测试对话成功

### 2\. 自制图像生成 Skill（弥补内置限制）

由于未订阅官方，Codex 内置的图像生成 Skill 不可用。需要利用 Agnes 免费图像 API 自制 Skill。

首先，配置 **PlayWrite CLI** 浏览器自动化方案：

-   新建项目文件夹，在终端中执行两条命令安装 PlayWrite CLI。
-   注意：将项目文件夹中存放 Skill 的目录名从 `.cloud` 改为 `.codex`。

在 Codex 中打开项目文件夹，输入斜线拉起 **PlayWrite CLI** Skill，提示词如下：

> 你用浏览器搜索，并且去官网学习一下 Agnes Image 2.1 Flash 模型的调用文档。使用 Head 的 Persistent 参数，这样我能看到你的学习过程。

Codex 会打开 Chrome，搜索并定位到 Agnes 文档站，学习图像生成 API 的调用方式。

### 3\. 编写并测试图像生成 Skill

在 Codex 中拉起 **Skill Creator** 技能，输入提示词：

> 我要你编写一个技能，这个技能可以调用 2.1 Flash 模型来生成图片。API Key 可以先硬编码，后续我会自己替换。

Codex 会创建 Skill 文件。进入脚本第 8 行，将占位符替换为在 Agnes 平台申请的 API Key。之后让 Codex 自行测试生成图片。

再测试一个复杂案例：生成“小马过河”儿童绘本。输入斜线找到上述 Skill，提示词要求绘制插图并保持风格一致。Codex 同时开启多个生图任务，最终交付 7 张图片和一个 HTML 文件，效果良好。

![[笔记同步助手/images/ea9aa434237aea4ce542ca52af80314a_MD5.jpg|Codex 生成的儿童绘本 HTML 页面，包含多张风格统一的插图]]

Codex 生成的儿童绘本 HTML 页面，包含多张风格统一的插图

## 二、为 Hermes Agent 接入免费 API

Hermes Agent（原 Open-Computer 的替代方案）Token 消耗大，可改为使用 Agnes 免费 API。

### 1\. 配置运行环境

本教程基于 Windows WSL 环境。参考此前视频中 WSL 部署 Hermes Agent 的详细步骤。

### 2\. 启动 Hermes 并配置模型

在 WSL 终端输入 Hermes 的启动命令，进入配置：

-   选择 **Custom Direct API**
-   API Base URL：填写 Agnes 端点
-   API Key：填写 Agnes 申请的 Key
-   API 格式：选择第二个 `Chat`
-   模型：选择 `4`（对应 Agnes 2.0 Flash）

之后一路回车完成配置。输入 `hello` 测试，收到回复即成功。

![[笔记同步助手/images/3bb9c3af7c96066483458744a7e58d18_MD5.jpg|Hermes Agent 配置模型界面，选择 Custom Direct API 并填入 Agnes 参数]]

Hermes Agent 配置模型界面，选择 Custom Direct API 并填入 Agnes 参数

### 3\. 接入即时通信（微信）

Hermes 可接入微信等 IM 渠道。在 WSL 新开终端，输入命令添加 IM 渠道，选择 WeChat 行后回车，浏览器打开二维码，扫码配对。之后在手机微信上测试：打招呼、查询天气等。Hermes 调用工具前会请求授权，输入 `-approved` 同意。

通过这种配置，即可免费使用 Hermes 驱动 Agent 完成各种任务，无需担心 Token 消耗。

![[笔记同步助手/images/9d10c7ea259f84a9fcc43ed5e941c058_MD5.jpg|手机微信上与 Hermes 对话，查询北京天气]]

手机微信上与 Hermes 对话，查询北京天气

## 总结

利用 Agnes 免费 API，可长期稳定地为 Codex 和 Hermes 提供模型支持，覆盖文本、Agent、图像生成等多模态任务。本教程所有步骤均通过免费资源实现，适合个人学习与创意实践。

## 逐字稿

**00:00** 分享一个国内免费使用Codex的方法

**00:02** 我说的可不是只能用几天或者几周的短期薅羊毛方案

**00:06** 而是一个长期免费的稳定方案

**00:09** 本期视频是一个手把手的保姆级教程

**00:11** 我们把Codex跟Hermis Agent的模型替换成免费的API

**00:16** 零成本获得一线模型的Agent的体验

**00:19** 足够覆盖日常任务

**00:20** 这次主要用到两个工具

**00:22** 一个适用于给Codex换模型的开源软件Codex++

**00:26** 另外一个是大模型API Agnes

**00:28** Agnes是全球权威榜单前十的AI模型公司

**00:32** 开放了三款旗舰全模态模型的免费调用

**00:36** 分别覆盖了文本与Agent

**00:37** 图片生成还有视频生成三项核心能力

**00:41** 更棒的是这家头部模型公司的全模态模型

**00:44** 可以长期免费使用

**00:45** 好话不多说我们直接开始

**00:47** 我们来到Github

**00:49** 找到这个开源软件Codex++

**00:52** 这是一个可以给Codex换模型的辅助工具

**00:55** 接下来我们来到Codex++管理控制台

**00:58** 在供应商配置这里点击添加

**01:00** 名称填写Agnes

**01:01** 接入方式选择纯API

**01:04** Base URL填写这一串

**01:05** 接下来是API Key

**01:07** 我们来到Agnes的API平台

**01:09** 点击创建密钥

**01:10** 把创建的密钥复制一下

**01:12** 填写到API Key这里

**01:13** 上游协议选择Chat

**01:15** 模型列表这里点击从上游获取

**01:18** 最后点击保存

**01:19** 点击右上角的重启Codex

**01:21** 然后我们进入到Codex

**01:23** 模型这里选择Agnes2.0 Flash

**01:25** 打个招呼这里给到了回复

**01:28** 就配置完成了

**01:29** Agnes2.0 Flash有很不错的

**01:32** Agent驱动能力

**01:33** 我准备用几个Skills的案例来实测一下

**01:36** 这里我想到一个需求

**01:37** 我们把Agnes的API接入了Codex

**01:40** 没有使用官网订阅

**01:41** 这样会有个小问题

**01:42** 就是不能使用Codex内置的图像生成Skill

**01:46** 所以下一步我准备自制一个画图Skill

**01:49** 来代替内置的图像生成

**01:51** 正好Agnes的API覆盖全模态能力

**01:54** 提供图像生成模型

**01:55** Agnes 2.1 Flash的免费API调用

**01:59** 接下来我们就让Codex先去官网学习一下

**02:01** 怎么调用这个生图的API

**02:03** 在之前的视频里面

**02:05** 我介绍过一个非常省token的浏览器自动化方案

**02:08** Playwright CLI

**02:09** 这里我新建了一个项目文件夹

**02:11** 然后进入文件夹

**02:13** 右键在终端打开

**02:14** 依次执行这两个命令

**02:16** 配置好Playwright CLI

**02:18** 还有对应的Skill

**02:19** 这里有一点要注意

**02:20** 在Codex里面使用Skill

**02:22** 还要做一个额外的配置

**02:24** 就是在项目文件夹里

**02:26** 把存放Skill的文件夹的名字

**02:28** 从.cloud修改成.codex

**02:31** 我们来到Codex

**02:32** 点击进入项目工作

**02:33** 选择我们刚才创建的项目文件夹

**02:36** 输入斜线

**02:37** 拉起Playwright CLI Skill

**02:39** 然后输入提示词

**02:40** 你用浏览器搜索

**02:41** 并且去官网学习一下

**02:43** Agnes Image 2.1 Flash模型的调用文档

**02:46** 使用Head的Persistent参数

**02:48** 这样我能看到你的学习过程

**02:50** Agent先读取了Playwright CLI技能

**02:53** 来学习怎么驱动浏览器

**02:55** 然后打开了我电脑上的Chrome

**02:57** 使用谷歌搜索到了

**02:58** Agnes的官网文档站

**03:00** 接下来它打开了文档站

**03:02** 定位到了模型的文档说明

**03:03** Agent学习并且总结了图像生成的调用方式

**03:07** 在这个例子里面可以看出

**03:09** Agnes 2.0 Flash

**03:10** 有着很不错的Agent跟Skill的驱动能力

**03:13** 每一步都判断精准

**03:15** 操作执行稳定表现很不错

**03:17** 接下来我们来正式编写Skill

**03:19** 先斜线拉起Skill Creator

**03:21** 这个编写技能的技能

**03:23** 然后输入提示词

**03:24** 我要你编写一个技能

**03:25** 这个技能可以调用2.0 Flash模型来生成图片

**03:29** API Key可以先硬编

**03:30** 后续我会自己替换

**03:32** Agnes为我们编写了Skill

**03:34** 放到了项目目录下面

**03:35** 文件结构非常工整

**03:37** 他还不忘提醒我

**03:38** 进入脚本第8行替换API Key

**03:40** 我来到脚本里面

**03:42** 把占位符替换成了

**03:43** Agnes Platform申请的API Key

**03:45** 我说API Key替换好了

**03:47** 你测一下

**03:48** AA给我生成了一个云端金电

**03:50** 很有意思

**03:51** 我们再来看一个复杂一些的案例

**03:53** 我想用AA给孩子批量生成故事绘本

**03:56** 这里输入提示词

**03:57** 开发一个HTML小马过河的儿童绘本

**04:00** 然后输入斜线

**04:01** 找到我们刚才创建的Skill

**04:03** 来绘制插图

**04:04** 注意保持图片风格的一致性

**04:07** 然后基于这些插图生成绘本

**04:09** Agnes先规划了插图跟段落划分

**04:12** 然后同时开启了多个生图Skill

**04:14** 来批量生成图片

**04:16** 很快完成了绘本编写

**04:18** 交付了7张图片

**04:19** 还有一个HTML文件

**04:21** 我们打开看一下效果

**04:22** 一个可爱清新的HTML儿童绘本

**04:25** 这是我使用非常简单的提示词

**04:27** 一次就跑通的效果

**04:29** Agnes模型在编程跟Agent能力上面

**04:32** 已经具备了媲美一线模型的全模态实力

**04:35** 更棒的是完全免费

**04:36** 随便造随便玩

**04:39** Hermes Agent是前段时间爆火的龙虾

**04:42** OpenCloud的尚未替代

**04:43** 但不论是Hermes还是OpenCloud

**04:45** 都是Token消耗大户

**04:47** 接下来我们就把Agnes的免费API

**04:49** 接入Hermes

**04:50** 再也不用担心Token的花费

**04:52** 这里我用的是Windows上的

**04:54** WSL作为Hermes Agent的运行环境

**04:57** 在我之前的视频里

**04:58** 从零开始用国内网络

**05:00** 跑通一切AAAgent里面

**05:01** 有WSL部署

**05:03** Hermes Agent的详细操作步骤

**05:05** 我们先打开WSL

**05:06** 输入Hermes Agent的一句话命令

**05:09** 启动Hermes

**05:09** 配置模型

**05:10** 这一步是重点

**05:11** 我们选择Custom Direct API

**05:14** API Base URL填写Agnes的端点

**05:16** API Key填写Agnes官网申请的key

**05:19** API格式选择第二个Chat

**05:22** 模型选择4

**05:23** 也就是Agnes2.0 Flash

**05:25** 后面的步骤一路点击回车就行了

**05:27** 然后我们输入命令

**05:28** Hermes启动起来试一试

**05:30** 打个招呼

**05:31** 这里给到了回复

**05:32** 就配置完成了

**05:33** 龙虾类Agent最强的能力

**05:35** 就是可以接入即时通信软件

**05:37** 我们在WSL里面

**05:39** 新开一个终端

**05:40** 然后输入命令

**05:41** 来添加一个IM渠道

**05:42** 这里最简单易用的渠道就是微信

**05:45** 我们在WeChat这一行

**05:46** 点击回车

**05:47** 在浏览器里面打开链接

**05:49** 扫码完成配对

**05:50** 回到Hermes

**05:51** 都选择Y

**05:52** 接下来我们可以在手机上测试一下的

**05:54** 打个招呼

**05:55** 给到了回复

**05:56** 就配置成功了

**05:57** 还可以问问它今天的天气

**05:59** Hermes调用工具之前

**06:01** 会先询问授权

**06:02** 这里我输入-approved来同意

**06:04** 这样成功查找到了天气

**06:06** 使用Hermes搭配Agnis的免费API

**06:09** 就可以覆盖大部分的Agent的工作场景

**06:12** 关键是免费

**06:13** 你可以用它实现一切

**06:14** 疯狂好玩的Agent的创意

**06:16** 完全不用担心token消耗

**06:18** 好

**06:18** 感谢大家点赞支持

**06:19** 我们下期再见

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/2cf7d8c7-73a7-4318-bf89-0c382384ebb8?u=https%3A%2F%2Fwww.xiaohongshu.com%2Fdiscovery%2Fitem%2F6a1fd451000000003601e5c9%3Fapp_platform%3Dandroid%26app_version%3D9.33.0%26apptime%3D1780568066%26author_share%3D1%26ignoreEngage%3Dtrue%26shareRedId%3DODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9%26share_from_user_hidden%3Dtrue%26share_id%3Dccf7c689055c43ec88f05aa6f3441164%26type%3Dvideo%26xhsshare%3DWeixinSession%26xsec_source%3Dapp_share%26xsec_token%3DCBxj5y_5yO-iTqeXf638Ku__xChRTTOh_UcIfVqtyzWb0%3D%26xstag%3D1&s=vtoa)