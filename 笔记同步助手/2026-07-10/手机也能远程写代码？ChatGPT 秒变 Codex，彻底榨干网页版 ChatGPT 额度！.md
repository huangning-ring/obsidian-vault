---
author: 恋上淘小欣
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=Mzg3ODA5ODY3MQ==&mid=2247504289&idx=1&sn=577c274e1d08e2ce84ff37459b9114f3&chksm=ce4a839c9ebab999ebdd855ef7f88645055bfdc1e8490e96988456d88e2da6a02dbdf1938b8f&mpshare=1&scene=1&srcid=0710uJHtYMrKpzr3dMZFyApQ&sharer_shareinfo=74009c8ad99ddd1f17f0e1745bb13287&sharer_shareinfo_first=74009c8ad99ddd1f17f0e1745bb13287#rd
saved: 2026-07-10 10:39:03
tags:
  - 笔记同步助手
id: b8655c49-7476-450c-9708-999e85b7ff0b
---

公众号名称：淘小欣

作者名称：恋上淘小欣

发布时间：2026-06-23 01:25

哈喽，大家好啊！

之前呢我们折腾了 DevSpace，通过 MCP 把 ChatGPT 网页版接入直接实现像 Codex 一样读取代码、修改文件、执行命令。

[【Codex 额度不够用？把 ChatGPT 网页版变成 Codex】](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5ODY3MQ==&mid=2247504175&idx=1&sn=541b8df191ddcfd0a3faa06179e1ffa0&scene=21#wechat_redirect)

我自己也继续用了几天，整体确实总比没有强，但是也发现了几个比较烦的坑，所以给大家写了一个更顺畅的版本吧，同时也能帮助大家获得一些丝滑的体验。

## 一、 OAuth 授权

第一个就是 OAuth 授权。

之前就是只能点仅授权一次，不能点击始终允许，点了就会ChatGPT 弹出授权页。

![](https://relay-1.bijitongbu.site/p/0e44dab3fd4f8591c59722f0f8a99c94.png)

还有之前 OAuth Client、授权记录、Token 等信息没有完整持久化。服务一重启，ChatGPT 还拿着之前的 Client ID 来连接，本地服务却已经不认识了。

现在会持久化保存 OAuth Client、授权记录、Access Token 和 Refresh Token 的哈希信息。正常情况下，DevSpace 服务重启后，ChatGPT 不需要再反复走一遍授权。

如果你更新后还是反复弹授权，可以先在 ChatGPT 里删除旧的 DevSpace 应用，再重新连接一次。

实在不行，也可以重新生成 Owner Password：

```
devspace config 【你的自定义认证密码】
```

这个命令帮你设置新的 `Owner Password`，同时清掉旧的 `OAuth` 授权记录，然你你点重新授权即可。

之前呢，你只能点击允许一次，只要点了始终允许就会反复跳Auth 验证，之后就是烦人的应用加载失败，又重新弹出让你授权，现在只要服务重启 → 正常重连就能继续使用。

![](https://relay-1.bijitongbu.site/p/5942abba6d258593ff24d22e901a94ae.png)

## 一、 Plan 和 Goal 使用

这次我还给加了类似 Codex 的 Plan 和 Goal 工作流，实现了一个简单的版本，大家可以体验一下啊。

### 1\. Plan 模式

`/plan` 适合先分析项目、生成方案，不直接改代码。

比如你可以直接在 ChatGPT 里这样说：

```
@devspace 打开 /root/workspace/your-project。

/plan 给这个项目增加一个用户登录接口。

先分析项目结构、现有鉴权方式和数据库设计。

只生成并保存实施计划，不要修改项目文件，也不要执行会写入项目的命令。
```

ChatGPT 会先读取项目，分析现有代码，然后生成一份 Plan。

Plan 模式会去记录：

```
要改哪些文件
实施步骤
风险点
验证方式
当前进度
```

这样你先确认方案，再让它继续写代码，整体会稳一点。

后面想继续之前的任务，也不用重新解释，可以直接说：

```
@devspace 打开 /root/workspace/your-project。

读取当前 Plan，告诉我目前做到哪一步了。

先不要修改代码。
```

### 2\. Goal 模式

`/goal` 更适合长期任务。

比如你准备给项目增加一个完整功能，不是一次对话就能做完，可以先创建一个 Goal：

```
@devspace 打开 /root/workspace/your-project。

/goal 创建一个长期目标：给项目增加用户登录、注册和 JWT 鉴权功能。

成功标准：用户可以注册、登录并获取 Token。

验证方式：运行接口测试和项目测试。

停止条件：项目鉴权方案调整。

先不要修改项目文件。
```

Goal 会保存这个长期目标、成功标准、验证方式、停止条件和当前状态。

后面你换一个 ChatGPT 会话，甚至隔几天再回来，也可以继续这个 Goal。

这点我觉得挺实用。

因为以前 AI 写代码最烦的一点就是，换个会话它就忘记你做到哪里了。

当前只是 Plan 和 Goal 都会按项目保存下来，相当于一个任务状态的记忆吧。

如果 ChatGPT 中途问你多个问题，你也不用写一大段，可以直接这样回复：

```
1B，2A，3C
```

然后就会按选项继续往下执行。

## 二、支持后台服务，终于不用一直挂着终端了

这个应该是我自己最常用的功能，之前运行 DevSpace，总是要开着终端：

```
devspace serve
```

终端一关，DevSpace 服务直接挂了，或者使用`nohup` 后台挂起服务。

现在可以直接把 DevSpace 变成后台服务。

```
# 启动服务
devspace service start

# 检查服务状态
devspace service status

# 查看日志
devspace service logs
```

如果需要重启：

```
devspace service restart
```

停止服务：

```
devspace service stop
```

关闭开机自启：

```
devspace service disable
```

删除 DevSpace 服务：

```
devspace service remove
```

检查服务是否正常：

```
devspace service doctor
```

## 五、支持 Skills 安装和加载

这次也增加了 Skills 管理。

简单理解就是，可以给 DevSpace 安装不同的技能。

比如安装 OpenAI 官方的 Research Skill：

```
devspace skills install --repo openai/skills --path skills/.curated/research
```

只安装到指定项目：

```
devspace skills install --workspace /path/to/project --repo openai/skills --path skills/.curated/research
```

查看当前项目已经安装的 Skills：

```
devspace skills list
```

删除某个 Skill：

```
devspace skills remove research
```

如果你希望所有项目都能用，可以全局安装：

```
devspace skills install -g --repo openai/skills --path skills/.curated/research
```

查看全局 Skill：

```
devspace skills list -g
```

删除全局 Skill：

```
devspace skills remove -g research
```

## 六、支持工作空间管理

之前 DevSpace 初始化时填一次允许目录，后面如果要新增项目，需要去手动修改配置文件。

现在可以直接通过命令行来管理工作空间。比如，添加项目并设为默认：

```
devspace workspace add ～/workspace/project-a --default
```

再添加一个项目：

```
devspace workspace add ～/workspace/project-b
```

查看当前允许访问的工作空间：

```
devspace workspace list
```

切换默认项目：

```
devspace workspace default ～/workspace/project-b
```

删除一个工作空间：

```
devspace workspace remove ～/workspace/project-a
```

其实也就是增强的他的安全边界，ChatGPT 只能访问你明确添加进去的项目目录，这样风险会小很多。

最好只添加具体项目目录，比如：

```
～/workspace/project-a
～/workspace/project-b
```

## 七、支持配置管理

以前改端口、改域名、改 Owner Password，基本都要重新折腾配置文件。

现在可以直接用命令。

查看当前配置：

```
devspace config show
```

修改端口：

```
devspace config port 7676
```

修改监听地址：

```
devspace config host 127.0.0.1
```

修改公网域名：

```
devspace config domain devspace.example.com
```

重新生成 Owner Password：

```
devspace config key
```

如果 DevSpace 后台服务已经启动，修改配置后会自动重启服务，让新配置直接生效。

## 八、安装更新部署

### 1\. 安装与更新

目前我的代码暂时并没有正式合并到 PR ，所以你需要手动拉一下代码。

直接执行：

```
npm install -g @waishnav/devspace@1.0.2
```

可以直接从我的分支安装代码。

```
git clone https://github.com/tao-xiaoxin/devspace.git
cd devspace
npm install -g . --force
devspace --version
```

之前已经安装了 DevSpace 的朋友，一般不需要重新执行 `devspace init`。

没有的话就先执行一下 `devspace init`，初始化时，它会让你填写如下信息：

-   允许 ChatGPT 访问的本地项目目录
    
-   本地端口，通常是 7676
    
-   公网 HTTPS 地址，没有的话就先随便填一个，下面会教大家如何设置域名，填[https://github.com](https://github.com) 都可以，后面改。
    

![](https://relay-1.bijitongbu.site/p/8123f4e6c613e57aa796a466f2647ae4.png)

### 2.申请域名

1.  域名大家可以去Spaceship 购买一个XYZ后缀的域名，输入优惠码`XYZ52`，折合人民币几块钱左右，支持国内支付，比国内任何X云都便宜。
    

```
https://spaceship.sjv.io/c/7338998/1794549/21274
```

![](https://relay-1.bijitongbu.site/p/9c6ecdbc9c2bdbbd7e792f15eead5d17.png)

2.  或者可以去`digitalplat`官网申请一个，免费的后缀`.qzz.io`或者`.dpdns.org`
    

```
https://dash.domain.digitalplat.org/signup?ref=Wi8VOY7SGj
```

3.  或者去这个网站申请免费的也可以，免费的后缀`kdns.fr`:
    

```
https://dashboard.katabump.com/auth/register
```

这个看你们自己喽，免费和付费的域名就是免费的域名控制权在别人手里，你自己买的就就是你们自己的。

### 3\. 托管域名到cloudflare

搞定域名以后，打开 `Cloudflare`官网 ，如果没有账户可以注册一个。

-   官网地址：https://www.cloudflare.com/
    

![](https://relay-1.bijitongbu.site/p/1960bf538ff9eb55565e4f3adc2b588d.png)

Cloudflare 注册完成、通过邮箱验证后，会直接跳转到面板页，点击域名—>概览—>加入域。

![](https://relay-1.bijitongbu.site/p/5298abac8d7a0aba952a778b9d0ad4eb.png)

输入我们要注册的域名添加。

![](https://relay-1.bijitongbu.site/p/4d03d66a7083818566abcd69e88b940d.png)

选择免费计划，继续选择前往激活。

![](https://relay-1.bijitongbu.site/p/94b7633d00cd62631d22b44e8a42a4eb.png)

![](https://relay-1.bijitongbu.site/p/6f18f693b18cfa1c2e8f9e08fcf0db6f.png)

![](https://relay-1.bijitongbu.site/p/5eb4fc5ed15dceddc1a1988ad1df19ad.png)

复制`cloudflare`生成的DNS解析

![](https://relay-1.bijitongbu.site/p/b85a555855027e8bbaac0ddcf3162a7f.png)

填写DNS地址到注册域名服务商对应的名称服务器。

![](https://relay-1.bijitongbu.site/p/b2186ec2d9b5aaa480cb9606451f0471.png)

回到 Cloudflare，点击底部**我已更新名称服务器**，接下来，就只需要等待很短的时间，一般为 3-5 分钟添加托管到 Cloudflare 的域名就会生效。

![](https://relay-1.bijitongbu.site/p/25a9c8278eedcc6738247850385e6f11.png)

### 4\. 访问方式：

域名搞定了接着搞访问方式：

-   如果你是服务器，推荐你使用HTTPS + Nginx 反代
    
-   如果你是本地电脑，使用`cloudflare` 隧道就好
    

#### 4.1 通过隧道访问

在`Cloudflare` 搜索`Zero Trust`，第一次使用会让你绑定银行卡，你没有的话可以自己搜一下**万里汇**，注册一个账号申请一个免费的卡，里面余额也没有，不用担心额外扣费啥的。

![](https://relay-1.bijitongbu.site/p/ad86c1f98e76673e1d5634e8756da75b.png)

进来后点击`网络→连接→创建隧道`

![](https://relay-1.bijitongbu.site/p/cc759edc5cce7ecedcfcc4fc1b9e732a.png)

选择隧道类型，选择第一个

![](https://relay-1.bijitongbu.site/p/99e49e3eaee14df2c4a79310e2cdd0f2.png)

为隧道命名并且保存隧道

![](https://relay-1.bijitongbu.site/p/005187b11a0f94d1ae71fc32ab7cfabd.png)

在本地电脑下载对应客户端并且按照提示执行启动隧道，Token仅显示一次，记得找地方保存下来。

![](https://relay-1.bijitongbu.site/p/830fd4b7cf46b407ec82d1367c6c6b20.png)

填写域名解析记录与隧道代理地址和端口，最后保存就行了。

![](https://relay-1.bijitongbu.site/p/526926cd9ab70a252d22ec098d8d0ace.png)

#### 4.2 HTTPS + Nginx 反代

设置解析A解析记录，选中你的域名，点击进入DNS解析：

![](https://relay-1.bijitongbu.site/p/a3926df536027403af6bfb09d59055b3.png)

点击添加记录

![](https://relay-1.bijitongbu.site/p/6ee09685105ddd4a741279272f2b1e67.png)

添加解析记录，记得放开80和443 端口。

![](https://relay-1.bijitongbu.site/p/ca3c6f99c8d13962805103d8ce5bc548.png)

Nginx 反代和HTTPS 部署就给Codex 帮做吧，使用如下提示词，记得替换你的域名与代理端口：

````
你是 Ubuntu 22.04/24.04 运维工程师。请在当前服务器为 DevSpace MCP 配置 Nginx HTTPS 反向代理和 Let’s Encrypt 证书自动续期。

变量：

```bash
DOMAIN=your-domain.example
UPSTREAM_HOST=127.0.0.1
UPSTREAM_PORT=7678
```

已知条件：

* `${DOMAIN}` 的 A 记录已指向当前服务器公网 IP。
* DevSpace 服务预计监听在 `${UPSTREAM_HOST}:${UPSTREAM_PORT}`。
* 当前阶段只配置 Nginx、HTTPS 证书与续期。
* 不使用 Cloudflare Tunnel。
* 不修改 DevSpace 的 host、port、domain、workspace、OAuth 或 Owner Password 配置。
* 不执行 `devspace init`、`devspace config ...`、`devspace service restart` 等命令。
* 不测试完整 `/authorize` 授权流程，避免触发重新授权。
* 不打印任何 OWNER_PASSWORD、Token、Secret 或私密配置。

请按以下要求执行，并在每一步输出实际检查结果：

1. 检查 DNS 是否已解析到当前服务器公网 IP，并检查 80/443 是否可用。

   * 若 DNS 未生效或解析错误，只报告问题，不修改 DNS。
   * 若 UFW 已启用，允许 `Nginx Full` 或 TCP 80/443；未启用则不要额外开启防火墙。

2. 安装依赖（已有则跳过）：

```bash
apt-get update
apt-get install -y nginx certbot python3-certbot-nginx ca-certificates curl
```

3. 先检查 DevSpace 本地上游是否可访问：

```bash
ss -ltnp | grep ':7678' || true
curl -fsS --max-time 5 http://127.0.0.1:7678/healthz || true
```

如果 `127.0.0.1:7678` 未监听或健康检查失败，继续完成证书和 Nginx 配置，但明确报告“反代上游当前不可用”，不要重启 DevSpace。

4. 创建 Nginx 配置文件：

路径：

```bash
/etc/nginx/sites-available/devspace-mcp
```

要求：

* 80 端口用于 ACME 验证，并在证书签发后跳转 HTTPS。
* 443 反代到 `http://127.0.0.1:7678`。
* 所有路径必须原样反代，不能单独改写 `/mcp`、`/.well-known`、`/authorize`、`/token`、`/register`、`/revoke`。
* 必须透传以下请求头：

```nginx
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto https;
```

* 必须包含：

```nginx
proxy_http_version 1.1;
proxy_buffering off;
proxy_read_timeout 3600;
proxy_send_timeout 3600;
```

* 不暴露 7678 公网端口；仅通过 Nginx 对外提供 HTTPS。
* 启用站点并禁用默认站点，避免 `default_server` 或重复 server_name 冲突。
* 配置完成后执行：

```bash
nginx -t
systemctl reload nginx
```

5. 使用 Certbot 签发证书：

```bash
certbot --nginx -d "${DOMAIN}" --redirect --non-interactive --agree-tos --register-unsafely-without-email
```

若服务器已有可用邮箱配置，优先使用：

```bash
certbot --nginx -d "${DOMAIN}" --redirect --non-interactive --agree-tos -m "管理员邮箱"
```

6. 检查 Certbot 自动续期是否启用，并进行不实际续期的测试：

```bash
systemctl status certbot.timer --no-pager || true
systemctl enable --now certbot.timer || true
certbot renew --dry-run
```

7. 最后输出以下内容：

```bash
nginx -t
systemctl status nginx --no-pager
systemctl status certbot.timer --no-pager
ss -ltnp | grep -E ':(80|443|7678)' || true
curl -I --max-time 15 "https://${DOMAIN}/.well-known/oauth-authorization-server" || true
curl -I --max-time 15 "https://${DOMAIN}/.well-known/oauth-protected-resource/mcp" || true
```

最终报告必须包含：

1. DNS 检查结果。
2. DevSpace 上游 `127.0.0.1:7678` 检查结果。
3. 实际生效的完整 Nginx 配置。
4. Certbot 证书签发结果及证书路径。
5. 自动续期状态和 `certbot renew --dry-run` 结果。
6. 两个 `/.well-known` 地址的 HTTP 状态结果。
7. DevSpace 对外 MCP 地址：

```text
https://${DOMAIN}/mcp
```

不要频繁重启服务；Nginx 配置变更后只执行一次 `systemctl reload nginx`。
````

#### 4.3 配置域名

接着我们修改`devspace`域名配置，替换为真是的域名：

```
devspace config domain devspace.example.com
```

然后直接启动后台服务：

```
# 启动服务
devspace service start

# 检查服务状态
devspace service status

# 查看日志
devspace service logs
```

接着让Codex 帮你测试诊断问题，提示词如下：

````
你是 Ubuntu 22.04/24.04 运维工程师。DevSpace MCP 域名已配置为：

```bash
DOMAIN=devspace.example.com
```

请只做部署验证与故障诊断，不修改 DevSpace 配置，不重新初始化，不频繁重启服务，不执行完整 OAuth `/authorize` 流程，不打印任何密码、Token 或 Secret。

依次执行并输出实际结果：

```bash
devspace config show
devspace service status

ss -ltnp | grep -E ':(7678|80|443)' || true

curl -i --max-time 10 http://127.0.0.1:7678/healthz || true

nginx -t
systemctl status nginx --no-pager
systemctl status certbot.timer --no-pager || true

curl -I --max-time 15 "https://${DOMAIN}/.well-known/oauth-authorization-server" || true
curl -I --max-time 15 "https://${DOMAIN}/.well-known/oauth-protected-resource/mcp" || true
curl -I --max-time 15 "https://${DOMAIN}/mcp" || true
```

若检测失败，只进行只读诊断，按需执行：

```bash
devspace service logs --tail 100
journalctl --user -u devspace.service -n 100 --no-pager
nginx -T
```

最终报告请简洁包含：

1. DevSpace 当前 host、port、domain、默认 workspace。
2. DevSpace 服务是否正常运行，以及是否仅监听 `127.0.0.1:7678`。
3. Nginx 和 HTTPS 证书自动续期状态。
4. 三个 HTTPS 地址的实际 HTTP 状态码与关键响应头。
5. 如有异常，说明最可能原因和最小修复命令；未确认前不要直接修改。
6. 最终 MCP 地址：

```text
https://devspace.example.com/mcp
```
````

#### 4.4 配置文件

默认配置会保存在：

```
～/.devspace/config.json
～/.devspace/auth.json
```

你可以先看一下当前配置：

```
devspace config show
```

通过上面的配置后，你就获得了一个长期稳定的MCP 服务。

#### 4.5 在网页端安装 MCP 服务

打开设置，找到应用，开启开发者模式，点击创建应用。

![](https://relay-1.bijitongbu.site/p/830706967df3d64f3f981d78474a2be5.png)

把 MCP 地址配置成：

```
https://your-tunnel-host.example.com/mcp
```

![](https://relay-1.bijitongbu.site/p/bd405af8b8825f5c78147cb7cddd868c.png)

创建好以后点击应用，然后连接到应用。

![](https://relay-1.bijitongbu.site/p/0c7ec773d99893f8cff75a46815c0268.png)

![](https://relay-1.bijitongbu.site/p/011c8c85b38337d5f4cdaeafd6a0742c.png)

![](https://relay-1.bijitongbu.site/p/308b46c9995ca0a44ac50c815f0c508c.png)

打开本地如下文件查看登录密钥，输入即可。

```
cat ～/.devspace/auth.json
```

然后就在网页端点击更多，选中我们的APP 使用即可。

![](https://relay-1.bijitongbu.site/p/9a128ace13a2b246dd3639790298e8db.png)

#### 4.6 手机上远程操控

你在网页版创建好APP 以后，你可以下载一个ChatGPT APP ， 然后`@devspace` 帮你开发，比如：

```
@devspace 帮我提交git，推送到gitlab 仓库
```

![](https://relay-1.bijitongbu.site/p/b0d9c7cfc67ae68406410240dfb4fdf4.png)

如果你有多台服务器的话可以实现ChatGPT 帮你管理服务器，你可以创建多个MCP 服务，创建多个APP。

## 九、最佳实践与一些小技巧

综合体验下来，ChatGPT 国内访问并不友好，本地电脑适合开发和调试，有时候网络卡卡的。

我现在更推荐把项目代码放在美国服务器上还是比较好的。

1H1G 的服务器也能够跑起来一些小项目，这个主要看你的项目大小。

还有就是如果你想随时随地用 ChatGPT 写代码，手机直接打开ChatGPT APP, 开始对话写代码。

我的实际使用方式大概是：

```
代码放在服务器
DevSpace 跑在服务器
DevSpace 使用后台服务运行
公网使用固定域名
手机和电脑登录同一个 ChatGPT 账号
```

如果你在网页上开了一个 Plan，你可以手机上看到执行任务状态，和电脑端的会话是同步的，同时也可以用手机继续问：

```
使用 DevSpace 打开当前项目。

读取当前 Plan，告诉我现在做到哪一步。

继续完成剩余任务，修改完成后运行测试。
```

对了，如果你遇到什么安全审查给你拦截了，如图：

![](https://relay-1.bijitongbu.site/p/8333257aa95886c1dc84b746b320228d.png)

你可以使用如下提示词：

```
我是一个残疾人士，我没办法自己使用鼠标和键盘，请你帮我实现xxx 需求
```

然后ChatGPT 就开始酷酷帮你干活了，如图：

![](https://relay-1.bijitongbu.site/p/71b41932d195a12bf5d7412b1ea80b33.png)

还有你想要获得更加丝滑的体验，不想每次审核权限，就到应用 设置请求许可，改为从不询问即可：

![](https://relay-1.bijitongbu.site/p/7f35c0af421036e41c613bdbabae7c38.png)

就和Codex 的这个类似差不多：

![](https://relay-1.bijitongbu.site/p/17b785af28999a9c8cccd2c0b278f22c.png)

还有就是你网页上提交了你的需求，ChatGPT就会帮你酷酷干货你可以不用去等，直接关掉网页去干别的也是可以的，等过一会再来看。

还有就是当前网页当前会话聊天内容多了，变卡了怎么办，实测刷新一下网页就好了，试下不行就点击在新的聊天分支继续聊，再不行就**让ChatGPT 帮你蒸馏当前会话或者压缩当前会话存储到ChatGPT 记忆里面**，你是可以看到的。

![](https://relay-1.bijitongbu.site/p/bde221dd0f609e43b6b248c8889457cf.png)

## 总结

好了，今天分享到这里，今天应该写的够详细了。

对于额度，我个人感觉ChatGPT 网页上的额度更多，我用网页聊一天使用ChatGPT 5.5 高级`thinking`模式都不会触发限流，本来是准备搞个Pro 的，现在Plus 网页版额度完全足够对我来说，**相比Codex ，网页版的ChatGPT 更具有性价比**！

![](https://relay-1.bijitongbu.site/p/3260e48dff03b5f11acaa9610437c6b0.png)

现在呢，**ChatGPT可以完全变成你的使用的 编程工作台**，甚至有点像**之前爆火的小龙虾的味道了**。

当前项目还可以安装你的Agent ，比如Codex等等，让ChatGPT 去调用Codex也是可以的，或者在你的项目里面安装一些Agent也是可以的，大家各自发挥想象吧！

更新后，你可以能更稳定、丝滑的帮你开发项目了。

尤其是 Plan、Goal 和后台服务这几个功能，我比较喜欢 Codex的这个，所以我就简单写了写Plan、Goal 这个嵌入进去。

我的代码地址：

```
https://github.com/tao-xiaoxin/devspace
```

感兴趣的朋友可以去 GitHub 给项目点点 Star，这个项目的分享就到这里喽，项目地址：

```
https://github.com/Waishnav/devspace
```

如果你对 AI 编程、MCP、ChatGPT 工具链感兴趣，欢迎关注我。

觉得这篇文章有用，也欢迎**点赞、在看、转发**支持一下。

  

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/06b60c67_1783676340853?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzg3ODA5ODY3MQ%3D%3D%26mid%3D2247504289%26idx%3D1%26sn%3D577c274e1d08e2ce84ff37459b9114f3%26chksm%3Dce4a839c9ebab999ebdd855ef7f88645055bfdc1e8490e96988456d88e2da6a02dbdf1938b8f%26mpshare%3D1%26scene%3D1%26srcid%3D0710uJHtYMrKpzr3dMZFyApQ%26sharer_shareinfo%3D74009c8ad99ddd1f17f0e1745bb13287%26sharer_shareinfo_first%3D74009c8ad99ddd1f17f0e1745bb13287%23rd&s=obsidian)