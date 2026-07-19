---
author: 逛逛
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247535382&idx=1&sn=c85dadaf6aedd3a7f03f7d3a0d13a3b9&chksm=f876bc95b2f500f4b524f890a782617816ca87ff69f362481977fff1118502155acbb355fdc6&mpshare=1&scene=1&srcid=071825oZDZyjGh6Spc2mYOzL&sharer_shareinfo=647fcb3bf5d1416251435898e6649ce6&sharer_shareinfo_first=647fcb3bf5d1416251435898e6649ce6#rd
saved: 2026-07-18 07:36:43
tags:
  - 笔记同步助手
id: 980f83c7-6f17-4dab-9fec-c84a5e73bf52
---
公众号名称：逛逛GitHub
作者名称：逛逛
发布时间：2026-07-18 11:10
最近咸鱼上有一个品类在库库上架。
那就是 Codex 皮肤定制。
我今天打开看，目前价格下来了，最高的也就 20 块钱。
![[笔记同步助手/images/e94e81506901401aba4ae712b32bc44f_MD5.png]]
前段时间，甚至炒到了 199 元一次定制。
这个玩意儿爆火其实源于近期 GitHub 上的一个免费的开源项目：Codex-Dream-Skin。
这个工具可以给 OpenAI Codex 的桌面客户端换张皮。
纯美化需求，热度还挺高。
![[笔记同步助手/images/ad59e43d90f53f13a800b4b0564a83d8_MD5.jpg]]
![[笔记同步助手/images/98525edf97ddea3889e3752f09b362d0_MD5.jpg]]
![[笔记同步助手/images/6b9058b5e42a7e39a009f60ca0d39e12_MD5.jpg]]
![[笔记同步助手/images/526d4fe25ed7cce1713a8dbade43ff43_MD5.jpg]]
![[笔记同步助手/images/713c723929a7eb9228c449a012c9e751_MD5.jpg]]
![[笔记同步助手/images/38a949ec56ce7847d9e5daa7f396d64a_MD5.jpg]]
![[笔记同步助手/images/4208dd34148cccb5d011078f80963879_MD5.jpg]]
![[笔记同步助手/images/e7cd80135e38670c0f784916fc1057c4_MD5.jpg]]
![[笔记同步助手/images/ae40fdf913112f647cb7af16e84e77f6_MD5.jpg]]
![[笔记同步助手/images/85f42b306947a6ab35a116d26cf73428_MD5.jpg]]
看着这调调，一下就让人梦回当年 QQ 换皮肤的时代。
90 后小时候用 QQ 聊天，第一件事就是给 QQ 折腾一套皮肤。
现在 90 后长大了当牛马，用 Codex 写代码，也想让 Codex 看着炫酷点。
同一拨人，同样的需求，被拿捏得死死的。🤌
![[笔记同步助手/images/d7a0a22c76d453ca82349c35b39fc9e3_MD5.png]]
01
**开源项目简介**
Codex-Dream-Skin 能把 Codex 默认的白底黑字换成任何你想要的样子。
背景图随便换，配色随便调，左边的侧边栏、装饰元素、输出区域都能改。
而且是真换肤，不是贴张假图糊弄人。
![[笔记同步助手/images/40af5327399ea9ec51277888c23b1ef3_MD5.png]]
侧栏、建议卡、项目选择、输入框这些都是 Codex 原生控件，你能正常点击、输入、切换。
背景图是真正的背景层，一张 16:9 的纯壁纸连续铺满整窗，首页突出氛围感，任务页会自动降低干扰。
换图也很简单，丢一张你喜欢的图进去，它会自适应焦点、安全区和配色，变成你专属的主题。
**Mac 和 Windows 都能用，各一套脚本，效果都是把 Codex 主题化。**
```
开源地址：https://github.com/Fei-Away/Codex-Dream-Skin
```
02
**开源项目原理**
看了一下这个项目的原理。
因为 Codex 桌面端底层是 Electron，相当于一个套了壳的 Chromium 浏览器，自带 Chrome DevTools Protocol，也就是 Chrome 开发者工具背后那套调试协议。
Dream Skin 就是在你本机起一个调试通道，往 Codex 的渲染进程里塞 CSS 和 DOM，把背景图、配色这些样式覆盖进去。
整个通道不对外网开放。具体启动流程分两条线：
macOS
-   找到 com.openai.codex 这个 bundle，校验签名、Team ID、架构、内置 Node
-   用 launchd 把 Codex 带着一个 CDP 端口拉起来
-   注入器只往 app:// 的渲染进程塞东西，不碰其他目标
-   不依赖全局 Node，直接用 Codex 自带的签名 Node 跑脚本
Windows
-   从 AppUserModelId 走系统应用包激活接口，把 CDP 参数传进去
-   绕开 WindowsApps 的 ACL 限制（这个目录普通用户没权限写）
-   系统托盘里常驻一个切换器
它从头到尾不改 .app、app.asar、WindowsApps 这些官方文件，代码签名保持原样。
停掉注入器、关掉 CDP 端口，Codex 立刻回到原生外观，没有任何残留。
CDP 本身能力其实很强，无鉴权就能完全控制渲染进程，所以作者在 README 里反复强调一条：主题运行期间别跑来路不明的本机程序。
03
**五分钟上手**
最简单的办法，给你的 Codex 输入命令：
读取如下开源项目链接，研究一下给出部署到我电脑的方案，我确认了你在执行：https://github.com/Fei-Away/Codex-Dream-Skin
可以原生老手艺手搓安装。
## Mac 用户
直接把开源项目克隆到本地。然后在 Finder 里进到 macos/ 目录，双击 Install Codex Dream Skin.command。
项目自带两套预设可以试：桥本有菜、哥特科幻。
想用自己的图，启动定制器丢一张图进去就行，它会自动分析配色和安全区。
想常驻顶栏一键切换，装一下 SwiftBar 插件，菜单栏里就能切换了。
## Windows 用户
第一步：拿到仓库
直接把开源项目克隆到本地，然后 PowerShell 里跑两个脚本：
```
powershell -ExecutionPolicy Bypass -File .\windows\scripts\install-dream-skin.ps1
powershell -ExecutionPolicy Bypass -File .\windows\scripts\start-dream-skin.ps1
```
装完之后引擎落在 %LOCALAPPDATA%\\CodexDreamSkin\\engine，，系统托盘里会常驻一个图标。
右键托盘图标 → 已保存主题 → 选预设。
想换自己的图，托盘里点「更换背景图」，导入纯背景保存即可。
## 如果不想用了，Mac 双击 Restore Codex Dream Skin.command，Windows 跑 restore-dream-skin.ps1 这个，就能一键回到官方外观
04
**点击下方卡片，关注逛逛 GitHub**
这个公众号历史发布过很多有趣的开源项目，如果你懒得翻文章一个个找，你直接关注微信公众号：逛逛 GitHub ，后台对话聊天就行了：
![[笔记同步助手/images/d4a5cc67ea6474599b76e537904f937b_MD5.png]]
***
内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/e0075719_1784356601411?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzUxNjg4NDEzNA%3D%3D%26mid%3D2247535382%26idx%3D1%26sn%3Dc85dadaf6aedd3a7f03f7d3a0d13a3b9%26chksm%3Df876bc95b2f500f4b524f890a782617816ca87ff69f362481977fff1118502155acbb355fdc6%26mpshare%3D1%26scene%3D1%26srcid%3D071825oZDZyjGh6Spc2mYOzL%26sharer_shareinfo%3D647fcb3bf5d1416251435898e6649ce6%26sharer_shareinfo_first%3D647fcb3bf5d1416251435898e6649ce6%23rd&s=obsidian)