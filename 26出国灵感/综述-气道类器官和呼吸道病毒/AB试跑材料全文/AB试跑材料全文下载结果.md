---
title: AB试跑材料全文下载结果
date: 2026-07-23
tags:
  - 文献检索
  - 类器官
  - Part1-AB
status: completed
---
> [!success] 执行结论
> 已将 [[Part1-AB-试跑检索报告-查准版]] 批准的 12 篇（10＋2）文献全部归档为可解析 PDF。全文成功 12 篇，全文 Markdown 降级 0 篇，非全文元数据 Markdown 0 篇，最终失败 0 篇。
# 数量与来源

| 项目              |  结果 |
| --------------- | --: |
| 批准文献            |  12 |
| 本轮开始时已有有效 PDF   |   8 |
| 本轮新增 PDF        |   4 |
| 最终有效 PDF        |  12 |
| 使用 Sci-Hub 的文献  |   2 |
| 全文 Markdown 降级  |   0 |
| 非全文元数据 Markdown |   0 |
| 未完成             |   0 |
# 获取与降级记录
- Wang：项目根目录已有 PDF，本轮复制到材料目录；根目录原文件保留，未重复下载。
- Kim：`scansci-pdf` 合法通道两次等待 300 秒未落盘；Nature 官方 PDF 链接实际返回 3038 字节 HTML 访问页；改由 Europe PMC 的 `PMC7339799` 官方 PDF 入口成功获取。
- Sato：合法全文探针提示可能存在全文，但 Nature 官方 PDF 链接实际返回 3038 字节 HTML 访问页；随后 `scansci-pdf` 的 `scihub_only` 调用在客户端等待 300 秒后超时，但后台继续完成下载，缓存明确记录来源为 `Sci-Hub(https://sci-hub.ee)`。后续 paper-fetch 尝试同样超时且未生成 Markdown，因此保留已验证 PDF。
- Mou：三篇合法批次调用在客户端等待 300 秒后超时，但后台成功落盘。调用时请求 `scihub_enabled=false`，实际缓存却记录来源为 `Sci-Hub(https://sci-hub.ee)`；本报告以落盘缓存的实际来源为准，并将这一参数—来源不一致标记为工具行为异常。
- Stroulios：与 Mou 同一超时批次后台成功落盘，缓存记录来源为 Semantic Scholar。
- Lancaster、Barkauskas、Vazquez-Armendariz、Rock、McCauley、Sachs、Hughes：本轮开始前已存在于目标目录，结构和首页内容均通过复核；原始下载来源没有可靠的本地追溯记录，因此不补造来源。
# 最终文件清单

|  序号 | 文献与 DOI                                                                             | 结果类型      | 实际来源                    |  页数 | 大小（MiB） | SHA-256                                                            |
| --: | ----------------------------------------------------------------------------------- | --------- | ----------------------- | --: | ------: | ------------------------------------------------------------------ |
|   1 | [[01-Wang-2026-Human-organoids-3D-drug-discovery.pdf]]；`10.1038/s41573-025-01317-y` | 现有 PDF 复制 | 项目根目录现有全文               |  23 |    4.42 | `8A3B9E72ED84C0BD45B798FA6323A92D0B7D2EF876D7EC9F7D294373A977B24F` |
|   2 | [[02-Kim-2020-Human-organoids-model-systems.pdf]]；`10.1038/s41580-020-0259-3`       | 新下载 PDF   | Europe PMC，`PMC7339799` |  14 |    2.68 | `5E284D789FD79CA6700D4E17BA8ACA06E2051C9137987E099365C1D87E4FDBA8` |
|   3 | [[03-Sato-2009-Single-Lgr5-stem-cell-organoids.pdf]]；`10.1038/nature07935`          | 新下载 PDF   | Sci-Hub，`sci-hub.ee`    |   5 |    1.38 | `B4A28B24606A6078BC93C5C744BE512E73C1B728A015B2F411B0C7DDC1F5220C` |
|   4 | [[04-Lancaster-2013-Cerebral-organoids.pdf]]；`10.1038/nature12517`                  | 现有 PDF    | 本轮前已有，来源未追溯             |  18 |    5.84 | `D19C1650F155BEB6C4D304456CD8922FBEA68415977F73A1C14B1A51D50FDD43` |
|   5 | [[05-Barkauskas-2017-Lung-organoids-review.pdf]]；`10.1242/dev.140103`               | 现有 PDF    | 本轮前已有，来源未追溯             |  12 |    3.39 | `ECAB9BA9E870F109368FD69B889844AF0D3ABDE5AED56EB3DB0045D2D195DD13` |
|   6 | [[06-Vazquez-Armendariz-2023-Lung-organoid-advances.pdf]]；`10.1172/JCI170500`       | 现有 PDF    | 本轮前已有，来源未追溯             |  14 |    3.02 | `1C9EFDBF0CD034DF2A0218F312C2E7241E8422DFD099E666EE9AEDCBDBD7A63A` |
|   7 | [[07-Rock-2009-Airway-basal-stem-cells.pdf]]；`10.1073/pnas.0906850106`              | 现有 PDF    | 本轮前已有，来源未追溯             |   5 |    1.18 | `1FD8C22725408AF4D04C65E74F4CC609AF21D1CF239DE64871D3F22E8B1A9B79` |
|   8 | [[08-McCauley-2017-PSC-airway-epithelium-Wnt.pdf]]；`10.1016/j.stem.2017.03.001`     | 现有 PDF    | 本轮前已有，来源未追溯             |  21 |    4.85 | `777964DF5E17E9874B0F142CE76C9FE0C644A4A29244BD3A38F55442EC0B1631` |
|   9 | [[09-Sachs-2019-Long-term-airway-organoids.pdf]]；`10.15252/embj.2018100300`         | 现有 PDF    | 本轮前已有，来源未追溯             |  20 |    9.16 | `DFCBAC83962F47A4EBD367ACD0C3D1D4529E684E66E2BACF073F56F099408324` |
|  10 | [[10-Hughes-2022-Open-questions-lung-organoids.pdf]]；`10.3389/fphar.2022.1083017`   | 现有 PDF    | 本轮前已有，来源未追溯             |   7 |    0.64 | `DF41619F8C79547BAE9B11D2EC142F20CE9F16CD0496F11CE755BC0EB383814D` |
|  11 | [[11-Mou-2016-Dual-SMAD-basal-cell-expansion.pdf]]；`10.1016/j.stem.2016.05.012`     | 新下载 PDF   | Sci-Hub，`sci-hub.ee`    |  16 |    9.55 | `0D5A558C09F6F6BA616BE0EB6CA3469DECC4E59B55487520E31D584B8FB649CD` |
|  12 | [[12-Stroulios-2022-Apical-out-airway-organoids.pdf]]；`10.1038/s41598-022-11700-z`  | 新下载 PDF   | Semantic Scholar        |  14 |    1.91 | `93FC0F9CC2ED940C461361FCA0D92B261218CA4D5A9A08B87A017E1CAF091DE4` |
# 重命名映射

|旧文件名或来源|最终文件名|
|---|---|
|项目根目录 `s41573-025-01317-y.pdf`|`01-Wang-2026-Human-organoids-3D-drug-discovery.pdf`|
|Europe PMC 临时下载|`02-Kim-2020-Human-organoids-model-systems.pdf`|
|`Sato2009_Single.pdf`|`03-Sato-2009-Single-Lgr5-stem-cell-organoids.pdf`|
|`nature12517.pdf`|`04-Lancaster-2013-Cerebral-organoids.pdf`|
|`dev140103.pdf`|`05-Barkauskas-2017-Lung-organoids-review.pdf`|
|`170500.1-20231109235407-covered-4fa089109ce452e764bbb8648b44a723.pdf`|`06-Vazquez-Armendariz-2023-Lung-organoid-advances.pdf`|
|`rock-et-al-2009-basal-cells-as-stem-cells-of-the-mouse-trachea-and-human-airway-epithelium.pdf`|`07-Rock-2009-Airway-basal-stem-cells.pdf`|
|`PIIS1934590917300723.pdf`|`08-McCauley-2017-PSC-airway-epithelium-Wnt.pdf`|
|`embj.2018100300.pdf`|`09-Sachs-2019-Long-term-airway-organoids.pdf`|
|`fphar-13-1083017.pdf`|`10-Hughes-2022-Open-questions-lung-organoids.pdf`|
|`Mou2016_Dual.pdf`|`11-Mou-2016-Dual-SMAD-basal-cell-expansion.pdf`|
|`Stroulios2022_Apical.pdf`|`12-Stroulios-2022-Apical-out-airway-organoids.pdf`|
# 验证结果
- 12 个文件均以 `%PDF-` 开头，均大于 10 KB，可由 pypdf 打开，未加密且页数大于零。
- 12 个首页题名与批准清单逐一匹配；未发现访问页、错文或重复哈希。
- 使用 Poppler 将 12 个首页渲染为 PNG 并检查联系图，页面均可读且无黑页、裁切或明显乱码。Poppler 对部分旧文件报告 `Symbol`、`ArialUnicode` 显示字体替代警告，但联系图未见可见缺陷。
- 根目录 `s41573-025-01317-y.pdf` 保留不动，其 SHA-256 与材料目录副本一致。
- 未生成全文 Markdown或元数据 Markdown，因为 12 篇均取得有效 PDF。
# 待注意事项
- Mou 的请求参数与后端实际来源不一致；若后续要求“仅合法来源”复跑，应避免依赖当前批次接口，并直接使用 `PMC4975684` 或其他已核验的开放入口替换该文件。
- Sci-Hub、出版社和 paper-fetch 调用均出现“客户端 300 秒超时但后台可能继续运行”的现象；后续批次必须先检查落盘和缓存记录，再决定是否重试。