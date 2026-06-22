---
tags: [claude-code, skills, 资源推荐]
date: 2026-06-05
source: WebSearch
---
# 官方仓库
- **[anthropics/skills](https://github.com/anthropics/skills)**（~136k stars）：Anthropic 官方 18 个技能，涵盖 docx/pdf/pptx/xlsx 文档处理、canvas-design、mcp-builder 等
- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)**（~19.5k stars）：官方插件，Discord/iMessage/Slack/Telegram/GitHub 集成

# 顶级社区市场
- **[obra/superpowers](https://github.com/obra/superpowers)**（~195k stars）：Anthropic 认可的完整开发方法论，覆盖头脑风暴→TDD→调试→代码审查→Git，综合能力最强
- **[daymade/claude-code-skills](https://github.com/daymade/claude-code-skills)**：52 个生产就绪技能，skill-creator 的增强 fork，包含安全扫描和错误防护
- **[gupsammy/Claudest](https://github.com/gupsammy/Claudest)**：8 个每日实战验证的精品插件，含 memory、research、coding、thinking、content
- **[EricGrill/agents-skills-plugins](https://github.com/EricGrill/agents-skills-plugins)**：最大精选目录，27+ 分类，每周自动从上游同步
- **[numman-ali/n-skills](https://github.com/numman-ali/n-skills)**：跨平台通用（Claude Code/Codex/Cursor/Windsurf/Cline/Copilot），基于 AGENTS.md 标准

# Awesome 合集（发现平台）
- **[subinium/awesome-claude-code](https://github.com/subinium/awesome-claude-code)**：最精简的精选列表，仅收录 1000+ 星仓库
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)**：最全面合集，涵盖 skills/hooks/slash-commands/plugins/agent orchestrators
- **[travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)**：手动精选，更新频繁
- **[FridrichMethod/awesome-skills](https://github.com/FridrichMethod/awesome-skills)**：1800+ Skills 自动同步合集，一条 curl 命令安装全部
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)**：Composio 团队维护 + 500+ 外部应用连接
- **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)**：200+ Agent Skills，兼容 10+ 编程代理

# Web 发现平台
- **[skills.sh](https://skills.sh/)**（91,000+ skills）：最佳安装体验，Vercel 支持的开源注册中心，兼容 15+ AI 代理，`npx skills add` 一键安装
- **[skillsmp.com](https://skillsmp.com/)**（800,000+ 自动索引）：最大发现平台，但需注意质量筛选
- **[skillstore.io](https://skillstore.io/)**：精致 UI，分类过滤
- **[claudeskills.info](https://claudeskills.info/)**（140-658 精选）：适合新手，人工筛选低噪音
- **[smithery.ai/skills](https://smithery.ai/skills)**：质量优先，每个 skill 均经审核
- **[claudeskillsmarket.com](https://www.claudeskillsmarket.com/)**：暗色主题科技风 UI
- **[skillsdirectory.org](https://www.skillsdirectory.org/)**（50,000+）：强搜索功能
- **[claude-plugins.dev/skills](https://claude-plugins.dev/skills)**：精选发现，一键安装
- **[claudemarketplaces.com](https://claudemarketplaces.com/)**：市场汇总目录，列出所有已知 Claude Code 插件市场
- **[aitmpl.com](https://aitmpl.com/)**（1000+，覆盖 7 种类型）：唯一同时涵盖 skills/agents/hooks/MCPs/commands/plugins 的全栈构建平台

# 垂直领域
- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)**：科研、科学计算、金融、写作
- **[trailofbits/skills](https://github.com/trailofbits/skills)**：安全研究
- **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)**：营销（CRO/文案/SEO/数据分析）
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)**：UI/UX 设计，100 条规则 + 67 种风格预设
- **[supabase/agent-skills](https://github.com/supabase/agent-skills)**：Postgres/Supabase 最佳实践
- **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)**：React/Next.js/Web 设计规则
- **[FridrichMethod/awesome-skills](https://github.com/FridrichMethod/awesome-skills)**：生物信息学、AI 开发、学术论文写作专用

# 推荐起步组合
```bash
# 官方核心
/plugin marketplace add anthropics/skills
/plugin marketplace add anthropics/claude-plugins-official
# 最佳通用技能包
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
# 浏览发现
# 新手 → claudeskills.info  海量 → skills.sh  精选 → smithery.ai/skills
```

# 安全提醒
SKILL.md 格式本身是攻击面：恶意 skill 不需要代码漏洞，只需用精心设计的英文指令说服 AI 执行有害操作。建议只从经过审核的精选市场安装，避免从 80 万+ 自动索引来源（如 SkillsMP）盲装，安装前阅读 skill 指令内容。