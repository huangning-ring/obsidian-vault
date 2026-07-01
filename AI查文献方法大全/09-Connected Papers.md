# Connected Papers

- **官网**：https://www.connectedpapers.com
- **定位**：基于共引分析的论文关系图谱工具

---

## 实际功能

输入一篇「种子论文」，系统通过共引分析（Co-citation）和书目耦合（Bibliographic Coupling）从 Semantic Scholar 的 2 亿+ 论文中找出高度相关论文，生成交互式网络图谱。

**图谱视觉语义**：
- 每个节点 = 一篇论文，节点越大 = 被引越多
- 节点颜色越深 = 发表时间越近
- 节点距离和连线粗细 = 概念相似度
- 力导向图（Force-Directed Graph）布局

**三个核心视图**：
1. **Graph（图谱）**：主视图，论文关系网络
2. **Prior Works（先导作品）**：所有论文共同引用的奠基性文献——「找根源」
3. **Derivative Works（衍生作品）**：引用了图谱中论文的后续研究——「看走向」

**其他功能**：
- Multi-Origin Graphs（多源图谱）：输入两篇种子论文跨领域探索
- 导出 BibTeX 到 Zotero、EndNote、Mendeley
- 图谱 URL 公开分享

---

## 定价

| 方案 | 价格 | 图谱额度 |
|------|------|---------|
| Free | $0/月 | **5 张/月** |
| Academic | $6/月（年付 $72） | 无限 |
| Business | $20/月（年付 $240） | 无限 |

> 有 scholarship 项目，经济困难研究者可申请资助。支付方式含支付宝。

---

## 适用阶段

- ✅ 文献调研初期 / 快速扫盲：一篇论文即可了解研究版图
- ✅ 寻找奠基性文献：Prior Works 功能极佳
- ✅ 追踪最新进展：Derivative Works + 节点颜色
- ✅ 跨学科探索：Multi-Origin 两篇种子论文
- ❌ 不适合系统性完整文献综述（Research Rabbit 或 Litmaps 更适合）
- ❌ 数据完全依赖 Semantic Scholar 收录范围

---

## 视频描述验证

| 视频说法 | 验证 |
|----------|------|
| 输入一篇文献生成论文关系图 | ✅ 属实 |
| 圈的大小代表引用量 | ✅ 属实 |
| 能按时间或引用排序 | ⚠️ **说法不够精准**。节点颜色深浅编码时间维度，节点大小编码引用量，但系统无可点击的「按引用量排序列表」——信息和排序是通过视觉编码而非列表实现的。 |

---

## 补充发现（视频未提及）

1. **数据源完全依赖 Semantic Scholar**，无自有数据库
2. **免费额度仅 5 张图谱/月**——认真调研一次可能就用完
3. **Prior Works 和 Derivative Works** 常被初次使用者忽略，但极其实用
4. **Multi-Origin** 支持两篇种子论文探索交叉领域
5. **非开源**，部分学术用户有批评
6. **vs ResearchRabbit**：Connected Papers 更快更直观，适合快速概览；ResearchRabbit 适合系统性综述
7. **支持 API 调用**，可集成到其他工作流

---

> 📅 验证日期：2026-06-03　|　方式：WebFetch + WebSearch
