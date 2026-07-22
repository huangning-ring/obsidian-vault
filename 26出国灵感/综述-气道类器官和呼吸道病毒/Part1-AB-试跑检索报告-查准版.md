# 执行结论与下载闸门
状态：查准版已完成，当前停在全文下载闸门前。
执行范围严格限定为 [[Part1-AB-试跑检索方案]] 的 A1、A2、B1、B2；未进入 Part 1 模型评估矩阵，未进入 Part 2，未写正文，未冻结技术里程碑或 YAML 字段，未新下载任何全文。现有 [[s41573-025-01317-y.pdf]] 只作为用户已提供的概念锚点使用。
检索日期：2026-07-22；覆盖时段：各数据库建库至 2026-07-22；语言：不限；B2 物种：不限但逐篇标注；数据库：PubMed、Europe PMC、OpenAlex；Agent Reach/Exa 仅用于网页与全文段落补核，不计入数据库命中数。
本轮实际取回 274 条记录；按 DOI、PMID、标准化题名加年份做传递式去重后 226 条；再合并 4 组预印本—正式版后 222 条。222 条均进入题名/摘要筛选，经过综述锚定、用途评估和有限引文链核验后形成 20 篇强候选池。此处的 20 篇是候选，不是已确认下载集或正式里程碑。
***
# 可复现检索记录
检索式版本：[[Part1-AB-试跑检索方案]] 当前版本，SHA-256：`394517F52CDFD96370C3589744BA579E37C525C5960D0AFD2E9F5264E8F85AB8`。A1、A2、B1 按方案中的 PubMed 与 Europe PMC 完整式原样执行；OpenAlex 使用方案规定的主题词补漏式。每库 A1/A2/B1 最多取相关度前 20 条进入筛选；B2 每个标签每库最多取前 8 条。原始命中数来自各官方接口，不是取回上限。

|检索线|PubMed 原始/取回|Europe PMC 原始/取回|OpenAlex 原始/取回|用途|
|---|---:|---:|---:|---|
|A1 概念与边界|933 / 20|667 / 20|9,138 / 20|独立概念综述、边界与定义|
|A2 一般技术史|2,740 / 20|2,503 / 20|1,499 / 20|3D、ECM、成人干细胞与 PSC 路线|
|B1 气道/肺综述|99 / 20|30 / 20|414 / 20|选择两篇锚定综述并生成 B2 标签|
|B2-T1 基底细胞三维球体/ECM|6 / 6|0 / 0|36 / 8|tracheosphere、bronchosphere、Matrigel/BME|
|B2-T2 dual-SMAD/ROCK 扩增|2 / 2|2 / 2|107 / 8|SMAD 抑制、Y-27632、长期扩增|
|B2-T3 成人来源气道类器官长期扩增|11 / 8|9 / 8|430 / 8|成人组织、BAL、长期传代|
|B2-T4 hPSC/iPSC→NKX2-1 气道路线|6 / 6|6 / 6|104 / 8|定向分化与功能性气道上皮|
|B2-T5 ALI/极性/顶端可及性|30 / 8|41 / 8|296 / 8|ALI、apical-in、apical-out|

说明：不同数据库的索引字段与检索语义不同，尤其 OpenAlex 使用全文相关度搜索，命中数不可与 PubMed/Europe PMC 直接比较或相加；表内数字只用于记录各入口的真实执行结果。Europe PMC 的 T1 零命中不等于该节点没有文献，PubMed 与 OpenAlex 已命中 Hild、Sachs 等记录，且锚定综述明确给出该节点的原始引文。
***
# 去重、版本合并与筛选账本
去重顺序严格为 DOI→PMID/PMCID→标准化题名加年份；只有任一标识相同才合并。随后单独检查预印本与正式发表版本，共合并 4 组：Sachs 气道类器官、成人干细胞完整肺类器官、BAL 类器官标准流程、ECM-incorporated apical-out 气道类器官。正式版优先，预印本 DOI 保留为版本关系但不重复计数。

|阶段|数量|判定口径|
|---|---:|---|
|三库分层取回|274|A1/A2/B1 每库前 20；B2 每标签每库前 8 或全部不足 8 的结果|
|身份标识去重后|226|DOI、PMID/PMCID、题名加年份传递式合并|
|预印本—正式版合并后|222|正式版为主记录|
|题名/摘要筛选|222|全部唯一记录均检查主题、文献类型与用途|
|强候选|20|与概念、一般技术史或 B1 锚定节点直接对应|

主要排除规则：器官特异但不能支持一般概念史；只讨论疾病应用而未建立或改变模型；肺泡专属且不能转译到气道节点；芯片/肿瘤模型偏离本轮边界；评论、社论、会议摘要；与已入池综述高度重复且无新增用途；B2 中的综述或协议若不能证明原始技术优先权。
***
# B1 锚定综述与质量信号
两篇 B1 主锚定综述为 Barkauskas 等 2017 和 Vazquez-Armendariz、Tata 2023。前者负责早期方法谱系与成人干细胞/PSC 路线框架，后者负责 2017 年后长期扩增、培养基优化、iPSC 纯化与成熟度更新。二者均为叙述性综述而非系统综述，因此本报告只把其用于生成和定位节点，再回溯原始论文，不把综述措辞直接升级为“首次”结论。

|综述|质量信号|主要覆盖|已知限制|
|---|---|---|---|
|Barkauskas CE 等，2017，Development，[DOI](https://doi.org/10.1242/dev.140103)|肺发育/再生领域专家综述；明确比较人/鼠、成人祖细胞与 hPSC、结构和细胞组成；OpenAlex 记录 67 条参考文献|早期 basal/club/AEC2 球体、Matrigel、hPSC 肺类器官、ALI 成熟化需求|早于 Sachs 2019 与 apical-out 路线，不能单独覆盖近年节点|
|Vazquez-Armendariz AI、Tata PR，2023，JCI，[DOI](https://doi.org/10.1172/JCI170500)|开放全文；按成人、胎儿与 iPSC 来源梳理培养条件、细胞组成和限制；OpenAlex 记录 159 条参考文献|长期人气道类器官、TGF-β/FGF/WNT、NKX2-1、SMAD/ROCK、成熟度与标准化|同时覆盖肺泡与疾病应用；并非系统综述，需防止把综述选择偏好当成全领域共识|
|Wang D 等，2025 在线/2026 卷期，Nature Reviews Drug Discovery，[DOI](https://doi.org/10.1038/s41573-025-01317-y)|用户指定且已有本地全文；概念、来源路线、药物研发机会与局限覆盖完整；OpenAlex 记录 248 条参考文献|A1 概念与 A2 一般技术史|药物研发框架较强，不替代气道专门综述|
|Kim J 等，2020，Nature Reviews Molecular Cell Biology，[DOI](https://doi.org/10.1038/s41580-020-0259-3)|独立于指定综述；覆盖自组织、组织特异细胞、成人干细胞与 PSC 路线；PMC 可读|概念交叉核对与两条来源路线|同为叙述性综述，不能单独证明技术优先权|

有限引文链已执行到“综述→原始论文”一层，未超过方案规定的两层。OpenAlex 元数据确认：Wang 综述引用 Sato、Eiraku、Lancaster、Takebe、McCauley、Sachs；Barkauskas 综述引用 Rock、Dye、Hild、Mou；Vazquez-Armendariz/Tata 综述引用 Rock、Hild、Mou、McCauley、Sachs。所有 20 篇强候选均完成 references、related works 与 cited-by 元数据探测；被引次数只作检索质量信号，不作纳入标准。
***
# B1 综述锚定后生成的 B2 技术节点

|节点|综述中的自然语言描述与位置|旧瓶颈|新增能力|实际检索标签|对应原始候选|当前判断|
|---|---|---|---|---|---|---|
|N1 原代基底细胞三维球体与 ECM|Barkauskas 2017“Basal stem cells”段落比较 tracheosphere/bronchosphere；Vazquez-Armendariz 2023“Optimization of culture media components and cell composition”说明气管、支气管和鼻来源基底细胞可形成含 basal/club/ciliated/goblet 细胞的球体|二维培养难保留空间组织、克隆性与多谱系分化读出|在 Matrigel/BME 三维环境中量化自我更新和分化|airway basal cell、tracheosphere、bronchosphere、nasosphere、Matrigel、BME、3D culture|Rock 2009；Hild & Jaffe 2016|已被两篇综述支持；“首个”仍待原文核验|
|N2 dual-SMAD 与 ROCK/Y-27632 扩增|Barkauskas 2017 的 basal cell 方法与参考文献簇列出 Mou；Vazquez-Armendariz 2023 在 NKX2-1+TP63+ 细胞段落明确记录 SMAD/ROCK 抑制与后续克隆扩增|原代基底细胞传代后衰老或丢失分化能力|扩大细胞量并保留后续 3D/ALI 分化潜能|dual SMAD、SMAD inhibition、ROCK inhibitor、Y-27632、basal cell expansion|Mou 2016|已支持为“扩增使能节点”；它本身不是完整气道类器官终点|
|N3 成人组织来源气道类器官长期扩增|Barkauskas 2017“Moving forward”把长期自我更新与成熟分化列为待解问题；Vazquez-Armendariz 2023 在“Additional efforts…”段落记录 Sachs 通过 TGF-β、FGF、WNT 调控使人气道类器官维持一年以上|短期培养、难以连续传代、难以建立患者纵向模型|长期扩增、冻存、重复分化与患者特异疾病建模|long-term expansion、adult human airway organoid、BAL、TGF-beta、FGF、WNT、BMP|Sachs 2019|强节点；待全文核实“一年以上”和具体培养条件|
|N4 hPSC/iPSC→NKX2-1 肺祖细胞→气道|Barkauskas 2017“Derivation of lung organoids from hPSCs”；Vazquez-Armendariz 2023 的 iPSC 段落描述 definitive endoderm→AFE/VAFE→NKX2-1+ progenitor，并记录 FGF、WNT、BMP、RA 与 reporter/表面标记纯化|成人组织来源受限，难研究人肺发育阶段与遗传背景|可重复发育轨迹、基因编辑、患者 iPSC 与气道/肺泡定向分化|pluripotent stem cell-derived airway、iPSC-derived airway、NKX2-1、WNT、FGF、BMP、retinoic acid|Dye 2015；McCauley 2017|已支持为独立来源路线；成熟度与非肺谱系污染仍是限制|
|N5 ALI、极性与顶端可及性|Barkauskas 2017“Moving forward”指出 ALI 可形成成熟、极化、假复层近端气道上皮但本质是二维 Transwell；Vazquez-Armendariz 2023 记录类器官来源 basal 细胞在 ALI 中多谱系分化|传统 ECM 内嵌类器官多为 apical-in，病原体或药物难直接接触顶端面；浸没 3D 的黏液纤毛成熟有限|ALI 提升极化/黏液纤毛成熟；apical-out 保留 3D 同时提供顶端面暴露|air-liquid interface、ALI polarization、apical-basal polarity、apical-in、apical-out|McCauley 2017；Stroulios 2022|标签成立，但 ALI 不是类器官同义词；二者必须分开叙述|

对初始标签的审查结论：`basal cell expansion`、`ROCK inhibition`、`Y-27632`、`Matrigel/BME`、`long-term expansion`、`PSC/iPSC-derived airway`、`NKX2-1 progenitor`均获 B1 直接支持；`ALI/polarity`获支持但只能作为类器官衍生或互补策略，不能写成类器官定义要件。
***
# 二十篇强候选池

|ID|类别|文献|模型/物种|拟承担用途|保留理由|全文线索|
|---|---|---|---|---|---|---|
|C01|一般综述|Wang D 等，Human organoids as 3D in vitro platforms for drug discovery: opportunities and challenges，2025 在线/2026 卷期，[DOI](https://doi.org/10.1038/s41573-025-01317-y)|—|指定概念锚点；一般目标与局限|用户指定权威参考且已有本地全文|本地 [[s41573-025-01317-y.pdf]]|
|C02|一般综述|Lancaster MA、Knoblich JA，Organogenesis in a dish，2014，[DOI](https://doi.org/10.1126/science.1247125)|—|经典定义、PSC/成人干细胞路线交叉核对|A1 PubMed 直接命中；方案指定种子之一|无 PMC；候选获批后检查出版社/机构入口|
|C03|一般综述|Simian M、Bissell MJ，Organoids: A historical perspective of thinking in three dimensions，2017，[DOI](https://doi.org/10.1083/jcb.201610056)|—|3D 思维与 ECM 历史|A1/A2 OpenAlex 命中；方案指定种子之一|PMC5223613|
|C04|一般综述|Kim J、Koo BK、Knoblich JA，Human organoids: model systems for human biology and medicine，2020，[DOI](https://doi.org/10.1038/s41580-020-0259-3)|—|独立概念综述与两条来源路线|与指定综述独立且概念覆盖最完整|PMC7339799|
|C05|一般原始|Sato T 等，Single Lgr5 stem cells build crypt-villus structures in vitro without a mesenchymal niche，2009，[DOI](https://doi.org/10.1038/nature07935)|小鼠肠道成人干细胞|成人组织干细胞类器官里程碑|Wang、Lancaster、Simian、Kim 均回引；证明单细胞来源、自组织与长期扩增路线|无 PMC；检查出版社/机构入口|
|C06|一般原始|Eiraku M 等，Self-organizing optic-cup morphogenesis in three-dimensional culture，2011，[DOI](https://doi.org/10.1038/nature09941)|小鼠胚胎干细胞|PSC 自组织形态发生里程碑|多篇概念综述共同回引，代表组织级形态自组织|无 PMC；检查出版社/机构入口|
|C07|一般原始|Lancaster MA 等，Cerebral organoids model human brain development and microcephaly，2013，[DOI](https://doi.org/10.1038/nature12517)|人 PSC/iPSC|人源复杂类器官与疾病建模里程碑|A2/OpenAlex 直接命中且多综述交叉引用|PMC3817409|
|C08|一般原始|Takebe T 等，Vascularized and functional human liver from an iPSC-derived organ bud transplant，2013，[DOI](https://doi.org/10.1038/nature12271)|人 iPSC 衍生肝芽并移植小鼠|多细胞互作、血管化与移植功能|补足从上皮自组织到多细胞器官芽的能力演进|无 PMC；检查出版社/机构入口|
|C09|气道/肺综述|Barkauskas CE 等，Lung organoids: current uses and future promise，2017，[DOI](https://doi.org/10.1242/dev.140103)|人/鼠；成人祖细胞与 hPSC|B1 早期方法谱系主锚点|直接连接 Rock、Dye、Hild、Mou|PMC5358104|
|C10|气道/肺综述|Nikolić MZ、Rawlins EL，Lung Organoids and Their Use To Study Cell-Cell Interaction，2017，[DOI](https://doi.org/10.1007/s40139-017-0137-7)|人/鼠|细胞来源、上皮—间质互作补充|补足 B1 两篇主锚点对细胞互作的覆盖|PMC5446548|
|C11|气道/肺综述|Vazquez-Armendariz AI、Tata PR，Recent advances in lung organoid development and applications in disease modeling，2023，[DOI](https://doi.org/10.1172/JCI170500)|人/鼠；成人、胎儿、iPSC|B1 近年更新主锚点|直接连接长期扩增、培养基优化与 NKX2-1 路线|PMC10645385|
|C12|气道/肺综述|van der Vaart J、Clevers H，Airway organoids as models of human disease，2021，[DOI](https://doi.org/10.1111/joim.13075)|人 PSC/ASC|气道特异、PSC 与 ASC 对照|明确区分两条来源路线及各自成熟度/适用场景|无 PMC；检查 Wiley/机构入口|
|C13|方法/标准化综述|Hughes T 等，Open questions in human lung organoid research，2022，[DOI](https://doi.org/10.3389/fphar.2022.1083017)|人肺类器官|命名、成熟度、可比性与待解决问题|防止把“可培养”误写成“等同体内器官”，适合作为候选维度约束|PMC9880211|
|C14|气道原始|Rock JR 等，Basal cells as stem cells of the mouse trachea and human airway epithelium，2009，[DOI](https://doi.org/10.1073/pnas.0906850106)|小鼠气管＋人气道上皮|早期 basal/tracheosphere 节点|两篇 B1 主锚点共同回引；提供成人气道基底细胞前驱证据|PMC2714281|
|C15|气道方法/原始|Hild M、Jaffe AB，Production of 3-D Airway Organoids From Primary Human Airway Basal Cells and Their Use in High-Throughput Screening，2016，[DOI](https://doi.org/10.1002/cpsc.1)|人原代气道基底细胞|Matrigel/BME 三维培养与高通量方法|B2-T1 PubMed 直接命中；两篇 B1 主锚点均回引|无 PMC；检查 Wiley/机构入口|
|C16|气道原始|Dye BR 等，In vitro generation of human pluripotent stem cell derived lung organoids，2015，[DOI](https://doi.org/10.7554/eLife.05098)|人 PSC|PSC 肺类器官路线起点|Barkauskas、Kim 等共同回引；建立人 PSC 三维肺结构|PMC4370217|
|C17|气道原始|Mou H 等，Dual SMAD Signaling Inhibition Enables Long-Term Expansion of Diverse Epithelial Basal Cells，2016，[DOI](https://doi.org/10.1016/j.stem.2016.05.012)|人/鼠上皮基底细胞|扩增使能节点|B2-T2 在 PubMed/Europe PMC 各仅 2 条且精确命中；两篇 B1 主锚点共同回引|PMC4975684 作者稿/可读记录|
|C18|气道原始|McCauley KB 等，Efficient Derivation of Functional Human Airway Epithelium from Pluripotent Stem Cells via Temporal Regulation of Wnt Signaling，2017，[DOI](https://doi.org/10.1016/j.stem.2017.03.001)|人 PSC，NKX2-1+ 祖细胞|PSC→功能性气道上皮节点|B2-T4 首位精确命中；Wang 与两篇气道综述回引|PMC5457392 作者稿/可读记录|
|C19|气道原始|Sachs N 等，Long-term expanding human airway organoids for disease modeling，2019，[DOI](https://doi.org/10.15252/embj.2018100300)|人成人肺组织/BAL|成人来源长期扩增气道类器官|B2-T3 首位命中；Vazquez、Kim、van der Vaart、Hughes 交叉引用|PMC6376275|
|C20|气道原始|Stroulios G 等，Apical-out airway organoids as a platform for studying viral infections and screening for antiviral drugs，2022，[DOI](https://doi.org/10.1038/s41598-022-11700-z)|人气道类器官|极性反转与顶端面可及性|B2-T5 OpenAlex 直接命中；解决 apical-in 暴露瓶颈|PMC9089294|

候选用途分布：一般类器官综述 4 篇；一般里程碑原始研究 4 篇；气道/肺及方法学综述 5 篇；气道原始/方法研究 7 篇。结构符合方案建议的 3–4、4–5、4–5、6–8 区间。
***
# 代表性边缘候选与排除理由

|文献|处理|理由|
|---|---|---|
|Corrò 等，A brief history of organoids，2020|候补|高度相关，但与 Simian 2017、Lancaster 2014、Kim 2020 的用途重叠；不为凑数进入 20 篇池|
|Hofer、Lütolf，Engineering organoids，2021|候补|工程控制与基质很重要，但已超出本轮概念/一般历史的最小范围，可在后续模型评估中使用|
|Zhao 等，Organoids，2022|候补|Methods Primer 质量高，但与 Kim 2020、Wang 2025/2026 重叠；若需要更强方法学定义可替换 C02|
|Kühl 等，Human Lung Organoids—A Novel Experimental and Precision Medicine Approach，2023|排除强池| broad lung review，与 B1 两篇主锚点重叠且对早期技术优先权无明显新增|
|Purev 等，Alveolar Organoids in Lung Disease Modeling，2024|排除强池|肺泡专属，本轮目标是气道小型时间线，不能与气道节点混写|
|Adult stem cell-derived complete lung organoid models emulate lung disease in COVID-19，2021|候补|模型复杂度高，但更偏疾病应用；预印本已并入正式版|
|Human Nasal Organoids Model SARS-CoV-2 Upper Respiratory Infection，2022|候补|应用价值高，但不是本轮要证明的建立或能力转折|
|Comparison of ALI transwell and airway organoid models，2025|候补|适合后续“模型边界/病毒应用”段，不是早期技术里程碑|
|Standardized pipeline for airway/alveolar organoids from BAL fluid，2026|候补|与标准化高度相关，但超出本次 10 篇全文最小集；预印本已并入正式版|

***
# 推荐的十篇试跑全文清单
这 10 篇按方案规定的 1＋1＋2＋2＋3＋1 结构选择；此处只是推荐下载范围，尚未执行下载。若用户更重视“扩增使能”而非“早期优先权”，可把第 7 篇 Rock 2009 替换为 Mou 2016；默认保留 Rock，以维持气道小时间线的早期起点。

|序号|角色|推荐文献|选择理由|预期入口|
|---|---|---|---|---|
|1|指定概念综述|Wang 等，[DOI](https://doi.org/10.1038/s41573-025-01317-y)|用户指定权威参考；概念、一般目标、局限|本地 PDF，禁止重复下载|
|2|独立概念综述|Kim 等 2020，[DOI](https://doi.org/10.1038/s41580-020-0259-3)|独立交叉核对定义、自组织与两条来源路线|PMC7339799|
|3|一般原始里程碑|Sato 等 2009，[DOI](https://doi.org/10.1038/nature07935)|成人组织干细胞类器官路线|出版社/机构入口；无 PMC|
|4|一般原始里程碑|Lancaster 等 2013，[DOI](https://doi.org/10.1038/nature12517)|人 PSC 复杂类器官与疾病建模路线|PMC3817409|
|5|气道综述|Barkauskas 等 2017，[DOI](https://doi.org/10.1242/dev.140103)|早期方法谱系与原始引文锚定|PMC5358104|
|6|气道综述|Vazquez-Armendariz、Tata 2023，[DOI](https://doi.org/10.1172/JCI170500)|长期扩增、培养优化、NKX2-1 与限制更新|PMC10645385|
|7|气道原始里程碑|Rock 等 2009，[DOI](https://doi.org/10.1073/pnas.0906850106)|成人气道 basal/tracheosphere 早期节点|PMC2714281|
|8|气道原始里程碑|McCauley 等 2017，[DOI](https://doi.org/10.1016/j.stem.2017.03.001)|PSC→NKX2-1→功能性气道上皮|PMC5457392|
|9|气道原始里程碑|Sachs 等 2019，[DOI](https://doi.org/10.15252/embj.2018100300)|人成人来源气道类器官长期扩增|PMC6376275|
|10|方法/标准化综述|Hughes 等 2022，[DOI](https://doi.org/10.3389/fphar.2022.1083017)|约束命名、成熟度、可比性和过度外推|PMC9880211|

首位候补：Mou 等 2016（dual-SMAD，PMC4975684）；第二候补：Stroulios 等 2022（apical-out，PMC9089294）。若下一步允许 12 篇而非 10 篇，应优先把这两篇一并纳入，以免扩增与顶端可及性节点只依赖综述摘要。
***
# B2 实际检索式补录
A1、A2、B1 的完整式见并锁定于 [[Part1-AB-试跑检索方案]] 的上述 SHA-256 版本。B2 未把标签合并成一个 OR 大式，而是逐标签执行：
**T1 PubMed：** `(("airway basal cell"[Title/Abstract] OR "airway basal cells"[Title/Abstract] OR "tracheal basal cell"[Title/Abstract] OR "bronchial basal cell"[Title/Abstract]) AND (organoid*[Title/Abstract] OR tracheosphere*[Title/Abstract] OR bronchosphere*[Title/Abstract] OR "3D culture"[Title/Abstract]) AND (Matrigel[Title/Abstract] OR "basement membrane"[Title/Abstract] OR "three-dimensional"[Title/Abstract]))`
**T1 Europe PMC：** `(TITLE_ABS:"airway basal cell" OR TITLE_ABS:"tracheal basal cell" OR TITLE_ABS:"bronchial basal cell") AND (TITLE_ABS:organoid* OR TITLE_ABS:tracheosphere* OR TITLE_ABS:bronchosphere* OR TITLE_ABS:"3D culture") AND (TITLE_ABS:Matrigel OR TITLE_ABS:"basement membrane" OR TITLE_ABS:"three-dimensional")`
**T1 OpenAlex：** `airway basal cells organoid tracheosphere bronchosphere Matrigel 3D`
**T2 PubMed：** `(("airway basal cell"[Title/Abstract] OR "epithelial basal cell"[Title/Abstract]) AND ("dual SMAD"[Title/Abstract] OR (SMAD[Title/Abstract] AND inhibit*[Title/Abstract]) OR Y-27632[Title/Abstract] OR "ROCK inhibitor"[Title/Abstract]) AND (expan*[Title/Abstract] OR organoid*[Title/Abstract]))`
**T2 Europe PMC：** `(TITLE_ABS:"airway basal cell" OR TITLE_ABS:"epithelial basal cell") AND (TITLE_ABS:"dual SMAD" OR (TITLE_ABS:SMAD AND TITLE_ABS:inhibit*) OR TITLE_ABS:Y-27632 OR TITLE_ABS:"ROCK inhibitor") AND (TITLE_ABS:expan* OR TITLE_ABS:organoid*)`
**T2 OpenAlex：** `airway epithelial basal cells dual SMAD ROCK inhibitor Y-27632 expansion`
**T3 PubMed：** `(("airway organoid"[Title/Abstract] OR "airway organoids"[Title/Abstract]) AND ("long-term"[Title/Abstract] OR expand*[Title/Abstract]) AND human[Title/Abstract] AND (adult[Title/Abstract] OR primary[Title/Abstract] OR bronchoalveolar[Title/Abstract]))`
**T3 Europe PMC：** `(TITLE_ABS:"airway organoid" OR TITLE_ABS:"airway organoids") AND (TITLE_ABS:"long-term" OR TITLE_ABS:expand*) AND TITLE_ABS:human AND (TITLE_ABS:adult OR TITLE_ABS:primary OR TITLE_ABS:bronchoalveolar)`
**T3 OpenAlex：** `human airway organoid long-term expansion adult primary bronchoalveolar`
**T4 PubMed：** `(("airway organoid"[Title/Abstract] OR "lung organoid"[Title/Abstract] OR "airway epithelium"[Title/Abstract]) AND ("pluripotent stem cell"[Title/Abstract] OR hPSC[Title/Abstract] OR iPSC[Title/Abstract]) AND (NKX2-1[Title/Abstract] OR NKX2.1[Title/Abstract]))`
**T4 Europe PMC：** `(TITLE_ABS:"airway organoid" OR TITLE_ABS:"lung organoid" OR TITLE_ABS:"airway epithelium") AND (TITLE_ABS:"pluripotent stem cell" OR TITLE_ABS:hPSC OR TITLE_ABS:iPSC) AND (TITLE_ABS:NKX2-1 OR TITLE_ABS:NKX2.1)`
**T4 OpenAlex：** `airway organoid pluripotent stem cell iPSC hPSC NKX2-1`
**T5 PubMed：** `(("airway organoid"[Title/Abstract] OR "lung organoid"[Title/Abstract]) AND ("air-liquid interface"[Title/Abstract] OR ALI[Title/Abstract] OR polarity[Title/Abstract] OR "apical-out"[Title/Abstract] OR "apical-in"[Title/Abstract]))`
**T5 Europe PMC：** `(TITLE_ABS:"airway organoid" OR TITLE_ABS:"lung organoid") AND (TITLE_ABS:"air-liquid interface" OR TITLE_ABS:ALI OR TITLE_ABS:polarity OR TITLE_ABS:"apical-out" OR TITLE_ABS:"apical-in")`
**T5 OpenAlex：** `airway organoid air liquid interface polarity apical out apical in`
***
# 当前暂停点
需要用户确认以下两项后才进入下一阶段：是否批准上述 10 篇为全文试跑集；是否把 Mou 2016 与 Stroulios 2022 作为第 11、12 篇一并加入。未获确认前不调用 paper-fetch/scansci 批量获取，不导入 Zotero，不写 Part 1 A/B 正文，不把 N1–N5 升级为正式里程碑。
