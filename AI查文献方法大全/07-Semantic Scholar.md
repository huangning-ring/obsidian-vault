# Semantic Scholar

- **官网**：https://www.semanticscholar.org
- **定位**：非营利 AI 学术搜索引擎（Allen Institute for AI 运营）

---

## 实际功能

覆盖 **2.35 亿+** 篇论文的完全免费学术搜索引擎。

1. **语义搜索**：AI 语义相关性排序，而非简单关键词匹配
2. **TLDR 摘要**：AI 自动生成 2-3 句论文摘要，已覆盖约 6000 万篇
3. **引用图谱**：展示论文引用关系，支持引用影响力评分
4. **Semantic Reader**（Beta）：增强型论文阅读器
5. **论文推荐**：基于阅读内容的个性化推荐
6. **开发者 API**：免费 REST API，支持论文搜索、引用查询、作者消歧、自动补全

---

## 定价

**完全免费**。无付费方案，无功能限制。

### API 免费额度

| 层级 | 限制 |
|------|------|
| 未注册 API Key | 每 5 分钟 100 次请求 |
| 注册免费 API Key | 每秒 1 次请求 |
| 更高额度 | 联系申请（面向机构/企业合作） |

> 💡 由 Allen Institute for AI (Ai2) 非营利运营，免费策略具有长期可持续性，不同于商业公司的「先免费后收费」。

---

## 适用阶段

- ✅ **文献初筛与检索**（极佳）：覆盖面广、搜索免费无限
- ✅ **文献追踪与引用分析**（良好）
- ✅ **论文快速浏览**（良好）：TLDR 摘要判断相关性
- ❌ 不适合深度全文阅读或系统综述自动化（需配合 Elicit / Consensus / Scite）

---

## 视频描述验证

| 视频说法 | 验证 |
|----------|------|
| 数据库超 2 亿篇 | ✅ 属实，实际约 2.35 亿篇 |
| 每月 25 次免费查询 | ❌ **不符**。Web 端搜索**完全无限制**，API 按时间窗口（每 5 分钟 100 次）而非月度配额。视频可能混淆了 Elicit 的免费额度。 |
| 适合和前面工具配合使用 | ✅ 属实——典型工作流：Semantic Scholar 初筛 → Elicit/Consensus 精细筛选 → Scite 引文验证 |

---

## 补充发现（视频未提及）

1. **免费 API 是核心亮点**：文档完善的 REST API 在同类中罕见（Google Scholar 无官方 API，Scopus/WoS 需付费）
2. **作者消歧优于 Google Scholar**：为每位作者分配唯一 ID
3. **非营利背景**：Allen Institute for AI 运营，免费长期可持续
4. 官方 API 端点：`/paper/search`、`/paper/{id}/citations`、`/author/search`、`/paper/autocomplete` 等

---

> 📅 验证日期：2026-06-03　|　方式：WebFetch + WebSearch
