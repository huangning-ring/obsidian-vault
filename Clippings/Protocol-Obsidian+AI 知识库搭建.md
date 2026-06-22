---
title: "Protocol - Obsidian+AI 知识库搭建流程"
source: "Bilibili BV1bj5v6JEFA (小陈同学c_z)"
created: "2026-06-04"
verified: "2026-06-04"
verification_method: "WebFetch + WebSearch + GitHub API"
tags: ["protocol", "obsidian", "ai", "claude-code"]
---

## Protocol：从零搭建 Obsidian+AI 知识库

### 一、环境配置（00:41）

#### 1.1 安装 Claude Code
> ✅ 已验证：官方安装方式来自 [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

打开电脑终端（Windows 用户需先安装 Git），按系统类型执行：
- **Windows 推荐**：`irm https://claude.ai/install.ps1 | iex`
- **macOS/Linux**：`curl -fsSL https://claude.ai/install.sh | bash`
- **Windows (WinGet)**：`winget install Anthropic.ClaudeCode`

安装完成后，在终端输入 `claude` 即可启动。

#### 1.2 安装 CC-Switch（接入第三方模型）
> ✅ 已验证：GUI 桌面工具，源自 [github.com/Laliet/cc-switch-web](https://github.com/Laliet/cc-switch-web)（fork 自 farion1231/cc-switch），提供 Windows/macOS/Linux 安装包

CC-Switch 是一款跨平台桌面工具，让你在 Claude Code 中使用 DeepSeek 等第三方模型：
1. 前往项目 Release 页面下载对应系统的安装包（Windows 为 `.msi` 或便携版）
2. 安装完成后打开 CC-Switch
3. 点击右上角 **+ 号** → 找到 **DeepSeek** 供应商
4. 下滑粘贴你的 DeepSeek API Key
5. 模型名称处填写目标模型（如 `deepseek-chat` 或视频中使用的模型名）
6. 点击 **保存** → 点击 **测试模型** → 显示"运行正常"后点击 **启用**

#### 1.3 获取 DeepSeek API
> ⚠️ 未完全验证：视频称购买 10 元额度即可使用，具体定价以 DeepSeek 官网为准

1. 访问 DeepSeek API 官网（platform.deepseek.com）
2. 注册账号，购买 API 额度（视频推荐 10 元）
3. 创建 API Key，复制保存

完成后在终端输入 `claude`，即可使用 DeepSeek 模型驱动的 Claude Code。

---

### 二、安装 Obsidian 插件（01:53）

#### 方案 A：Terminal 插件（在 Obsidian 内嵌终端）
> ⚠️ 未独立验证：视频称该插件可在社区插件市场搜索安装

1. Obsidian → 设置 → 第三方插件 → 社区插件市场
2. 搜索 **Terminal** 并安装
3. 安装后左侧出现 **Open Terminal** 图标
4. 点击后选择 **整合式（推荐）**——在 Obsidian 内部启动终端
5. 右侧侧边栏出现终端程序，当前目录即为知识库位置
6. 输入 `claude` 即可调用 Claude Code

#### 方案 B：Claudian 插件（推荐，更美观适配）
> ✅ 已验证：GitHub 仓库 [github.com/YishenTu/claudian](https://github.com/YishenTu/claudian)，12.3k Stars，MIT 许可证，v2.0.21（2026-06），已上架第三方插件市场

**方式一：社区插件市场安装**
1. Obsidian → 设置 → 第三方插件 → 社区插件市场
2. 搜索 **Claudian** 并安装
3. 启用后左侧出现 **Open Claudian** 图标

**方式二：手动安装**（若搜索不到）
1. 打开 [github.com/YishenTu/claudian/releases](https://github.com/YishenTu/claudian/releases)
2. 下载最新 Release 中的三个文件：`main.js`、`manifest.json`、`styles.css`
3. 回到 Obsidian → 设置 → 第三方插件 → 点击 **打开插件文件夹**
4. 在 `.obsidian/plugins/` 下新建文件夹 `claudian`
5. 将三个文件移入该文件夹
6. 重启 Obsidian → 在第三方插件中启用 Claudian

**使用说明：**
- 侧边栏打开 Claudian 对话框，无需额外设置
- 自动选中当前正在查看的 Markdown 文件
- 右下角三个按钮：新建 Tab、新对话、查看历史对话
- Video 推荐使用 Claudian，比 Terminal 适配度更高

---

### 三、知识采集工作流（04:26）

#### 3.1 配置 CLAUDE.md
> ⚠️ 未独立验证具体推荐内容

Claude Code 在每个项目文件夹中会读取 `CLAUDE.md` 作为工作指导。个人简单使用只需制定：
- 仓库定位（如：这是一个 Obsidian 知识库）
- 目录结构说明
- 输出规范（格式、语言要求）
- 翻译规范（如需处理中英文内容）

不需要写得很复杂，可根据需求不断修改迭代。

#### 3.2 使用 Obsidian Web Clipper 采集网页
> ⚠️ 未独立验证：据视频称 Obsidian 官方提供了 Web Clipper 浏览器扩展，可将网页保存为 Markdown

1. 安装 Obsidian Web Clipper 浏览器扩展（Chrome/Firefox 商店）
2. 浏览网页时点击扩展图标
3. 内容自动保存为 Markdown 格式到 Obsidian 中
4. 保留章节信息、配图等主要内容

> ⚠️ 注意：该扩展不支持 B 站字幕下载，视频作者另开发了专用插件（见视频描述链接）

#### 3.3 使用 AI 整理格式
1. 在 Claudian 对话框输入指令，如："请帮我翻译并格式化这篇文档"
2. AI 自动选中当前文档
3. 按照 CLAUDE.md 中的规范完成：翻译→格式化→新文档移动到指定目录→原文档归档

---

### 四、Excalidraw 画布绘制（06:24）

#### 4.1 安装 Excalidraw 插件
> ✅ 已验证：Excalidraw 是开源白板工具 [github.com/excalidraw/excalidraw](https://github.com/excalidraw/excalidraw)，125k Stars

1. Obsidian → 设置 → 第三方插件 → 社区插件市场
2. 搜索 **Excalidraw** 并安装
3. 可在文件列表中右键新建 `.excalidraw` 白板文件
4. 支持手绘风格文字、图片插入、箭头连接等

#### 4.2 安装 excalidraw-diagram Skill
> ⚠️ 未独立验证具体 Skill 仓库地址，视频称安装方式为复制仓库地址给 Claude Code

1. 获取 Skill 仓库地址（视频中安装的 Skill 名为 `excalidraw-diagram`）
2. 在 Claudian/Terminal 中输入：`请帮我安装这个 skill` + 粘贴仓库地址
3. 安装完成后可通过 `/` 命令显式调用
4. 示例：让 AI 将某内容生成白板画布→自动生成手绘风格场景分析图
5. 生成后可直接在 Excalidraw 中编辑修改

---

### 五、视频提及的资源汇总

| 工具 | 地址 | 验证状态 |
|------|------|---------|
| Claude Code | [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | ✅ 已验证 |
| CC-Switch-web | [github.com/Laliet/cc-switch-web](https://github.com/Laliet/cc-switch-web) | ✅ 已验证 |
| Claudian 插件 | [github.com/YishenTu/claudian](https://github.com/YishenTu/claudian) | ✅ 已验证 |
| Excalidraw | [github.com/excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) | ✅ 已验证 |
| Obsidian Web Clipper | 浏览器扩展商店搜索 | ⚠️ 未独立验证 |
| Terminal 插件 | Obsidian 社区插件市场 | ⚠️ 未独立验证 |
| excalidraw-diagram Skill | 需在 CC-Switch 技能市场查找 | ⚠️ 未独立验证 |
| DeepSeek API | platform.deepseek.com | ⚠️ 未独立验证定价细节 |

---

> **验证说明**：✅ = 已通过 WebFetch/WebSearch/GitHub API 确认属实的部分；⚠️ = 无法确认或尚待考证的部分
> **验证日期**：2026-06-04 | **验证方式**：WebFetch + WebSearch + GitHub API