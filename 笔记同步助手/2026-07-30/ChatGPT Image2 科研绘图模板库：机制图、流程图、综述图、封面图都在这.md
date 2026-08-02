---
author: 硅潮
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzI0MDEyNzY0NQ==&mid=2648539856&idx=1&sn=5e21c7dff288f634077169d940fbf806&chksm=f0680b6a4624fd28ac8495fbc8415b8a481356d6f0ca393f86085008415040ba1e117618318c&mpshare=1&scene=1&srcid=0730PUn3Pi07iapIp3pHz9Pt&sharer_shareinfo=68a2f5a10f5234afaf94a4d12a7f8e86&sharer_shareinfo_first=68a2f5a10f5234afaf94a4d12a7f8e86#rd
saved: 2026-07-30 13:15:15
tags:
  - 笔记同步助手
id: 5c2b3c8d-c3f9-4d44-94e2-41763a9ae1c0
---

公众号名称：硅潮

作者名称：硅潮

发布时间：2026-04-26 19:36

![[笔记同步助手/images/12e2b2d51edcd78f6cc925f03158d501_MD5.gif]]

![[笔记同步助手/images/043ab156f1821e91364906b6af51aec8_MD5.png]]

嗨大家好，这里是硅潮。

很多人用 ChatGPT Image2 做科研图，画面会漂亮，但不像论文图。

问题通常不在模型，而在提示词：只写研究背景，没有写清楚图的类型、机制链条、布局方式和视觉限制。

所以这篇不绕。硅潮按科研图最常用的场景，整理了 15 组 ChatGPT Image2 提示词。每组都有适用场景、可直接改的 prompt、替换建议和一张示例图。

使用时只记住一个顺序：先选图型，再写机制链条，最后补布局和限制。

![[笔记同步助手/images/5fb337d3ede671834e3cc4e74f3c584d_MD5.png]]

  

## 01 论文图形摘要

读者痛点：论文需要一张总览图，但摘要一塞进去就变成元素拼贴。

适用场景：适合论文 graphical abstract、项目汇报第一页、基金本子研究思路图。

![[笔记同步助手/images/a83ea0df6a20782eca2f7d1218c6fdc4_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a publication-ready scientific graphical abstract for ChatGPT Image2. Topic: a new therapeutic strategy that converts an inactive prodrug into an active treatment inside diseased tissue. Show the complete story in one clean left-to-right visual chain: systemic delivery, target-tissue accumulation, cellular entry, local activation, therapeutic action, and final improvement of the disease microenvironment. Use a white background, clear arrows, two small zoom-in windows, and a tidy journal-style vector schematic. Keep the main objects visually distinct: carrier, target tissue, cell interior, activation signal, and therapeutic outcome. Use blue and teal as the main palette, with warm orange only for the activation event. Avoid dense text, decorative clutter, fake labels, photorealistic people, and poster-like effects.

替换建议：把研究对象、关键过程、最终结果换成自己的课题；如果图里需要中文，建议后期手动加字。

> 硅潮提醒：图形摘要先画“故事线”，再画细节。读者先看懂发生了什么，才会在意它漂不漂亮。

## 02 实验流程图 / 方法路线图

读者痛点：实验步骤很多，组会里讲三分钟，别人还是不知道你先做了什么。
适用场景：适合 Methods 图、课题路线、开题报告、横向流程总览。

![[笔记同步助手/images/42eb85acc3ec685dd6ef0fb52dc57c06_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a clean scientific method workflow illustration for ChatGPT Image2. Show a complete research pipeline from left to right with six clearly separated stages: sample collection, material or reagent preparation, in vitro validation, animal or system-level testing, imaging or measurement, and final data analysis. Each stage should be represented by a simple mini-scene or icon-like scientific object, connected by arrows in a single horizontal flow. Use a white background, blue-gray palette, small orange accents for key checkpoints, and balanced spacing. Make it suitable for a paper methods figure or a lab meeting slide. Avoid long text blocks, messy equipment piles, irrelevant decoration, tiny unreadable labels, and overly dramatic lighting.

替换建议：把 6 个阶段替换为你的真实实验步骤；每一步只保留一个最有辨识度的视觉物件。

> 硅潮提醒：流程图最怕“每格都很精致，但顺序看不出来”。先把方向和阶段固定住。

## 03 核心机制示意图

读者痛点：机制不是把分子、细胞、箭头都放上去，而是让因果关系一眼可见。

适用场景：适合信号通路、药物作用机制、调控网络、因果链说明。

![[笔记同步助手/images/5b43dd6abfcca59a9eecfab8f9d98d77_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a publication-ready scientific mechanism schematic for ChatGPT Image2. Show how an external intervention changes a central biological pathway and produces a measurable phenotype. Use a center-focused layout: the main cell or system in the middle, the upstream trigger on the left, the key regulatory node in the center, downstream signaling events on the right, and the final outcome at the bottom. Use arrows for activation, blunt-end symbols for inhibition, and two zoom-in windows for molecular details. Keep the style clean, professional, and journal-ready, with a pale background, blue-green main colors, and red accents only for inhibited or damaged processes. Avoid random molecules, excessive labels, decorative gradients, and unclear arrow directions.

替换建议：把“刺激因素、核心节点、下游过程、最终表型”换成自己的机制。

> 硅潮提醒：机制图要先交代谁影响谁，再决定画多少细节。

## 04 细胞内作用机制图

读者痛点：线粒体、溶酶体、细胞核、ROS、凋亡一多，画面马上乱。

适用场景：适合亚细胞定位、细胞死亡、药物释放、细胞器损伤。

![[笔记同步助手/images/a6db9691e506a18cb81c4074e941a22d_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a biomedical intracellular mechanism illustration for ChatGPT Image2. Show a therapeutic agent entering a diseased cell, escaping from vesicles, locating to a specific organelle, triggering organelle stress, and causing a final cellular response. Use a large central cell cutaway with visible organelles, plus two magnified detail windows: one for intracellular trafficking and one for organelle-level action. Use clean vector-like biomedical rendering, soft white background, blue and cyan cell structures, and orange-red highlights only for stress signals and final cell response. Use arrows to show the causal sequence from uptake to organelle targeting to outcome. Avoid crowded organelles, unreadable text, random decorative particles, and cartoon exaggeration.

替换建议：把目标细胞器和事件链替换掉，例如线粒体、溶酶体、细胞核、内质网。

> 硅潮提醒：细胞内图的关键不是“画一个细胞”，而是画清楚药物到了哪里，那里发生了什么。

## 05 肿瘤免疫微环境图

读者痛点：免疫细胞关系复杂，只写“增强免疫”很难生成靠谱图。

适用场景：适合肿瘤免疫、炎症微环境、免疫调节材料、细胞互作机制。

![[笔记同步助手/images/b3f4eaefd52626bcf1667cdd7712195d_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a scientific tumor immune microenvironment schematic for ChatGPT Image2. Place a tumor tissue region in the center and show multiple immune-cell interactions around it. Illustrate a treatment platform remodeling the microenvironment by reducing suppressive macrophage behavior, activating antigen presentation, increasing cytotoxic T-cell infiltration, and improving tumor-cell killing. Use a center-focused composition with surrounding zoom-in panels for cell-cell communication. Use clean biomedical illustration style, bright background, blue-green base colors, and orange-red highlights for immune activation and tumor killing. Use clear arrows and inhibition symbols to show regulatory relationships. Avoid generic cell clusters, uncontrolled clutter, fake text labels, and overly realistic pathology imagery.

替换建议：把 M1/M2、树突细胞、T 细胞等替换成你的真实细胞群和调控方向。

> 硅潮提醒：微环境图要画“关系网络”，不是画一堆细胞合影。

![[笔记同步助手/images/b5387b96b0c20fd57c668432f993985c_MD5.png]]

## 06 药物递送 / 纳米载体图形摘要

读者痛点：纳米医学图最常见的失败，是载体画得很美，但治疗路径断了。

适用场景：适合纳米药物、靶向递送、响应释放、组合治疗。

![[笔记同步助手/images/2751e9e11401209d5ef95e27e0afa07c_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a publication-ready drug delivery graphical abstract for ChatGPT Image2. Show a smart nanocarrier carrying therapeutic cargo through the body, accumulating at a target lesion, entering diseased cells, responding to a local trigger, releasing the cargo, and producing a therapeutic outcome. Use a clear left-to-right pathway: injection or administration, circulation, target accumulation, cell uptake, triggered release, and final response. Add one zoom-in view of the carrier structure and one zoom-in view of intracellular release. Use a clean journal schematic style, white background, blue and teal palette, and red-orange only for release and treatment effects. Avoid excessive nanoparticles, vague arrows, crowded organs, readable fake words, and flashy poster aesthetics.

替换建议：替换载体类型、靶组织、释放触发条件、治疗结果。

> 硅潮提醒：递送图要按“递送路径 + 细胞内释放 + 结果输出”写。

## 07 核酸递送 / 基因编辑图

读者痛点：siRNA、mRNA、CRISPR 图不能只画“送到了”，真正难点在细胞内转运。

适用场景：适合 LNP、AAV、siRNA、mRNA、CRISPR、基因沉默或表达。

![[笔记同步助手/images/6833143f434f7ba1b124305d04e008e0_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a scientific nucleic-acid delivery graphical abstract for ChatGPT Image2. Show a delivery vehicle carrying siRNA, mRNA, or CRISPR components to a target tissue, entering cells by endocytosis, escaping from endosomes, releasing nucleic acids into the cytoplasm or nucleus, and producing gene silencing, protein expression, or genome editing. Use a left-to-right layout with a large cellular zoom-in section in the middle. Make intracellular trafficking visually explicit with vesicles, escape arrows, released nucleic acid strands, and a final gene-regulation outcome. Use a clean biomedical schematic style, white background, blue-green palette, and orange highlights for nucleic-acid release. Avoid fake readable sequences, dense text labels, generic DNA decoration, and unclear compartments.

替换建议：替换核酸类型、载体类型、递送器官、最终基因调控结果。

> 硅潮提醒：这类图要把内吞、内体逃逸、胞质释放或入核说清楚。

## 08 程序性细胞死亡机制图

读者痛点：凋亡、焦亡、铁死亡、自噬涉及事件很多，不先分层就会糊成氧化应激大杂烩。

适用场景：适合 ferroptosis、pyroptosis、apoptosis、autophagy、necroptosis 相关论文图。

![[笔记同步助手/images/dcbc590b9577abe136a6f04f642a678e_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a publication-ready programmed cell death mechanism schematic for ChatGPT Image2. Focus on a treatment-induced cell death pathway in diseased cells. Show the trigger entering the cell, the key molecular events, organelle or membrane damage, and the final cell-death phenotype. Use a structured layout with the cell as the main scene and three surrounding zoom-in panels: upstream trigger, molecular cascade, and morphological outcome. Use arrows, inhibition marks, and damage highlights to show logic. Use a pale background, blue-green cellular structures, and orange-red accents for oxidative damage, membrane rupture, or apoptotic bodies. Avoid mixing unrelated death pathways, excessive molecule names, fake labels, and chaotic particle effects.

替换建议：把死亡方式、触发事件、关键分子、形态结果换成自己的方向。

> 硅潮提醒：死亡机制图一定要写“触发因素 + 分子过程 + 最终表型”。

## 09 抗菌 / 生物膜清除机制图

读者痛点：抗菌图不能只画材料碰到细菌，要画材料怎么破膜、产 ROS 或清除生物膜。

适用场景：适合抗菌材料、纳米酶、光热抗菌、光动力抗菌、生物膜清除。

![[笔记同步助手/images/f49d1a7d7311be1d1da67c0ff95062d7_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a scientific antibacterial mechanism illustration for ChatGPT Image2. Show a functional antimicrobial material interacting with bacteria and biofilm. The mechanism should include bacterial membrane disruption, reactive species generation, biofilm matrix loosening, and final bacterial death. Use a center-focused composition with a bacterial biofilm cluster as the main object, the material approaching from one side, and zoom-in panels showing membrane damage and matrix breakdown. Use a clean professional biomedical schematic style, light background, blue-green palette, and red-orange highlights for damage and killing events. Use arrows and small magnified details to clarify the pathway. Avoid horror imagery, excessive blood-like colors, fake labels, random particles, and overly cartoon bacteria.

替换建议：替换细菌类型、材料作用方式、外部刺激和杀菌结果。

> 硅潮提醒：把“病原体 + 作用方式 + 杀菌结果”放在同一张图里。

## 10 材料化学 / 催化机制图

读者痛点：材料图的重点不是“材料长得酷”，而是界面、电子、空穴、反应路径能不能看懂。

适用场景：适合光催化、电催化、异质结、纳米酶、表面反应机制。

![[笔记同步助手/images/f299e7700962abc5f7349083f483398f_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a scientific materials-chemistry mechanism schematic for ChatGPT Image2. Show a heterostructured catalyst with two connected material phases forming an active interface. Illustrate energy input, charge separation, directional electron and hole migration, surface reactive-species generation, and conversion of reactants into products. Use a layered composition: energy input at the top, material interface in the center, reaction pathway at the bottom, and a zoom-in panel for atomic or nanoscale interface details. Use a precise journal-style schematic, light background, blue-purple material bodies, yellow energy input, and orange-red reaction highlights. Avoid decorative crystals without mechanism, vague glow effects, fake equations, dense labels, and unclear arrow directions.

替换建议：替换材料结构、能量输入、载流子迁移、反应物和产物。

> 硅潮提醒：材料机制图要优先写结构层级和能量流向。

## 11 能源器件 / 电池界面机制图

读者痛点：电池、催化、电极图常常输在“界面过程没画出来”。

适用场景：适合锂电、钠电、固态电池、电极界面、SEI/CEI、离子传输。

![[笔记同步助手/images/83dae2f45719186cf423e64957d9c770_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a publication-ready energy-device interface schematic for ChatGPT Image2. Show an electrode-electrolyte interface in a rechargeable battery, emphasizing ion transport, electron pathways, stable interphase formation, and suppression of unwanted side reactions. Use a cross-sectional layout: electrode material on one side, electrolyte on the other, a thin protective interphase between them, and directional ion movement through the interface. Add a small zoom-in view showing nanoscale surface structure and interphase stability. Use clean scientific rendering, pale background, blue-gray materials, green ions, and orange highlights for improved reaction pathways. Avoid fake equations, brand logos, explosive imagery, excessive labels, and confusing 3D clutter.

替换建议：替换电池体系、电极材料、离子类型、界面膜和性能结果。

> 硅潮提醒：能源器件图要让读者看到离子怎么走、界面怎么变、性能为什么提升。

![[笔记同步助手/images/d6c79a9abd6c18004aaed746e3559c33_MD5.png]]

## 12 多组学 / 单细胞整合图

读者痛点：组学图很容易变成数据库图标堆叠，真正要画的是数据怎么汇聚成机制。

适用场景：适合单细胞、多组学、空间组学、转录组/蛋白组/代谢组联合分析。

![[笔记同步助手/images/f9c9d10ee821ac99d8e3d990ac0d4cf4_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a scientific multi-omics integration workflow illustration for ChatGPT Image2. Show multiple data layers including single-cell transcriptomics, proteomics, metabolomics, spatial imaging, and clinical or phenotype data flowing into a central computational integration module. From that module, show discovery of cell states, pathway changes, biomarkers, and experimental validation. Use a clear funnel or hub-and-spoke layout with data layers on the left, computational integration in the center, and biological interpretation plus validation on the right. Use a modern clean scientific infographic style, white background, blue and violet palette, and small green accents for validated findings. Avoid fake charts with unreadable numbers, excessive text, generic cloud icons, and messy dashboard aesthetics.

替换建议：替换数据类型、分析方法、关键发现和验证方式。

> 硅潮提醒：多组学图要画“数据层 → 计算整合 → 生物解释 → 实验验证”。

## 13 AI4Sci 工作流图

读者痛点：AI4Sci 图不能只画一个大脑和几个芯片，要画出模型如何进入科研闭环。

适用场景：适合 AI 辅助科研、模型筛选、分子/材料预测、实验验证闭环。

![[笔记同步助手/images/2e34ea9b92dfa3d433451a393bd3423e_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a clean AI4Sci research-loop illustration for ChatGPT Image2. Show a scientific discovery workflow where experimental data and literature knowledge enter an AI model, the model predicts candidate molecules or materials, researchers select promising candidates, experiments validate them, and feedback improves the next model iteration. Use a circular closed-loop composition with four major zones: data, model, prediction, validation. Include scientific visual elements such as molecular structures, material lattices, lab instruments, and evaluation plots, but keep them simplified and readable. Use a white or light-blue background, technology-blue palette, and green highlights for validated candidates. Avoid humanoid robots, sci-fi clichés, fake UI text, brand logos, and overcomplicated circuitry.

替换建议：替换数据类型、模型任务、实验平台、反馈指标。

> 硅潮提醒：AI4Sci 图最好画成闭环：数据进模型，预测回实验，实验再校正模型。

## 14 综述文章总览图

读者痛点：综述图不是把所有方向都塞进去，而是给读者一张领域地图。

适用场景：适合 review、基金背景、开题综述、领域路线图。

![[笔记同步助手/images/fb764d973754e6fc81b9d2f40a496d3f_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a review-article overview map for ChatGPT Image2. Topic: a rapidly developing scientific field with multiple research directions, technical strategies, applications, and open challenges. Use a clean radial or layered map composition: the central research topic in the middle, major branches around it, application areas on the outer ring, and future challenges at the bottom as small visual modules. Use abstract but scientifically plausible icons for methods, mechanisms, applications, and limitations. Keep the figure suitable for a review paper opening graphic, with strong hierarchy, generous spacing, and a calm professional palette of blue, teal, and soft purple. Avoid dense text, random decorative icons, fake labels, and a marketing-poster look.

替换建议：替换中心主题、分支方向、评价维度和未来挑战。

> 硅潮提醒：综述总览图要让读者知道“这个领域被分成哪几块”。

## 15 期刊封面风格科研图

读者痛点：封面图不是机制图变花，而是一个主视觉带着科学解释性。

适用场景：适合投稿封面、项目主视觉、答辩开场图、公众号封面配图。

![[笔记同步助手/images/88f4a377e56ac008286f9f737a5896ab_MD5.png]]

-   ●●ChatGPT Image2 prompt

Create a high-impact journal-cover-style scientific illustration for ChatGPT Image2. Use one clear central hero object representing a breakthrough scientific concept, such as a therapeutic nanostructure, programmable molecule, smart material, or AI-guided discovery engine. Surround it with scientifically meaningful supporting elements: target cells or tissues, molecular pathways, material lattices, data streams, or experimental validation signals. Use a dramatic but plausible composition with strong depth, premium lighting, and a clean focal point. Use a deep blue-black background with cyan, magenta, and gold highlights. Make it visually striking but still academically credible. Avoid fantasy creatures, human faces, brand logos, unreadable text, excessive sparks, and a generic sci-fi poster style.

替换建议：替换主视觉对象、科学场景、核心冲突和视觉氛围。

> 硅潮提醒：封面图先确定唯一主角，再让周围元素服务它。

![[笔记同步助手/images/dc213346a9e1ecd70703d0aa720530b7_MD5.png]]

## 通用母版

如果你不想每次从零写，可以直接套这个结构：

-   ●●ChatGPT Image2 prompt

Create a publication-ready scientific \[figure type\] for ChatGPT Image2. Topic: \[research topic\]. Show \[main object\], \[key process 1\], \[key process 2\], and \[final outcome\]. Use a \[layout type\] composition with clear arrows, zoom-in views, or layered structure. Keep the figure clean, professional, and suitable for a research paper. Use \[background\], \[primary color palette\], and \[accent color\] only for key events. Avoid dense text, fake labels, irrelevant decoration, unclear arrows, and poster-like clutter.

硅潮建议：中文标签、公式和专业缩写最好后期手动补。先让 ChatGPT Image2 负责结构和画面，再让人来负责术语准确性。

## 延伸参考

1\. Rougier N. P., Droettboom M., Bourne P. E. Ten Simple Rules for Better Figures. PLOS Computational Biology, 2014.

2\. Cleveland W. S., McGill R. Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods. Journal of the American Statistical Association, 1984.

3\. Wong B. Points of View: Color coding. Nature Methods, 2010.

4\. Wong B. Points of View: Visualizing biological data. Nature Methods, 2012.

最后一句：科研图不是把科学画得更热闹，而是把复杂关系画得更容易被看懂。

![[笔记同步助手/images/b2983475f6683d5671f9193939389d91_MD5.gif]]

---

内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/02e29221_1785413713891?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzI0MDEyNzY0NQ%3D%3D%26mid%3D2648539856%26idx%3D1%26sn%3D5e21c7dff288f634077169d940fbf806%26chksm%3Df0680b6a4624fd28ac8495fbc8415b8a481356d6f0ca393f86085008415040ba1e117618318c%26mpshare%3D1%26scene%3D1%26srcid%3D0730PUn3Pi07iapIp3pHz9Pt%26sharer_shareinfo%3D68a2f5a10f5234afaf94a4d12a7f8e86%26sharer_shareinfo_first%3D68a2f5a10f5234afaf94a4d12a7f8e86%23rd&s=obsidian)