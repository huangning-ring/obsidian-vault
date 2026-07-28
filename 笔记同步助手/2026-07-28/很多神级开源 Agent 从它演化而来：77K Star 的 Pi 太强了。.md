---
author: 逛逛
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247535623&idx=1&sn=ac582a544775aec32d26d24375e29a9d&chksm=f8844429de25d526c05728553a8c73ff3ea11c70318786805f56a2b6789c82bfa5ca58010a68&mpshare=1&scene=1&srcid=07298pvAikdkm7mV3fETGxb4&sharer_shareinfo=00c25573f248889e500179031f766d4c&sharer_shareinfo_first=00c25573f248889e500179031f766d4c#rd
saved: 2026-07-28 17:05:27
tags:
  - 笔记同步助手
id: 5d9a7495-42f3-4535-877b-db18a88baf6c
---

公众号名称：逛逛GitHub

作者名称：逛逛

发布时间：2026-07-27 13:58

今年最出圈的开源 AI 项目，OpenClaw 肯定算一个。

截至目前，已经在 GitHub 拿下 38.4 万 Star。

![[笔记同步助手/images/e47408247b023ab1f5ffa145051c8dc9_MD5.png]]

很多人研究 OpenClaw 的架构时，又顺着代码认识了另外一个项目：Pi。

OpenClaw 的第三方声明里写着部分实现由 Pi，也就是原来的 pi-mono 改造而来。

而 Pi 自己也已经拿下 7.7 万 Star 。

![[笔记同步助手/images/19701d98abf9cad67adc61007328dba5_MD5.png]]

它还衍生出了接近 2 万 Star 的 Oh My Pi。

后者直接 Fork 了 Pi，加入浏览器、子 Agent 和更多内置工具，做成了一个功能更完整的版本。

VS Code 里有 Pendant，Emacs 里有单独的 Pi 前端，社区还做出了桌面端和移动端。

Pi 已经是目前开源 Agent 的开发底座首选了。

01

**藏在明星 Agent 背后的项目**

Pi 是一个 Agent Harness。

它的作者 Mario Zechner 也是知名游戏开发框架 libGDX 的创建者。

他长期使用 Claude Code，后来觉得功能越来越多，系统提示词和默认行为频繁变化，于是自己做了一套更小、更可控的 Coding Agent。

![[笔记同步助手/images/d30d096db60790e1c7aa7008d1a3bcf8_MD5.png]]

```
开源地址：https://github.com/earendil-works/pi
```

OpenClaw 早期把 Pi 的 SDK 深度嵌进了自己的 Agent Runtime。

随着项目继续发展，OpenClaw 已经把 Agent Runtime 收进了自己的代码库。

不过，它的部分实现从 Pi 演化而来，终端界面仍依赖 Pi 的 TUI 组件。

OpenClaw 官方 README 也专门感谢了 Pi 作者 Mario Zechner。

![[笔记同步助手/images/4b20d1c427e6d0da9fc8287a89aa5842_MD5.png]]

这段关系很能说明 Pi 的地位。

Pi 更关注开发者能否基于它做出自己的 Agent。包含四个核心软件包。

![[笔记同步助手/images/138e9a32bc1af523abd687adf9951e40_MD5.png]]

pi-ai 负责接入模型。

它把 OpenAI、Anthropic、Google、OpenRouter、Ollama 等不同模型接口统一起来，处理流式输出、工具调用、图片、推理内容、Token 与费用统计。

pi-agent-core 负责 Agent 循环。

模型发起工具调用，它负责执行、校验参数、把结果送回模型，然后继续下一轮，直到任务完成。

pi-tui 负责终端界面。

它使用差分渲染，只更新发生变化的内容，减少终端闪烁。开发者也能拿它构建自己的终端应用。

![[笔记同步助手/images/fbc4a19725a3226a098a78ba2b8ada29_MD5.png]]

pi-coding-agent 是可以直接使用的 Coding Agent。

前面三个软件包到了这里被组装起来。你在项目目录运行 pi，就可以让模型读代码、修改文件、执行命令和运行测试。

所以 Pi 同时提供两种用法。

想找一个轻量的 AI 编程助手，可以直接使用它的 CLI。想开发自己的 Agent 产品，可以使用底层 SDK、RPC 模式或者 TUI 组件。

02

**它把 Agent 做得很轻，**

Pi 默认只给模型四个工具：

```
read：读取文件
write：创建或重写文件
edit：精确修改文件
bash：执行终端命令
```

作者认为，主流前沿模型已经非常熟悉 Coding Agent 的工作方式。读文件、改代码和运行命令，足够覆盖绝大部分编程任务。

Pi 最初的系统提示词和工具描述加起来不到 1000 Token。

模型不需要先读一大段产品规则，更多上下文可以留给项目代码和当前任务。

这种克制也体现在功能选择上。

Pi 默认没有内置 MCP、子 Agent、计划模式和待办列表。

需要这些能力时，可以安装社区 Package，也可以用 TypeScript 写一个扩展。

![[笔记同步助手/images/7422cb6ceca0a9449f9faea847437f26_MD5.png]]

扩展可以注册新工具、命令、快捷键和 Provider，也能改变上下文压缩方式、接管 Bash 执行、增加自定义界面。

修改完成后执行 /reload，当前会话就能继续使用。

这也是 Pi 官网一直在强调的思路：让 Pi 适应你的工作流。

![[笔记同步助手/images/3b7821e053082a197dd9478388979bca_MD5.png]]

它对模型的选择同样开放。

Pi 支持 15 个以上的模型 Provider 和数百个模型。

你可以在同一段会话中从 Claude 切换到 GPT，再换成 Gemini，也可以连接 Ollama、llama.cpp 等本地模型。

会话历史采用树状结构。

![[笔记同步助手/images/2f55ecef4da2f44218f37dd404189a05_MD5.png]]

走错方向时，可以回到之前的节点重新开一条分支，原来的尝试仍然保留在同一个会话文件里。

长对话接近上下文上限后，Pi 会自动压缩历史，也允许开发者替换自己的压缩策略。

除了交互式终端，Pi 还提供单次执行、JSON 事件流、RPC 和 SDK 四种接入方式。

当然，极简也有需要付出的代价。

Pi 没有内置沙箱。

它会继承当前用户的文件、进程、网络和凭证权限，扩展代码也运行在相同权限下。

项目信任机制可以阻止陌生仓库在未经确认时加载本地扩展，但它无法限制模型后续执行的命令。

处理陌生代码、无人值守任务或者重要凭证时，官方建议把 Pi 放进容器、虚拟机、微型虚拟机或策略沙箱，并且只挂载任务需要的目录。

Pi 更适合愿意掌控工作流的开发者。你可以从一个很小的核心开始，只把自己需要的东西装进去。

03

**如何部署 Pi**

Pi 是一个本地命令行程序，不需要单独部署数据库或常驻网关。

当前版本要求 Node.js 22.19.0 或更高版本。准备好环境后，通过 npm 全局安装：

```
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

macOS 和 Linux 也可以使用官方安装脚本：

```
curl -fsSL https://pi.dev/install.sh | sh
```

安装完成后，进入你希望 Pi 操作的项目目录：

```
cd /path/to/your-projectpi
```

第一次启动需要配置模型。进入 Pi 后输入：

```
/login
```

它支持 Claude Pro/Max、ChatGPT Plus/Pro 和 GitHub Copilot 等订阅登录，也可以选择 API Key Provider。

如果你习惯使用环境变量，可以在启动前设置密钥：

```
export ANTHROPIC_API_KEY=sk-ant-...pi
```

进入会话后，可以先让它熟悉项目：

```
阅读这个项目，告诉我它的目录结构、启动方式和测试命令。
```

输入 /model 可以切换模型。会话会自动保存，后面使用下面的命令继续：

```
pi -c
```

需要在脚本或 CI 中运行一次性任务，可以使用：

```
pi -p ”检查这个项目最近的改动，并列出可能的问题”
```

Pi 很小，但已经把 Agent 最重要的几层都准备好了。

你可以把它当成一个轻量 Coding Agent，也可以沿着它的 SDK 和扩展系统，继续造出下一个 OpenClaw。

04

**点击下方卡片，关注逛逛 GitHub**

这个公众号历史发布过很多有趣的开源项目，如果你懒得翻文章一个个找，你直接关注微信公众号：逛逛 GitHub ，后台对话聊天就行了：

![[笔记同步助手/images/d4a5cc67ea6474599b76e537904f937b_MD5.png]]

  

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/8125e1db_1785254724660?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzUxNjg4NDEzNA%3D%3D%26mid%3D2247535623%26idx%3D1%26sn%3Dac582a544775aec32d26d24375e29a9d%26chksm%3Df8844429de25d526c05728553a8c73ff3ea11c70318786805f56a2b6789c82bfa5ca58010a68%26mpshare%3D1%26scene%3D1%26srcid%3D07298pvAikdkm7mV3fETGxb4%26sharer_shareinfo%3D00c25573f248889e500179031f766d4c%26sharer_shareinfo_first%3D00c25573f248889e500179031f766d4c%23rd&s=obsidian)