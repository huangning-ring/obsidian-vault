# 中文讲稿
我们之前的工作已经表明,小胶质细胞对血管钙化并不是被动的旁观者:无论是用**CSF1R抑制剂**药理学清除**小胶质细胞**,还是敲除其存活与功能所必需的**TREM2受体**,都会显著加重Pdgfb<sup>ret/ret</sup>小鼠模型中的血管钙化负荷。这自然引出一个更进一步、也更具治疗意义的问题——既然*削弱小胶质细胞功能会让钙化恶化*,那么反过来,主动增强TREM2信号、激活小胶质细胞,能不能帮助它们主动清除已经形成的钙化呢?
***
## 1. AL002a抗体验证:能否进入脑内、激活小胶质细胞?
要回答这个问题,我们需要一个能够特异性激活TREM2的工具。Sucheta使用的是一株由Alector公司研发的抗体,命名为AL002a——它**结合TREM2**胞外段近膜的"茎部"(stalk)区域,通过诱导受体聚集来激活下游信号,本质上是一株激动型抗体。
但在检验疗效之前,有两件事必须先验证:
第一,这株抗体能不能进入脑内?
第二,进入脑内之后,它是否真的接触并激活了小胶质细胞?
对于第一个问题,我们仍然使用Pdgfb<sup>ret/ret</sup>小鼠——前面提到过,这个模型由于周细胞覆盖缺陷而存在**血脑屏障渗漏**。我们给予荧光标记的抗体,随后观察其在脑内的分布。结果显示,整个脑组织都能看到信号,而且皮层区域信号更强,这与皮层区域血脑屏障渗漏更明显的已知特征相符。不过我要坦率地说,这里缺少一个重要的阴性对照——没有注射标记抗体的小鼠脑组织图像,这是我们后来才意识到的疏漏。
对于第二个问题,我们在皮层区域观察到,标记抗体确实与IBA1阳性的小胶质细胞共定位,而且这些细胞的磷酸化DAP12(pDAP12)信号明显增强。DAP12是TREM2的下游衔接蛋白,其磷酸化正是TREM2信号被激活的直接证据。这里还有一个很好的内部对照:换成同种型对照抗体后,它同样能结合到小胶质细胞表面——这很可能是因为小胶质细胞表面的Fc受体本身就能非特异性结合抗体的Fc段——但并不能诱导pDAP12信号升高。这说明AL002a诱导的信号激活是特异性的,依赖于它结合TREM2茎部这一特定表位,而不是抗体与细胞的非特异性接触就能实现的。
至此我们确认:**AL002a确实能到达脑内,并以TREM2依赖的方式特异性激活小胶质细胞。**
***
## 2. 慢性给药实验:能否清除已形成的钙化?
验证了工具的有效性之后,下一步自然是检验它的治疗效果。实验设计是:从2月龄开始每周给药一次,连续8周,到4月龄结束——之所以选择4月龄作为终点,是因为我们此前已经详细描绘过这个年龄段小鼠钙化负荷的基线特征,便于横向比较。
我们设置了几个层面的读出指标:
1. 小胶质细胞在钙化灶中**沉积组织蛋白酶K(cathepsin K)** 的情况——我们此前已经证明,这一沉积过程是TREM2依赖性的,在TREM2杂合或敲除小鼠中会显著减少;
2. 钙化负荷本身,通过血管标志物联合骨桥蛋白(osteopontin)染色来量化;
3. 钙化灶的矿物质组成;
4. 小胶质细胞增殖情况;
5. 钙化相关小胶质细胞(calcification-associated microglia, CAM)标志物,如CLEC7A、CD68的表达变化。
结果概括起来是这样的:AL002a治疗组钙化灶中组织蛋白酶K的沉积整体呈现升高趋势,而同种型对照组的组织蛋白酶K信号波动非常大、个体差异极大——这种高变异性也正是这一升高趋势未能达到统计学显著性的原因之一。但是,这是最关键、也最令人失望的一点:无论是钙化的数量、大小,还是它的矿物质组成(两组都是磷酸钙),==抗体治疗都没有带来任何改善==。我们也没有观察到小胶质细胞增殖的变化,这一点与阿尔茨海默病模型中报道的现象不同;CAM标志物CLEC7A、CD68的表达也没有差异。
所以我们的结论是:单纯增强TREM2活性,不足以让小胶质细胞真正清除已经形成的钙化。说实话,这是相当令人沮丧的结果。
***
## 3. 小胶质细胞究竟能否清除钙化?—— 旁证与开放问题
这个阴性结果自然引出一个更根本的问题:小胶质细胞到底有没有能力清除钙化?
一个很好的参照系是破骨细胞。破骨细胞清除骨基质的方式,是先在"封闭区"(sealed zone)将局部酸化、溶解羟基磷灰石,再依赖组织蛋白酶K——它是主要的I型胶原降解酶——降解裸露出来的胶原纤维。也就是说,酸化与蛋白水解是两个独立却缺一不可的步骤。而我们的抗体治疗只提高了组织蛋白酶K的沉积,却没有触及"酸化"这一环节,这或许正是钙化未能被有效清除的原因之一。
尽管这次抗体实验的结果不理想,仍有几条独立的证据线索提示,小胶质细胞原则上确实具备清除钙化的能力。第一,先天性寨卡病毒感染的新生儿出生时会有脑内钙化——这本身是该病毒感染的诊断标准之一,因为出生时病毒往往早已被清除——但这些钙化灶会随时间推移逐渐消退。我们并不知道这个过程是否由小胶质细胞介导,但它们显然是一个很有力的候选者。第二,也是更直接的证据:目前有两项即将发表的研究——我们实验室是其中一项的共同作者——显示缺失小胶质细胞的小鼠会发展出脑内钙化,而移植小胶质细胞可以使这些钙化消退。这几乎是最直接的因果证据了。
这也带来了两个悬而未决的问题:小胶质细胞是否需要像破骨细胞一样,主动酸化细胞外微环境?具体的分子机制又是什么?毕竟我们已经知道,单纯沉积组织蛋白酶K是不够的。
***
## 4. XPR1杂合子小鼠模型:钙化表型与微血管病
接下来我想很快介绍一下我们从XPR1杂合子小鼠身上获得的数据——这部分内容大多已经发表,我会讲得快一些。
XPR1是一个很有意思的基因,被认为是哺乳动物体内唯一已知的无机磷酸盐外排转运体。让我们格外感兴趣的是,2014年一项斑马鱼研究发现,XPR1的同源基因是组织驻留巨噬细胞——包括脑内小胶质细胞——分化所必需的。而在小鼠中,XPR1的完全敲除是胚胎致死的。与Melanie Greter实验室合作后我们确认,XPR1杂合小鼠的小胶质细胞发育是正常的——这一点上小鼠和斑马鱼并不一致。但即便小胶质细胞发育正常,XPR1杂合小鼠依然会发展出血管钙化。
这部分工作主要由我以前的博士后Upasana完成。她发现,这些XPR1杂合小鼠会在丘脑区域出现钙化,我们用骨桥蛋白染色结合全脑透明化成像技术将其可视化,可以看到非常局限的血管钙化。与Flora实验室合作后我们还发现,在钙化刚开始出现时,这些小鼠血浆中的钙、磷水平并没有变化——这与其他模型以及人类患者的情况一致。钙化会随年龄增长而进展:受累血管数量增多,钙化灶本身也变大,而且它们非常特异地长在小动脉上。
在组织学上,这些钙化灶被激活的星形胶质细胞和小胶质细胞包裹。一个我们觉得格外有意思的现象,是钙化发展存在明显的性别差异——雌性小鼠发展出的钙化明显小于雄性。我们还通过三维成像和IV型胶原染色确认,这些钙化灶完整地被血管基底膜包裹,提示它们发生在血管平滑肌层内部。
除了钙化本身,我们还观察到一种独立的血管病理改变——微血管病(microangiopathy):不只是小动脉,连毛细血管的基底膜都出现异常增厚,内皮细胞肿胀,尽管毛细血管本身并不发生钙化。这些内皮细胞还开始表达ICAM-1——这是内皮炎症的标志性分子之一。有意思的是,类似的微血管病变此前也曾在PFBC患者的皮肤活检中被报道过。这提示,尽管Pdgfb和Xpr1这两个小鼠模型都会出现血管钙化,但在钙化发生的具体血管类型(毛细血管还是小动脉)以及伴随的病理改变上,存在明显差异。
最后简单提一点新数据:当XPR1杂合小鼠同时只携带一个TREM2功能等位基因时,钙化会提前出现——正常XPR1杂合小鼠在4月龄时通常还看不到钙化,但在TREM2单倍剂量不足的背景下,4月龄时钙化已清晰可见,且程度更明显。
***
## 5. 吞噬功能评估:骨髓来源巨噬细胞实验
那么,这些PFBC模型里的巨噬细胞或小胶质细胞,吞噬能力本身是否正常?这是我们接下来想弄清楚的问题。由于原代小胶质细胞很难分离和培养,Sucheta改用骨髓来源巨噬细胞(bone marrow-derived macrophage, BMDM)作为替代模型——从骨髓提取细胞并诱导分化,再检测它们吞噬荧光标记羟基磷灰石的能力。这里使用的探针是标记了AlexaFluor 647的利塞膦酸盐(risedronate),它能特异性结合羟基磷灰石晶体。通过成像流式细胞术,可以清楚地看到巨噬细胞确实把这些晶体内化了。
这里有一个方法学上的局限需要说明:在这种体外结合实验中,很难完全区分"特异性内吞"和"非特异性粘附"。即便如此,当她定量比较吞噬阳性细胞的比例时,发现PDGFB突变和XPR1杂合小鼠来源的BMDM,与对照组相比并没有差异——也就是说,这些细胞本身的吞噬能力是完整的。
这个结果其实很关键,因为它把问题的范围缩小了:如果吞噬这一步本身没有缺陷,那么钙化持续存在的原因,更可能出在识别、募集或局部微环境层面,而不是巨噬细胞"根本吞不下"这个最基础的功能环节。
***
## 6. 电镜超微结构分析:TREM2缺失后小胶质细胞为何"看不见"钙化灶
最后我想展示一些其实我们早就该做、却拖到现在才做的数据。阿尔茨海默病领域已有研究表明,在缺乏TREM2的情况下,小胶质细胞不能很好地包裹淀粉样斑块。那么在我们的模型里是否也是如此?我们构建了Pdgfb<sup>ret/ret</sup>与Trem2敲除的双突变小鼠,并对钙化灶区域进行了透射电镜观察。
我要先说明,由于时间关系,这些图像还没有经过精细的排版整理,大家看到的基本是原始截图,请多包涵。图中展示的是两个典型例子,都是附着在血管上的钙化灶:一个来自TREM2野生型背景,另一个来自TREM2完全缺失的背景。
在TREM2野生型背景下,凭经验我们已经很容易识别出小胶质细胞——它们清晰地包绕在钙化灶周围,这是我们过去反复见过的典型形态。但在TREM2缺失的背景下,情况明显不同:我们几乎看不到完整的小胶质细胞包绕钙化灶。虽然能辨认出一些颜色略深、疑似小胶质细胞突起的结构穿过视野,但看不到完整的细胞体。其中一张图里,甚至能看到某种非常贴近的接触,让人不禁猜测这是否是吞噬发生的部位——但坦白说,仅凭形态学很难下定论。图中还能看到状态明显不佳的星形胶质细胞。
综合来看,这提示在TREM2缺失的情况下,小胶质细胞可能根本无法有效识别、进而包裹这些钙化灶——这是我们接下来必须深入研究的问题。
***
## 7. 开放性问题与总结
最后,我想以几个开放性问题结束这部分内容。
第一,SLC20A2、XPR1和PDGFRB这几类基因的突变,是否通过不同的机制导致血管钙化?从目前的小鼠模型看,PDGFB突变小鼠是毛细血管钙化,而XPR1杂合小鼠是小动脉钙化——这已经提示,即便同属PFBC的致病基因,其下游机制也可能并不完全相同。
第二,一个同样令人困惑的问题是:为什么恰恰是脑深部区域的血管容易发生钙化,而皮层血管却几乎不受累?
第三,也是对我们而言最核心的问题:血管钙化究竟是原发性家族性脑钙化(PFBC)中导致神经退行性变的直接原因,还是仅仅是某种潜在失衡状态的旁观性信号?
这些问题,正是我们实验室接下来要持续探索的方向。最后,我想感谢这些年来在成像、流式细胞术和电镜方面给予我们帮助的所有合作者,也要特别感谢实验室里的Yvette、Upasana,尤其是Sucheta——他们是这些小鼠模型工作背后的主要贡献者。谢谢大家。
***
# English Script
Our earlier work had already established that microglia are not passive bystanders in vascular calcification: whether we depleted microglia pharmacologically with a CSF1R inhibitor, or removed the TREM2 receptor that microglia need for their survival and function, calcification burden in the Pdgfb<sup>ret/ret</sup> model got significantly worse either way. That naturally raises a more ambitious, and more therapeutically relevant, question — if impairing microglial function makes calcification worse, could we flip that logic around? Could boosting TREM2 signaling and activating microglia actually help them clear calcification that has already formed?
***
## 1. Validating AL002a: Does It Reach the Brain and Engage Microglia?
To answer that question, we needed a tool that could specifically activate TREM2. Sucheta used an antibody developed by Alector, called AL002a — it binds the membrane-proximal "stalk" region of the TREM2 extracellular domain and activates downstream signaling by inducing receptor clustering. In short, it's an agonistic, activating antibody.
Before testing efficacy, though, two things had to be confirmed: does this antibody actually reach the brain, and once there, does it truly engage and activate microglia?
For the first question, we again used the Pdgfb<sup>ret/ret</sup> model — as mentioned earlier, this model has a leaky blood-brain barrier because of deficient pericyte coverage. We administered a fluorescently labeled version of the antibody and examined its distribution. We saw signal throughout the entire brain, with stronger signal in cortical regions — consistent with the fact that BBB leakage is more pronounced cortically in this model. I should be upfront, though: we're missing an important negative control here — brain tissue from a mouse that never received the labeled antibody — an oversight we only caught afterward.
For the second question, we found that in cortical regions, the labeled antibody colocalized with IBA1-positive microglia, and that these cells showed a clear increase in phospho-DAP12 (pDAP12) signal. DAP12 is the adaptor protein downstream of TREM2, and its phosphorylation is direct evidence that TREM2 signaling has switched on. There's a nice built-in control here too: the isotype control antibody also bound to microglia — most likely nonspecific engagement via Fc receptors on the microglial surface — but it did not induce a pDAP12 increase. That tells us the signaling activation we see with AL002a is specific: it depends on binding that particular stalk epitope on TREM2, not simply on an antibody sticking to the cell.
So at this point we had confirmed: AL002a does reach the brain, and it specifically activates microglia in a TREM2-dependent manner.
***
## 2. Chronic Antibody Treatment: Can It Clear Existing Calcification?
Once we'd validated the tool, the next logical step was to test its therapeutic effect. The design was straightforward: weekly dosing from two months to four months of age — eight doses in total. We chose four months as the endpoint because we already had a well-characterized baseline of calcification burden at that age from our earlier work, which let us benchmark the treated animals against it.
We built in readouts at several levels: first, microglial deposition of cathepsin K within calcifications — something we'd previously shown to be TREM2-dependent, reduced in TREM2 heterozygous or knockout mice; second, calcification load itself, quantified using a vascular marker together with osteopontin staining; third, the mineral composition of the calcifications; fourth, microglial proliferation; and fifth, expression of calcification-associated microglia (CAM) markers such as CLEC7A and CD68.
Here's what we found. The AL002a-treated group showed an overall upward trend in cathepsin K deposition within calcifications — and interestingly, the isotype-treated group showed such large inter-individual variability in that signal that this trend didn't reach statistical significance. But — and this is the key, and frankly disappointing, part — neither the number nor the size of calcifications improved, and the mineral composition was unchanged in both groups, still calcium phosphate. We also saw no change in microglial proliferation, which contrasts with what's been reported in Alzheimer's models, and no difference in CAM markers like CLEC7A or CD68.
So our conclusion was this: simply boosting TREM2 activity is not enough to enable microglia to actually clear calcification that has already formed. Honestly, that was a fairly disappointing result for us.
***
## 3. Can Microglia Actually Resolve Calcification? Supporting Evidence and Open Questions
That negative result naturally raises a more fundamental question: are microglia even capable of clearing calcification in the first place?
Osteoclasts are a useful reference point here. To resorb bone matrix, osteoclasts first acidify a sealed zone to dissolve hydroxyapatite, and only then degrade the exposed collagen fibers using cathepsin K — the principal collagen-I-degrading enzyme. Acidification and proteolysis are two separate but equally essential steps. Our antibody treatment only boosted cathepsin K deposition — it never touched the acidification step — and that may be exactly why calcification wasn't cleared.
Even though our antibody experiment came up short, several independent lines of evidence suggest microglia should, in principle, be capable of resolving calcification. First: infants born with congenital Zika virus infection present with brain calcifications at birth — actually a diagnostic criterion for the infection, since by the time the baby is born the virus itself is long gone — but those calcifications resolve over time. We don't know for certain whether microglia drive that resolution, but they're an obvious candidate. Second, and more directly: two studies now in press — my lab is a co-author on one of them — show that mice lacking microglia altogether develop brain calcifications, and that transplanting microglia back in causes those calcifications to resolve. That's about as close to direct causal evidence as we're going to get.
This leaves two open questions: do microglia need to actively acidify the extracellular space, the way osteoclasts do? And what is the actual molecular mechanism? Because we already know that simply depositing cathepsin K isn't sufficient on its own.
***
## 4. The Xpr1 Heterozygous Model: Calcification Phenotype and Microangiopathy
Now I'd like to briefly walk through data from our Xpr1 heterozygous mice — most of this is already published, so I'll move through it quickly.
Xpr1 is a fascinating gene, thought to be the only known inorganic phosphate exporter in mammals. What made it especially interesting to us was a 2014 zebrafish study showing that the Xpr1 homolog is required for the differentiation of tissue-resident macrophages, including microglia in the brain. In mice, however, full knockout of Xpr1 is embryonic lethal. Working with Melanie Greter's group, we confirmed that Xpr1 heterozygous mice do develop microglia normally — so mice and zebrafish diverge on that point. But even with normal microglial development, Xpr1 heterozygotes still go on to develop vascular calcification.
This work was largely carried out by my former postdoc, Upasana. She found that these Xpr1 heterozygous mice develop calcification specifically in the thalamus, which we visualized using osteopontin staining combined with whole-brain clearing and imaging — and what you see is very localized vascular calcification. Working with Flora's group, we also showed that plasma calcium and phosphate levels are unchanged at the point when these calcifications first appear — consistent with what's seen in other models and in human patients. The calcifications progress with age: more vessels become calcified, the calcifications themselves get bigger, and critically, they sit specifically on arterioles.
Histologically, these calcifications are enclosed by activated astrocytes and microglia. One finding we found particularly interesting is a clear sexual dimorphism — females develop substantially smaller calcifications than males. Using 3D imaging and collagen IV staining, we also confirmed that these calcifications are fully enclosed within the vascular basement membrane, suggesting they arise within the vascular smooth muscle layer itself.
Beyond the calcification itself, we found an independent vascular pathology — microangiopathy: abnormal thickening of the basement membrane not just at arterioles but also at capillaries, along with swollen endothelial cells, even though capillaries themselves never calcify. These endothelial cells also began expressing ICAM-1, a hallmark of endothelial inflammation. Interestingly, similar microangiopathy has previously been reported in skin biopsies from PFBC patients. This tells us that although the Pdgfb and Xpr1 models both develop vascular calcification, they differ meaningfully — in which vessel type calcifies, capillaries versus arterioles, and in the additional pathology that accompanies it.
Let me end this section with one more piece of new data: when Xpr1 heterozygous mice also carry only one functional TREM2 allele, calcification appears earlier. Normally, four-month-old Xpr1 heterozygotes show no visible calcification — but on a TREM2-haploinsufficient background, calcification is already clearly visible, and more pronounced, at that same four-month timepoint.
***
## 5. Assessing Phagocytic Competence: A Bone-Marrow-Derived Macrophage Assay
So — are the macrophages and microglia in these PFBC models actually competent to phagocytose in the first place? That's the next question we wanted to answer. Since primary microglia are difficult to isolate and culture, Sucheta used bone-marrow-derived macrophages (BMDMs) as a substitute — extracting bone marrow, differentiating it in culture, and then testing the cells' ability to phagocytose fluorescently labeled hydroxyapatite. The probe here was risedronate conjugated to AlexaFluor 647, which binds specifically to hydroxyapatite crystals. Using imaging flow cytometry, she could clearly see that the macrophages had indeed internalized these crystals.
One methodological caveat is worth flagging: in an in vitro binding assay like this, it's genuinely hard to fully distinguish specific internalization from nonspecific surface adhesion. Even so, when she quantified the percentage of phagocytosis-positive cells, BMDMs from both the Pdgfb mutant and the Xpr1 heterozygous mice showed no difference compared with controls — meaning their basic phagocytic machinery is intact.
That result actually narrows things down considerably. If phagocytosis itself isn't defective, then whatever allows calcification to persist more likely lies at the level of recognition, recruitment, or the local microenvironment — not at the most basic level of whether these cells can physically engulf material at all.
***
## 6. Ultrastructural Analysis: Why Do Microglia "Miss" Calcifications Without TREM2?
Let me close with some data that, honestly, we probably should have generated a long time ago. Work in the Alzheimer's field has shown that in the absence of TREM2, microglia fail to properly encase amyloid plaques. So we asked: does the same thing happen in our model? We generated Pdgfb<sup>ret/ret</sup> mice crossed onto a Trem2-knockout background, and examined the calcified regions by transmission electron microscopy.
I want to be upfront that, because of time constraints, these images haven't yet been cleaned up into polished figures — what you're seeing are essentially raw screenshots, so please bear with us. Shown here are two representative examples, both calcifications sitting on a vessel: one from a TREM2 wild-type background, the other from a TREM2-null background.
In the TREM2 wild-type setting, we can now recognize microglia quite readily from experience — they clearly wrap around the calcification, the typical morphology we've seen over and over. In the TREM2-null setting, though, things look strikingly different: we could barely find intact microglia encircling the calcifications at all. We could make out a slightly darker structure that looks like it might be a microglial process running through the field, but no clear cell body. In one image there's even a very close point of contact that makes you wonder whether phagocytosis might be happening there — but honestly, morphology alone can't settle that. You can also see astrocytes here that clearly look stressed.
Taken together, this suggests that without TREM2, microglia may simply be unable to properly recognize — and therefore encase — these calcifications. That's something we now need to investigate much more carefully.
***
## 7. Open Questions and Closing Remarks
Let me close this talk with a few open questions.
First: do mutations in SLC20A2, XPR1, and PDGFRB actually drive vascular calcification through distinct mechanisms? Based on our mouse models so far, Pdgfb mutants calcify at the capillary level, while Xpr1 heterozygotes calcify at arterioles — which already tells us that, even among genes that all cause PFBC, the downstream mechanisms may not be the same.
Second, an equally puzzling question: why are vessels in deep brain regions so prone to calcification, while cortical vessels are largely spared?
Third, and this is really the central question for us: is vascular calcification actually driving neurodegeneration in primary familial brain calcification (PFBC), or is it simply a bystander — a signal of some underlying imbalance rather than a cause in itself?
These are the questions we'll keep pursuing going forward. I'd like to close by thanking all our collaborators over the years who helped with imaging, flow cytometry, and electron microscopy, and especially the members of my lab — Yvette, Upasana, and above all Sucheta, who have driven the work on these mouse models. Thank you.