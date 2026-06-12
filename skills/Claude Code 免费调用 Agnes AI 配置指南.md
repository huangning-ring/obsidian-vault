---
tags: [claude-code, agnes-ai, 配置, AI工具]
date: 2026-06-05
source: WebSearch + WebFetch
---
# 背景
Agnes AI 是新加坡 Sapiens AI 公司推出的多模态 AI 平台，2026 年 6 月起面向全球开发者**无限期免费开放**核心模型 API，涵盖文本、图像、视频三个模态。官网：https://agnes-ai.com
免费模型一览：
- **Agnes-2.0-Flash**：文本对话、编程、Agent、工具调用，Context 256K，支持 Thinking 模式
- **Agnes-1.5-Flash**：轻量文本 + 多模态（图片理解）
- **Image 2.1 / 2.0**：图像生成与编辑
- **Video V2.0**：异步视频生成
# 核心问题：格式不兼容
Claude Code 使用 **Anthropic Messages API** 格式（`/v1/messages`），Agnes AI 只提供 **OpenAI 兼容格式**（`/v1/chat/completions`）。直接设 `ANTHROPIC_BASE_URL` 指向 Agnes 会报错，需要加一层**格式翻译**。
***
# 方案一：CC-Switch（推荐 ✅）
CC-Switch 是开源桌面工具，内置本地路由映射，自动将 Anthropic 请求翻译成 OpenAI 格式发给 Agnes AI。GitHub：https://github.com/farion1231/cc-switch
## 步骤
### 1. 注册 Agnes AI 获取 API Key
访问 https://platform.agnes-ai.com/settings/apiKeys，注册账号并创建 API Key。
### 2. 安装 CC-Switch
从 https://github.com/farion1231/cc-switch/releases 下载对应系统版本，安装并启动。
### 3. 添加自定义供应商
- 顶部应用切换器选 **Claude**
- 点右上角 **+** 按钮 → 预设选 **"自定义"**
- 填写 JSON 配置：
```json
{
  "env": {
    "ANTHROPIC_API_KEY": "你的Agnes_API_Key",
    "ANTHROPIC_BASE_URL": "https://apihub.agnes-ai.com/v1"
  }
}
```
- **关键：开启「本地路由映射」开关**（将 Anthropic 格式翻译为 OpenAI 格式）
- 添加模型 `agnes-2.0-flash`
- 点击「启用」
### 4. 清除环境变量冲突
终端运行 `echo $ANTHROPIC_API_KEY`（macOS/Linux）或 `$env:ANTHROPIC_API_KEY`（PowerShell），如有全局变量先清除，否则会覆盖 CC-Switch 配置。
### 5. 验证
```bash
claude
> 你好，介绍一下自己
```
能正常回复即配置成功。CC-Switch 支持热重载，无需重启终端。
***
# 方案二：claude-code-llm-router
通过 MCP 服务器做智能路由和格式翻译，可自动将不同复杂度任务分配给不同模型。
```bash
pipx install claude-code-llm-router
llm-router install
```
安装后自动注册 MCP 服务并注入 hook。需在 `.env` 中补充 Agnes API Key。内置 20+ 提供商，Agnes 可能不在默认列表，需手动添加。
***
# 方案三：free-claude-code 代理
本地跑翻译代理，把 Anthropic 请求转成 OpenAI 格式。**不原生支持 Agnes AI**，需自行修改 `server.py` 添加 Agnes 提供商。适合有动手能力的用户。
```bash
git clone https://github.com/Alishahryar1/free-claude-code.git
cd free-claude-code
cp .env.example .env
# 编辑 server.py 添加 Agnes 提供商
uv run uvicorn server:app --host 0.0.0.0 --port 8082

# PowerShell 启动 Claude Code
$env:ANTHROPIC_AUTH_TOKEN="freecc"
$env:ANTHROPIC_BASE_URL="http://localhost:8082"
claude
```
***
# 方案四：仅安装 Skill（不替换后端）
如果只想在 Claude Code 中调用 Agnes 的图像/视频能力（文本推理仍用 Claude），安装 Skill 即可，不用替换后端，无格式兼容问题。
```bash
git clone https://github.com/jomeswang/agnes-ai-skill.git ~/.claude/skills/agnes-ai-skill
```
然后在 https://platform.agnes-ai.com/settings/apiKeys 获取 API Key。Claude Code 能通过 skill 调用 Agnes 的多模态能力，但推理本身仍是 Claude。
***
# 方案对比
- **CC-Switch**：难度最低，替换后端，GUI 一键切换，推荐首选
- **llm-router**：难度中等，替换后端，命令行用户，多模型智能路由
- **free-claude-code**：难度较高，替换后端，需自行扩展，动手能力强
- **Skill 安装**：难度最低，不替换后端，只想加多模态工具
***
# 注意事项
- Agnes AI 免费政策从 2026 年 6 月开始，长期是否持续以官网最新公告为准
- 非 Anthropic 原生模型在 Tool Calling 方面可能存在兼容性差异
- 视频/图片模型的免费状态同样以实时页面为准
- 配置前检查全局环境变量，避免冲突
验证日期：2026-06-05 | 验证方式：WebSearch + WebFetch（Agnes AI 官网、GitHub、CSDN）
