---
author: GreenerDalii
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzI2MDI0Njc5OQ==&mid=2247486474&idx=1&sn=f69fe7dd30a9d45f3ff49429f58f7c0f&chksm=ebebd2ee27c6e3f6bbc0c8630316cb233ff784bedceae08bd20b6ef095063583699aea2f4b0f&mpshare=1&scene=1&srcid=0702Of7U3sW6mAYbKVpBnn6s&sharer_shareinfo=e0c1106d84ef4877a71cde13a4d78d11&sharer_shareinfo_first=e0c1106d84ef4877a71cde13a4d78d11#rd
saved: 2026-07-01 20:04:35
tags:
  - 笔记同步助手
id: 8ccb0310-bbf6-4524-a81f-dc8c4d097aee
---
公众号名称：理想大陆
作者名称：GreenerDalii
发布时间：2026-06-13 09:42
原文链接：[http://llmwiki.greenerai.top](http://llmwiki.greenerai.top)
> 全文约 5000 字，轻松阅读估计用时 10 分钟

## 一、整理知识的痛
不知道大伙有没有这种经历：
有时读完一本书、一篇论文，甚至追完一部小说，脑子里明明攒了一堆想法，但过段时间再回头翻，就跟没读过一样，记忆模糊了。或者就算记了笔记，笔记只躺在文件夹里，彼此都是独立的。明明记得某个观点在某处提过，搜半天搜不到，最后放弃。![[笔记同步助手/images/ea1eee9d9ba37752aed1ea1a02c8d423_MD5.jpg]]或者你有一大堆与各家 AI 聊天的记录——跟 Claude、ChatGPT、DeepSeek、Kimi 亦或是豆包聊了半天，有价值的观点散落在无数对话窗口里，想整理又不知道从何下手，各个对话 Session 又完全独立，无法连接融合。![[笔记同步助手/images/a65c1cb0f2e3cbdbf608c2b3f6eecb89_MD5.jpg]]或者你原来是 Evernote 和 Obsidian Web Clipper 的使用高手，习惯了像剪刀手✂️一样在网上"咔咔咔"到处剪贴搜集素材，堆满笔记本却无力维护而吃灰。![[笔记同步助手/images/c07f0759e71e03bbd977a60410a4aa39_MD5.jpg]]又或者你是 Obsidian 重度用户，看着 Graph View 里漂亮的节点连线，心里清楚那大部分是装饰——真实的知识结构根本不在那些线上。
你试过手动建双向链接，写了十篇之后这活儿就干不下去了，因为依靠人脑进行这项工作，简直太耗时。时间花在"找"和"连"上，而不是"想"和"写"上。活脱脱像一个戴着巨厚老花镜的老编辑。![[笔记同步助手/images/158200cfc2fd8e140a807975180c67c8_MD5.png]]再或者，你跟我一样，早就知道 Andrej Karpathy 提出的 **LLM-Wiki** 的理念，让 LLM 自动读取笔记、提取概念和实体、生成自组织的知识网络。虽然概念很美好，但社区里只有命令行工具、 Skills 和独立 APP版本，想低成本地用起来，难啊。
如果你中了以上任意一条，这篇就是写给你的。
这里 Callback 一下标题，我开发了一个可能是目前 Obsidian 生态中最好用的 LLM-Wiki 插件——**Karpathy LLM Wiki**，我想把它推荐给喜欢笔记和知识整理的你，相信你会喜欢～![[笔记同步助手/images/4c23b3237df5b285f51dd080a9b1e914_MD5.jpg]]目前上线一个多月，已经有超过 4000 次下载量，完全免费，隐私安全，用户反馈十分积极，同时我也在高质量维护这个项目，所以欢迎使用。
## 二、什么是 LLM-Wiki？以及它跟那些"知识管理工具"有什么区别
先澄清一件事：LLM-Wiki 不是普通的笔记摘要工具，不是云端知识库，也不是 RAG。
它做的事情用一句话概括：**你只管在本地写笔记，LLM 帮你编织知识网络🕸**。
具体来说，你把笔记导入进 Obsidian，插件调用 LLM 读一遍后，就能自动提取里面的人名、组织、概念、理论、事件等，然后再自动生成对应的条目页面，并且自动形成知识连接，将一个个零散的知识点串联成结构化的网络，形成你自己的**维基百科**。
而且，你还可以对你的维基百科进行针对性地提问，它的回答是完全基于你自己的内容，而不像其他 AI 软件存在幻觉或与你的资料不关联的现象。
现在市面上的知识管理方案，我基本都试过，说说它们有哪些不足：
### 腾讯 IMA、谷歌 NotebookLM 等
上手确实简单，上传文档、AI 自动总结、生成播客、思维导图等等，十分强大且好用。但问题也明显——**你的笔记得上传到别人的服务器**。
抛开隐私安全不谈，笔记的归属权也在云端 App 手里，你没有自己数据的所属权。哪天服务调整或者收费策略变了，或者云端被黑、数据中心被炸（尽管这个理由在以前很离谱，但从最近🇮🇷炸中东的数据中心事件来看，也并不是那么不可能），你攒了多年的知识库可能说没就没了。![[笔记同步助手/images/b1355a74514cf7b74926d65b09b96143_MD5.png]]它们都很好用，我自己也在使用，我们这个插件也并不是要替代他们，而是作为一种补充。
你可以完全脱离平台化，你的数据就保存在自己的电脑中，可以随时迁移和编辑，你拥有自己的数据"主权"。
### 传统的 RAG 系统
这个方案，要么自己本地部署 Embedding 模型 + 向量数据库，复杂繁琐，配置到脑瓜嗡嗡的🫨；要么用第三方平台，一样要上传数据，那还不如用上一种成熟的 APP 呢。
而且 RAG 的核心问题是碎片化——它就像一个切割机，把知识切碎后进行**机械、生硬**的查找匹配，当你进行查询时，就像使用搜索引擎，只是执行简单的关键词匹配罢了，但这些文字背后的关系，就全都丢失了。
RAG 本质其实也是一种 Trade Off，因为早期 LLM 模型上下文窗口太小，不得已只能增加一个 Embedding 中间操作来压缩信息。而当下最新的模型基本上都标配了 1M 上下文窗口，对于非海量内容，完全可以不用笨重的 RAG 思路。
### 手动维护双向链接
这是最细致的方案，但也是最不现实的。除非你真像个尽职尽责的老编辑一样有极强的自律和投入大量的时间精力来维护，否则其中的工作量太吓人了。
### LLM-Wiki 的优势
那与以上传统方案相比，LLM-Wiki 理念的优势在于：
-   **结构化自组织**：你只需写或导入你的笔记，就能在后台自动生成属于你的结构化维基百科。
-   **上手简单**：配置一个 LLM API Key，打开你的文件，点击摄入，搞定！
-   **轻量化**：只是一个 Obsidian 插件，没有后端，没有数据库，没有 Embedding，不需要下载安装其他软件、模型，开箱即用。
-   **隐私安全**：纯本地插件，无数据收集与隐私担忧。笔记始终在你自己的 vault 里，LLM 只是读取、分析、生成新的 Wiki 页面。如果你不放心，可以配 Ollama 或 LM Studio 跑本地模型，这样数据完全不出本地。
-   **笔记自己可控**：生成的 Wiki 页面就是普通的 Markdown 文件，带 frontmatter、双向链接，跟你的原有笔记完全兼容。你可以随时手动编辑、修改、删除、导入导出。不会锁定在某个 App 里的私有格式或云端而难以导出。
就像 **LLM-Wiki** 想表达的：「LLM Wiki is not another chatbot. It knows you.」它不是另一个通用聊天机器人，它知道你写过什么、思考过什么、知识是如何组织的。这才是真正属于你自己的知识管理助手。
## 三、怎么用呢？非常简单！
### 1️⃣ 安装（Install）
首先你需要有 Obsidian，如果没安装可前往官网 [https://obsidian.md/zh/](https://obsidian.md/zh/) 进行下载安装。![[笔记同步助手/images/9d4eb82b299a76ae48e474f550d8c662_MD5.png]]然后在 Obsidian 中打开 **设置** → **第三方插件**，点击"浏览"，搜索 "**Karpathy LLM Wiki**"，点安装并启用就行。![[笔记同步助手/images/fbc95eba04e2ba1606ea8bebc0e96879_MD5.png]]![[笔记同步助手/images/70399d930476b1d61007cd97b8d52535_MD5.png]]![[笔记同步助手/images/5f34bde2bfd7e7a3873f10fd8e5cecde_MD5.png]]或从官方社区插件网站安装 — 访问： [https://community.obsidian.md/plugins/karpathywiki](https://community.obsidian.md/plugins/karpathywiki) 点击 **Add to Obsidian** 即可直接安装。![[笔记同步助手/images/3c9a31acb3d0660542bd7fa0b473c75a_MD5.png]]
### 2️⃣ 配置（Configuration）
打开插件设置，选一个你自己的 LLM 提供商，填入 API Key，点"获取模型"或手动输入模型 ID（如果提供商不支持模型列表），点"Test Connection"。通了就能用。![[笔记同步助手/images/054a679d4b2f17eef14285edc883bc81_MD5.png]]我们支持非常多的提供商：Anthropic Claude、OpenAI、Google Gemini、DeepSeek、Kimi、GLM、MiniMax、OpenRouter，也支持对应厂商的 Coding/Token Plan 接入（使用自定义接口），这样就能把成本控制到最低。
我自己用得最多的是 DeepSeek-V4-Flash，有 1M 超长上下文，同时缓存命中率非常给力，价格十分实惠。如果处理敏感内容，也可以使用 Ollama 或 LM Studio 来接入本地模型（不过这样就无法享受 1M 上下文的优势了）。
### 3️⃣ 摄入（Ingest）
先要保证你的 Obsidian Vault 里有 Markdown 素材文件，然后使用 `Cmd+P` 或 `Ctrl+P` 调出命令面板搜"LLM"就能看到以下命令：![[笔记同步助手/images/e8d6a12f81c89a3c5035fef88a4f3394_MD5.png]]选择 **摄入单个源文件**（Ingest single source）或 **从文件夹摄入**（Ingest from folder）
或直接摄入当前打开的文件，点击左侧菜单栏的摄入按钮，接着等它跑完：![[笔记同步助手/images/49ba5231229d42a8f1790a8387a199ba_MD5.png]]接下来插件会调用 LLM 读取你的笔记，提取所有实体和概念，根据内容长度，这个过程可能需要挺久的时间。
完成后，在 Obsidian 左侧文件树中，便能看到 `wiki/` 下生成对应的维基页面。![[笔记同步助手/images/ccf82f9cd4fb9ee79eddf9f919ca4a7b_MD5.png]]这里解释一下 `wiki/` 文件夹里各个目录和文件的作用。你可以把它理解成你的维基百科的骨架：
-   `sources/`：你原始笔记的"摘要页"。每篇被 Ingest 的源文件都会在这里生成一个对应页面，记录它的核心内容、提取出的实体/概念，以及原文引用。它就像Wiki的"参考文献"，方便你随时回到原始资料。而你的原始文件请放心，插件严格要求不会进行任何修改。
-   `entities/`：实体页面。人名（如"罗辑"）、组织（如"三体组织"）、产品、地点、事件等具体对象会出现在这里。
-   `concepts/`：概念页面。理论、方法、术语、抽象思想（如"黑暗森林法则"、"注意力机制"）会出现在这里。
-   `schema/config.md`：Wiki 的"**设计规范书**"。它定义了页面模板、frontmatter 字段、标签词汇表等规则，LLM 生成页面时会参考它。你可以手动编辑它，来定制自己的 Wiki 风格。
-   `index.md`：Wiki 的自动生成的总目录。它汇总了所有实体、概念和别名，相当于你个人维基百科的"索引页"。
-   `log.md`：运行日志。每次 Ingest、Lint 或维护操作后，插件会把关键信息记录在这里，方便你回溯和排查。
你可以点开以上文件浏览一下，这些就是你的维基百科数据，插件把你的素材文章，自动拆解成关联的 Wiki 页面的效果是不是还挺神奇～
![[笔记同步助手/images/7ce1c41a0b3e4e2488cc6d912c91aa24_MD5.png]]对于以上内容，你可以修改 `entities/` 或 `concepts/` 内的页面，但记得在 Frontmatter 中设置 `reviewed: true`，来标记用户修改，防止下次被覆盖更新。
你也可以编辑 `schema/config.md` 文件，它是指导 LLM 如何生成 Wiki 页面的"说明书"。这套 Schema 会被注入到每次 LLM 调用的 prompt 里，所以改它等于在统一调整整个 Wiki 的输出规范。
新手可以先不动它，用默认配置跑一段时间；熟悉了再慢慢微调，让 Wiki 更符合你的记录习惯。
### 4️⃣ 查询（Query）
这也是 LLM-Wiki 最有魅力的能力之一，你可以基于你自己的维基百科，去专门提问，不用笨拙的 Embedding。
按 `Cmd+P` 或 `Ctrl+P` 调出命令面板，搜"**查询 Wiki/Query wiki**"：![[笔记同步助手/images/aac209c371dd584198a765ba2a0b71d6_MD5.png]]就会弹出一个对话窗口。你可以像聊天一样问它问题，比如"帮我对比一下卡尼曼的系统 1 和系统 2"等等。![[笔记同步助手/images/8ee2426b4ebfc77ee3d5e86f69527edc_MD5.png]]它不会像通用 AI 一样调用搜索引擎，也不会胡编乱造，而是完全基于你的维基百科数据进行检索、组织答案。每个要点都会带上参考链接，你点一下就能回到原文出处。
关键是它回答的内容**来自你自己的笔记**。不是从互联网上搜索来的泛泛内容，是你自己写过、筛选过、思考过的东西。相当于你给自己建了一个可以对答如流的私密知识库。
### 5️⃣ 维护（Lint）
就像手动记录的笔记，知识网络用久了难免出问题：比如出现重复页面、死链（指向没有的链接）、空页面、孤儿页面（没人链接的）、甚至还有矛盾内容（新笔记和已有 Wiki 冲突）。
插件有一键 Lint 扫描机制，能检测出这些问题。更棒的是"一键修复所有"功能——按因果关系自动修复：先补别名，再合并重复，再修死链，再处理孤儿页面，最后处理空页面。点一下，等它跑完，Wiki 就恢复健康了。![[笔记同步助手/images/8cb42641cdef505ad0e0a41e00f7d771_MD5.png]]还可以根据需求开启自动维护功能：监听文件夹（让笔记变动时能自动感知）、定时 Lint、启动时快速检查，来保证你的维基百科处于最佳状态。
## 四、更多有趣的玩法
### 🪜 Web Clipper 联动
我常用的组合拳是这样的，与强大的 **Obsidian Web Clipper** 插件进行联动，如果没安装，强烈建议为你的浏览器安装它： [https://obsidian.md/clipper](https://obsidian.md/clipper)
![[笔记同步助手/images/7307c09155ea4b4eaa02e01ff12964c6_MD5.png]]当你在网上冲浪看到一篇好文章、YouTube、新闻消息等等，用 Obsidian Web Clipper 插件一键剪藏到 `clippings` 文件夹。
如果插件开启了"监听文件夹"功能，并启用 Web Clipper 监听，就能感知到新文件，通知你自动摄入。
以前剪藏文章基本就是吃灰，现在每剪一篇，知识网络就更密一层。这种感觉有点像园丁，你只管种，树自己会往一起长。
### 📖 小说、历史解析
例如把《三体》的读书笔记丢进去，插件会提取出"罗辑"、"黑暗森林法则"、"二向箔"这些实体或概念，自动生成对应的 Wiki 页面。一本小说读下来，人物关系、概念链条、理论体系都在里面了。
我试过用插件来解析《史记》全文，效果非常好，对历史事件、人物、概念等等的提取非常细致和高质量，你可以去试试提取你喜爱的小说、论文或其他书籍：![[笔记同步助手/images/2ac619ba524e1b0330dc6d7004bcface_MD5.png]]这里推荐一个全球最大的电子书网站 **Z-Library** ：
[https://z-library.im/](https://z-library.im/)
（需要用🪜，网址会时常变，记得更新，不要访问到冒牌山寨的了），里面能找到几乎市面上所有书籍的电子版（有 PDF、EPUB、亚马逊 Kindle 格式、TXT 等等），你从上面下载你喜欢的书籍。![[笔记同步助手/images/faf40a5927e5ad2902d7659f7fc3ca05_MD5.jpg]]然后，送佛送到西，因为 Obsidian 主要是处理 Markdown 文本格式文件，如果你已有 PDF、Word、PPT、手写体等等非文本文件，这里再推荐一个非常好用的文件转换在线工具 **MinerU**：
[https://mineru.net/OpenSourceTools/Extractor](https://mineru.net/OpenSourceTools/Extractor)
它可以高质量完成各种格式到 Markdown 的转换，然后就可以导入到 Obsidian 作为你的素材。![[笔记同步助手/images/0a0e794ceb51bda74d7577ff3ce0ab43_MD5.png]]上面那个《史记》的例子就是这样导入到 Obsidian 并用 LLM-Wiki 处理的。
### 💬 导出 LLM 聊天记录，形成自己的知识库
这算是我的另一个高频用法。当你在跟 AI 聊完天，不再让有价值的对话留在聊天窗口里吃灰。
你可以打开你的各种 AI 的聊天记录页面，然后在浏览器使用上面说到的**Obsidian Web Clipper**，来一键将你的所有不同 AI 的聊天 Session 导入到 Obsidian。![[笔记同步助手/images/0430dc306cd51723a13efde077c7fa34_MD5.png]]不同 AI、不同 Session 的对话，过去是完全割裂的。现在它们可以被统一织进同一张知识网里。
你甚至会惊讶地发现：这次跟 DeepSeek 聊的一个想法，居然和上周跟 ChatGPT 聊的另一个想法，背后有着紧密的关联。
### 🔗 与关系图谱联动
Obsidian 的 Graph View 大家都喜欢看，但大多数时候除了好看没啥用。为什么？因为节点之间的连线大多是手动建的，有极强的随意性——你随手加了一个 `[[...]]`，图谱就多了一条线，但这条线不一定有真实的语义关联。
LLM-Wiki 生成的页面之间的链接是有真实语义基础的。"注意力机制"页面会链接到"Transformer"、"自注意力"、"Scaled Dot-Product Attention"，因为它们在概念上确实相关。![[笔记同步助手/images/218c00b374b437d15ddf7f2f38701fd9_MD5.png]]且 Graph View 会像谷歌的 PageRank 算法一样，对关键信息节点进行可视化，节点尺寸越大，代表该信息节点连接的边越多，该信息就越重要，你也可以通过 LLM-Wiki 生成的 Tags 标签进行更直观的颜色可视化：![[笔记同步助手/images/45a8f1a2bcdf94b9a7b3d5a1c9169bba_MD5.jpg]]
***
## 五、抛砖引玉
这个项目从 4 月底开始写，到现在一个多月，多亏了 AI 能以极高的速度迭代更新，起初原因是看到 Karpathy 的 **LLM-Wiki** 理念，被它简洁、优雅、直观的哲学所吸引，有一种大道至简的冲击，用过 RAG 的小伙伴肯定深有体会。
然后我就自然在 Obsidian 插件市场中搜索，当时竟没发现什么好用的 LLM-Wiki 插件，于是，在 AI 时代，不如撸起袖子，"鞭策" AI 来开发一个我自己用得顺手的工具，这就是「Karpathy LLM Wiki」插件的由来。
后来顺手发到社区和 GitHub，在短短一个多月，在没有推广情况下，下载量就突破了 4000 次。
目前 Obsidian 官方评分 95 分，完备的 i18n 国际化语言支持（中、英、日、韩、德、法、西班牙、葡萄牙），支持几乎所有主流 LLM 提供商，以 MIT 协议完全开源，有 68+ Stars⭐️、9 Forks、4 Contributors，也欢迎大家点亮 ⭐️Star 和贡献代码或提出意见。![[笔记同步助手/images/53c93d6d8ae2a857011a3bd237c096ff_MD5.png]]欢迎大家使用，有问题随时聊。相关使用建议可以直接反馈给我，加我个人微信 **Green-Emperor** / 即刻 **@Greener-Dalii** 进行交流，或前往 GitHub 提 Issues。
以上只是抛砖引玉，在我们的插件官网也有更多教程可参考，关于怎么把这个插件嵌入日常工作流——比如怎么设置自动化的知识摄入管道、怎么与别的插件深度联动、怎么处理多 Wiki 的场景——这些我们下篇再聊。
Stay tuned👀
***
### 相关资料
-   插件官网：llmwiki.greenerai.top
-   GitHub：github.com/green-dalii/obsidian-llm-wiki
-   Obsidian 官方插件社区：https://community.obsidian.md/plugins/karpathywiki
-   Obsidian 官网：https://obsidian.md
-   Karpathy 的 LLM Wiki 原始 gist：github.com/karpathy/llm-wiki
-   其他文件转 Markdown 在线工具 MinerU：https://mineru.net/OpenSourceTools/Extractor
-   全球最大的电子书平台 Z-Library：https://z-library.im/
***
内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/0ccc7cc9_1782932670411?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzI2MDI0Njc5OQ%3D%3D%26mid%3D2247486474%26idx%3D1%26sn%3Df69fe7dd30a9d45f3ff49429f58f7c0f%26chksm%3Debebd2ee27c6e3f6bbc0c8630316cb233ff784bedceae08bd20b6ef095063583699aea2f4b0f%26mpshare%3D1%26scene%3D1%26srcid%3D0702Of7U3sW6mAYbKVpBnn6s%26sharer_shareinfo%3De0c1106d84ef4877a71cde13a4d78d11%26sharer_shareinfo_first%3De0c1106d84ef4877a71cde13a4d78d11%23rd&s=obsidian)