# Consensus

- **官网**：https://consensus.app
- **定位**：GPT-5 驱动的 AI 学术证据搜索引擎

---

## 实际功能

索引超过 **2.2 亿** 篇同行评审论文（Semantic Scholar + OpenAlex + PubMed/arXiv），用 GPT-5 对检索文献进行综合，生成带 inline citation 的回答。

三大搜索深度：
- **Quick**：分析最多 10 篇，秒级返回
- **Pro**：分析最多 20 篇，约 1 分钟
- **Deep**：分析最多 50 篇，2-5 分钟，含 PRISMA 流程图、研究空白矩阵、证据表

标志性功能：
- **Consensus Meter**：对 yes/no 问题生成柱状图，显示支持/反对/混合的研究比例
- **Study Snapshot**：自动提取论文的方法论、样本量、关键发现、局限性
- **Scholar Agent**（Deep 模式）：多智能体系统（规划→检索→阅读→分析四步）
- 可筛选研究类型（RCT、荟萃分析、系统综述等）、样本量、期刊分区、被引次数

> 🔑 安全机制：AI 仅在文献检索**之后**介入，先搜后读再综合，大幅降低幻觉引用风险。

---

## 定价

| 方案 | 价格 | 核心 |
|------|------|------|
| Free | $0/月 | 10 次 Pro Analysis + 10 次 Study Snapshot；基础搜索和 Consensus Meter 不限量 |
| Premium | $8.99/月 | 无限 Pro Analysis + Study Snapshot |
| Pro | $15/月 | 含 Premium 全部 + 15 次 Deep Search + Scholar Agent + MCP 协议 |
| Teams | $9.99/座/月 | Pro 功能 + 共享团队库 |

> 多所大学（耶鲁、俄勒冈州立、SMU、香港理工大学等）有机构试用，edu 邮箱可免费获取 Pro 权限。

---

## 适用阶段

- ✅ 选题/初步探索：Consensus Meter 快速了解研究共识程度
- ✅ 文献综述初期：Pro Analysis 快速概览已有证据
- ✅ 系统综述/荟萃分析：Deep Search 生成 PRISMA 流程图
- ✅ 临床/生物医学：Medical Mode 限定在约 800 万篇临床论文中检索
- ❌ 不适合灰色文献（行业报告、专利）
- ❌ 不适合人文学科定性研究
- ❌ 不提供论文全文 PDF

---

## 视频描述验证

| 视频说法 | 验证 |
|----------|------|
| 把选题直接扔进去，快速找文献 | ✅ 属实 |
| 每月 20 个免费积分 | ⚠️ **需细化**。实际是 10 次 Pro Analysis + 10 次 Study Snapshot 的独立配额，基础搜索不限量。视频说法过于粗糙。 |

---

## 补充发现（视频未提及）

1. **GPT-5 多智能体架构**（2025 升级）：四智能体协作，Deep Search 产出 PRISMA 流程图
2. **MCP 协议接入**：Pro 以上可直接在 Claude Desktop / Claude Code 中使用
3. **不识别已撤回论文**：未集成 Retraction Watch，需自行核验
4. **Consensus Meter 使用警示**：百分比随提问措辞变化，不宜过度依赖
5. 与 Elicit 的关键差异：Consensus 更快，适合快速证据查证；Elicit 适合需要自定义提取表格的系统综述

---

> 📅 验证日期：2026-06-03　|　方式：WebFetch + WebSearch
