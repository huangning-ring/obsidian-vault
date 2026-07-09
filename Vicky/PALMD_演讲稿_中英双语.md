---
sort_index: 7000
---
# 中文演讲稿
## 一、背景引入
大家好，我今天想和大家分享的是一个关于心脏瓣膜疾病的故事——钙化性主动脉瓣疾病，英文缩写 CAVD。
这个病听起来可能有点陌生，但它其实是最常见的心脏瓣膜病。主动脉瓣本来应该像一扇灵活的门，在心脏收缩和舒张时自由开合，保证血液单向流动。但在 CAVD 患者中，瓣膜逐渐增厚、纤维化，最终发生钙化——瓣膜真的会"长出骨头一样的硬块"。结果就是瓣膜打不开、关不严，最终导致心力衰竭。
更棘手的是，目前没有任何药物能够延缓甚至逆转这个过程。唯一的办法是外科或经导管的瓣膜置换——但这对很多老年患者来说是一个高风险的选择，血栓、感染、心脏事件的并发症发生率都不低。
所以我们迫切需要回答一个问题：**CAVD 到底是怎么发生的？有没有可能找到一个能被药物靶向的分子开关？**
## 二、切入点：一个来自遗传学的线索
近年来，全基因组关联研究（GWAS）和转录组关联研究（TWAS）给了我们一个非常有意思的线索——一个叫 **PALMD**（palmdelphin）的基因位点，反复地、独立地被多项研究关联到 CAVD 的发病风险上。
但问题是：**这些遗传学研究只告诉我们"PALMD 和疾病有关"，却完全没有告诉我们"PALMD 到底在做什么"**。PALMD 之前只在成肌细胞分化和肌肉再生中被研究过，它在瓣膜里扮演什么角色，几乎是一片空白。
这就是我们研究的起点：**一个被遗传学"钦点"、但功能完全未知的候选基因**。而瓣膜间质细胞（valve interstitial cell，VIC）——也就是分布在瓣膜三层结构中的主要细胞类型——是我们认为最值得研究的对象，因为已有大量证据表明，VIC 可以像成骨细胞一样发生"骨化转分化"，这正是瓣膜钙化的细胞学基础。
## 三、第一步：PALMD 在钙化组织和细胞中的表达变化
要研究一个基因的功能，第一步永远是问：它在疾病状态下，表达是升高还是降低？
我们拿到了 CAVD 患者手术切除的主动脉瓣，用 H&E 染色和茜素红染色确认了钙化区域，然后做免疫组化——结果非常清楚：**PALMD 在钙化区域的表达明显高于同一片瓣膜上未钙化的区域**。我们也在体外的人瓣膜间质细胞（hVIC）钙化模型中重复验证了这一点：随着钙化天数的增加，PALMD 的 mRNA 和蛋白表达都逐步上升。
这一步给了我们信心：PALMD 不是一个"路过"的旁观者基因，它的表达变化和钙化过程紧密同步。但相关不等于因果——**接下来我们必须回答，PALMD 升高究竟是钙化的"结果"，还是钙化的"推手"？**
## 四、因果验证：功能获得与功能缺失实验
这是整个研究逻辑的关键转折点。我们设计了一组经典的"增减法"实验：用 siRNA 敲低 PALMD，同时用腺病毒过表达 PALMD，看它们对 hVIC 钙化的影响是相反还是一致。
结果非常漂亮：**敲低 PALMD 显著减少了茜素红染色的钙沉积、降低了成骨基因 MSX2、RUNX2、BMP2 的表达，也减少了凋亡标志物 cleaved-caspase3；而过表达 PALMD 则产生了完全相反的效果**——增加钙沉积、上调成骨基因、上调凋亡标志物。
这组"一增一减、方向相反"的结果，第一次直接证明了：**PALMD 不只是钙化的伴随现象，而是一个真正驱动 hVIC 钙化和骨化转分化的功能性因子**。
## 五、机制探索：无偏倚的 RNA-Seq 揭示了什么？
证明了"PALMD 有作用"之后，自然而然的下一个问题是：**它是通过什么分子通路起作用的？**
与其凭经验去猜测某一条信号通路，我们选择了一个更客观的策略——对敲低 PALMD 前后的 hVIC 做全转录组 RNA-Seq，看整个基因表达谱发生了什么变化。这样做的好处是不预设立场，让数据自己"说话"。
结果发现了 751 个差异表达基因，其中下调基因显著富集在两个方向：**糖酵解/糖异生通路**，以及 **TNFα 信号通路**（其下游正是 NF-κB 介导的炎症反应）。这个发现出乎意料又合乎情理——因为炎症和代谢重编程恰恰是很多"钙化样"骨化过程的共同特征。这一步把我们研究的焦点，从"PALMD 是什么"转向了"PALMD 通过糖酵解和 NF-κB 这两条通路做什么"。
## 六、验证糖酵解通路：从基因表达到功能代谢
RNA-Seq 只是提出了假设，我们需要在功能层面把它坐实。我们逐一验证了糖酵解关键酶（ALDOC、HK1、HK2、PFKFB3、PKM 等）的表达变化——敲低 PALMD 全面下调这些酶，过表达则全面上调，方向完全一致。
但基因表达的变化不等于代谢功能真的改变了，所以我们进一步做了两个更直接的功能检测：**荧光葡萄糖类似物 2-NBDG 摄取实验**（反映细胞真实的葡萄糖摄取能力），以及 **Seahorse 细胞外酸化率（ECAR）检测**（反映真实的糖酵解通量）。结果显示，敲低 PALMD 确实降低了葡萄糖摄取，而过表达 PALMD 确实提高了基础糖酵解和代偿性糖酵解水平。
至此，我们从"基因表达相关"一路走到了"细胞代谢功能改变"，证据链条完整闭合：**PALMD 确实是 hVIC 糖酵解的调控者**。
## 七、糖酵解与钙化：是不是所有 PALMD 的作用都靠糖酵解来实现？
既然糖酵解被 PALMD 上调，那一个自然的问题是：**如果直接抑制糖酵解，是不是就能阻断 PALMD 引起的钙化和炎症？**
我们选择了糖酵解的一个关键限速调控因子 **PFKFB3** 作为切入点，用 siRNA 特异性敲低它。结果显示：**敲低 PFKFB3 确实显著抑制了 hVIC 的成骨分化（MSX2、BMP2、ALPL 下降）以及炎症反应（IL6、IL1B、ICAM1、VCAM1 下降）**。
但这里出现了一个非常有意思、也是全文逻辑上最精彩的一个"转折"——**当我们在 PALMD 过表达的背景下同时敲低 PFKFB3 时，PFKFB3 敲低能够阻断 PALMD 诱导的炎症基因表达（IL1B、CXCL2），却完全不能阻断 PALMD 诱导的成骨基因表达（MSX2、ALPL 依然照常上调）**。
这个"部分阻断"的结果非常关键：它告诉我们，**PALMD 促进炎症这条支路，确实是通过 PFKFB3 介导的糖酵解实现的；但 PALMD 促进成骨分化这条支路，必然还有一条独立于糖酵解的通路在起作用**。
## 八、第二条通路：NF-κB 才是连接炎症与成骨分化的枢纽
那么,这条独立的通路是什么?我们的 RNA-Seq 已经提示了答案——TNFα/NF-κB 信号通路。NF-κB 是一个经典的、能同时调控炎症和细胞命运决定的转录因子,它的核心亚基 p65 一旦被磷酸化激活并入核,就能直接调控下游基因转录。
我们检测发现,敲低 PALMD 确实降低了 TNFα 或 IL1β 刺激下 p65 的磷酸化水平；而用化学抑制剂 SC75741 阻断 NF-κB 通路后,PALMD 过表达所诱导的炎症基因(IL1B、TNFAIP3、CXCL2、CASP3、ICAM1)**和**成骨基因(MSX2、BMP2、ALPL)**全部被显著抑制**。
这正是我们一直在寻找的那块"最后拼图"——**与 PFKFB3 不同,NF-κB 抑制剂能够同时阻断 PALMD 诱导的炎症反应和成骨分化,这说明 NF-κB 处于比 PFKFB3 更下游、更核心的枢纽位置,是连接炎症信号与成骨命运决定的关键节点**。
## 九、功能验证的最后一环：真实的免疫细胞募集
到这里,我们已经从基因表达、代谢功能、成骨分化几个层面证明了 PALMD 的作用,但 CAVD 早期的一个核心病理特征是瓣膜内皮的炎症激活会募集单核细胞浸润。所以我们做了一个更贴近体内情形的功能实验——**单核细胞(THP1)黏附实验**。结果显示,敲低 PALMD 显著减少了 TNFα 诱导下 THP1 细胞对 hVIC 的黏附。这一步把我们的分子机制研究,又拉回到了具有生理意义的细胞间相互作用层面。
## 十、整合与展望
把所有实验串联起来,我们得到了一幅完整的机制图景(见图七的示意图)：**在钙化早期,PALMD 表达上调,通过 PFKFB3 介导的糖酵解增强,以及 NF-κB 通路的激活,协同促进 hVIC 的炎症反应和成骨转分化,并伴随细胞凋亡的增加,最终共同推动瓣膜的钙化进程**。
这项工作的意义在于:第一次把一个"遗传学孤儿基因"PALMD,从一个统计学关联,变成了一个具有明确细胞生物学机制、并且原则上"可被药物靶向"的通路节点。这也提示我们,**靶向 PALMD 介导的糖酵解或 NF-κB 信号,或许是治疗 CAVD 的一个全新策略方向**。
当然,这项研究也有局限——它完全基于体外细胞模型,PALMD 在动物模型体内是否同样促进 CAVD 的发生发展,仍有待验证；此外,风险等位基因 rs6702619 在不同人群中频率差异很大(欧洲人约 48%,东亚人仅 7%),这提示 PALMD 介导的机制可能存在种族异质性,也为理解 CAVD 发病率的种族差异提供了新的视角。这些,都将是未来研究值得继续深挖的方向。谢谢大家。
# English Version
## I. Setting the Stage
Today I want to share a story about a heart valve disease — calcific aortic valve disease, or CAVD.
It might not sound familiar, but it's actually the most common valvular heart disease. The aortic valve is supposed to act like a flexible door, opening and closing freely with every heartbeat to keep blood flowing in one direction. But in CAVD, the valve leaflets progressively thicken, fibrose, and eventually calcify — quite literally growing bone-like deposits. The valve can no longer open or close properly, and this ultimately leads to heart failure.
What makes this especially frustrating is that **there is currently no drug that can slow or reverse this process**. The only option is surgical or transcatheter valve replacement — a risky choice for many elderly patients, given the real complication rates of blood clots, infection, and cardiac events.
So the question driving our work was simple but urgent: **What actually drives CAVD, and is there a druggable molecular switch hiding somewhere in this process?**
## II. The Entry Point: A Clue from Human Genetics
In recent years, genome-wide association studies (GWAS) and transcriptome-wide association studies (TWAS) gave us a compelling lead — a gene locus called **PALMD** (palmdelphin) kept showing up, independently, across multiple studies, as being associated with CAVD risk.
But here's the catch: **genetic association only tells us that PALMD is linked to the disease — it tells us nothing about what PALMD actually does**. Prior to our study, PALMD had only been studied in the context of myoblast differentiation and muscle regeneration. Its role in the valve was essentially a blank page.
That's exactly where our study begins: **a genetically nominated candidate with an unknown function**. We focused on valve interstitial cells (VICs) — the predominant cell type distributed throughout all three layers of the valve leaflet — because VICs are well known to undergo osteoblast-like transdifferentiation, which is the cellular basis of valve calcification.
## III. Step One: Is PALMD Expression Altered During Calcification?
The first question to ask about any candidate gene is always the same: does its expression change during disease?
Using surgically excised aortic valves from CAVD patients, we confirmed calcified regions by H&E and Alizarin Red staining, then performed immunohistochemistry — and the result was unambiguous: **PALMD expression was markedly higher in calcified regions compared to adjacent noncalcified regions of the very same valve**. We reproduced this in an *in vitro* human VIC (hVIC) calcification model, where both PALMD mRNA and protein rose progressively as calcification proceeded.
This gave us confidence that PALMD is not a bystander — its expression tracks tightly with the calcification process. But correlation isn't causation. **The next question was whether PALMD upregulation is a consequence of calcification, or a driver of it.**
## IV. Establishing Causality: Gain- and Loss-of-Function
This is the pivotal turn in our logic. We designed a classic bidirectional experiment — knocking down PALMD with siRNA, and overexpressing it with an adenoviral vector — to see whether the two manipulations produced opposite effects on hVIC calcification.
The results were clean and convincing: **silencing PALMD significantly reduced Alizarin Red–stained calcium deposition, lowered the osteogenic genes MSX2, RUNX2, and BMP2, and decreased the apoptotic marker cleaved-caspase3; overexpressing PALMD did the exact opposite** — increasing calcium deposition, osteogenic gene expression, and apoptosis.
This mirror-image pattern was the first direct evidence that **PALMD is not merely a marker of calcification, but a functional driver of hVIC calcification and osteogenic transdifferentiation**.
## V. Mining the Mechanism: What Does Unbiased RNA-Seq Reveal?
Having established that PALMD matters functionally, the natural next question was: **through which molecular pathway does it act?**
Rather than guessing at a candidate pathway, we took a more objective route — bulk RNA-Seq comparing PALMD-silenced and control hVICs, letting the whole transcriptome speak for itself. Among 751 differentially expressed genes, the downregulated genes were significantly enriched in two directions: **glycolysis/gluconeogenesis**, and the **TNFα signaling pathway**, whose principal downstream effector is NF-κB–mediated inflammation. This was a striking but biologically sensible finding, since metabolic reprogramming and inflammation are recurring themes across many calcification-like osteogenic processes. This step reframed our question from "what is PALMD" to "how does PALMD act through glycolysis and NF-κB."
## VI. Confirming the Glycolytic Arm: From Gene Expression to Metabolic Function
RNA-Seq only generates a hypothesis — we still needed to nail it down functionally. We validated the expression changes of key glycolytic enzymes (ALDOC, HK1, HK2, PFKFB3, PKM, and others): PALMD silencing broadly downregulated them, while overexpression broadly upregulated them, in perfectly consistent directions.
But gene expression changes don't guarantee a real metabolic shift, so we went one step further with two direct functional assays: **2-NBDG fluorescent glucose uptake** (reflecting actual glucose uptake capacity) and **Seahorse extracellular acidification rate (ECAR)** (reflecting real glycolytic flux). PALMD silencing reduced glucose uptake, while PALMD overexpression enhanced both basal and compensatory glycolysis.
At this point, our evidence chain closed the loop from "correlated gene expression" all the way to "altered cellular metabolic function": **PALMD is indeed a bona fide regulator of glycolysis in hVICs**.
## VII. Is Glycolysis the Whole Story?
Since PALMD upregulates glycolysis, an obvious next question arose: **if we directly block glycolysis, will PALMD-induced calcification and inflammation disappear?**
We targeted **PFKFB3**, a key rate-limiting regulator of glycolysis, using siRNA. Silencing PFKFB3 significantly attenuated hVIC osteogenic differentiation (reduced MSX2, BMP2, ALPL) as well as inflammation (reduced IL6, IL1B, ICAM1, VCAM1).
But here comes the most interesting twist in the whole logical arc of the paper — **when we silenced PFKFB3 on top of PALMD overexpression, PFKFB3 knockdown blocked PALMD-induced inflammatory genes (IL1B, CXCL2), but it completely failed to block PALMD-induced osteogenic genes (MSX2 and ALPL remained elevated)**.
This partial rescue is the key insight: **PALMD's pro-inflammatory arm is indeed mediated by PFKFB3-driven glycolysis, but its pro-osteogenic arm must depend on a separate, glycolysis-independent pathway**.
## VIII. The Second Pathway: NF-κB as the True Hub Linking Inflammation and Osteogenesis
So what is that independent pathway? Our RNA-Seq had already pointed us toward it — the TNFα/NF-κB signaling axis. NF-κB is a classic transcription factor capable of coordinately controlling both inflammation and cell-fate decisions; once its core subunit p65 is phosphorylated and translocates to the nucleus, it directly regulates downstream gene transcription.
We found that PALMD silencing reduced TNFα- or IL1β-induced p65 phosphorylation, and that blocking NF-κB with the chemical inhibitor SC75741 abolished **both** PALMD-induced inflammatory genes (IL1B, TNFAIP3, CXCL2, CASP3, ICAM1) **and** PALMD-induced osteogenic genes (MSX2, BMP2, ALPL).
This is the final piece of the puzzle we'd been looking for — **unlike PFKFB3, the NF-κB inhibitor could block both the inflammatory and osteogenic arms of PALMD's action, placing NF-κB downstream of PFKFB3, at a more central hub connecting inflammatory signaling to osteogenic fate**.
## IX. The Last Functional Layer: Real Immune Cell Recruitment
Having established the mechanism across gene expression, metabolic function, and osteogenic differentiation, we still needed to address one hallmark of early CAVD pathology: inflammatory activation of the valve endothelium recruiting monocytes. So we performed a more physiologically relevant assay — a **THP1 monocyte adhesion assay**. PALMD silencing significantly reduced TNFα-induced THP1 adhesion to hVICs, bringing our mechanistic findings back to a functionally meaningful cell-cell interaction.
## X. Putting It All Together
Integrating every experiment gives us a coherent working model (illustrated in Figure 7): **during the early stage of calcification, upregulated PALMD enhances PFKFB3-mediated glycolysis and activates NF-κB signaling, which together drive hVIC inflammation and osteogenic transdifferentiation, alongside increased apoptosis — collectively promoting valve calcification**.
The significance of this work is that it transforms PALMD from a purely statistical genetic association into a gene with a defined cell-biological mechanism and, in principle, druggable pathway nodes. It suggests that **targeting PALMD-mediated glycolysis or NF-κB signaling may represent a novel therapeutic strategy for CAVD**.
Of course, this study has its limits — it is based entirely on an *in vitro* cellular model, and whether PALMD similarly drives CAVD *in vivo* remains to be established in animal models. Additionally, the risk allele rs6702619 shows striking frequency differences across populations (about 48% in Europeans versus only 7% in East Asians), suggesting the PALMD-mediated mechanism may carry ethnic heterogeneity — offering a fresh lens on why CAVD prevalence differs across populations. These are the directions we hope future work will pursue further. Thank you.
