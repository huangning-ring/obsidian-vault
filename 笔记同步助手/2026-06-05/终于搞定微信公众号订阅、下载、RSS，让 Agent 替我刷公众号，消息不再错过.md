---
author: 可爱的小Cherry
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzA4NzMyNzU5Mg==&mid=2453079066&idx=1&sn=f41aea1e9d9555017ce49dd5b6ad57db&chksm=86bca84bd78b7e28dc33103c12d128964b3fd44b0304d29ddb54c8fa7090bce455d296fe4bd1&mpshare=1&scene=1&srcid=0603K3tlSuMuwFrOFkXGwLWW&sharer_shareinfo=e6dfcb5200885365e242d164f8f3d4bb&sharer_shareinfo_first=7f4d4877b90fae65d8da163465383035#rd
saved: 2026-06-05 11:16:44
tags:
  - 笔记同步助手
id: 2c16a63a-a9f0-4fa5-aad9-57ddee8105c1
---

公众号名称：可爱的小Cherry

作者名称：可爱的小Cherry

发布时间：2026-06-03 09:49

![[笔记同步助手/images/ee5bebeeccc2c6b626a0ed9452b58796_MD5.png]]

---

  

**信息过载的本质，不是太多，而是太乱。** 有时候躺在床上刷公众号，看到有一些大佬发的爆款公众号文章，就马上转发到自己的手机或者快存里，然后存下来作知识库。

但是有的时候太忙了，经常会忘记看公众号信息，也因此错过了很多大咖发的新文章。更重要的是，很多文章内容实操性太强，如果只是我自己看一遍，还要让 AI 看一遍去操作，长期以往就显得特别麻烦。

之前我介绍过很多保存公众号文章的内容，有借助第三方工具的、有依靠 Agent 的、有依靠快存的，都有。但是始终没有一个可以帮助我自己去订阅和查看这些账号。

所以**真正的问题从来不是「看不到」，而是「抓不到」**，是如何**更优雅**的去订阅一个公众号账号，查收并存档最新文章。没有 RSS，没有 API，没有标准输出格式。你想让 Agent 帮你读？Agent 站在围墙外进不来。

直到 **we-mp-rss** 又更新了，我把它又装回了 NAS 里，并且根据官方教程把 Access 丢给了 Agent，效果相当不错。

它可以将关注的账号生成为 RSS，直接喂给 Agent 阅读；也可以抓取最新的文章内容，并且可以下载为 Html、word、PDF 等格式，保留图片等等。

可以说是现阶段利用 Agent 打造个人知识库的一种非常优秀的方法～

![[笔记同步助手/images/cbdebdb6b57fb4f960ca08a10ae85bcb_MD5.png]]

打开 we-mp-rss 的 Web 界面，第一步是授权。它背后的逻辑也很优雅，用一个开通了公众号的微信身份去授权，模拟公众号后台的视角去抓取数据。你需要一个**已经开通了公众号的微信**，没有的话去注册一个个人号，五分钟搞定。

背后的逻辑和某些老牌爬虫项目类似，都是通过公众号管理后台的接口来拉取数据。we-mp-rss 的封装更干净，不需要你手动抓 Cookie、拼 Header，扫个码就完事。

![[笔记同步助手/images/fa13ef73a752b3a9874ef91313ae1e01_MD5.png]]

完成授权以后，我们就可以开始对公众号和文章进行订阅了。进入订阅管理，直接输入公众号名称搜索。这里大家可以直接用名字来搜索，系统会自动找到账号并让你选择，非常的方便。

![[笔记同步助手/images/74952bd803439bea20174fc93db8a48d_MD5.png]]

我一次性扔了 6 个账号进去，都是我平时爱看的，包括了数码评测、AI 资讯、硬件拆解、自媒体运营等等，系统全都识别出来了，而且目前还没有遇到订阅上限。

![[笔记同步助手/images/7594bcde162ccb21f3588653ca25b9e9_MD5.png]]

稍微等待一小会儿，订阅账号的文章就全部展示出来了，然后再回到首页，里面会有一个导出功能，这里根据你的需要去修改。这里我建议你**无脑选 PDF**，格式最完整，然后 Agent 解析也方便。公众号文章的排版太复杂了，图文混排、嵌入卡片、特殊样式，转成 MD 后格式会炸掉。Word 也好不到哪去，字体和间距全乱。

![[笔记同步助手/images/eb116ce0ec81a059cfe9dce1cf7c05eb_MD5.png]]

如果你的需求和文章开头一样，是想要长期订阅的话，可以点击账号上方的订阅按钮，选择 RSS。你会拿到一个标准 RSS 链接，直接集成到 RSSHub、FreshRSS、或者任何支持 RSS 的 Agent 工作流里。

![[笔记同步助手/images/c3a3190e0b023709bca92e2609a18626_MD5.png]]

如果你甚至懒得自己做 RSS 去看，更牛的方法就是用内置的 **Access Key**。在「更多」菜单里找到创建 Access Key，配置好权限后，系统会生成两个 Key。你把项目地址 + Key 丢给 Agent，让它自己去读 API 文档、自己调接口、自己拉文章。

![[笔记同步助手/images/48a2220fe7f63f02bf00a0607708494d_MD5.png]]

既然是 7×24 小时运行的采集服务，当然得扔在 NAS 上。所以介绍完大致的项目，再来说说如何在威联通 NAS 里部署。

Compose 文件极简，三行核心配置：

```
services:
  werss:
    image: rachelos/we-mp-rss:latest
    ports:
      - "8001:8001"  # 左侧端口你可以自己修改
    volumes:
      - /share/Container/werss:/app/data
    restart: unless-stopped
```

打开 NAS 的 Container Station 容器工作站，创建一个应用程序。把上面的 `yaml` 文件直接丢进去验证一下就可以跑了。

部署完成后，访问 `NAS_IP:8001`，就能看到 we-mp-rss 的界面。默认账号密码是 `admin/admin@123`。好了，现在开始你的信息采集吧～

![[笔记同步助手/images/07087cd721501f3eeb752fa9a92915f2_MD5.png]]

最后，我觉得还是想象一下当前的通用型 Agent 场景。

凌晨，某个你关注的博主推送了一篇长文。NAS 里的 we-mp-rss 默默运行、抓取，生成 RSS 更新。然后你的 Agent（无论是 Hemres 还是 OpenClaw），检测到新数据，它就自动调用 API 把文章 PDF 下载下来了。

然后你还可以搭配一些工作流，比如丢到向量数据库做 Embedding，比如直接让 LLMs 生成提纲，甚至是直接告诉它，这个博主发的文章，你都要学习并且吸收，然后完善你自己的运行体系。

**等早上醒来看手机，Agent 已经把任务总结推到了你的飞书上。然后原始文档就归档在 NAS 随时调阅。**

所以我觉得，这可能就是个人知识库的终极形态，**你不需要自己去信息海洋里捕鱼，你只需要在鱼游过的地方撒网，剩下的工作让 Agent 帮你完成。** we-mp-rss 就是那张网的第一个节点。

---

  

![[笔记同步助手/images/280a83d2569f1c61d0fbfb815f406ff3_MD5.png]]

> 往期推荐：

NAS 教程：

1️⃣ 61儿童节，送孩子这套 AI 学习平台，立省几万课外费，极空间部署 LearnHouse

2️⃣ NAS+微信+Hermes+Obisdian，网页自动变知识库，打造极空间 AI 知识库

3️⃣ 我在 NAS 里玩“诛仙”，可联机的 AI 修仙游戏，铁威马部署「仙途」

4️⃣ 我在 NAS 里养了一只「白虎」，平替青龙面板！海康存储部署 baihu-panel

5️⃣ NAS 部署「思源笔记」，搭建你的个人知识库，海康存储部署教程

AI 玩法：

1️⃣ 实测这 5 个大厂 Claw，一文说清，普通人到底应该装哪个

2️⃣ 小龙虾做不到的事，我找到这个 Agent 全干了

3️⃣ 让 AI 住进你的电脑，每天多摸鱼2小时

4️⃣ “素人”抖音 3 个月赚100万，AI 带货杀疯了

5️⃣ 我花19刀请了个AI设计师，做了一款 NAS 监控小屏幕

  

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/8b9ebf47_1780654602201?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzA4NzMyNzU5Mg%3D%3D%26mid%3D2453079066%26idx%3D1%26sn%3Df41aea1e9d9555017ce49dd5b6ad57db%26chksm%3D86bca84bd78b7e28dc33103c12d128964b3fd44b0304d29ddb54c8fa7090bce455d296fe4bd1%26mpshare%3D1%26scene%3D1%26srcid%3D0603K3tlSuMuwFrOFkXGwLWW%26sharer_shareinfo%3De6dfcb5200885365e242d164f8f3d4bb%26sharer_shareinfo_first%3D7f4d4877b90fae65d8da163465383035%23rd&s=obsidian)