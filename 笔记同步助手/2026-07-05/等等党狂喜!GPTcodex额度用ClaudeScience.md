---
author: Luke_ahhh
source: AI整理 - 小红书
url: https://www.xiaohongshu.com/discovery/item/6a471c65000000001003c812?app_platform=android&ignoreEngage=true&app_version=9.36.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CB1mw4QmccBApNHZ5Ijc0ORdtOb-3z0D-Jm_zCVrjMcIc%3D&author_share=1&xhsshare=&shareRedId=ODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9&apptime=1783214998&share_id=0b6788c741f447c2817f7ee55b421834&share_channel=wechat
saved: 2026-07-05 02:31:16
tags:
  - 笔记同步助手
id: 70cf4841-6b1d-460a-8837-fd1cbe9d7c2e
---

# 等等党狂喜!GPTcodex额度用ClaudeScience

## 等等党狂喜！GPT Codex 额度驱动 Claude Science

### 事情起因

**导师**：你 Claude Science 用上了吗？我看要付钱，你研究下。

**我**：我本来就续着 GPT Plus，刚发现一个开源工具，Codex 额度直接用 Claude Science，一分钟就跑通了！

**导师**：不用再花钱？

**我**：真的！GitHub 刚出的，安全又稳，一天省下一杯奶茶钱。

---

### 项目介绍：claude-science-codex-connector

用 ChatGPT Pro/Plus 订阅自带的 Codex 额度，直接驱动 Claude Science 的本地代理工具。不需要额外购买 OpenAI API key，只要有 ChatGPT Pro 或 Plus 订阅，通过 Codex device code 登录，即可把 Codex 额度桥接给 Claude Science 使用。

### 核心原理

项目跑一个本地代理，把 Claude Science 的请求转成 Codex 能懂的协议，消耗的是你的 ChatGPT 订阅额度，streaming 和工具调用都支持。

### 手把手操作

1.  克隆项目，装依赖
2.  跑 `python3 setup-codex-device.py` 登录拿 code
3.  设置环境变量 `export`
4.  跑 `./start.sh` 启动代理

全程本地运行，token 只存在你电脑上，安全放心。开源免费，MIT 协议随便用。

### 项目地址

GitHub：`haoyuan-sjtu/claude-science-codex-connector`

#claude #codex #ai

![[笔记同步助手/images/57c040527bf47043babd54dbb904a4e5_MD5.jpg|Image]]![[笔记同步助手/images/2b971e1df3c5a4162e2240a7bd2f60fe_MD5.jpg|Image]]

不用再额外买Claude会员了！开源了一个本地代理工具，只要你有ChatGPT Plus订阅，就能用自带的Codex额度直接驱动Claude Science，绕过Claude登录👏  
  
💡怎么做到的？  
项目跑一个本地代理，把Claude Science的请求转成Codex能懂的协议，消耗你的ChatGPT订阅额度，streaming和工具调用都支持。  
  
🚀手把手操作：  
1️⃣ 克隆项目，装依赖  
2️⃣ 跑 python3 setup-codex-device.py 登录拿code  
3️⃣ 设置环境变量 export  
4️⃣ 跑 ./start.sh 启动代理  
  
全程本地运行，token只存你电脑上，安全放心。开源免费，MIT协议随便用。  
  
📎Github项目：haoyuan-sjtu/claude-science-codex-connector  
  
#claude #codex #ai

---

### 评论

-   **A**: \[飞吻R\]现在就去试一试，可以要codex直接帮我装吗？
    -   **B**: 试了吗？我用wsl装的登录不上
-   **C**: 感觉老报错呢\[捂脸R\]
-   **D**: 不是还不能接gpt模型吗
-   **E**: 终于用上了\[哭惹R\]
-   **F**: 实用性拉满。一个搞定所有\[偷笑R\]![[笔记同步助手/images/95c655621cd5db0eb131a60fc0e1ee0b_MD5.jpg|Image]]

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/66ad423b-a971-45cf-bf1c-5b2dfe33348b?u=https%3A%2F%2Fwww.xiaohongshu.com%2Fdiscovery%2Fitem%2F6a471c65000000001003c812%3Fapp_platform%3Dandroid%26ignoreEngage%3Dtrue%26app_version%3D9.36.2%26share_from_user_hidden%3Dtrue%26xsec_source%3Dapp_share%26type%3Dnormal%26xsec_token%3DCB1mw4QmccBApNHZ5Ijc0ORdtOb-3z0D-Jm_zCVrjMcIc%253D%26author_share%3D1%26xhsshare%3D%26shareRedId%3DODZGREU7Nz82NzUyOTgwNjgzOTlJNjk9%26apptime%3D1783214998%26share_id%3D0b6788c741f447c2817f7ee55b421834%26share_channel%3Dwechat&s=vtoa)