> [!attention] Abstract
本方案从 [[Total_Execution_Plan-manual-v2-AB]] 派生，使用 [[s41573-025-01317-y.pdf]] 作为暂定概念权威锚点。当前只为 Part 1 A/B“类器官基本概念”“类器官发展历程与目标”建立**查准版试跑检索**，并用少量气道文献测试向“气道类器官发展历程”的过渡。
本轮不检索 Part 1“现有气道类器官模型的评估”，不进入 Part 2，不建立全量矩阵，不冻结 YAML 字段，也不在检索方案确认前下载全文。
最终要回答四个问题：类器官是什么；它与细胞球、ALI 培养、器官芯片和体内器官有什么边界；类器官技术解决了哪些旧瓶颈并形成了哪两条主要来源路线；这些一般技术目标如何转译为后续气道模型的候选评估维度。
# 已知锚点的使用方式
[[s41573-025-01317-y.pdf]] 不再作为待发现文献，而是作为检索起点。先从其引言、图 1、Box 1、挑战与结论部分提取概念框架，再采集其参考文献 1–25 中被用于支撑 3D 上皮培养、PSC 自组织、iPSC 建立、TSC 来源类器官和疾病建模转折的原始研究。
该综述可直接支撑类器官的概念性框架、PSC/TSC 两条来源路线及一般技术目标；其中“首次”“首个”“突破”以及具体模型性能只作为引文链线索，必须回溯原始论文。该综述不是气道类器官发展史专论，不能替代后续气道专门综述。
# 检索问题分解
检索线 A1：寻找 1 篇独立于 Wang 等综述的高水平一般类器官综述，用于交叉核对定义、自组织、结构与功能重建的边界。
检索线 A2：围绕 3D 培养、PSC 自组织、TSC 长期扩增和个体化疾病建模，寻找**一般类器官技术历程**的综述及关键原始研究。
检索线 B1：寻找 2 篇**气道类器官**权威综述，从其正文中提取气道技术**演变**的自然语言描述和所引原始论文。
检索线 B2：把 B1 提取的转折点转化为候选技术标签，**逐标签定向检索原始研究**；只有与综述锚定节点直接对应的论文才优先进入候选池。
**执行 Q-A1 后，若检索结果中未包含以下 2 篇公认经典综述，必须将它们作为种子文献强制手工补入候选池（仅用于概念交叉核对，不改变已有检索结果）：**
- **Lancaster MA, Knoblich JA. _Organogenesis in a dish: modeling development and disease using organoid technologies_. Science. 2014;345(6194):1247125.**
- **Simian M, Bissell MJ. _Organoids: A historical perspective of thinking in three dimensions_. J Cell Biol. 2017;216(1):31-40.** （这篇尤其擅长定义“不是类器官”的边界）
**补入理由**：前者确立了 PSC 自组织的核心范式，后者厘清了 3D 结构与真正的“自组织”之间的本质区别，二者均不依赖标题中显性出现“definition”，但对 Part 1 第一段“是什么、不是什么”的撰写不可或缺。
# 数据库与分工
PubMed 是主检索库，用于可复现的 MeSH 与题名/摘要检索，并承担气道原始研究的定向筛选。
Europe PMC/PMC 用于补充 PubMed 未充分覆盖的记录、开放全文、预印本与参考文献线索；开放获取状态只影响全文获取路径，不作为纳入标准。
OpenAlex 或 Semantic Scholar 用于前向被引、后向参考文献和作者团队追踪，不以其相关度排序直接裁定权威性或里程碑地位。
如果正式查全阶段可访问 Web of Science 或 Embase，再用于被引网络和同义词补漏；本次查准试跑不以其为启动条件。
# 检索式设计
## 关键词模块
概念对象词：`organoid*`、`human organoid*`、`3D organoid*`、`stem cell-derived organoid*`。
概念属性词：`self-organization`、`self-organisation`、`tissue architecture`、`spatial organization`、`cellular heterogeneity`、`physiological function`、`tissue-specific function`。
一般历程词：`three-dimensional culture`、`3D culture`、`Matrigel`、`extracellular matrix`、`pluripotent stem cell`、`induced pluripotent stem cell`、`tissue stem cell`、`adult stem cell`、`long-term expansion`、`disease modeling`、`personalized medicine`。
气道部位词：`airway`、`airway epithelium`、`bronchial`、`bronchiole`、`tracheal`、`nasal`、`respiratory epithelium`。
气道模型词：`airway organoid*`、`bronchial organoid*`、`nasal organoid*`、`tracheosphere*`、`bronchosphere*`。
候选技术标签初始词：`basal cell expansion`、`ROCK inhibition`、`Y-27632`、`Matrigel embedding`、`basement membrane extract`、`long-term expansion`、`air-liquid interface`、`ALI polarization`、`apical-basal polarity`、`pluripotent stem cell-derived airway`、`iPSC-derived airway`、`NKX2-1 progenitor`。
候选技术标签只是待综述验证的起始词表。若 2 篇气道专门综述未把某标签描述为技术转折或关键能力，该标签不得仅凭模型判断进入里程碑时间线。
## PubMed 完整检索式
Q-A1：独立概念综述。
```text
("Organoids"[Mesh] OR organoid*[Title/Abstract])
AND
(definition[Title/Abstract] OR self-organiz*[Title/Abstract]
OR self-organis*[Title/Abstract] OR architectur*[Title/Abstract]
OR "spatial organization"[Title/Abstract]
OR "physiological function"[Title/Abstract])
AND
(Review[Publication Type] OR review[Title])
```
Q-A2：一般技术历程综述。
```text
("Organoids"[Mesh] OR organoid*[Title/Abstract])
AND
("three-dimensional culture"[Title/Abstract] OR "3D culture"[Title/Abstract]
OR Matrigel[Title/Abstract] OR "extracellular matrix"[Title/Abstract]
OR "pluripotent stem cell"[Title/Abstract]
OR "induced pluripotent stem cell"[Title/Abstract]
OR "tissue stem cell"[Title/Abstract] OR "adult stem cell"[Title/Abstract])
AND
(history[Title/Abstract] OR evolution[Title/Abstract]
OR development[Title/Abstract] OR Review[Publication Type])
```
Q-B1：气道类器官专门综述。
```text
("Organoids"[Mesh] OR organoid*[Title/Abstract]
OR bronchosphere*[Title/Abstract] OR tracheosphere*[Title/Abstract])
AND
("Respiratory Mucosa"[Mesh] OR airway[Title/Abstract]
OR "airway epithelium"[Title/Abstract] OR bronchial[Title/Abstract]
OR tracheal[Title/Abstract] OR nasal[Title/Abstract])
AND
(Review[Publication Type] OR review[Title])
```
Q-B2：气道原始研究模板。`<技术标签>` 必须分别替换后逐条运行，不能把所有标签一次性 OR 在一起，否则会丢失“节点—命中文献”的对应关系。
```text
(organoid*[Title/Abstract] OR bronchosphere*[Title/Abstract]
OR tracheosphere*[Title/Abstract])
AND
(airway[Title/Abstract] OR "airway epithelium"[Title/Abstract]
OR bronchial[Title/Abstract] OR tracheal[Title/Abstract]
OR nasal[Title/Abstract])
AND
(<技术标签>[Title/Abstract] OR <标签同义词>[Title/Abstract])
NOT
(Review[Publication Type] OR Editorial[Publication Type]
OR Comment[Publication Type])
```
Q-B2 不预设人源限制。早期小鼠或其他物种研究若被权威综述明确视为气道类器官关键技术前驱，可以进入时间线；但必须标明物种，不能与人气道类器官结果混写。
## Europe PMC 与引文网络检索式
Europe PMC 的气道综述代表式：
```text
(TITLE_ABS:organoid* OR TITLE_ABS:bronchosphere*
OR TITLE_ABS:tracheosphere*)
AND
(TITLE_ABS:airway OR TITLE_ABS:bronchial
OR TITLE_ABS:tracheal OR TITLE_ABS:nasal)
AND
(PUB_TYPE:"review" OR TITLE:review)
```
Europe PMC 的原始研究仍按 Q-B2 的每个技术标签分别翻译执行。检索阶段不添加 `OPEN_ACCESS:y`，以免把全文可得性误当作学术纳入条件；候选确定后再单独检查 PMC、Europe PMC 或出版社开放全文。
OpenAlex/Semantic Scholar 使用 `airway organoid`、`bronchial organoid`、`nasal organoid` 与已确认技术标签组合检索，并对最终候选执行 cited-by、references 和 related works 追踪。此处只用于补漏和引文链，不单独决定里程碑。
## 时间、语言与文献类型
时间范围为数据库建库至 2026-07-22，不设置起始年份，以免漏掉 3D 上皮培养、干细胞建立和早期气道球体模型等前驱研究。
检索阶段不设语言过滤。全文精读优先纳入可获得英文或中文全文的文献；其他语言文献若被权威综述用于关键优先权主张，则保留元数据并标记需要翻译或人工核验。
检索线 A1、A2、B1 以综述为主；检索线 B2 只纳入原始研究。会议摘要、社论、评论、没有可核验方法与结果的观点文章不进入里程碑证据集。
# 文献库准入
## 纳入标准
一般综述必须明确讨论类器官的定义、来源路线、发展逻辑或技术目标，并能追踪到原始文献。期刊声誉和作者背景是质量信号，但不能替代内容相关性和证据透明度。
气道专门综述必须以气道、支气管、气管或鼻上皮类器官为主要对象，明确讨论模型建立、技术演变或来源路线，而不是只罗列疾病应用。
里程碑原始研究必须满足至少一项：被权威综述明确用于支撑关键转折；首次建立一种此前缺失的可持续模型能力；解决了旧方法无法解决的明确瓶颈；建立了后来被广泛沿用的来源、扩增、分化或结构路线。
全文可得性不决定学术纳入。拿不到全文的强候选保留在候选池，记录摘要证据、获取尝试和待补动作，不用摘要支持正文中的强事实结论。
## 排除标准
排除只把类器官作为常规实验材料、但没有贡献定义、技术路线或模型能力变化的论文。
排除仅报告培养基因子微调、剂量优化或局部效率提升，且权威综述未将其视为关键转折的研究；此类文献标记为“渐进性改进”，不进入试跑里程碑集。
排除将普通细胞球、肿瘤球、组织外植体、纯 ALI 单层或不含类器官来源细胞的器官芯片直接称作类器官的记录。
纯肺泡、肺芽、肿瘤类器官或非气道器官研究不进入气道时间线；但用于说明一般类器官概念、PSC/TSC 路线或共同前置技术时，可以保留在 Part 1 A/B 的一般证据集中，并明确其用途边界。
## 综述锚定与技术标签生成规则
在形成 20 篇候选池之前，**先完成指定综述和 2 篇气道权威综述的锚定阅读**。每个候选节点必须记录：综述中的自然语言描述；该节点解决的旧瓶颈；引入的新能力；候选技术标签及同义词；综述引用的原始论文；综述页码或段落位置。
技术标签不得直接来自模型常识。标签必须能追溯到至少一篇气道权威综述的明确表述；若两篇综述对节点定位不一致，保留分歧并交给用户确认，不私自合并。
“首次”“首个”“奠基”“突破”只在原始论文和至少一篇权威综述均支持时使用。只体现连续改良的研究统一标为“渐进性改进”，不强行制造里程碑。
# 候选池与试跑样本
第一轮目标候选池约 20 篇，不把数量当作硬性配额。建议结构为：一般类器官综述 3–4 篇；一般里程碑原始研究 4–5 篇；气道类器官综述 4–5 篇；气道原始研究 6–8 篇。
去重、标题摘要筛选和用途评估后，试跑全文集约 10 篇：指定概念综述 1 篇；独立概念综述 1 篇；一般类器官里程碑原始研究 2 篇；气道专门综述 2 篇；气道里程碑原始研究 3 篇；方法学、成熟度或标准化综述 1 篇。
若一篇文献同时承担多个用途，可以减少总篇数，但证据表必须分别记录其在“概念、历程、气道节点、候选维度”中的角色，不能因凑足 10 篇而纳入低相关文献。
# 去重与筛选顺序
按 DOI、PMID/PMCID、标准化题名加年份依次去重。预印本与正式发表版本合并，优先保留正式版本，同时记录版本关系。
第一层筛选检查题名摘要是否真正涉及概念、技术路线或气道模型建立；第二层筛选检查综述中的用途和引用位置；第三层全文筛选验证关键措辞、方法与原始证据。
每篇候选记录保留或排除理由。不得仅按被引次数、期刊影响力、作者名气或检索排序决定纳入。
# 有限引文链回溯
只有当综述引用被用于支撑“首次提出”“首个建立”“区别于既往技术”或明确关键转折时，才必须回溯并提取原始论文的摘要或全文核心句。
支撑培养条件优化、细胞因子添加、浓度调整或效率提高等渐进性细节的引用，只记录“渐进性改进，暂不计入里程碑回溯”，不继续展开其全部参考文献。
对正式里程碑最多回溯两层：权威综述指向的原始论文为第一层；若该原始论文将优先权归于更早研究，再追踪一层。第二层仍不能确认时标记“优先权待核验”，不继续无限扩展。
# 工具路由与失败处理
主题检索优先使用 `paper-search-mcp`；若当前会话未暴露或运行失败，使用已经验证可返回 PubMed、Europe PMC 和 OpenAlex 结果的 `paper-search` CLI。OpenAlex 补充检索可使用 `scansci-pdf search`。
候选 DOI、题名和落地页确定后，全文读取采用 `paper-fetch MCP→paper-fetch CLI→读取用户提供的本地 PDF`。单次 `Transport closed` 视为通道故障，不视为无全文或空结果。
全文获取遵循开放获取、PMC/Europe PMC、出版社公开全文、机构授权、用户手动获取的顺序。未经用户明确要求，不自动使用 Sci-Hub 或其他灰色来源。
任何来源失败都记录数据库、检索式、时间、错误和替代入口。无法取得全文时保留完整元数据、摘要、DOI、URL、获取尝试、失败原因和下一步，不丢弃候选。
# 检索后报告与下载闸门
查准版完成后先报告各来源原始命中数、去重后数量、标题摘要筛选数、强候选数、候选用途分布、综述质量信号、候选技术节点及推荐的约 10 篇试跑全文清单。
此时暂停，等待用户确认候选与下载范围。未获确认前不批量下载，不写正文，不把候选技术标签升级为正式里程碑。
候选获批后再获取全文，生成“综述措辞—技术标签—原始论文—核心证据—验证状态—拟用段落”的证据表，并撰写“概念→一般历程与目标→气道小型时间线→候选维度”的试跑文本。
# 本轮验收标准
类器官定义由指定综述与至少 1 篇独立高水平综述交叉支持；两者不一致之处必须显式记录。
每个正式里程碑同时具有综述锚定、原始论文和可定位的核心证据；优先权未核实不得使用“首次”“首个”。
每个气道技术标签保留来源综述和对应原始研究，不能出现模型自行补出的孤立标签。
概念内容、一般技术目标、气道特异性节点和候选评估维度四层不得混写；候选维度只能标记“已支持、待验证或不成立”，本轮不冻结矩阵。
检索过程完整保留数据库、检索日期、检索式版本、原始命中数、去重与筛选记录；所有数字必须来自真实执行，不填写模拟命中数。
# 待用户确认后执行
默认执行口径为：数据库建库至 2026-07-22；检索阶段不限语言；一般类器官研究用于概念与共同技术史，气道时间线不限物种但必须标注物种；最终试跑全文约 10 篇；Web of Science 与 Embase 暂不作为启动条件。
仅在用户确认本节默认口径及上述检索式后，才开始查准版真实检索。
