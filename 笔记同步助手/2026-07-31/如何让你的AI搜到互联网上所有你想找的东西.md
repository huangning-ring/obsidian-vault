---
author: 叶开讲AI智能体搭建
source: AI整理 - 小红书
url: https://www.xiaohongshu.com/discovery/item/6a6ab784000000001002501b?app_platform=android&ignoreEngage=true&app_version=9.39.1&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CB_76SXmPgr5YO1A1ODzOkmaoL51niU9XBgV52C1S1S_g%3D&author_share=1&xhsshare=WeixinSession&shareRedId=ODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9&apptime=1785504409&share_id=85b49c4448cd462781a158150a0d1e0d&share_channel=wechat&code=AfGSsE43YSW
saved: 2026-07-31 14:29:37
tags:
  - 笔记同步助手
id: 783608ea-11bc-470e-999e-2200842bd789
---

# 如何让你的AI搜到互联网上所有你想找的东西

### 如何让你的 AI 搜到互联网上所有你想找的东西

只要 3 个 MCP + 2 个 Skill + 1 套提示词，分享一套高效 AI 搜索规则，结合三个 MCP 和两个 Skill，轻松应对不同场景需求。

#### 一、你要搜的到底是什么

如果你觉得自己在用的 AI 软件搜索能力总是差点意思，那可以试试我这套方案。也许可以帮你的 AI 软件开个挂。

#### 二、一套规则 + 两个 Skill + 三个 MCP

不管你用的是 Claude Code、Codex，还是 Workbuddy、Trae，只要能接入 Skill 和 MCP 的 AI 软件，都适用这套方案。

把它们组合起来，只要信息在互联网上、你有权访问，你的 AI 软件都能找到一条路，把它搜出来。

过去半年，我累计消耗百亿 Token，开发了数十个智能体。市面上的主流 AI 软件，我基本都用过。这套搜索系统，是我日常工作的重要工具，也是我反复调整了很多次，才慢慢磨出来的一套实战方案。

今天，我把它免费分享出来。求的不多，点赞、关注，你懂的~

这套搜索系统真正厉害的地方，是面对不同问题时，AI 知道该去哪里找、用什么找，以及什么时候该升级搜索能力。

很多朋友可能会觉得，给 AI 多装几个搜索工具，不就行了吗？真不行。工具装得越多，如果没有清晰的分工，AI 反而越不知道该用哪一个。我让 AI 查个网站，它把 3 个 skill 和 5 个 MCP 全叫出来开会，这不是有病吗？

所以这套搜索系统最核心的设计就是：搜索工具负责找资料，规则教会 AI 判断什么时候该调用什么工具。这一点，很重要。

#### 三、两个 Skill

**1\. Agent-Reach**

它负责帮 AI 扩展搜索渠道。普通网页搜索找不到的时候，它可以继续去 GitHub 项目、YouTube、B 站视频、RSS，或者社区平台上的公开讨论里找。

很多内容不是不存在，只是它根本不在普通网页搜索最擅长的地方。如果 AI 永远只盯着一个搜索框，它能看到的世界，当然就只有那么大。Agent-Reach 做的事，就是让 AI 知道，内容可能藏在哪个平台，接下来该去哪个渠道找。

**2\. WebAccess**

它负责让 AI 直接调用浏览器。有些页面必须登录，有些内容是动态加载的，还有些页面必须点击、滚动，或者使用站内搜索，普通的网页读取根本拿不到。这时候，WebAccess 才出场。

#### 四、三个 MCP

**1\. 百度搜索 MCP**

它速度快，适合找官网、查简单事实、定位普通中文网页。我给它安排的岗位很明确，就是先找方向、先找入口。

一个问题如果百度搜索就能解决，那就停。没必要为了显得 AI 很厉害，把其他工具全部叫出来折腾一遍。

**2\. 豆包搜索 MCP**

它主要负责补充近期中文信息、时间范围和权威来源。遇到最新规则、产品更新、价格变化这类问题，AI 会先让百度搜索定位，再让豆包搜索补充，接着回到官方原文确认。

这里最容易踩的坑，是 AI 看到一段搜索摘要，语气还特别确定，就直接把它当成答案。可摘要写得再像那么回事，也只是线索。重要信息，还是得回到原始页面。

**3\. 秘塔搜索 MCP**

它更适合复杂的研究任务，比如比较多个方案、做行业调研、整理一批资料。

如果百度搜索像是在找一个入口，豆包搜索像是在补充核实，那秘塔搜索更像是先把一整片资料摊开，让 AI 看清楚这里到底有什么。怎么说呢，找一个答案和看清一个问题，真的不是同一件事。秘塔搜索负责的，就是后面这种更重的活。

百度搜索负责找入口，豆包搜索负责补充核实，秘塔搜索负责把一片资料找全。三个 MCP 不是每次一起上。谁出场，由一套规则决定。

#### 五、这套规则把搜索任务分成四个等级

##### （1）快速搜索

适合找官网、查单一事实、读一篇已经知道的公开文章。比如，帮我找一下 Workbuddy 的官方网站。

这种问题直接调用百度搜索 MCP 就行。如果已经有网址，那就直接读取网页。一个找官网的问题，把五个能力全叫出来开会，真的有必要吗？够用就停。

##### （2）核实搜索

适合查最新规则、产品功能、价格、版本和发布日期。比如，Kimi K3 现在的价格是多少，最近有没有变过。这类问题不能只追求搜到，还得追求搜准。

可以先用百度定位，再让豆包补充近期信息，然后打开官方网站核实。如果问题明确涉及 GitHub、视频或者社区平台，再让 Agent-Reach 去补对应渠道的来源。

坦率地讲，这一步会比直接抄一段搜索摘要慢一点。但你要的是一个能经得住核对的答案，这点时间就不能省。

##### （3）研究搜索

适合多方案比较、行业调研和建立资料地图。比如，帮我比较目前主流的 AI 办公软件，分别适合什么人。

这时候，让秘塔搜索 MCP 扩大资料范围。需要代码项目、视频测评或者社区观点时，再调用 Agent-Reach，接着补读关键产品的官方页面。

研究搜索最怕的，不是资料少。是资料看起来很多，真正能证明结论的却没几条。所以搜得越深，越要记得回到来源。

##### （4）浏览器访问

适合必须登录、动态渲染，或者必须点击、滚动和多步导航的页面。比如，帮我看一下登录后的小红书页面里，今天在讨论什么和 AI 智能体相关的话题。

前三种静态方式拿不到，才调用 WebAccess 进入真实浏览器。

整套规则，我把它压成两句话：

-   用最轻的能力完成当前任务，够用就停。
-   搜索结果负责提供线索，重要结论必须回到原始页面确认。

真正提升 AI 搜索能力的，不是给它装上一堆工具让它自己动，而是给它一套清晰的规则，让这些 MCP 和 skill，在该出场的时候出场，在不该出场的时候安静待着。

如果你也想试试，把这篇文章直接丢给你的 AI 软件，让它照着这套思路去搭建。

---

还不知道怎么做的，可以评论区来找我。

我是叶开，专研 AI 智能体搭建。接智能体定制，提供一对一陪跑，带你从零搭建自己的专属 AI 智能体。

如果你也有一项特别希望 AI 长期参与、却始终做不顺的复杂工作，欢迎在评论区找我。也欢迎来我的朋友圈，围观我和 AI 的真实协作与持续进化。

![Image](https://relay-1.bijitongbu.site/p/482109945bcc120daad7ef37a2f8cf85.png)![Image](https://relay-1.bijitongbu.site/p/d10980c03b30cc98a888402c3e1f5c33.png)![Image](https://relay-1.bijitongbu.site/p/70d299ae13299fd28621eb41fca18548.png)![Image](https://relay-1.bijitongbu.site/p/1f9e9ece90c14abb68ee419c1f221d41.png)![Image](https://relay-1.bijitongbu.site/p/a221f78e96bc77a3a6fca7a6d698dbca.png)![Image](https://relay-1.bijitongbu.site/p/3691df667c85a334993720179bb758d9.png)![Image](https://relay-1.bijitongbu.site/p/dace6f2be531f0aa9b74a5e4a9f0cea2.png)![Image](https://relay-1.bijitongbu.site/p/513a12082b6aed7bf63852dfb9e61597.png)![Image](https://relay-1.bijitongbu.site/p/fb2d7dd232957bfd79916626f6b7b729.png)![Image](https://relay-1.bijitongbu.site/p/b08cde39a7ebaf2329580af02094e4b2.png)

这套系统真正厉害的地方，是让 AI 知道该去哪里找、用什么找、何时升级能力。  
#howto用好AI #howto用AI抢救一切 #claudecode #codex #agent #AI工具 #提高工作效率的方法 #AI进化生活howto

消耗 17 积分 · 积分余额 2692

AI整理设置可以[点此调整](https://my.bijitongbu.site/settings)

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/1d3b159d-f9c0-44b0-975f-7600f7e31afc?u=https%3A%2F%2Fwww.xiaohongshu.com%2Fdiscovery%2Fitem%2F6a6ab784000000001002501b%3Fapp_platform%3Dandroid%26ignoreEngage%3Dtrue%26app_version%3D9.39.1%26share_from_user_hidden%3Dtrue%26xsec_source%3Dapp_share%26type%3Dnormal%26xsec_token%3DCB_76SXmPgr5YO1A1ODzOkmaoL51niU9XBgV52C1S1S_g%253D%26author_share%3D1%26xhsshare%3DWeixinSession%26shareRedId%3DODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9%26apptime%3D1785504409%26share_id%3D85b49c4448cd462781a158150a0d1e0d%26share_channel%3Dwechat%26code%3DAfGSsE43YSW&s=vtoa)