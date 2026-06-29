| Virology | Research Article
DAZAP2 functions as a pan-coronavirus restriction factor by
inhibiting viral entry and genomic replication
Fei Feng,1 Jiannan Chen,1,2 Rong Li,3 Yunkai Zhu,1 Yanlong Ma,1 Ziqiao Wang,1 Yuyan Wang,1 Zhichao Gao,1 Lulu Yang,1 Yin Yu,1
Yanfeng Liu,4 Yingjie Sun,4 Ying Liao,4 Xinxin Huang,5 Qisheng Zhang,6 Yongheng Huang,6 Lin Qiu,7 Jiayu Wu,7 Jingxian Zhao,8,9
Chao Liu,2 Qiang Ding,10 Youhua Xie,1 Zhenghong Yuan,1 Yue Hong,11 Ping Zhang,2 Jing Sun,8 Jincun Zhao,3,8,9,12,13 Rong Zhang1
AUTHOR AFFILIATIONS See affiliation list on p. 21.
ABSTRACT The SARS-CoV-2 pandemic and the emergence of novel variants underscore
the need to understand host-virus interactions and identify host factors that restrict viral
infection. Here, we perform a genome-wide CRISPR knockout screen to identify host
restriction factors for SARS-CoV-2, revealing DAZAP2 as a potent antiviral gene. DAZAP2,
previously implicated in SARS-CoV-2 restriction, is found to inhibit viral entry by blocking
virion fusion with both endolysosomal and plasma membranes. Additionally, DAZAP2
suppresses genomic RNA replication without affecting the primary translation of viral
replicases. We demonstrate that DAZAP2 functions as a pan-coronavirus restriction
factor across four genera of coronaviruses. Importantly, knockout of DAZAP2 enhances
SARS-CoV-2 infection in mouse models and in human primary airway epithelial cells,
confirming its physiological relevance. Mechanistically, the antiviral activity of DAZAP2
appears to be indirect, potentially through the regulation of host gene expression, as
it primarily localizes to the nucleus. Our findings provide new insights into the host
defense system against coronaviruses and highlight DAZAP2 as a potential target for
host-directed antiviral therapies.
IMPORTANCE During viral infection, the host defense response is mediated by a variety
of host factors through distinct mechanisms that have yet to be fully elucidated.
Although DAZAP2 was previously implicated in SARS-CoV-2 restriction, its mechanisms of
action and in vivo relevance remain unclear. In this study, we identify DAZAP2 as a potent
pan-coronavirus restriction factor that inhibits viral infection through dual mechanisms:
blocking virion fusion with both endolysosomal and plasma membranes, and suppress­
Editor Anne Moscona, Columbia University, New
ing genomic RNA replication. We confirm its physiological relevance in host defense York, USA
using mouse models and primary cell cultures. This study advances our understanding of
Address correspondence to Yue Hong,
host-pathogen interactions. Targeting DAZAP2 or its regulatory pathways could provide yuehongsls@hainanu.edu.cn, Ping Zhang,
a new approach to enhance host defense against current and future coronavirus threats. zhangp36@mail.sysu.edu.cn, Jing Sun, sj-ji@163.com,
Jincun Zhao, zhaojincun@gird.cn, or Rong Zhang,
rong_zhang@fudan.edu.cn.
KEYWORDS CRISPR screen, DAZAP2, restriction factor, entry, replication
Fei Feng, Jiannan Chen, Rong Li, and Yunkai Zhu
contributed equally to this article. Author order
C oronaviridae is a large family of enveloped, positive-sense, single-stranded RNA
was determined both alphabetically and in order of
viruses and consists of four genera: Alphacoronavirus, Betacoronavirus, Gammacoro­ increasing seniority.
navirus, and Deltacoronavirus. Coronaviruses infect a variety of hosts, including humans,
The authors declare no conflict of interest.
pigs, chickens, and other animals. One such virus, SARS-CoV-2, is the causative agent of
the COVID-19 pandemic (1, 2). There are seven widely recognized human coronaviruses, See the funding table on p. 22.
and although four of them (HCoV-229E, HCoV-NL63, HCoV-OC43, and HCoV-HKU1) cause Received 31 January 2025
the common cold, three (MERS-CoV, SARS-CoV, and SARS-CoV-2) emerged as major Accepted 5 May 2025
Published 20 August 2025
public health concerns in this century by causing severe infection with high morbidity
and mortality (3–5). In addition, some animal coronaviruses, such as porcine epidemic Copyright © 2025 Feng et al. This is an open-access
article distributed under the terms of the Creative
diarrhea virus (PEDV), swine acute diarrhea syndrome coronavirus (SADS-CoV), porcine
Commons Attribution 4.0 International license.
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 1
Research Article mBio
deltacoronavirus (PDCoV), and infectious bronchitis virus (IBV), have led to significant
economic loss in the agricultural industry (6). Closely related to a bat coronavirus,
SADS-CoV was first identified in pigs and can infect primary human lung and intestinal
cells (7). Furthermore, infections with PDCoV have been detected among young children
in Haiti (8). Thus, coronaviruses pose a broad and considerable threat to public health,
social stability, and the economy.
Coronaviruses have large RNA genomes of 28–31 kb, encoding for multiple structural
and nonstructural proteins that have conserved functions in the infection cycles of
different coronaviruses (4). As a result, coronaviruses usually employ and share the same
host machinery to facilitate infection and, conversely, can be met with similar host
defense responses to restrict the infection. A great effort has been made by scientists
to understand the anti-coronavirus host response, particularly to identify restriction
factors of SARS-CoV-2. Interferons (IFNs) play a key role during virus infection, and
IFN-stimulated genes (ISGs) often possess antiviral activities (9, 10). ISGs, such as LY6E,
BST2, DAXX, OAS1, and many others against SARS-CoV-2 infection, have been iden tified
either by arrayed ISG cDNA overexpression (11–13) or by focused CRISPR knockout
or activation library of ISGs (14, 15). In addition to ISGs, host restriction factors, like
mucins, are identified for SARS-CoV-2 by genome-scale CRISPR activation strategy (16,
17). MHC class II transactivator CIITA-induced cell resistance to SARS-CoV-2 infection has
been reported by using a transposon-mediated gene-activation screen (18). Moreover,
genome-wide association studies as well as transcriptomic and proteomic analyses of
SARS-CoV-2-infected cell lines and patient samples have uncovered additional host
factors that may restrict or confer resistance to viral infection (19–28).
To comprehensively identify host restriction factors of SARS-CoV-2, we conducted
a genome-wide CRISPR/Cas9 knockout screen coupled with fluorescence-activated cell
sorting (FACS) to enrich for susceptible cells. This approach revealed a suite of host
factors with antiviral activity, including DAZ-associated protein 2 (DAZAP2), which was
previously identified as an antiviral factor in a CRISPR dropout screen by analyzing
the depleted cells (29). Although DAZAP2 was shown to restrict SARS-CoV-2 infection,
potentially through regulation of SERPINE1 expression (29), how it impacts the life cycle
of virus infection and whether it functions in vivo remain to be elucidated. In this study,
we demonstrate that DAZAP2 is a pan-coronavirus restriction factor that acts at the
stages of viral entry and replication. Importantly, we validated its antiviral activity in
mouse models and human primary airway epithelial cells, where knockout of DAZAP2
significantly enhanced SARS-CoV-2 infection. These findings provide insights into the
host defense mechanisms against coronaviruses and highlight DAZAP2 as a potential
target for broad-spectrum antiviral strategies.
RESULTS
DAZAP2 is a pan-coronavirus host restriction factor
To identify host factors that can restrict SARS-CoV-2 infection, we performed a genome-
wide, cell sorting-based screen in ACE2-expressing A549 (A549-ACE2) transduced with a
knockout library of single-guide RNAs (sgRNAs) targeting 19,114 human genes (30). The
rationale is that the knockout of antiviral host genes will enhance the virus infection.
The library-transduced cells were infected with transcription- and replication-competent
SARS-CoV-2 virus-like particles where the N protein was replaced with GFP (SARS-CoV-2
trVLP-GFP), resulting in only single-cycle infection (31). Unlike previous studies that
analyzed depleted cells to identify antiviral genes (29), we sorted virus-infected GFP-
positive cells for genomic DNA extraction, sgRNA sequencing, and data analysis (Table
S1). The genes identified from the screen were ranked based on the MAGeCK score (Fig.
1A). The top hit was programmed cell death 10 (PDCD10 or CCM3), a gene associated
with apoptosis (32, 33), followed by DAZAP2, which encodes a multifunctional proline-
rich protein involved in cell signaling (34, 35), transcription regulation (36, 37), and stress
granule formation (38). Other highly ranked genes included calcium-binding protein
39 (CAB39 or MO25), phospholipid scramblase 1 (PLSCR1), vesicle trafficking 1 (VTA1
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 2
Research Article mBio
or LIP5), and lymphocyte antigen 6E (LY6E). DAZAP2 and VTA1 were previously identi­
fied as SARS-CoV-2 restriction factors in a CRISPR dropout screen, potentially through
regulation of SERPINE1 expression (29). PLSCR1 is an antiviral gene strongly induced
by virus infection or interferon treatment (39–41) and was previously identified as a
host factor associated with critical COVID-19 (27). PLSCR1 is also reported to restrict the
SARS-CoV-2 infection at a late entry step before viral RNA is released into host cells (42).
CAB39, a component of a trimeric complex including serine/threonine kinase 11 (STK11)
and STE20-related adaptor alpha (STRAD), has been studied in the context of cancer
progression (43, 44), but with unknown function during SARS-CoV-2 infection. VTA1 is
involved in the trafficking of endosomal multivesicular bodies and retrovirus budding
(45).
To validate the candidate hits, we chose the top 20-ranked genes. For each s pecific
gene target, A549-ACE2 cells were edited with two independent sgRNAs. We also
modified the transcription- and replication-competent SARS-CoV-2 virus-like particle
(SARS-CoV-2 trVLP) where the N gene was replaced by NanoLuc luciferase instead of GFP
(SARS-CoV-2 trVLP-Nluc) (Fig. S1). Thus, infection efficiency could be assessed by
quantifying luciferase activity over time. Knockout of the antiviral gene PLSCR1 had the
greatest effect, resulting in an 8-fold increase of infectivity when compared with the
control (Fig. 1B). DAZAP2 knockout increased infectivity by over 4-fold. Knockout of
CAB39, PDCD10, VPS28, VPS39, VTA1, ZNF28, or UQCRH each resulted in up to 2-fold
increases in infectivity compared with control.
Of the validated genes, DAZAP2 strongly restricted SARS-CoV-2 infection, consistent
with previous findings (29). However, how DAZAP2 impacts the life cycle of coronavirus
infection remains to be elucidated. We therefore focused the rest of our study on
DAZAP2, attempting to understand its role in coronavirus infection. We first confirmed
the antiviral activity of DAZAP2 in the context of infection with authentic SARS-CoV-2.
Two independent sgRNAs were used to knock out DAZAP2 in A549-ACE2 cells. The
infection efficiency was increased by approximately 10-fold, and the representative
images of virus infection were indicated (Fig. 1C and D). Similarly, SARS-CoV-2 infection in
ACE2-expressing HeLa cells (HeLa-ACE2) was increased by approximately 5-fold when
DAZAP2 was edited (Fig. 1E). We further validated the role of DAZAP2 as a restriction
factor in Calu-3 cells, a physiologically relevant lung epithelial cell line, by quantifying
viral RNA levels in cells (Fig. 1F). Additionally, knockout of mouse orthologue Dazap2 in
murine embryonic fibroblasts expressing human ACE2 (MEF-ACE2) significant ly
enhanced SARS-CoV-2 infection (Fig. 1G and H). Knockout efficiency of DAZAP2 was
confirmed by western blotting in all cell lines (Fig. S2A).
To determine whether DAZAP2 acts as a pan-coronavirus restriction factor, we
infected DAZAP2-edited A549-ACE2, HeLa-ACE2, and MEF-ACE2 with viruses from all four
Coronaviridae genera: the alphacoronaviruses HCoV-229E and SADS-CoV; the betacoro­
naviruses HCoV-OC43 and mouse hepatitis virus (MHV); the gammacoronavirus IBV; and
the deltacoronavirus PDCoV. DAZAP2 knockout significantly enhanced infection by all
tested coronaviruses (Fig. 1I). Conversely, overexpression of either human or mouse
DAZAP2 suppressed SARS-CoV-2 infection (Fig. 1J and K). Protein expression of exoge­
nous human DAZAP2 cDNA was verified by western blotting (Fig. S2B). Similarly,
overexpression of human DAZAP2 inhibited infection by the betacoronavirus HCoV-OC43
and the alphacoronavirus porcine epidemic diarrhea virus (PEDV) (Fig. 1L). To rule out the
off-target effect, we generated and validated a DAZAP2-knockout clonal cell line
(ΔDAZAP2) of A549-ACE2 (Fig. S2C to E). Trans-complementing the DAZAP2 cDNA in
knockout cells recovered its antiviral effect (Fig. 1M and N). Together, these data demon­
strate that DAZAP2 is a conserved, pan-coronavirus restriction factor that functions
across cell types and species.
DAZAP2 inhibits the endosomal entry of SARS-CoV-2
Having established DAZAP2 as a common restriction factor for coronaviruses across four
genera, we next sought to define its role in the coronavirus life cycle. To determine the
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 3
Research Article mBio
FIG 1 DAZAP2 is a pan-coronavirus host restriction factor. (A) Genes identified from the CRISPR screen.
ACE2-expressing A549 (A549-ACE2) cells transduced with a CRISPR knockout library were infected with
SARS-CoV-2 transcription- and replication-competent virus-like particles where the N gene is replaced
by the reporter GFP (trVLP-GFP) (MOI 0.5, 24 h). trVLP-GFP was packaged in cells expressing the N gene
and only replicated for a single round in A549-ACE2 in the absence of N protein. GFP-positive cells
were sorted for genomic extraction and sgRNA sequence analysis. The genes were analyzed by MAGeCK
software and sorted based on the -log10 (MAGeCK score). (B) Experimental validation of the top 20
genes from the screen in A549-ACE2 cells. Two independent sgRNAs per gene were used, and cells were
infected with SARS-CoV-2 transcription- and replication-competent virus-like particles where the N gene
is replaced by the NanoLuc luciferase (trVLP-Nluc) (MOI 0.5, 24 h). The infection efficiency was quant ified
by measuring the luciferase activity. (C) High content imaging and quantification analysis of SARS-CoV-2
infection in DAZAP2-edited A549-ACE2 (MOI 0.1, 24 h). (D) Representative immunofluorescence images
of SARS-CoV-2 infection in DAZAP2-edited A549-ACE2 cells (MOI 0.1, 24 h). Scale bar, 100 µm. (E) High
content imaging and quantification analysis of SARS-CoV-2 infection in DAZAP2-edited HeLa-ACE2 (MOI
0.1, 24 h). (F) qRT-PCR was conducted to measure the N gene copies of SARS-CoV-2-infected Calu-3 cells
(MOI 1, 24 h). GAPDH was used as an internal control. (G, H ) High content imaging and quant ification
analysis (G) and immunofluorescence images (H) of SARS-CoV-2 infection in mouse Dazap2-edited MEFs
expressing human ACE2 (MEF-ACE2) (MOI 0.1, 24 h). Scale bar, 100 µm. (I) Validation of DAZAP2 as
a restriction factor during infection with other coronaviruses. Gene-edited cells were infected with
alphacoronaviruses (HCoV-229E, MOI 1, 48 h; SADS-CoV, MOI 3, 24 h), betacoronaviruses (MHV, MOI
5, 24 h; HCoV-OC43, MOI 0.03, 12 h), gammacoronaviruses (IBV, MOI 0.5, 24 h), or deltacoronaviruses
(PDCoV, MOI 0.3, 24 h). (J, K ) Overexpression of DAZAP2 inhibits SARS-CoV-2 infection (MOI 1, 24 h).
Human DAZAP2 or mouse Dazap2 cDNA was expressed in A549-ACE2 or MEF-ACE2, respectively. (L)
Overexpression of human DAZAP2 in HeLa-ACE2 inhibits HCoV-OC43 (MOI 0.03, 24 h) and PEDV (MOI
(Continued on next page)
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 4
Research Article mBio
Fig 1 (Continued)
1, 24 h) infection. The virus infection efficiency was determined by analyzing the percentage of viral
N-positive cells using flow cytometry or Operetta High Content Imaging System. (M, N ) Trans-comple­
mentation of DAZAP2 in DAZAP2-knockout cells recovered the antiviral effect. Clonal DAZAP2-knockout
A549-ACE2 cells were generated and trans-completed with DAZAP2 cDNA. Cells were infected with
SARS-CoV-2 (MOI 0.3, 24 h) for high content imaging (M) and quantification analysis (N). Data shown
are from three independent experiments, and each independent experiment was performed in duplicate
or triplicate. (B) Two-way ANOVA with Dunnett’s test; the mean of two sgRNAs was compared with the
control sgRNA; (C, E, G, and N) one-way ANOVA with Dunnett’s test; (F and I–L) unpaired t test; n = 3;
mean ± s.d.; *P < 0.05; **P < 0.01; ***, P < 0.001; ****P < 0.0001; ns, not significant.
stage of infection at which DAZAP2 acts, we infected DAZAP2-edited cells with murine
leukemia retrovirus (MLV)-based pseudoviruses bearing the spike protein of SARS-CoV-2
or, as a control, the glycoprotein of vesicular stomatitis virus (VSV-G). Knockout of
DAZAP2 resulted in an approximately 25-fold increase in SARS-CoV-2 pseudovirus
infection, whereas no significant difference was observed for the VSV-G pseudovirus (Fig.
2A and B). Similarly, pseudoviruses packaged with the spike from SARS-CoV-1 exhibited
about a 9-fold increase in infection, consistent with the results for SARS-CoV-2 pseudovi­
ruses (Fig. 2C).
Since A549 cells express little or no TMPRSS2, a serine protease that facilitates viral
entry via plasma membrane fusion, SARS-CoV-2 primarily enters A549-ACE2 cells
through the endosomal pathway. To test whether DAZAP2 inhibits endosomal entry,
control or ΔDAZAP2 cells were infected with SARS-CoV-2 pseudovirus in the presence of
E-64d (aloxistatin), an inhibitor of the cysteine proteases cathepsins B and L (required for
endosomal membrane fusion), and/or camostat mesylate, a TMPRSS2 inhibitor that
blocks plasma membrane fusion (Fig. 2D). We found that the enhancement of pseudovi­
rus infection in ΔDAZAP2 cells is significantly diminished in the presence of E-64d,
whereas camostat mesylate had no effect. Similar results were observed when cells were
infected with single-cycle SARS-CoV-2 trVLP-Nluc particles. These findings suggest that
DAZAP2 primarily inhibits the endosomal entry pathway of SARS-CoV-2.
DAZAP2 inhibits virion fusion with endolysosome membranes to release
genomes into the cytosol
To further dissect the SARS-CoV-2 entry process, we divided viral entry into four distinct
steps: (i) binding, (ii) uptake (internalization), (iii) virion trafficking to late endosome/
lysosomes, and (iv) virion fusion with the endolysosome membranes to release viral
genomes into the cytosol. A previous study indicated that DAZAP2 does not affect the
binding and internalization of SARS-CoV-2 (29). To confirm this, we incubated virions on
ice for 45 min with control and ΔDAZAP2 cells. After washing, cells were lysed for qRT-PCR
to assess the cell surface-bound virions. For internalization, cells were shifted to 37°C for
45 min after the binding and washing, to allow virion uptake. Uninternalized virions on
the cell surface were removed by treating cells with protease K. After washing, cells were
lysed for qRT-PCR to measure the internalized virions. Consistent with prior findings,
neither binding to the cell surface nor internalization was affected in DAZAP2-deficien t
cells (Fig. 2F).
Next, we investigated whether DAZAP2 influences the trafficking of internalized
virions to endolysosomes. After internalization at 37°C for 4 h in the presence of E-64d (to
prevent virion fusion with endolysosome membranes), we quantified virions (spike-
positive and nucleocapsid-positive) co-localized with the endolysosome marker LAMP1.
No significant difference in virion counts was observed between control and ΔDAZAP2
cells (Fig. 2G and H).
We then examined whether DAZAP2 affects virion fusion with endolysosomes, a
process requiring the activation of cysteine proteases (cathepsins B and L) in a low pH
environment. Using LysoSensor Green dye, we found that endolysosomal a cidification
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 5

| Research Article |     |     | mBio |
| ---------------- | --- | --- | ---- |
FIG 2  DAZAP2 inhibits virion fusion with endolysosome membranes to release genomes into the cytosol. (A–C) Pseudovirus infection assay. The gene-edited
A549-ACE2 cells were infected with murine leukemia retrovirus (MLV)-based pseudoviruses (30 µL, 24 h) bearing the spike protein of SARS-CoV-2 (A), the
glycoprotein of vesicular stomatitis virus (VSV-G) (B), or the spike protein of SARS-CoV-1 (C), and the luciferase activity was measured and normalized to the
(Continued on next page)

| September 2025 |  Volume 16  Issue 9 | 10.1128/mbio.00385-25 | 6   |
| -------------- | ------------------- | --------------------- | --- |
Research Article mBio
Fig 2 (Continued)
control. (D, E ) The inhibition of endosomal entry of SARS-CoV-2. Control and DAZAP2-knockout clonal cell line of A549-ACE2 (ΔDAZAP2) were infected with
MLV-based pseudovirus bearing the spike protein of SARS-CoV-2 (30 µL, 14 h) (D) or single-cycle trVLP-NLuc (MOI 0.02, 24 h) (E), in the presence of 100 µM E-64d
(aloxistatin), an inhibitor that blocks the cysteine protease activity of cathepsins B and L, which are required for the endosomal membrane fusion, and/or 100 µM
camostat mesylate, a TMPRSS2 inhibitor that blocks viral fusion at the plasma membrane. (F ) Virus binding and internalization assays. Cells were incubated with
SARS-CoV-2 (MOI 5), and the bound or internalized virions were measured by qRT-PCR for genomic RNA. (G, H ) Trafficking of SARS-CoV-2 trVLP-Nluc particles
in the presence of cysteine protease inhibitor E-64d (100 µM). The representative confocal images (G) were obtained, and the quantification of spike and N
protein double-positive particles per field (H) was analyzed. The endolysosome marker LAMP1 was stained. Scale bar, 20 or 5 µm. (I) Quantification of endosomal
acidification. Control or DAZAP2-deficient A549-ACE2 cells were pre-treated with or without 20 µM chloroquine (CQ) followed by staining with LysoSensor Green
dye. The fluorescence intensity was quantified. (J, L ) The cleavage of the SARS-CoV-2 spike protein. Control or DAZAP2-deficient A549-ACE2 cells were incubated
with MLV-based pseudoviruses bearing the spike protein for 0, 2, or 4 h, followed by western blotting analysis with anti-S2 antibody (J). Three independent
experiments were performed, and the representative image is shown. The cysteine protease inhibitor E-64d (100 µM) was used as a control. The relative protein
level of the cleaved S2’ domain was determined by normalizing the intensity of the S2’ band to the internal control GAPDH, and then to the control at 0 h
(K). The ratio of S2’ to S2 was calculated similarly (L). (M ) Split NanoLuc luciferase reporter-based virus-cell fusion assay. Cells expressing the LgBit were incubated
with retrovirus particles encapsulated with CypA-HiBit to enable virion fusion in the endolysosomes. The re-complemented NanoLuc luciferase activity in the
cytoplasm was determined and normalized to the control. (N, O ) Quantification of virions in the endolysosomes. Control or DAZAP2-deficient A549-ACE2 cells
were infected with SARS-CoV-2 for 4 h and fixed to stain N and endolysosome marker LAMP1. The colocalization of LAMP1 with N was visualized by confocal
microscopy (N), and the number of colocalized foci per cell was counted (O). Three fields of view with a total of 27 to 42 cells were used for analysis. The
representative confocal images (N) were shown. Scale bar, 20 or 5 µm. The cysteine protease inhibitor E-64d (100 µM) was used as a control. (P, Q ) Quant ification
of double-stranded RNA (dsRNA). Control or DAZAP2-deficient A549-ACE2 cells were infected with SARS-CoV-2 for 4 h, then fixed to stain the dsRNA with J2
antibody. The percentage of dsRNA-positive cells per field was counted (P), and the dsRNA puncta were visualized by confocal microscopy (Q), and six fields of
view with a total of 109 control cells and 79 DAZAP2-deficient cells were selected for analysis. The representative confocal images (Q) are shown. Scale bar, 50 µm.
Data shown are from three independent experiments, and each independent experiment was performed in triplicate. (A–C, F, H, M, and P) Unpaired t test;( D, E, I,
K, L, and O) one-way ANOVA with Dunnett’s test; n = 3; mean ± s.d.; *P < 0.05; **P < 0.01; ***, P < 0.001; ****P < 0.0001; ns, not significant.
was unchanged in ΔDAZAP2 cells (Fig. 2I). Similarly, the cleavage of the spike protein into
S2’ by cysteine proteases was unaffected in ΔDAZAP2 cells upon incubation with
pseudovirus particles (Fig. 2J to L). These results demonstrate that DAZAP2 does not
impact SARS-CoV-2 endosomal entry at the stages of binding, uptake, trafficking, or
spike cleavage.
The final step in endosomal entry is the fusion of virions with endolysosome
membranes to release viral genomes into the cytosol. To assess this, we employed an
improved virus-cell fusion assay (42). Cyclophilin A (CypA), a Gag-interacting protein,
was fused with HiBit and encapsulated into retrovirus particles bearing the SARS-CoV-2
spike protein. If internalized virions fuse with endolysosome membranes, the released
HiBit into the cytosol complements LgBit to form functional NanoLuc luciferase. When
ΔDAZAP2 cells expressing LgBit were incubated with these particles, luciferase activity
was significantly higher compared with control cells (Fig. 2M), indicating enhanced
fusion in ΔDAZAP2 cells.
To further validate these findings, control and ΔDAZAP2 cells were infected with
authentic SARS-CoV-2 for 4 h, followed by detection of virion particles co-localized with
endolysosome marker LAMP1 (Fig. 2N). As expected, fewer virions were observed in
ΔDAZAP2 cells when compared with controls (Fig. 2N and O). Conversely, intracellular
double-stranded RNA (dsRNA), an indicator of viral replication intermediates, was more
abundant in ΔDAZAP2 cells (Fig. 2P and Q). As a control, the addition of E-64d resulted
in similar numbers of virions in endolysosomes for both cell types (Fig. 2N and O). These
findings collectively suggest that DAZAP2 inhibits the fusion of SARS-CoV-2 virions with
endolysosome membranes, thereby preventing the release of viral genomes into the
cytoplasm.
DAZAP2 restricts the plasma membrane entry of SARS-CoV-2
We next investigated whether DAZAP2 affects spike-protein-mediated fusion at the
plasma membrane. Control and ΔDAZAP2 A549-ACE2 acceptor cells were co-cultured
with 293T donor cells expressing the SARS-CoV-2 spike protein, and spike-mediated
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 7
Research Article mBio
cell-cell syncytia formation was visualized. Notably, ΔDAZAP2 cells exhibited a larger
fusion area and more syncytial nuclei compared with control cells (Fig. 3A and B).
To quantify the cell-cell fusion, we employed a split NanoLuc luciferase-based assay as
previously described (42). In this system, A549 acceptor cells express the LgBit fragment,
whereas the 293T donor cells express the HiBit fragment. Upon co-culture and spike-
mediated cell-cell fusion, the two fragments complement each other to form functional
NanoLuc luciferase, allowing for quantification of fusion activity (Fig. 3C). Consistent with
the syncytia formation results (Fig. 3A and B), we observed a significant increase in
luciferase activity in ΔDAZAP2 cells, indicating enhanced cell-cell fusion (Fig. 3D).
Because A549 cells express minimal or no TMPRSS2 protease that is required for
spike-mediated plasma membrane entry, we generated A549-ACE2-TMPRSS2 cells
(control and ΔDAZAP2) to further explore this pathway. These cells were infected with
SARS-CoV-2 pseudovirus in the presence of E-64d (to block endosomal entry) and/or
camostat mesylate (a TMPRSS2 inhibitor) (Fig. 2D). In TMPRSS2-expressing cells, E-64d
failed to inhibit infection, whereas camostat mesylate significantly reduced the
enhanced infection observed in ΔDAZAP2 cells (Fig. 3E). Similar results were obtained
using single-cycle SARS-CoV-2 trVLP-Nluc particles (Fig. 3F). These results demonstrate
that DAZAP2 inhibits the SARS-CoV-2 spike protein-mediated cell-cell fusion and plasma
membrane entry, further underscoring its role as a broad-spectrum restriction factor.
DAZAP2 inhibits the genomic replication of SARS-CoV-2
The SARS-CoV-2 trVLP particles, which lack the N gene, recapitulate only the viral entry
and replication stages of the life cycle, excluding virion assembly and release. Conse­
quently, the CRISPR screen using SARS-CoV-2 trVLP is biased toward identifying host
factors involved in entry and replication. In addition to its role in inhibiting viral entry, we
sought to determine whether DAZAP2 also affects post-entry steps, particularly viral
genomic replication.
To investigate this, we constructed a SARS-CoV-2 replicon system in which the portion
of the genome encoding the spike protein all the way through ORF8 was replaced by
NanoLuc luciferase (Fig. S1). The in vitro-transcribed replicon RNA was electroporated
into cells, and viral replication was monitored by measuring the luciferase activity.
Knockout of DAZAP2 led to significantly enhanced viral replication when compared with
control cells (Fig. 4A). Treatment with remdesivir, an RNA-dependent RNA polymerase
(RdRp) inhibitor, diminished the luciferase activity in both control and DAZAP2-edited
cells, confirming the utility of this system to assess changes in replication (Fig. 4A).
Conversely, overexpression of DAZAP2 could significantly inhibit the replication (Fig. 4B).
To further validate these findings, we quantified genomic RNA levels by qRT-PCR
targeting the NSP10 gene at different time points. Higher levels of genomic RNA were
detected in DAZAP2-edited cells than in control (Fig. 4C). These results suggest that
DAZAP2 inhibits viral genomic RNA replication, leading to reduced protein translation, as
indicated by decreased NanoLuc luciferase activity.
We next explored whether the inhibition of genomic replication by DAZAP2 is due to
its impact on the primary translation of non-structural replicases for incoming viral
genomes released from endolysosomes. To test this, we modified the replicon system by
inserting the NanoLuc luciferase reporter gene, flanked by a P2A cleavage site, between
NSP1 and NSP2 of the SARS-CoV-2 replicon (Fig. 4D). Additionally, we introduced D760N
and D761N double mutations into the NSP12 to inactivate the RdRp activity (46),
ensuring that only translation could be assessed (Fig. 4D). After electroporating the
modified replicon RNA into cells, the luciferase activity was monitored from 2 to 8 h,
peaking at 4 h (Fig. 4E). However, no significant difference in luciferase activity was
observed between control and DAZAP2-edited cells, indicating that DAZAP2 does not
affect the primary translation of viral replicases.
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 8
Research Article mBio
FIG 3 DAZAP2 inhibits the plasma membrane entry of SARS-CoV-2. (A, B) Cell-cell fusion assay. Control and ΔDAZAP2 A549-ACE2 acceptor cells were co-cultured
with 293T donor cells that express SARS-CoV-2 spike protein. Spike protein-induced syncytia were visualized under a brightfield microscope (A), and syncytial
nuclei were counted after Giemsa staining (B). Scale bar, 100 µm. (C, D ) Schematic (C) and the results (D) of the split NanoLuc luciferase reporter-based
cell-cell fusion assay. A549-ACE2 acceptor cells expressing the LgBit were incubated with 293T donor cells expressing both HiBit and SARS-CoV-2 spike protein.
The functional NanoLuc luciferase was re-complemented after cell-cell fusion, and the activity was measured and normalized to the control cells without
spike expression. (E, F) The inhibition of plasma membrane entry of SARS-CoV-2. Control and ΔDAZAP2 A549-ACE2 cells ectopically expressing the TMPRSS2
(A549-ACE2-TMPRSS2) were infected with MLV-based pseudovirus bearing the spike protein of SARS-CoV-2 (30 µL, 14 h) (E) or single-cycle trVLP-NLuc (MOI
0.02, 24 h) (F), in the presence of cysteine protease inhibitor E-64d (100 µM), and/or TMPRSS2 inhibitor camostat mesylate (100 µM). Data shown are from three
independent experiments, and each independent experiment was performed in triplicate. (B and C) Unpaired t test; (E and F) one-way ANOVA with Dunnett’s
test; n = 3; mean ± s.d.; ***, P < 0.001; ****P < 0.0001; ns, not significant.
DAZAP2 may regulate host gene expression to restrict viral infection
To understand how DAZAP2 inhibits coronavirus entry and replication, we first evaluated
whether it is an interferon-stimulated gene (ISG). DAZAP2 gene expression was not
upregulated upon treatment with 1,000 U/mL IFNα−2b (Fig. S3A), whereas the known
ISGs IFITM3 and MX1 were increased over 100-fold and 1,000-fold, respectively (Fig. S3B
and C). Furthermore, we performed SARS-CoV-2 infection in STAT1-, MAVS-, or IRF3-
deficient A549-ACE2 cells, which lack critical innate immune signaling pathways. Despite
these disruptions, infection efficiency was still significantly increased in DAZAP2-edited
cells as compared to the controls (Fig. S4). These results suggest that the antiviral
function of DAZAP2 is possibly independent of innate immune responses.
We next investigated whether DAZAP2 directly exerts its antiviral function at the
endolysosome or cytoplasm to inhibit viral entry and replication, respectively. Localiza­
tion studies revealed that endogenous DAZAP2 is predominantly located in the nucleus
in both mock- and virus-infected cells, whereas viral N protein localizes to the cytoplasm
(Fig. 4F). Additionally, DAZAP2 did not co-localize with the early endosome marker EEA1
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-25 9
Research Article mBio
FIG 4 DAZAP2 inhibits the genomic replication of SARS-CoV-2. (A) Replicon RNA assay in HeLa cells edited with control or DAZAP2 sgRNA. The SARS-CoV-2
replicon system was constructed by replacing the portion of the genome encoding the spike protein all the way through ORF8 with NanoLuc luciferase. The in
vitro-transcribed replicon RNA was electroporated into cells. The RNA-dependent RNA polymerase (RdRp) inhibitor remdesivir (10 µM) was added as a control
to verify the utility of the replicon system. One representative sgRNA was used to edit DAZAP2. The luciferase activity was determined and normalized to the
control. (B) Replicon RNA assay in empty vector- and DAZAP2-overexpressing HeLa cells, and the results were normalized to the control. (C) Quantification of
genomic RNA replication. The in vitro-transcribed replicon RNA was electroporated into cells, and the levels of genomic RNA replication were determined by
qRT-PCR targeting the NSP10 gene at the indicated time points. The results were normalized to the control cells at 24 h. (D) Schematic of the construction
of the inactivated replicon system to assess the primary translation of viral replicases. The NanoLuc luciferase reporter gene, flanked by a P2A cleavage site,
was inserted between NSP1 and NSP2 of the SARS-CoV-2 replicon. The D760N and D761N double mutations were introduced into the NSP12 to inactivate
the RdRp activity, ensuring that only translation could be assessed. (E) Detection of the primary translation of viral replicases as indicated by the luciferase
activity. Control and DAZAP2-edited HeLa cells were electroporated with the modified replicon RNA, and the luciferase activity was monitored. (F) Confocal
analysis of the localization of DAZAP2 and SARS-CoV-2 N protein. SARS-CoV-2-infected A549-ACE2 cells were fixed and stained with anti-DAZAP2 or anti-N
antibody. The representative confocal images were shown. Scale Bar, 50 or 20 µm. (G, H) Validation of SERPINE1 gene. A549-ACE2 cells were edited with
two independent sgRNAs targeting SERPINE1, followed by infection with authentic SARS-CoV-2 (G) or trVLP-NLuc particles (H). Data shown are from three
independent experiments, and each independent experiment was performed in triplicate. As for the results shown as relative change, data are normalized to the
control of the individual experiment. (A–C, G and H) Unpaired t test; (E) two-way ANOVA; n = 3; mean ± s.d.; ****P < 0.0001; ns, not significant.
or the endolysosome marker LAMP1 (Fig. S5), further supporting that DAZAP2 may not
directly interact with viral entry machinery at these sites.
Given that DAZAP2 localizes to the nucleus and has been reported to interact with
transcription factors (36, 37), we hypothesized that it may regulate the expression of
specific host genes, contributing to its role as a restriction factor. Although Hou et
al. previously suggested that DAZAP2, along with VTA1 and KFL5, regulates host cell
responses to SARS-CoV-2 infection by controlling the SERPINE1 expression (associated
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2510
Research Article mBio
with COVID-19 severity), we found that editing SERPINE1 had no effect on infection by
authentic SARS-CoV-2 or trVLP-NLuc particles (Fig. 4G and H).
Since DAZAP2 inhibits viral entry at both the endosomal and plasma membranes,
we also examined whether DAZAP2 affects the expression of SARS-CoV-2 entry factors.
Using a validated antibody against the cell receptor ACE2 (Fig. S6A and B), the surface
expression level of ACE2 was not changed when DAZAP2 was edited (Fig. S6C). Likewise,
the expression of other known entry factors, such as AXL, heparan sulfate, TIM-1,
SIGLEC1, DC-SIGN, CTSL, Furin, and TMPRSS2, was not affected by DAZAP2 (Fig. S6D
to G).
Collectively, these findings suggest that DAZAP2 indirectly inhibits SARS-CoV-2
infection, potentially through the regulation of a specific subset of host genes. Although
the precise mechanisms remain to be fully elucidated, our data highlight DAZAP2 as a
multifaceted restriction factor that acts at both the entry and replication stages of the
viral life cycle.
Knockout of Dazap2 promotes SARS-CoV-2 infection in mouse models
Given the functional conservation of human DAZAP2 and its mouse ortholog in
cell-based assays, we extended our investigation to in vivo mouse models. To gen­
erate the Dazap2-knockout mouse (Dazap2−/−), exons 2 and 3 of the Dazap2 locus
were removed by CRISPR/Cas9 technology, resulting in the deletion of 365 bp coding
sequence and disruption of protein function (Fig. 5A). The Dazap2−/− mice are viable, are
fertile, and do not exhibit any observable defects.
To assess viral replication, four female age-mapped wild-type (WT) and Dazap2−/−
mice were intranasally inoculated with the mouse-adapted Beta variant (B.1.351) of
SARS-CoV-2. After 3 days, lungs and nasal turbinates were collected for infectious virus
titration. Although the average titer in the lungs of WT mice reached 7 logs, the average
titer in Dazap2−/− mice was 7.6 logs (Fig. 5B). Viral titers in the nasal turbinates of both
groups were below the limit of detection (Fig. 5C). To further characterize the virus
infection in lung tissues, mice were intranasally inoculated with a low dose of 50 FFU of
the adapted virus for one day. The average viral titer in Dazap2−/− mice increased from
9.15 logs in WT mice to 9.9 logs (Fig. 5D).
The clinical isolate of the Beta variant (B.1.351) of SARS-CoV-2 can naturally infect WT
mice, albeit less efficiently than in ACE2 transgenic mice (47–50). To further evaluate the
restriction function of Dazap2, WT and Dazap2−/− mice were intranasally challenged with
1,000 or 50 FFU of the non-adapted Beta variant for 1 day. At higher doses (1,000 FFU),
viral replication increased from 5.95 logs in WT mice to 6.98 logs in knockout mice (Fig.
5E). A slight increase in viral titer was also observed at the low dose (50 FFU) (Fig. 5E).
To further investigate the restrictive function of DAZAP2, we cross-bred Dazap2−/−
mice with human ACE2 knock-in mice (hACE2) to enable infection by the original SARS-
CoV-2 strain (51). Female age-matched hACE2 and Dazap2−/− mice with ACE2 expression
(hACE2-Dazap2−/−) were intranasally challenged with 50,000 FFU of the SH01 strains
isolated in early 2020 (52). Viral replication in tissues was quantified by qRT-PCR at day 3
post-infection. Viral titers in the lungs of hACE2-Dazap2−/− mice were significantly higher
than in hACE2 mice (Fig. 5F), whereas no difference was detected in the nasal turbinates
(Fig. 5G). Additionally, the increased viral loads in the lungs of hACE2-Dazap2−/− mice
were associated with elevated cytokine expression. The levels of Il1b, Il6, Tnfα, Ifnar1, and
Cxcl10 mRNA were significantly higher in hACE2-Dazap2−/− mice compared with hACE2
mice (Fig. 5H and I). These results collectively demonstrate that knockout of Dazap2
enhances SARS-CoV-2 replication in mouse models.
Knockout of DAZAP2 promotes SARS-CoV-2 infection in human primary
airway epithelial cells
To determine whether DAZAP2 exerts antiviral function in humans, we utilized air-liquid
interface (ALI) culture of human primary nasal (HNEC) and bronchial epithelial cells
(HBEC). These cultures represent physiologically relevant models for studying
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2511
Research Article mBio
FIG 5 Knockout of DAZAP2 promotes SARS-CoV-2 infection in mouse models and human primary airway epithelial cells. (A) Schematic of the generation of
Dazap2-knockout mice. Exons 2 and 3 were removed using CRISPR/Cas9, resulting in the deletion of 365 bp of coding sequence and disruption of protein
function. (B, C ) Female mice at 10–12 weeks old were intranasally inoculated with 1,000 focus-forming units (FFU) of mouse-adapted beta variant (B.1.351)
of SARS-CoV-2 virus (MA17), and viral loads in the lungs (B) or nasal turbinates (C) at day 3 post-infection were titrated by focus-forming assay. The dashed
line represents the limit of detection. (D) Mice infected with 50 FFU of MA17 virus, and viral loads in the lungs at day 1 post-infection were titrated. (E) Mice
infected with 1,000 FFU (left) or 50 FFU (right) of non-adapted beta variant (B.1.351) of SARS-CoV-2, and viral loads in the lungs at day 1 post-infection were
titrated. D-E, one independent experiment with a total of 4–5 mice was used. (F, G ) Human ACE2 knock-in (hACE2) and hACE2 female mice with Dazap2 deletion
(hACE2-Dazap2−/−) at 10–12 weeks old were intranasally inoculated with 50,000 FFU of original SH01 strain of SARS-CoV-2, and viral loads in the lungs (F) or
nasal turbinates (G) were titrated at day 3 post-infection by qRT-PCR. Two independent experiments with a total of 8–11 mice were used. (H, I) mRNA detection
(Continued on next page)
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2512
Research Article mBio
Fig 5 (Continued)
of cytokines in the lungs harvested at day 3 post-infection from panel F. (J) Schematic of air-liquid interface cultures of human primary nasal and bronchial
epithelial cells for SARS-CoV-2 infection. The figure was created with BioRender.com. (K) Editing efficiency of DAZAP2 in undifferentiated human nasal epithelial
cells (HNEC) and human nasal epithelial cells (HNEC) was validated by western blotting. (L–O) SARS-CoV-2 infection in differentiated HNEC and HBEC. Viral RNA in
cells was determined by qRT-PCR (L and N), and virus production in the supernatant was titrated by focus-forming assay (M and O). Unpaired two-tailed t test; n =
3; mean ± s.d. *P < 0.05; **P < 0.01; ***P < 0.001; ****P < 0.0001; ns, not significant.
SARS-CoV-2 infection (Fig. 5J). Nasal and bronchial stem cells were isolated and edited
with control or DAZAP2-specific sgRNA, and knockout efficiency was confirmed by
western blotting (Fig. 5K).
After differentiation in transwells, the cells were infected with SARS-CoV-2, and viral
production was assessed at 24 and 48 h post-infection. In nasal epithelial cells, we
observed a modest 0.74-log increase in virus production in the supernatant of DAZAP2-
edited nasal epithelial cells at 24 h (Fig. 5L and M). In contrast, bronchial epithelial cells
exhibited significantly higher levels of viral RNA in cells and viral titers in the supernatant
at both 24 and 48 h post-infection in DAZAP2-edited cells when compared with control
cells (Fig. 5N and O). These findings demonstrate that DAZAP2 acts as a host restriction
factor in human airway tissues, significantly inhibiting SARS-CoV-2 infection in physiolog­
ically relevant models. The stronger antiviral effect observed in bronchial epithelial cells
may highlight the importance of DAZAP2 in protecting the lower respiratory tract from
viral infection.
DISCUSSION
The global spread of SARS-CoV-2 has caused unprecedented devastation and mortality
since the 1918 influenza pandemic. Identifying the host factors involved in SARS-CoV-2
infection is critical for understanding virus-host interactions, elucidating pathogenesis,
and developing potential host-directed therapeutics. Although proviral host factors
have been extensively studied using high-throughput strategies, such as genome-wide
CRISPR screens (16, 17, 52–58), antiviral host factors remain less explored. Although
several studies have focused on the screening of ISGs, a large family of antiviral genes
(12–15, 18), a comprehensive genome-scale identification of host restriction factors is
still needed.
Unlike genome-wide activation screens (16, 17) or CRISPR dropout screens analyzing
depleted cells (29), we employed a FACS-based genome-wide CRISPR knockout screen to
enrich the highly susceptible live cells. Through this work, we identified and validated a
set of restriction factors, including PDCD10, DAZAP2, CAB39, and VTA1. Among these, the
known IFN-related gene PLSCR1 exhibited the most potent antiviral activity (27, 40–42).
We focused on the gene with the second greatest impact, DAZAP2, which, after being
knocked out, led to an over 4-fold increase in SARS-CoV-2 infection.
Although Hou et al. previously identified DAZAP2 as an antiviral gene regulating
SERPINE expression (29), its mechanisms of action and in vivo relevance remained
unclear. In this study, we systematically dissected the stages of viral entry and replication,
revealing that: (i) DAZAP2 inhibits virion fusion with both endolysosomal and plasma
membranes, blocking viral entry; (ii) DAZAP2 inhibits genomic RNA replication but
does not affect the primary translation of replicases from incoming genomes. Notably,
the restriction of DAZAP2 against cell entry appears more pronounced than its effect
on replication, as demonstrated by pseudovirus and replicon assays, respectively. We
also established DAZAP2 as a pan-coronavirus restriction factor, functioning across four
genera of coronaviruses, and validated its antiviral roles in mouse models and human
primary airway epithelial cells.
DAZAP2 is an evolutionarily conserved protein ubiquitously expressed across tissues
(59–61). It contains predicted Src homology 2 (SH2)/SH3 binding sites and a polyproline
region and is reported to localize in both the cytoplasm and the nucleus (36–38, 59,
61). Its nuclear localization suggests a regulatory role in gene expression. For example,
DAZAP2 interacts with the transcription factor SOX6 to regulate the expression of the
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2513
Research Article mBio
L-type Ca2+ channel α1c gene and cardiac differentiation (62). Similarly, it interacts with
the transcription factor TCF-4 to regulate gene expression, possibly by modulating the
affinity of its DNA-recognition motif (37). DAZAP2 is also implicated in diseases, with
its downregulation reported in multiple myeloma (59, 63, 64). Intriguingly, DAZAP2
occupies p53 response elements to regulate the expression of a subset of genes upon
DNA-damaging chemotherapeutic treatment and plays a protective role in cell survival
(36).
Despite inhibiting virion fusion and genomic replication, DAZAP2 primarily localizes
to the nucleus, with no detectable presence in the cytosol, plasma membranes, or
endolysosomes. This suggests that the restrictive effects of DAZAP2 are likely indi­
rect, mediated through the regulation of specific host genes. Although SERPINE1 was
previously identified as a DAZAP2-regulated gene associated with COVID-19 severity
(29), editing SERPINE1 had no impact on SARS-CoV-2 infection in our study. This implies
that other, yet unidentified, genes regulated by DAZAP2 may underlie its antiviral effects.
We hypothesize that DAZAP2 interacts with host transcription factors to modulate the
expression of specific genes or pathways. Alternatively, DAZAP2 knockout may disrupt
cellular homeostasis, rendering cells more susceptible to viral infection.
Stress granules (SGs) are host organelles that protect cells from harmful stress or virus
infection by sequestering host and viral factors, including proteins and RNAs. In addition
to its nuclear localization, DAZAP2 is found in the cytoplasm, where it participates in
SG formation (38). DAZAP2 interacts with the RNA-binding protein deleted-in-azoosper­
mia-like (DAZL), which is essential for SG formation and germ cell protection under heat
stress (65). Whether the restrictive effect of DAZAP2 on coronavirus replication involves
its role in SGs remains to be determined. Notably, coronaviruses encode proteins such as
N protein, NSP1, and NSP15 to disrupt SG formation and evade antiviral responses (66–
71). This may explain why DAZAP2 puncta were not observed in the cytoplasm during
infection.
To validate the restriction effect of DAZAP2 on SARS-CoV-2 infection, we generated
Dazap2-knockout mice. Consistent with previous reports, these mice exhibited no
obvious developmental abnormalities (60). Upon viral challenge, viral loads in the lungs
were significantly higher in knockout mice than the WT mice, confirming the protective
role of DAZAP2 during infection. Similarly, in air-liquid interface cultures of human
primary bronchial epithelial cells, SARS-CoV-2 infection was significantly enhanced in
DAZAP2-edited cells when compared with the control cells. Interestingly, no difference
in viral titers was observed in the nasal turbinates of mice infected with the beta
variant (B.1.351) or the original strain. Similarly, only minor phenotypic differences were
detected in primary nasal epithelial cells. This may reflect the inefficient replication of
these viruses in the upper respiratory tract and nasal tissues (72).
In summary, we conducted a FACS-based genome-wide CRISPR knockout screen to
identify SARS-CoV-2 host restriction factors, including the previously known DAZAP2. We
thoroughly dissected its roles in viral entry and replication and validated its antiviral
functions in mouse models and human primary airway epithelial cells. These fi ndings
provide new insights into the host defense system against coronavirus infection and
highlight potential avenues for developing host-directed therapeutics.
MATERIALS AND METHODS
Cells and viruses
Vero E6 (Cell Bank of the Chinese Academy of Sciences, Shanghai, China), HEK 293T (ATCC
#CRL-3216), A549 (ATCC #CCL-185), A549-ACE2 (52), HeLa (ATCC #CCL-2), HeLa-ACE2 (52),
Calu-3 (Cell Bank of the Chinese Academy of Sciences, Shanghai, China), MEF expressing
the human ACE2 (MEF-ACE2), BHK-21, Huh7, swine testicular (ST), LLC-MK2, HRT-18,
and ΔMAVS A549 (73), all were cultured at 37°C in Dulbecco’s modified Eagle medium
supplemented with 10% fetal bovine serum (FBS), 10 mM HEPES, 1 mM sodium pyruvate,
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2514
Research Article mBio
1× non-essential amino acids, and 100 U/mL of penicillin-streptomycin. The IRF3- and
STAT1-knockout A549 clonal cell lines were generated by transduction of lentivirus
expressing individual sgRNA and selected for 7 days with puromycin and blasticidin,
respectively. Clonal cell lines were obtained by limiting dilution and verified by western
blotting. All cell lines were tested routinely and were free of mycoplasma contamination.
The SARS-CoV-2 (nCoV-SH01-Sfull) stock (52), swine acute diarrhea syndrome
coronavirus (SADS-CoV), porcine epidemic diarrhea virus (PEDV), and infectious
bronchitis virus (IBV) were propagated in Vero E6 cells and titrated in Vero E6 by
focus-forming assay (74). Other virus stocks of coronaviruses, porcine deltacoronavirus
(PDCoV) (ST cells), HCoV-229E (Huh7 cells), and HCoV-OC43 (HRT-18 cells), were prepared
and titrated similarly in their respective cell lines. All experiments involving SARS-CoV-2
live virus infection were performed in the biosafety level 3 (BSL-3) facility of Fudan
University or Guangzhou Customs Technology Center, following the regulations.
Genome-wide CRISPR knockout screen
The human Brunello CRISPR knockout pooled library encompassing 76,441 different
sgRNAs targeting 19,114 genes (30) was a gift from David Root and John Doench
(Addgene #73178), and packaged in 293 FT cells after co-transfection with psPAX2
(Addgene #12260) and pMD2.G (Addgene #12259) at a ratio of 2:2:1 using Fugene® HD
(Promega). At 48 h post-transfection, supernatants were harvested, clarified by spinning
at 3,000 rpm for 15 min, and aliquoted for storage at −80°C.
For the CRISPR sgRNA screen, A549-ACE2-Cas9 cells (52) were transduced with
packaged sgRNA lentivirus library at a multiplicity of infection (MOI) of ~0.3 by spino­
culation at 1,000 g and 32°C for 30 min in 12-well plates. After selection with puromycin
for around 7 days, cells were inoculated with SARS-CoV-2 transcription- and replication-
competent virus-like particles in which the N gene is replaced by the reporter GFP
(trVLP-GFP) (31). trVLP-GFP was packaged in cells expressing the N gene and only
replicated for a single round in A549-ACE2 in the absence of N protein. After infection at
an MOI of 0.5 for 24 h, cells were harvested and sorted for the GFP-positive population.
Genomic DNA from both sorted cells and uninfected cells was extracted for sgRNA
amplification and next-generation sequencing using an Illumina NovaSeq 6000 platform.
The sgRNA sequences targeting specific genes were trimmed using the FASTX-Toolkit
(http://hannonlab.cshl.edu/fastx_toolkit/) and cutadapt 1.8.1 and further analyzed for
sgRNA abundance and gene ranking by a published computational tool (MAGeCK) (see
Table S1).
Gene validation
The top 20 genes from the MAGeCK analysis were selected for validation. Two independ­
ent sgRNAs per gene were chosen from the Brunello CRISPR knockout library and cloned
into the plasmid lentiCRISPR v2 (Addgene #52961) and packaged with plasmids psPAX2
and pMD2.G. A549-ACE2 cells were transduced with lentiviruses expressing individual
sgRNA and selected with puromycin for 7 days. The gene-edited mixed population of
cells was used for validation using the SARS-CoV-2 transcription- and replication-compe­
tent virus-like particles, revealing that the N gene is replaced by the NanoLuc lucifer­
ase (trVLP-Nluc) at an MOI of 0.5 for 24 h. trVLP-Nluc was constructed in this study
to measure virus replication for convenience. The luciferase activity was determined
using the Nano-Glo Luciferase Assay kit (Promega #N1110), and the luminescence was
recorded using a FlexStation 3 (Molecular Devices). The sgRNA sequences are listed in
Table S2.
For authentic SARS-CoV-2 virus infection, gene-edited A549-ACE2, HeLa-ACE2, Calu-3,
and MEF-ACE2 cells were inoculated for 24 h. Cells were fixed with 4% paraformaldehyde
(PFA) diluted in PBS for 30 min at room temperature and permeabilized with 0.2% Triton
x-100 in PBS for 1 h at room temperature. Cells were then subjected to immunofluores-
cence staining and high-content imaging. The gene-edited A549-ACE2, HeLa-ACE2, or
MEF-ACE2 cells were also infected with members of the family Coronaviridae and then
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2515
Research Article mBio
subjected to immunofluorescence staining, high-content imaging, or flow cytometry
analysis.
Pseudotyped virus experiment
SARS-CoV-2 pseudoviruses were packaged as previously described (52). Shortly,
pcDNA3.1 vector expressing the spike gene of SARS-CoV-2 lacking the C-terminal 21
amino acids, the full spike of SARS-CoV-1, or VSV-G (pMD2.G [Addgene #12259]), was
co-transfected in HEK 293T cells with the murine leukemia retrovirus (MLV) expressing
the NanoLuc luciferase gene and plasmid expressing the MLV Gag-Pol using Fugene
HD transfection reagent (Promega). The virus entry was assessed by transduction of
pseudoviruses in gene-edited cells in 96-well plates. After 48 h, the luciferase activity
was determined using the Nano-Glo Luciferase Assay kit (Promega #N1110), and the
luminescence was recorded by using a FlexStation 3 (Molecular Devices).
Generation of SARS-CoV-2 replicon system and trVLP-Nluc particles
To construct the replicon system, the full-length viral RNA of SARS-CoV-2 (nCoV-
SH01, GenBank accession no. MT121215) was reverse-transcribed, PCR-amplified as six
fragments, and cloned into the pSMART vector individually. The region encompassing
the spike gene to ORF8 was replaced by the NanoLuc luciferase-P2A-puromycin cassette.
The T7 promoter was inserted upstream of the viral genome to initiate transcription. The
sequences of HDVr ribosome and transcription terminator were added downstream of
the poly-A tail of the viral genome. Six pSMART plasmids and pBeloBAC11 vector were
digested with type IIS restriction enzymes and assembled in vitro as one plasmid and
then amplified in bacteria. Replicon RNA was transcribed from the single plasmid using
the mMESSAGE mMACHINE T7 Transcription Kit (Invitrogen #AM1344) according to the
manufacturer’s instructions. RNA was then transfected into target cells to assess the virus
replication efficiency by measuring the luciferase activity using the Nano-Glo Luciferase
Assay kit (Promega #N1110).
To detect the virus infection conveniently and safely, SARS-CoV-2 transcription-
and replication-competent virus-like particles in which the N gene is replaced by
the NanoLuc luciferase (trVLP-Nluc) were generated as described previously (31). The
replicon plasmid constructed above was modified by maintaining the spike to ORF8
genes but replacing the N gene with NanoLuc luciferase. The single-round trVLP-Nluc
particles were packaged in Vero E6 cells expressing the N gene. The virus infection was
determined by measuring the luciferase activity using the Nano-Glo Luciferase Assay kit
(Promega #N1110).
To modify the replicon system to assess the primary translation of genomic RNA,
the NanoLuc luciferase-P2A-puromycin cassette in the replicon constructed above was
removed, and a coding sequence of P2A-NanoLuc luciferase cassette was inserted at the
NSP1/NSP2 junction. To make a replication-deficient replicon, the viral RdRp mutant was
created by mutating NSP12 catalytic residues at positions 760 and 761 from aspartic
acid (D) to asparagine (N) (46). As described above, modified replicon RNA was in vitro
transcribed and then electroporated into target cells to assess the primary translation of
genomic RNA by measuring the luciferase activity.
Plasmid constructs
The human DAZAP2 (Sino Biological #HG15906-G) or mouse Dazap2 (Sino Biologi­
cal #MG52462-G) gene was PCR-amplified and cloned into the pLV-EF1α-IRES-puro
(Addgene #85132). The PH-Halo-LgBiT fragment was synthesized (GENEWIZ), amplified,
and cloned into pLV-EF1α-IRES-Hygro. The LgBiT fragment was cloned into the pCAGGS
vector by using the synthesized PH-Halo-LgBiT as a template. The CypA-HiBiT fragment
was synthesized (GENEWIZ), amplified, and cloned into pCAGGS. Lentiviruses were
packaged by co-transfection with psPAX2 (Addgene #12260) and pMD2.G (Addgene
#12259) and transduced into wild-type, DAZAP2-deficient A549-ACE2, or MEF-ACE2 cells.
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2516
Research Article mBio
Protein lysate preparation and western blotting
Cells in plates were washed twice with ice-cold PBS and lysed in RIPA buffer (Cell
Signaling #9806S) with a cocktail of protease inhibitors (Sigma-Aldrich #S8830). Samples
were prepared in reducing buffer (50 mM Tris, pH 6.8, 10% glycerol, 2% SDS, 0.02%
[wt/vol] bromophenol blue, 100 mM DTT). After heating (95°C, 10 min), samples were
electrophoresed in 10% SDS polyacrylamide gels, and proteins were transferred to PVDF
membranes. Membranes were blocked with 5% non-fat dry powdered milk in TBST
(100 mM NaCl, 10 mM Tris, pH 7.6, 0.1% Tween 20) for 1 h at room temperature and
probed with the primary antibodies at 4°C overnight. After washing with TBST, blots were
incubated with horseradish peroxidase (HRP)-conjugated secondary antibodies for 1 h
at room temperature, washed again with TBST, and developed using SuperSignal West
Pico or Femto chemiluminescent substrate according to the manufacturer’s instructions
(Thermo Fisher).
The antibodies used are as follows: mouse anti-DAZAP2 (Santa Cruz #sc-515182,
1:1,000), mouse anti-FLAG (Sigma #F1804, 1:2,000), mouse anti-HA (Abmart #M20003M,
1:2,000), mouse anti-FURIN (Proteintech #67481-1-Ig, 1:2,000), rabbit anti-TMPRSS2
(Abcam #ab109131, 1:1,000), mouse anti-CTSL (Thermo Fisher #BMS1032, 1:1,000),
rabbit anti-beta actin (Proteintech #20536-1-AP, 1:5,000), mouse anti-GAPDH (Protein­
tech #60004-1-Ig, 1:2,000), home-made mouse serum against N protein from SARS-
CoV-2, HCoV-229E, PEDV, SADS-CoV or PDCoV (1:1,000), rabbit anti-HCoV-OC43 N (Sino
Biological #40643-T62, 1:1,000), home-made mouse anti-MHV N mAb (1:1,000), rabbit
anti-HCoV-NL63 N (Sino Biological #40641-T62, 1:1,000), home-made mouse anti-IBV
N mAb (1:1,000). The HRP-conjugated secondary antibodies include goat anti-mouse
(Sigma #A4416, 1:5,000) and goat anti-rabbit (Thermo Fisher #31460, 1:5,000).
Immunofluorescence staining and analysis
For high-content imaging analysis, virus-infected cells in plates were fixed with 4%
paraformaldehyde in PBS for 30 min, permeabilized with 0.2% Triton X-100 for 1 h.
Cells were then incubated with house-made mouse serum (1:1000) against nucleocapsid
protein from different coronaviruses for 2 h at room temperature. After three washes,
cells were incubated with the secondary goat anti-mouse IgG (H + L) conjugated with
Alexa Fluor 555 (Thermo Fisher #A-21424, 2 µg/mL) for 1 h at room temperature,
followed by staining with 4′,6-diamidino-2-phenylindole (DAPI). Images were collected
using an Operetta High Content Imaging System (PerkinElmer) and processed using
the PerkinElmer Harmony high-content analysis software v4.9 and ImageJ v2.0.0 (https://
imagej.net/ij/).
For flow cytometry analysis, virus-infected cells were harvested with trypsin and
fixed with 2% paraformaldehyde in PBS for 10 min. Cells were permeabilized with 0.1%
saponin in PBS for 10 min and stained with house-made mouse serum (1:1,000) against
nucleocapsid protein from different coronaviruses for 30 min at room temperature.
After washing, cells were incubated with the secondary goat anti-mouse IgG (H +
L) conjugated with Alexa Fluor 647 (Thermo Fisher #A21235, 2 µg/mL) for 30 min at
room temperature. After two additional washes, cells were subjected to flow cytometry
analysis (Thermo, Attune NxT) and data processing (FlowJo v10.0.7).
For surface staining of entry-related host factors and analyzed by flow cytometry,
cells were collected with TrypLE (Thermo Fisher #12605010) and incubated with the
rabbit anti-ACE2 (Sino Biological #10108-RP01, 1:500), mouse anti-AXL (R&D #MAB154-
SP, 1 µg/mL), mouse anti-DC-SIGN (Biolegend #330102, 1 µg/mL), mouse anti-TIM-1
(Biolegend #354002, 1 µg/mL), mouse anti-SIGLEC1 (Abcam #ab199401, 1 µg/mL), or
mouse anti-heparan sulfate (10E4) (USBiological #H1890, 1 µg/mL) primary antibody
at 4°C for 30 min. After washing, cells were stained with goat anti-rabbit IgG (H + L)
conjugated with Alexa Fluor 647 (Thermo Fisher #A21245, 2 µg/mL) or goat anti-mouse
IgG (H + L) conjugated with Alexa Fluor 647 (Thermo fisher #A21235, 2 µg/mL) for 30 min
at 4°C and subjected to flow cytometry analysis.
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2517
Research Article mBio
For confocal microscopy analysis, cells seeded on coverslips were fixed with 4%
paraformaldehyde in PBS for 30 min, permeabilized with 0.1% saponin in PBS for 10 min.
Cells were then incubated with primary antibody overnight at 4°C. After three washes,
cells were incubated with the secondary antibody for 2 h at room temperature, followed
by staining with 4’,6-diamidino-2-phenylindole (DAPI). Images were collected using a
Leica Confocal Microscope (TCS SP8), processed using the Leica Application Suite X
(LAS X, v3.7.0.20979), and ImageJ v2.0.0 (https://imagej.net/ij/). The primary antibodies
used are as follows: house-made mouse anti-SARS-CoV-2 nucleocapsid protein serum
(1:1,000), rabbit anti-SARS-CoV-2 spike (Sino Biological #40591-T62, 1:1,000), rabbit
anti-LAMP1 (Abcam #ab24170, 1:1,000), mouse anti-DAZAP2 (Santa Cruz #sc-515182,
1:1,000), rabbit anti-HA (Abcam #ab9110, 1:1,000), mouse anti-dsRNA antibody (J2)
(Scicons #10010200). The secondary antibodies used are as follows: goat anti-mouse
IgG (H + L) conjugated with Alexa Fluor 555 (Thermo Fisher #A-21424, 2 µg/mL), goat
anti-rabbit IgG (H + L) conjugated with Alexa Fluor 488 (Thermo Fisher #A-11034, 2 µg/
mL), followed by staining with 4′,6-diamidino-2-phenylindole (DAPI).
Virus binding and internalization assay
For the binding assay, A549-ACE2 cells were pre-chilled on ice for 10 min followed by
incubation with ice-cold virus (MOI 5) on ice for 45 min. After washing with ice-cold
PBS three times, cells were lysed in TRIzol reagent (Thermo Fisher #15596018) for RNA
extraction and qRT-PCR.
For the internalization assay, after virus binding as described above, cells were
washed with ice-cold PBS three times, followed by incubation at 37°C for 45 min.
Uninternalized virions on the cell surface were removed by treating cells with 400 µg/mL
protease K on ice for 45 min. After washing with ice-cold PBS three times, cells were
lysed in TRIzol reagent for RNA extraction and qRT-PCR. The relative amount of bound or
internalized virions was normalized to the internal control GAPDH.
Virion trafficking assay
The experiments were conducted as described previously (42). Control or DAZAP2-defi-
cient A549-ACE2 cells seeded on coverslips were pretreated with 25 µM of E-64d, a
cathepsin B and L proteinase inhibitor. One hour later, the cells were inoculated with
SARS-CoV-2 trVLP-Nluc. The inhibitor E-64d was maintained in the medium during the
infection. At 4 h post-infection, cells were washed twice with PBS, fixed with 4% PFA for
10 min, and then permeabilized with 0.1% saponin for 10 min. Cells were blocked with
5% BSA in PBS for 1 h and incubated with primary antibodies (rabbit anti-SARS-CoV-2
spike protein, mouse anti-SARS-CoV-2 nucleocapsid protein, or rabbit anti-LAMP1) at 4°C
overnight. After three washes, cells were incubated with the secondary goat anti-mouse
or rabbit antibody conjugated with Alexa Fluor 555 or 488 for 2 h at room temperature,
followed by staining with DAPI. Images were acquired using a Leica Confocal Microscope
(TCS SP8) and processed using the Leica Application Suite X (LAS X, v3.7.0.20979). The
number of spike and nucleocapsid double-positive particles per field was quantified.
Quantification of endosomal acidification
Control or DAZAP2-deficient A549-ACE2 cells seeded in a 96-well plate were pre-treated
with or without chloroquine (CQ) (20 µM). One hour later, cells were incubated in phenol
red-free DMEM containing 2 µM LysoSensor Green dye (Thermo #L7535) in the presence
or absence of CQ (20 µM) for 30 min at 37°C. Images were obtained using an AMG
microscope (EVOS M7000), and the fluorescence intensity of LysoSensor was analyzed
using ImageJ v2.0.0 (https://imagej.net/ij/).
Virus-cell fusion assay
The experiments were conducted via an improved system as described previously
(42). The gag-interacting protein cyclophilin A (CypA) was fused with HiBit and
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2518
Research Article mBio
encapsulated into MLV retrovirus particles bearing the SARS-CoV-2 spike protein.
Pseudoviruses containing CypA-HiBiT were packaged in HEK 293T cells by co-transfect­
ing the retrovector pMIG, for which the target gene was replaced by mGreenLantern (52),
plasmid expressing the MLV Gag-Pol, pCAGGS expressing SARS-CoV-2 spike protein with
the deletion of the C-terminal 21 amino acids, and pCAGGS expressing CypA-HiBiT using
Fugene HD transfection reagent (Promega). At 48 h post-transfection, the supernatant
was harvested, clarified by spinning at 3500 rpm for 15 min, aliquoted, and stored at
−80°C. Control and DAZAP2-deficient A549-ACE2 cells (target cells) were transduced with
pLV-PH-Halo-LgBiT-hygro lentivirus to stably express the LgBiT fragment. Target cells
were seeded in a black/clear bottom 96-well plate for 24 h, followed by spinfection with
50 µL of pseudoviruses per well at 1,000 × g, 4°C for 30 min. The luciferase activity
was determined using the Nano-Glo Luciferase Assay kit at 8 h post-infection, and the
luminescence was recorded by using a FlexStation 3 (Molecular Devices).
Cell-cell fusion assay
For visualization and quantification of the syncytia formed after cell–cell fusion, HEK293T
cells (donor cells) were transfected with the pCAGGS vector expressing the spike protein
of SARS-CoV-2 that lacks the C-terminal 21 amino acids. At 24 h post-transfection, control
and DAZAP2-deficient A549-ACE2 cells (acceptor cells) and donor cells were trypsinized
and seeded in a 24-well plate at a ratio of 1:1. After 6 h of co-culture, cells were washed
with PBS and fixed with 4% PFA. Images were obtained using an AMG microscope
(EVOS M7000). Cell-cell fusion was quantified by Wright-Giemsa staining according to
the manufacturer’s instructions (Sangon #E607315). Images were obtained using an AMG
microscope (EVOS M7000), and the number of syncytia or syncytial nuclei was analyzed
using ImageJ v2.0.0 (https://imagej.net/ij/).
To quantify the cell-cell fusion based on luciferase activity as previously reported (42),
control and DAZAP2-edited A549 cells (acceptor cells) were transfected with pCAGGS-
LgBiT encoding the LgBiT fragment of the split-NanoLuc luciferase. HEK 293T cells (donor
cells) were transfected with pCAGGS-HiBiT encoding the HiBiT fragment of split-NanoLuc
luciferase, together with pCAGGS vector expressing the spike protein of SARS-CoV-2 that
lacks the C-terminal 21 amino acids. At 24 h post-transfection, acceptor and donor cells
were trypsinized and seeded together in a black/clear bottom 96-well plate at a ratio of
1:1. After 24 h of co-culture, the luciferase activity was determined using the Nano-Glo
Luciferase Assay kit, and luminescence was recorded by using a FlexStation 3 (Molecular
Devices).
Generation of Dazap2 knockout mice
The mouse Dazap2 gene is located on chromosome 15, and the sequence of the Dazap2
locus (NC_000081.6) was obtained from NCBI. It has four transcripts, with one encoding
the protein. The CRISPR/Cas9 technology was employed to remove exons 2 and 3,
resulting in the deletion of 365 bp coding sequences and disruption of protein function.
sgRNA was transcribed in vitro. Cas9 and sgRNA were microinjected into the fertilized
eggs of C57BL/6JGpt mice. Fertilized eggs were transplanted to obtain positive F0 mice,
which were confirmed by PCR and sequencing. A stable F1 generation mouse model was
obtained by mating positive F0 generation mice with C57BL/6 J mice. The Dazap2-knock­
out (Dazap2−/−) mice are viable, fertile, and do not exhibit any observable defects. The
generation of knockout mice was accomplished with the help of Cyagen Biosciences
(Suzhou, China).
Mouse experiments
Wild-type and Dazap2-knockout female mice in the same background of C57BL/6J
at 10–12 weeks old were used in the study. The clinical isolate of the Beta variant
(B.1.351) of SARS-CoV-2 was passaged 17 times (MA17) in 6- to 8-week-old BALB/c mice
to allow adaptation. Both BALB/c and C57BL/6 mice are vulnerable to the infection
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2519
Research Article mBio
of mouse-adapted MA17 virus. The mice were inoculated intranasally with 1,000 or
50 focus-forming units (FFU) of mouse-adapted or wild-type SARS-CoV-2 Beta variant
(B.1.351) in a volume of 50 µL. The Dazap2−/− mice were also cross-bred with human
ACE2 knock-in mice (hACE2) in the mouse ACE2-coding sequences, with the exception
of the signal peptide region, which was replaced with human ACE2 (Cyagen Biosciences
#C001191). The 10–12 weeks old hACE2 or Dazap2−/− female mice with human ACE2
expression (hACE2-Dazap2−/−) were challenged with 50,000 FFU of SH01 strain isolated in
early 2020 (52). Mice were euthanized at days 1 or 3 post-infection, and the turbinate and
lungs were harvested and homogenized in PBS for live virus titration by focus-forming
assay. The cytokine production in the lungs at day 3 was detected by qRT-PCR after RNA
extraction as described below.
Preparation of HNEC and HBEC in vitro models
Human primary nasal stem cells and bronchial stem cells were isolated from nasal swabs
and bronchoscopic brushing biopsies, donated by lesion-free individuals. Following
20 min digestion with collagenase IV (Gibco #17104019, 1 mg/mL) in Ham’s F12 (Gibco
#11765054), dissociated cells were washed thoroughly in cold wash buffer (Ham’s F12,
5% FBS, 100 µg/mL penicillin-streptomycin, 100 µg/mL gentamicin, and 0.25 µg/mL
amphotericin B) and selectively expanded in a 3T3-J2 culture system, under the protocol
as previously described (75). To knockout the DAZAP2 gene, DAZAP2-specific sgRNA or
non-targeting sgRNA was cloned into plasmid lentiCRISPR v2, for which the puromycin
resistance gene was replaced by turboGFP reporter. Cells were transduced with lentivirus
packaged with helper plasmids psPAX2 and pMD2.G and sorted for GFP-positive cells.
The knockout efficiency was confirmed by western blotting. Cells were then subjected to
in vitro differentiation via air-liquid interface (ALI) modeling. Upon 20-day different iation
in PneumaCult-ALI medium (StemCell Technologies #05001), mature epithelial structures
of HNEC and HBEC were histochemically confirmed and proceeded to subsequent
infection studies.
For SARS-CoV-2 infection, differentiated cells on the insert of 6.5 mm transwells were
incubated with 100 µL of culture medium containing 40,000 FFU of virus for 1 h and
washed three times. At 24 or 48 h post-infection, 200 µL of culture medium was added
to the cells. After 30 min of incubation, the medium was harvested for FFA, and the cells
were lysed for qRT-PCR to determine the virus replication.
qRT-PCR
RNA from tissues or cells was extracted with the TRIzol reagent (Thermo Fisher
#15596018). Host mRNAs were determined using the One Step PrimeScript RT-PCR
Kit (TaKaRa #RR064B) on the CFX Connect Real-Time System (Bio-Rad) instrument.
Host mRNAs were also reverse transcribed into cDNA with PrimeScript RT Reagent Kit
(TaKaRa #RR047A) using RT primer mix of oligo dT primer and random 6mers. qPCR
was performed using TB Green Premix Ex Taq II (TaKaRa #RR820A) on the CFX Connect
Real-Time System (Bio-Rad) instrument. Relative gene expression was calculated relative
to GAPDH. Primers used for qRT-PCR are listed in Table S3.
Statistical analysis
Statistical significance was assigned when P values were <0.05 using Prism Version 9
(GraphPad). Data analysis was determined by an ANOVA, unpaired t-test, or Mann-Whit­
ney depending on data distribution and the number of comparison groups.
ACKNOWLEDGMENTS
Grants from the National Natural Science Foundation of China (32270163 to R.Z.,
32041005 to R.Z., 82341084 to Q.D., 81971500 to J.Z., 92169110 to C.L.), National Key
Research and Development Program of China (2024YFC2607300 and 2020YFA0707701
to R.Z.), Program of Shanghai Academic/Technology Research Leader (22XD1420600
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2520
Research Article mBio
to R.Z.), Shanghai Municipal Science and Technology Major Project (ZD2021CY001),
Non-profit Central Research Institute Fund of Chinese Academy of Medical Sciences
(2023-PT310-02), Shenzhen Medical Research Fund (SMRF No. B2302029), Foundation of
Key Laboratory of Structural Biology of Zhejiang Province of Westlake University (to R.Z.),
and Natural Science Foundation of Shanghai (19ZR1470400 to X.H.) supported this work.
We wish to acknowledge Xiaoqing Sun, Yao Wang, and Shen Cai at Key Laboratory
of Medical Molecular Virology (MOE/NHC/CAMS), Shanghai Frontiers Science Center of
Pathogenic Microorganisms and Infection, School of Basic Medical Sciences of Fudan
University, for the help with next-generation sequencing, flow cytometry, and imaging
analysis, respectively. We thank colleagues at the Biosafety Level 3 Laboratory of Fudan
University for the assistance.
F.F., R.L., J.C., Y.Z., Y.M., Z.W., Y.W., Z.G., L.Y., Y.Y., and R.Z. performed the experiments.
F.F., Y.Z., and R.Z. designed the experiments. Y. Liu, Y. Sun, Y. Liao, X.H., Q.Z., Y. Huang,
L.Q., J.W., Jingxian Zhao, and C.L. provided technical or material support. Q.D., Y.X., Z.Y.,
Y. Hong, P.Z., J.S., Jincun Zhao, and R.Z. provided administrative, supervision support. F.F.,
Z.G., and R.Z. performed data analysis. R.Z. wrote the initial draft of the manuscript, with
the other authors contributing to editing into the final form.
AUTHOR AFFILIATIONS
1Key Laboratory of Medical Molecular Virology (MOE/NHC/CAMS), Shanghai Institute of
Infectious Disease and Biosecurity, Shanghai Frontiers Science Center of Pathogenic
Microorganisms and Infection, School of Basic Medical Sciences, Shanghai Medical
College, Fudan University, Shanghai, China
2Department of Immunology and Microbiology, Zhongshan School of Medicine, Sun
Yat-sen University, Guangzhou, Guangdong, China
3Shanghai Institute for Advanced Immunochemical Studies, School of Life Science and
Technology, ShanghaiTech University, Shanghai, China
4Shanghai Veterinary Research Institute, CAAS, Shanghai, China
5Technical Center for Animal, Plant and Food Inspection and Quarantine of Shanghai
Customs, Shanghai, China
6Porostem BioMedicine, U-LAB, Shanghai, China
7Institutional Center for Shared Technologies and Facilities of SINH, CAS, Shanghai, China
8State Key Laboratory of Respiratory Disease, National Clinical Research Center for
Respiratory Disease, Guangzhou Institute of Respiratory Health, the First Affiliate d
Hospital of Guangzhou Medical University, Guangzhou, China
9Guangzhou National Laboratory, Guangzhou, China
10Center for Infectious Disease Research, School of Medicine, Tsinghua University, Beijing,
China
11School of Life and Health Sciences, Hainan Province Key Laboratory of One Health,
Collaborative Innovation Center of Life and Health, Hainan University, Haikou, China
12Guangzhou Eighth People's Hospital of Guangzhou Medical University, Institute of
Infectious Disease, Guangzhou, Guangdong, China
13Institute for Hepatology, National Clinical Research Center for Infectious Disease,
Shenzhen Third People’s Hospital; The Second Affiliated Hospital, School of Medicine,
Southern University of Science and Technology, Southern University of Science and
Technology, Shenzhen, Guangdong, China
AUTHOR ORCIDs
Fei Feng http://orcid.org/0009-0002-7647-861X
Yingjie Sun http://orcid.org/0000-0002-6086-5722
Chao Liu http://orcid.org/0000-0003-3863-7210
Qiang Ding http://orcid.org/0000-0002-6226-869X
Yue Hong http://orcid.org/0000-0002-9866-0589
Ping Zhang http://orcid.org/0000-0002-5400-8767
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2521
Research Article mBio

| Jing Sun     |  http://orcid.org/0000-0002-5543-803X |     |     |     |
| ------------ | ------------------------------------- | --- | --- | --- |
| Jincun Zhao  |  http://orcid.org/0000-0003-2515-5589 |     |     |     |
| Rong Zhang   |  http://orcid.org/0000-0003-2941-4808 |     |     |     |
FUNDING

| Funder |     | Grant(s) | Author(s) |     |
| ------ | --- | -------- | --------- | --- |
National Natural Science Founda­ 32270163,32041005 Rong Zhang
tion of China

| Natural Science Foundation of  |     | 19ZR1470400 | Youhua Xie |     |
| ------------------------------ | --- | ----------- | ---------- | --- |
Shanghai Municipality

| National Natural Science Founda­ |     | 82341084 | Qiang Ding |     |
| -------------------------------- | --- | -------- | ---------- | --- |
tion of China

| National Natural Science Founda­ |     | 81971500 | Jingxian Zhao |     |
| -------------------------------- | --- | -------- | ------------- | --- |
tion of China

| National Natural Science Founda­ |     | 92169110 | Chao Liu |     |
| -------------------------------- | --- | -------- | -------- | --- |
tion of China
National Key Research and  2024YFC2607300,2020YFA0707701 Rong Zhang
Development Program of China

| Program of Shanghai Academic  |     | 22XD1420600 | Rong Zhang |     |
| ----------------------------- | --- | ----------- | ---------- | --- |
Research Leader

| Shanghai Municipal Science and  |     | ZD2021CY001 | Rong Zhang |     |
| ------------------------------- | --- | ----------- | ---------- | --- |
Technology Major Project
Non-profit Central Research Institute 2023-PT310-02 Rong Zhang
Fund of Chinese Academy of
Medical Sciences

| Shenzhen Medical Research Fund |     | B2302029 | Rong Zhang |     |
| ------------------------------ | --- | -------- | ---------- | --- |
AUTHOR CONTRIBUTIONS
Fei Feng, Conceptualization, Data curation, Formal analysis, Investigation, Methodology,
Writing – review and editing | Jiannan Chen, Investigation, Methodology, Resources |
Rong Li, Investigation, Methodology | Yunkai Zhu, Investigation, Methodology | Yanlong
Ma, Investigation, Methodology | Ziqiao Wang, Investigation, Methodology | Yuyan
Wang, Investigation | Zhichao Gao, Investigation, Methodology, Resources | Lulu Yang,
Investigation, Resources | Yin Yu, Investigation | Yanfeng Liu, Investigation, Resources |
Yingjie Sun, Resources | Ying Liao, Resources | Xinxin Huang, Resources | Qisheng Zhang,
Investigation, Resources | Yongheng Huang, Investigation, Resources | Lin Qiu, Resour­
ces | Jiayu Wu, Resources | Jingxian Zhao, Resources, Supervision | Chao Liu, Funding
acquisition, Resources, Supervision | Qiang Ding, Resources, Supervision | Youhua Xie,
Resources, Supervision | Zhenghong Yuan, Resources, Supervision | Yue Hong, Investiga­
tion, Resources, Supervision | Ping Zhang, Project administration, Resources, Supervision

| Jing Sun, Investigation, Methodology, Project administration, Resources, Supervision
| Jincun Zhao, Project administration, Resources, Supervision | Rong Zhang, Conceptuali­
zation, Data curation, Formal analysis, Funding acquisition, Investigation, Methodology,
Project administration, Resources, Supervision, Writing – original draft, Writing – review
and editing
DATA AVAILABILITY
The authors declare that all relevant data supporting the findings of this study are
available within the paper and its supplemental material. The supplemental material
provides information for the CRISPR screen, qRT-PCR, and RNAseq analysis. Source data
are provided with this paper. Any other data of this study are available upon request.

| September 2025 |  Volume 16  Issue 9 |     |     | 10.1128/mbio.00385-2522 |
| -------------- | ------------------- | --- | --- | ----------------------- |
Research Article mBio
ETHICS APPROVAL
The mouse experiment protocol has been approved by the Animal Ethics Committee of
the School of Basic Medical Sciences at Fudan University (No.20220228-122) with formal
written consent. Experiment protocol was approved by the Institutional Review Boards of
the First Affiliated Hospital of Guangzhou Medical University and conducted in the BSL-3
facility following the regulations. The protocol of human biopsy acquisition and culture
was approved by the Ethics Committees of Shanghai Jiao Tong University Affiliated Sixth
People’s Hospital (approval number: 2017-090).
ADDITIONAL FILES
The following material is available online.
Supplemental Material
Supplemental figures (mBio00385-25-S0001.pdf). Fig. S1-S6.
Table S1 (mBio00385-25-S0002.xlsx). List of genes and scores after MaGeck analysis.
Table S2 (mBio00385-25-S0003.xlsx). sgRNA sequences of genes.
Table S3 (mBio00385-25-S0004.xlsx). List of primers and probes used for qRT-PCR.
REFERENCES
1. Zhou P, Yang X-L, Wang X-G, Hu B, Zhang L, Zhang W, Si H-R, Zhu Y, Li B, 13. Wickenhagen A, Sugrue E, Lytras S, Kuchi S, Noerenberg M, Turnbull ML,
Huang C-L, et al. 2020. A pneumonia outbreak associated with a new Loney C, Herder V, Allan J, Jarmson I, et al. 2021. A prenylated dsRNA
coronavirus of probable bat origin. Nature 579:270–273. https://doi.org/ sensor protects against severe COVID-19. Science 374:eabj3624. https://
10.1038/s41586-020-2012-7 doi.org/10.1126/science.abj3624
2. Zhu N, Zhang D, Wang W, Li X, Yang B, Song J, Zhao X, Huang B, Shi W, 14. Mac Kain A, Maarifi G, Aicher S-M, Arhel N, Baidaliuk A, Munier S, Donati
Lu R, Niu P, Zhan F, Ma X, Wang D, Xu W, Wu G, Gao GF, Tan W, China F, Vallet T, Tran QD, Hardy A, Chazal M, Porrot F, OhAinle M, Carlson-
Novel Coronavirus Investigating and Research Team. 2020. A novel Stevermer J, Oki J, Holden K, Zimmer G, Simon-Lorière E, Bruel T,
coronavirus from patients with pneumonia in China, 2019. N Engl J Med Schwartz O, van der Werf S, Jouvenet N, Nisole S, Vignuzzi M, Roesch F.
382:727–733. https://doi.org/10.1056/NEJMoa2001017 2022. Identification of DAXX as a restriction factor of SARS-CoV-2
3. Kung YA, Lee KM, Chiang HJ, Huang SY, Wu CJ, Shih SR. 2022. Molecular through a CRISPR/Cas9 screen. Nat Commun 13:2442. https://doi.org/10.
vrology of SARS-CoV-2 and related coronaviruses. Microbiol Mol Biol Rev 1038/s41467-022-30134-9
86:e00026-21. https://doi.org/10.1128/mmbr.00026-21 15. Danziger O, Patel RS, DeGrace EJ, Rosen MR, Rosenberg BR. 2022.
4. V’kovski P, Kratzel A, Steiner S, Stalder H, Thiel V. 2021. Coronavirus Inducible CRISPR activation screen for interferon-stimulated genes
biology and replication: implications for SARS-CoV-2. Nat Rev Microbiol identifies OAS1 as a SARS-CoV-2 restriction factor. Plos Pathog
19:155–170. https://doi.org/10.1038/s41579-020-00468-6 18:e1010464. https://doi.org/10.1371/journal.ppat.1010464
5. Fung TS, Liu DX. 2019. Human coronavirus: host-pathogen interaction. 16. Rebendenne A, Roy P, Bonaventure B, Chaves Valadão AL, Desmarets L,
Annu Rev Microbiol 73:529–557. https://doi.org/10.1146/annurev-micro- Arnaud-Arnould M, Rouillé Y, Tauziet M, Giovannini D, Touhami J, Lee Y,
020518-115759 DeWeirdt P, Hegde M, Urbach S, Koulali KE, de Gracia FG, McKellar J,
6. Zhang G, Li B, Yoo D, Qin T, Zhang X, Jia Y, Cui S. 2021. Animal Dubuisson J, Wencker M, Belouzard S, Moncorgé O, Doench JG, Goujon
coronaviruses and SARS-CoV-2. Transbound Emerg Dis 68:1097–1110. ht C. 2022. Bidirectional genome-wide CRISPR screens reveal host factors
tps://doi.org/10.1111/tbed.13791 regulating SARS-CoV-2, MERS-CoV and seasonal HCoVs. Nat Genet
7. Edwards CE, Yount BL, Graham RL, Leist SR, Hou YJ, Dinnon KH III, Sims 54:1090–1102. https://doi.org/10.1038/s41588-022-01110-2
AC, Swanstrom J, Gully K, Scobey TD, Cooley MR, Currie CG, Randell SH, 17. Biering SB, Sarnik SA, Wang E, Zengel JR, Leist SR, Schäfer A, Sathyan V,
Baric RS. 2020. Swine acute diarrhea syndrome coronavirus replication in Hawkins P, Okuda K, Tau C, et al. 2022. Genome-wide bidirectional
primary human cells reveals potential susceptibility to infection. Proc CRISPR screens identify mucins as host factors modulating SARS-CoV-2
Natl Acad Sci U S A 117:26915–26925. https://doi.org/10.1073/pnas.2001 infection. Nat Genet 54:1078–1089. https://doi.org/10.1038/s41588-022-
046117 01131-x
8. Lednicky JA, Tagliamonte MS, White SK, Elbadry MA, Alam MM, 18. Bruchez A, Sha K, Johnson J, Chen L, Stefani C, McConnell H, Gaucherand
Stephenson CJ, Bonny TS, Loeb JC, Telisma T, Chavannes S, Ostrov DA, L, Prins R, Matreyek KA, Hume AJ, Mühlberger E, Schmidt EV, Olinger GG,
Mavian C, Beau De Rochars VM, Salemi M, Morris JG Jr. 2021. Independ­ Stuart LM, Lacy-Hulbert A. 2020. MHC class II transactivator CIITA
ent infections of porcine deltacoronavirus among Haitian children. induces cell resistance to Ebola virus and SARS-like coronaviruses.
Nature 600:133–137. https://doi.org/10.1038/s41586-021-04111-z Science 370:241–247. https://doi.org/10.1126/science.abb3753
9. Schoggins JW. 2019. Interferon-stimulated genes: what do they all do? 19. Overmyer KA, Shishkova E, Miller IJ, Balnis J, Bernstein MN, Peters-Clarke
Annu Rev Virol 6:567–584. https://doi.org/10.1146/annurev-virology-092 TM, Meyer JG, Quan Q, Muehlbauer LK, Trujillo EA, et al. 2021. Large-
818-015756 scale multi-omic analysis of COVID-19 severity. Cell Syst 12:23–40. https:/
10. Schneider WM, Chevillotte MD, Rice CM. 2014. Interferon-stimulated /doi.org/10.1016/j.cels.2020.10.003
genes: a complex web of host defenses. Annu Rev Immunol 32:513–545. 20. Zhou Z, Ren L, Zhang L, Zhong J, Xiao Y, Jia Z, Guo L, Yang J, Wang C,
https://doi.org/10.1146/annurev-immunol-032713-120231 Jiang S, et al. 2020. Heightened innate immune responses in the
11. Martin-Sancho L, Lewinski MK, Pache L, Stoneham CA, Yin X, Becker ME, respiratory tract of COVID-19 patients. Cell Host Microbe 27:883–890. htt
Pratt D, Churas C, Rosenthal SB, Liu S, et al. 2021. Functional landscape of ps://doi.org/10.1016/j.chom.2020.04.017
SARS-CoV-2 cellular restriction. Mol Cell 81:2656–2668. https://doi.org/1 21. Shen B, Yi X, Sun Y, Bi X, Du J, Zhang C, Quan S, Zhang F, Sun R, Qian L,
0.1016/j.molcel.2021.04.008 et al. 2020. Proteomic and metabolomic characterization of COVID-19
12. Pfaender S, Mar KB, Michailidis E, Kratzel A, Boys IN, V’kovski P, Fan W, patient sera. Cell 182:59–72. https://doi.org/10.1016/j.cell.2020.05.032
Kelly JN, Hirt D, Ebert N, et al. 2020. LY6E impairs coronavirus fusion and 22. Lamers MM, Beumer J, van der Vaart J, Knoops K, Puschhof J, Breugem
confers immune control of viral disease. Nat Microbiol 5:1330–1339. http TI, Ravelli RBG, Paul van Schayck J, Mykytyn AZ, Duimel HQ, van
s://doi.org/10.1038/s41564-020-0769-y Donselaar E, Riesebosch S, Kuijpers HJH, Schipper D, van de Wetering
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2523
Research Article mBio
WJ, de Graaf M, Koopmans M, Cuppen E, Peters PJ, Haagmans BL, Clevers restriction factor of human cytomegalovirus. Microbiol Spectr
H. 2020. SARS-CoV-2 productively infects human gut enterocytes. 10:e0134221. https://doi.org/10.1128/spectrum.01342-21
Science 369:50–54. https://doi.org/10.1126/science.abc1669 40. Luo W, Zhang J, Liang L, Wang G, Li Q, Zhu P, Zhou Y, Li J, Zhao Y, Sun N,
23. Blanco-Melo D, Nilsson-Payant BE, Liu W-C, Uhl S, Hoagland D, Møller R, Huang S, Zhou C, Chang Y, Cui P, Chen P, Jiang Y, Deng G, Bu Z, Li C,
Jordan TX, Oishi K, Panis M, Sachs D, Wang TT, Schwartz RE, Lim JK, Jiang L, Chen H. 2018. Phospholipid scramblase 1 interacts with
Albrecht RA, tenOever BR. 2020. Imbalanced host response to SARS- influenza a virus NP, impairing its nuclear import and thereby suppress­
CoV-2 drives development of COVID-19. Cell 181:1036–1045. https://doi. ing virus replication. Plos Pathog 14:e1006851. https://doi.org/10.1371/j
org/10.1016/j.cell.2020.04.026 ournal.ppat.1006851
24. Gordon DE, Jang GM, Bouhaddou M, Xu J, Obernier K, White KM, 41. Dong B, Zhou Q, Zhao J, Zhou A, Harty RN, Bose S, Banerjee A, Slee R,
O’Meara MJ, Rezelj VV, Guo JZ, Swaney DL, et al. 2020. A SARS-CoV-2 Guenther J, Williams BRG, Wiedmer T, Sims PJ, Silverman RH. 2004.
protein interaction map reveals targets for drug repurposing. Nature Phospholipid scramblase 1 potentiates the antiviral activity of
583:459–468. https://doi.org/10.1038/s41586-020-2286-9 interferon. J Virol 78:8983–8993. https://doi.org/10.1128/JVI.78.17.8983-
25. Gordon DE, Hiatt J, Bouhaddou M, Rezelj VV, Ulferts S, Braberg H, Jureka 8993.2004
AS, Obernier K, Guo JZ, Batra J, et al. 2020. Comparative host-coronavirus 42. Xu D, Jiang W, Wu L, Gaudet RG, Park ES, Su M, Cheppali SK, Cheemarla
protein interaction networks reveal pan-viral disease mechanisms. NR, Kumar P, Uchil PD, Grover JR, Foxman EF, Brown CM, Stansfeld PJ,
Science 370:eabe9403. https://doi.org/10.1126/science.abe9403 Bewersdorf J, Mothes W, Karatekin E, Wilen CB, MacMicking JD. 2023.
26. Bojkova D, Klann K, Koch B, Widera M, Krause D, Ciesek S, Cinatl J, Münch PLSCR1 is a cell-autonomous defence factor against SARS-CoV-2
C. 2020. Proteomics of SARS-CoV-2-infected host cells reveals therapy infection. Nature 619:819–827. https://doi.org/10.1038/s41586-023-0632
targets. Nature 583:469–472. https://doi.org/10.1038/s41586-020-2332-7 2-y
27. Kousathanas A, Pairo-Castineira E, Rawlik K, Stuckey A, Odhams CA, 43. Zeqiraj E, Filippi BM, Deak M, Alessi DR, van Aalten DMF. 2009. Structure
Walker S, Russell CD, Malinauskas T, Wu Y, Millar J, et al. 2022. Whole- of the LKB1-STRAD-MO25 complex reveals an allosteric mechanism of
genome sequencing reveals host factors underlying critical COVID-19. kinase activation. Science 326:1707–1711. https://doi.org/10.1126/scien
Nature 607:97–103. https://doi.org/10.1038/s41586-022-04576-6 ce.1178377
28. Andreakos E, Abel L, Vinh DC, Kaja E, Drolet BA, Zhang Q, O’Farrelly C, 44. Boudeau J, Scott JW, Resta N, Deak M, Kieloch A, Komander D, Hardie
Novelli G, Rodríguez-Gallego C, Haerynck F, Prando C, Pujol A, Su HC, DG, Prescott AR, van Aalten DMF, Alessi DR. 2004. Analysis of the LKB1-
Casanova J-L, Spaan AN, COVID Human Genetic Effort. 2022. A global STRAD-MO25 complex. J Cell Sci 117:6365–6375. https://doi.org/10.1242
effort to dissect the human genetic basis of resistance to SARS-CoV-2 /jcs.01571
infection. Nat Immunol 23:159–164. https://doi.org/10.1038/s41590-021 45. Ward DM, Vaughn MB, Shiflett SL, White PL, Pollock AL, Hill J, Schnegel­
-01030-z berger R, Sundquist WI, Kaplan J. 2005. The role of LIP5 and CHMP5 in
29. Hou J, Wei Y, Zou J, Jaffery R, Sun L, Liang S, Zheng N, Guerrero AM, Egan multivesicular body formation and HIV-1 budding in mammalian cells. J
NA, Bohat R, Chen S, Zheng C, Mao X, Yi SS, Chen K, McGrail DJ, Sahni N, Biol Chem 280:10548–10555. https://doi.org/10.1074/jbc.M413734200
Shi P-Y, Chen Y, Xie X, Peng W. 2024. Integrated multi-omics analyses 46. Gao Y, Yan L, Huang Y, Liu F, Zhao Y, Cao L, Wang T, Sun Q, Ming Z,
identify anti-viral host factors and pathways controlling SARS-CoV-2 Zhang L, et al. 2020. Structure of the RNA-dependent RNA polymerase
infection. Nat Commun 15:109. https://doi.org/10.1038/s41467-023-441 from COVID-19 virus. Science 368:779–782. https://doi.org/10.1126/scie
75-1 nce.abb7498
30. Doench JG, Fusi N, Sullender M, Hegde M, Vaimberg EW, Donovan KF, 47. Xavier M, Matthieu P, Laurine L, Eduard Baquero S, Grégory J, Laurine C,
Smith I, Tothova Z, Wilen C, Orchard R, Virgin HW, Listgarten J, Root DE. Maxime B, Flora D, Mélanie A, Fabiana G, et al. 2021. Variants with the
2016. Optimized sgRNA design to maximize activity and minimize off- N501Y mutation extend SARS-CoV-2 host range to mice, with contact
target effects of CRISPR-Cas9. Nat Biotechnol 34:184–191. https://doi.org transmission. bioRxiv. https://doi.org/10.1101/2021.03.18.436013
/10.1038/nbt.3437 48. Pan T, Chen R, He X, Yuan Y, Deng X, Li R, Yan H, Yan S, Liu J, Zhang Y,
31. Ju X, Zhu Y, Wang Y, Li J, Zhang J, Gong M, Ren W, Li S, Zhong J, Zhang L, Zhang X, Yu F, Zhou M, Ke C, Ma X, Zhang H. 2021. Infection of wild-type
Zhang QC, Zhang R, Ding Q. 2021. A novel cell culture system modeling mice by SARS-CoV-2 B.1.351 variant indicates a possible novel cross-
the SARS-CoV-2 life cycle. Plos Pathog 17:e1009439. https://doi.org/10.1 species transmission route. Signal Transduct Target Ther 6:420. https://d
371/journal.ppat.1009439 oi.org/10.1038/s41392-021-00848-1
32. Zhang H, Ma X, Deng X, Chen Y, Mo X, Zhang Y, Zhao H, Ma D. 2012. 49. Kant R, Kareinen L, Smura T, Freitag TL, Jha SK, Alitalo K, Meri S, Sironen
PDCD10 interacts with STK25 to accelerate cell apoptosis under T, Saksela K, Strandin T, Kipar A, Vapalahti O. 2021. Common laboratory
oxidative stress. Front Biosci (Landmark Ed) 17:2295–2305. https://doi.or mice are sdusceptible to infection with the SARS-CoV-2 beta variant.
g/10.2741/4053 Viruses 13:2263. https://doi.org/10.3390/v13112263
33. Lauenborg B, Kopp K, Krejsgaard T, Eriksen KW, Geisler C, Dabelsteen S, 50. Ferran TF, Benjamin T, Anna PG, Miguel RD, Eva RM, Carlos ÁN, Mónica P,
Gniadecki R, Zhang Q, Wasik MA, Woetmann A, Odum N. 2010. Edurne GV, Daniel PZ, Jordana MB, et al. 2021. SARS-CoV-2 B.1.351 (beta)
Programmed cell death-10 enhances proliferation and protects variant shows enhanced infectivity in K18-hACE2 transgenic mice and
malignant T cells from apoptosis. APMIS 118:719–728. https://doi.org/10 expanded tropism to wildtype mice compared to B.1 variant. bioRxiv. htt
.1111/j.1600-0463.2010.02669.x ps://doi.org/10.1101/2021.08.03.454861
34. Zepp JA, Wu L, Qian W, Ouyang W, Aronica M, Erzurum S, Li X. 2015. 51. Feng F, Zhu Y, Ma Y, Wang Y, Yu Y, Sun X, Song Y, Shao Z, Huang X, Liao
TRAF4-SMURF2-mediated DAZAP2 degradation is critical for IL-25 Y, Ma J, He Y, Wang M, Tang L, Huang Y, Zhao J, Ding Q, Xie Y, Cai Q, Xiao
signaling and allergic airway inflammation. J Immunol 194:2826–2837. h H, Li C, Yuan Z, Zhang R. 2023. A CRISPR activation screen ident ifies
ttps://doi.org/10.4049/jimmunol.1402647 genes that enhance SARS-CoV-2 infection. Protein Cell 14:64–68. https://
35. Popova A, Kzhyshkowska J, Nurgazieva D, Goerdt S, Gratchev A. 2012. doi.org/10.1093/procel/pwac036
Smurf2 regulates IL17RB by proteasomal degradation of its novel 52. Zhu Y, Feng F, Hu G, Wang Y, Yu Y, Zhu Y, Xu W, Cai X, Sun Z, Han W, Ye R,
binding partner DAZAP2. Immunobiology 217:321–328. https://doi.org/ Qu D, Ding Q, Huang X, Chen H, Xu W, Xie Y, Cai Q, Yuan Z, Zhang R.
10.1016/j.imbio.2011.10.004 2021. A genome-wide CRISPR screen identifies host factors that regulate
36. Liebl MC, Moehlenbrink J, Becker H, Raddatz G, Abdeen SK, Aqeilan RI, SARS-CoV-2 entry. Nat Commun 12:961. https://doi.org/10.1038/s41467-
Lyko F, Hofmann TG. 2021. DAZAP2 acts as specifier of the p53 response 021-21213-4
to DNA damage. Nucleic Acids Res 49:2759–2776. https://doi.org/10.109 53. Yeung ML, Teng JLL, Jia L, Zhang C, Huang C, Cai JP, Zhou R, Chan KH,
3/nar/gkab084 Zhao H, Zhu L, Siu KL, Fung SY, Yung S, Chan TM, To KKW, Chan JFW, Cai
37. Lukas J, Mazna P, Valenta T, Doubravska L, Pospichalova V, Vojtechova Z, Lau SKP, Chen Z, Jin DY, Woo PCY, Yuen KY. 2021. Soluble ACE2-
M, Fafilek B, Ivanek R, Plachy J, Novak J, Korinek V. 2009. Dazap2 mediated cell entry of SARS-CoV-2 via interaction with proteins related
modulates transcription driven by the Wnt effector TCF-4. Nucleic Acids to the renin-angiotensin system. Cell 184:2212–2228. https://doi.org/10.
Res 37:3007–3020. https://doi.org/10.1093/nar/gkp179 1016/j.cell.2021.02.053
38. Kim JE, Ryu I, Kim WJ, Song OK, Ryu J, Kwon MY, Kim JH, Jang SK. 2008. 54. Schneider WM, Luna JM, Hoffmann H-H, Sánchez-Rivera FJ, Leal AA,
Proline-rich transcript in brain protein induces stress granule formation. Ashbrook AW, Le Pen J, Ricardo-Lax I, Michailidis E, Peace A, Stenzel AF,
Mol Cell Biol 28:803–813. https://doi.org/10.1128/MCB.01226-07 Lowe SW, MacDonald MR, Rice CM, Poirier JT. 2021. Genome-scale
39. Sadanari H, Takemoto M, Ishida T, Otagiri H, Daikoku T, Murayama T, Identification of SARS-CoV-2 and pan-coronavirus host factor networks.
Kusano S. 2022. The Interferon-Inducible human PLSCR1 protein is a Cell 184:120–132. https://doi.org/10.1016/j.cell.2020.12.006
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2524
Research Article mBio
55. Baggen J, Persoons L, Vanstreels E, Jansen S, Van Looveren D, Boeckx B, 66. Nabeel-Shah S, Lee H, Ahmed N, Burke GL, Farhangmehr S, Ashraf K, Pu
Geudens V, De Man J, Jochmans D, Wauters J, Wauters E, Vanaudenaerde S, Braunschweig U, Zhong G, Wei H, Tang H, Yang J, Marcon E, Blencowe
BM, Lambrechts D, Neyts J, Dallmeier K, Thibaut HJ, Jacquemyn M, Maes BJ, Zhang Z, Greenblatt JF. 2022. SARS-CoV-2 nucleocapsid protein binds
P, Daelemans D. 2021. Genome-wide CRISPR screening ident ifies host mRNAs and attenuates stress granules to impair host stress
TMEM106B as a proviral host factor for SARS-CoV-2. Nat Genet 53:435– response. iScience 25:103562. https://doi.org/10.1016/j.isci.2021.103562
444. https://doi.org/10.1038/s41588-021-00805-2 67. Liu H, Bai Y, Zhang X, Gao T, Liu Y, Li E, Wang X, Cao Z, Zhu L, Dong Q, Hu
56. Wei J, Alfajaro MM, DeWeirdt PC, Hanna RE, Lu-Culligan WJ, Cai WL, Y, Wang G, Song C, Niu X, Zheng T, Wang D, Liu Z, Jin Y, Li P, Bian X, Cao
Strine MS, Zhang SM, Graziano VR, Schmitz CO, et al. 2021. Genome- C, Liu X. 2022. SARS-CoV-2 N protein antagonizes stress granule
wide CRISPR screens reveal host factors critical for SARS-CoV-2 infection. assembly and IFN production by interacting with G3BPs to facilitate viral
Cell 184:76–91. https://doi.org/10.1016/j.cell.2020.10.028 replication. J Virol 96:e0041222. https://doi.org/10.1128/jvi.00412-22
57. Wang R, Simoneau CR, Kulsuptrakul J, Bouhaddou M, Travisano KA, 68. Kim D, Maharjan S, Kang M, Kim J, Park S, Kim M, Baek K, Kim S, Suh JG,
Hayashi JM, Carlson-Stevermer J, Zengel JR, Richards CM, Fozouni P, Oki Lee Y, Kwon HJ. 2022. Differential effect of SARS-CoV-2 infection on
J, Rodriguez L, Joehnk B, Walcott K, Holden K, Sil A, Carette JE, Krogan NJ, stress granule formation in vero and calu-3 cells. Front Microbiol
Ott M, Puschnik AS. 2021. Genetic screens identify host factors for SARS- 13:997539. https://doi.org/10.3389/fmicb.2022.997539
CoV-2 and common cold coronaviruses. Cell 184:106–119. https://doi.or 69. Dolliver SM, Kleer M, Bui-Marinos MP, Ying S, Corcoran JA, Khaperskyy
g/10.1016/j.cell.2020.12.004 DA. 2022. Nsp1 proteins of human coronaviruses HCoV-OC43 and SARS-
58. Daniloski Z, Jordan TX, Wessels H-H, Hoagland DA, Kasela S, Legut M, CoV2 inhibit stress granule formation. Plos Pathog 18:e1011041. https://
Maniatis S, Mimitou EP, Lu L, Geller E, Danziger O, Rosenberg BR, doi.org/10.1371/journal.ppat.1011041
Phatnani H, Smibert P, Lappalainen T, tenOever BR, Sanjana NE. 2021. 70. Zheng ZQ, Wang SY, Xu ZS, Fu YZ, Wang YY. 2021. SARS-CoV-2
Identification of required host factors for SARS-CoV-2 infection in human nucleocapsid protein impairs stress granule formation to promote viral
cells. Cell 184:92–105. https://doi.org/10.1016/j.cell.2020.10.030 replication. Cell Discov 7:38. https://doi.org/10.1038/s41421-021-00275-
59. Shi Y, Luo S, Peng J, Huang C, Tan D, Hu W. 2004. The structure, 0
expression and function prediction of DAZAP2, a down-regulated gene 71. Gao B, Gong X, Fang S, Weng W, Wang H, Chu H, Sun Y, Meng C, Tan L,
in multiple myeloma. Genomics Proteomics Bioinformatics 2:47–54. http Song C, Qiu X, Liu W, Forlenza M, Ding C, Liao Y. 2021. Inhibition of anti-
s://doi.org/10.1016/s1672-0229(04)02007-8 viral stress granule formation by coronavirus endoribonuclease nsp15
60. Yang W, Mansour SL. 1999. Expression and genetic analysis of prtb, a ensures efficient virus replication. Plos Pathog 17:e1008690. https://doi.o
gene that encodes a highly conserved proline-rich protein expressed in rg/10.1371/journal.ppat.1008690
the brain. Dev Dyn 215:108–116. https://doi.org/10.1002/(SICI)1097-017 72. Bai Y, He Q, Yang J, Lu S, Mao Q, Gao F, Bian L, Zhang J, An C, Liu J, Wu X,
7(199906)215:2<108::AID-DVDY3>3.0.CO;2-I Yu W, Wang Z, Peng X, Wang J, Liang Z, Xu M. 2022. B.1.351 SARS-CoV-2
61. Matsunami M, Yoshioka T, Minoura T, Okano Y, Muto Y. 2011. Evolution­ variant exhibits higher virulence but less viral shedding than that of the
ary features and intracellular behavior of the PRTB protein. Biochem ancestral strain in young nonhuman primates. Microbiol Spectr
Genet 49:458–473. https://doi.org/10.1007/s10528-011-9422-z 10:e0226322. https://doi.org/10.1128/spectrum.02263-22
62. Cohen-Barak O, Yi Z, Hagiwara N, Monzen K, Komuro I, Brilliant MH. 2003. 73. Lin Y, Huang C, Gao H, Li X, Lin Q, Zhou S, Huo Z, Huang Y, Liu C, Zhang
Sox6 regulation of cardiac myocyte development. Nucleic Acids Res P. 2022. AMBRA1 promotes dsRNA- and virus-induced apoptosis
31:5941–5948. https://doi.org/10.1093/nar/gkg807 through interacting with and stabilizing MAVS. J Cell Sci 135:jcs258910.
63. Luo SQ, Hu JP, Qu Q, Li J, Ren W, Zhang JM, Zhong Y, Hu WX. 2012. The https://doi.org/10.1242/jcs.258910
effects of promoter methylation on downregulation of DAZAP2 in 74. Pal P, Dowd KA, Brien JD, Edeling MA, Gorlatov S, Johnson S, Lee I,
multiple myeloma cell lines. Plos One 7:e40475. https://doi.org/10.1371/j Akahata W, Nabel GJ, Richter MKS, Smit JM, Fremont DH, Pierson TC,
ournal.pone.0040475 Heise MT, Diamond MS. 2013. Development of a highly protective
64. Li J, Hu WX, Luo SQ, Xiong DH, Sun S, Wang YP, Bu XF, Liu J, Hu J. 2019. combination monoclonal antibody therapy against Chikungunya virus.
Promoter methylation induced epigenetic silencing of DAZAP2, a Plos Pathog 9:e1003312. https://doi.org/10.1371/journal.ppat.1003312
downstream effector of p38/MAPK pathway, in multiple myeloma cells. 75. Hong Y, Shan S, Gu Y, Huang H, Zhang Q, Han Y, Dong Y, Liu Z, Huang M,
Cell Signal 60:136–145. https://doi.org/10.1016/j.cellsig.2019.04.012 Ren T. 2022. Malfunction of airway basal stem cells plays a crucial role in
65. Kim B, Cooke HJ, Rhee K. 2012. DAZL is essential for stress granule pathophysiology of tracheobronchopathia osteoplastica. Nat Commun
formation implicated in germ cell survival upon heat stress. Develop­ 13:1309. https://doi.org/10.1038/s41467-022-28903-7
ment139:568–578. https://doi.org/10.1242/dev.075846
September 2025 Volume 16 Issue 9 10.1128/mbio.00385-2525