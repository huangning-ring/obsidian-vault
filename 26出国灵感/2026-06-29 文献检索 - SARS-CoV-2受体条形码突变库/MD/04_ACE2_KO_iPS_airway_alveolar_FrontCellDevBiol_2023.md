---
title: "ACE2 knockout hinders SARS-CoV-2 propagation in iPS cell-derived airway and alveolar epithelial cells"
authors: "Ryo Niwa, Kouji Sakai, Mandy Siu Yu Lung, Tomoko Matsumoto, Ryuta Mikawa, Shotaro Maehana, Masato Suzuki, Yuki Yamamoto, Thomas L. Maurissen, Ai Hirabayashi, Takeshi Noda, Makoto Kubo, Shimpei Gotoh, Knut Woltjen"
journal: "Frontiers in Cell and Developmental Biology"
doi: "10.3389/fcell.2023.1290876"
published: "08 12 2023"
source: "frontiers_xml"
has_fulltext: true
content_kind: "fulltext"
has_abstract: true
token_estimate: 8111
---
# ACE2 knockout hinders SARS-CoV-2 propagation in iPS cell-derived airway and alveolar epithelial cells
## Abstract
Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2), the causative agent of COVID-19, continues to spread around the world with serious cases and deaths. It has also been suggested that different genetic variants in the human genome affect both the susceptibility to infection and severity of disease in COVID-19 patients. Angiotensin-converting enzyme 2 (ACE2) has been identified as a cell surface receptor for SARS-CoV and SARS-CoV-2 entry into cells. The construction of an experimental model system using human iPS cells would enable further studies of the association between viral characteristics and genetic variants. Airway and alveolar epithelial cells are cell types of the lung that express high levels of ACE2 and are suitable for *in vitro* infection experiments. Here, we show that human iPS cell-derived airway and alveolar epithelial cells are highly susceptible to viral infection of SARS-CoV-2. Using gene knockout with CRISPR-Cas9 in human iPS cells we demonstrate that ACE2 plays an essential role in the airway and alveolar epithelial cell entry of SARS-CoV-2 *in vitro*. Replication of SARS-CoV-2 was strongly suppressed in ACE2 knockout (KO) lung cells. Our model system based on human iPS cell-derived lung cells may be applied to understand the molecular biology regulating viral respiratory infection leading to potential therapeutic developments for COVID-19 and the prevention of future pandemics.
## Introduction
Combining genome editing technology with human induced pluripotent stem (iPS) cells allows for differentiation of gene-edited iPS cells into functional somatic cell types, enabling studies of how genetic variations link genotype and phenotype (Okano and Yamanaka, 2014; Hockemeyer and Jaenisch, 2016; Ben Jehuda et al., 2018). CRISPR-Cas9 is the most widely used technology for gene editing (Wang and Doudna, 2023). The Cas9 nuclease is directed to its target site by a guide RNA (gRNA) consisting of 20 nucleotides that determines the position of double-strand break (DSB) formation in the target genome. The host cell then employs one of three major DNA repair pathways: non-homologous end joining (NHEJ), microhomology-mediated end joining (MMEJ), and homology directed repair (HDR) to mend the DSB (Yeh et al., 2019; Nambiar et al., 2022). NHEJ is typically attributed to the formation of random insertions and deletions (indels) and is commonly employed for gene knockout (KO). MMEJ produces deletions between short repeat sequences, or microhomologies, such that the size of the deletion can be reliably predicted (Ata et al., 2018; Shen et al., 2018; Martínez-Gálvez et al., 2021). Therefore, MMEJ has proven to be useful for reproducibly creating mutations that resulting in frameshifts and gene KO (Martínez-Gálvez et al., 2021), or naturally occurring pathogenic deletion variants (Ata et al., 2018; Grajcarek et al., 2019).
COVID-19, declared a pandemic in 2020, has drastically increased the number of deaths associated with infection throughout 2020 and 2021 (Forchette et al., 2021; Wang et al., 2022a), and its impact on global mortality rates and reduced life expectancy continues to this day. Molecular pathways for SARS-CoV-2 viral infection and the susceptible somatic cell types are gradually being uncovered, with two major pathways suggesting cell surface entry and endosomal entry (Scialo et al., 2020; Shang et al., 2020). Both pathways use Angiotensin Converting Enzyme 2 (ACE2) as a cell surface receptor. ACE2 serves to maintain the balance of angiotensin II (Ang II) levels in the bloodstream in the human body (Turner, 2015). Cell surface entry by SARS viruses is achieved by Spike protein (S-protein) priming by TMPRSS2, followed by binding to ACE2. On the other hand, SARS viruses can enter the cell via a TMPRSS2-independent endosomal entry pathway (Kimura et al., 2022; Meng et al., 2022; Peacock et al., 2022; Willett et al., 2022). It is essential to build *in vitro* models that recapitulate the physiological effects of viral infection to unravel the mechanisms of infection at the molecular level.
As reported previously, infection models using iPS cell-derived airway and alveolar epithelial cells are useful systems for this purpose (Huang et al., 2020; Abo et al., 2022; Wang et al., 2022b; Kimura et al., 2022; Saito et al., 2022). In lung tissue, the airways and alveoli are the main target tissues of SARS-CoV-2 and creating them *in vitro* using gene-edited iPS cells would allow for a detailed evaluation of viral pathology. SARS-CoV-2 has been analyzed using iPS cell-derived alveolar and airway epithelial cells based on air-liquid interface (ALI) culture (Kimura et al., 2022; Saito et al., 2022). ACE2 is expressed in these cells (Hikmet et al., 2020; Yao et al., 2020; Zhao et al., 2020) and therefore a clear demonstration of ACE2-mediated viral entry in iPS cell-derived models would aid in various aspects of viral biology, including the evaluation of viral variants.
In this study, we created ACE2 KO iPS cells with high efficiency and reproducibility by designing gRNAs likely to result in predictable MMEJ deletions (Shang et al., 2020). ACE2-deficiency showed little effect on the differentiation or integrity of lung epithelial cells. We subsequently established an iPS cell-derived model of lung infection and demonstrated that ACE2 is essential for efficient SARS-CoV-2 viral entry and replication. Our study demonstrates that an *in vitro* system can mimic SARS-CoV-2 entry into lung cell types as observed *in vivo*. Differentiation of gene-edited iPS cell lines presents a valuable tool to predict the role of genes and gene variants related to viral infection, which would greatly contribute to infectious disease prevention and treatment.
## Materials and methods
### Culture of human iPS cells
The B2-3 lung reporter iPS cell line (Gotoh et al., 2014) was maintained at 37 °C and 5% CO<sub>2</sub> in StemFit AK02N medium (Ajinomoto, Cat. No. RCAK02N) on tissue culture plates coated with 0.5 mg/mL silk iMatrix-511, Recombinant Human Laminin-511 E8 Fragment (Nippi, Cat. No. 892021) with a daily medium exchange (Gotoh et al., 2014). Cell passage was performed every 7 days during maintenance. Cells were first dissociated with Accumax (Innovative Cell Technologies, Cat. No. AM105-500) and 10 min incubation at 37 °C, then washed in StemFit AK02N medium supplemented with 10 µM ROCK inhibitor Y-27632 (Wako, Cat. No. 253-00513) and seeded onto iMatrix511-coated plates at a density of 1  ×  10<sup>3</sup> cells/cm<sup>2</sup> in StemFit AK02N medium with ROCK inhibitor for 48 h after seeding, and then cultured without ROCK inhibitor. All the cell lines were routinely tested as negative for *mycoplasma* contamination.
### Guide RNA design
Guide RNA (gRNA) was designed with MMEJ kNockout Target Heuristic Utility (MENTHU) web tool version (Ata et al., 2018). After inputting the genbank ID of ACE2 gene (NG_012575.3), we filtered the list of gRNAs based on a MENTHU score >2.0. The sequence of guide RNA is listed in Supplementary Table S1.
### Gene editing of iPS cells
Gene editing experiments were performed as previously described (Maurissen and Woltjen, 2020). Briefly, an equimolar amount of crRNA and tracrRNA sequences (IDT, Alt-R CRISPR-Cas9 crRNA and tracrRNA) were hybridized for 5 min at 95°C to form functional crRNA:tracrRNA duplexes (gRNA). For each electroporation, 61 pmol gRNA was mixed with 61 pmol Cas9 nuclease (IDT, Alt-R S.p. Cas9 Nuclease V3) (1:1 gRNA:Cas9 ratio) to form RNP complexes, and incubated for 30 min at room temperature (RT). gRNAs are listed in Supplementary Table S1. Cells were harvested with Accumax, washed, counted, and resuspended at a density of 5  ×  10<sup>5</sup> cells/10 µL in Opti-MEM I reduced-serum medium (Life Technologies, Cat. No. 31985-062). 5  ×  10<sup>5</sup> cells were added to the RNP mixture and a total volume of 50 µL was electroporated in a Nepa Electroporation Cuvette 1 mm gap (Nepa Gene, Cat. No. EC-001) using the NEPA21 Electroporator (Nepa Gene) instrument (Poring pulse: 125 V voltage, 2.5 ms pulse length, 50 ms pulse gap, 2 pulses, 10% pulse decay, +orientation; Transfer pulse: 20 V voltage, 50 ms pulse length, 50 ms pulse gap, 5 pulses, 40% pulse decay, ±orientation). Electroporated cells were then transferred to an iMatrix511-coated plate in StemFit AK02N medium supplemented with ROCK inhibitor and incubated at 37 °C, or at 32°C for 48 h for cold shock treatment and then incubated at 37°C. Medium exchange was performed after 48 h with StemFit AK02N without ROCK inhibitor, and cells were maintained normally until genome extraction and passaging.
### Genotyping of gene edited iPS cells
For genomic DNA extraction, 0.5–1  ×  10<sup>6</sup> cells were washed with 1X DPBS, DNA was purified using the DNeasy Blood & Tissue Kit (Qiagen, Cat. No. 69506) as recommended by manufacturer’s instructions, and purified DNA was resuspended in 100 µL of water. Target sequences were amplified using KAPA HiFi HS ReadyMix (Kapa Biosystems, Cat. No. KK2602) polymerase chain reaction (PCR), enzymatic PCR product cleanup was performed with ExoSAP-IT Express reagent (Thermo Fischer Scientific, Cat. No. 75001), and Sanger sequencing was performed using the BigDye Terminator v3.1 CS Kit (Thermo Fischer Scientific, Cat. No. 4337456) according to the manufacturer’s instructions. Genotyping primers are listed in Supplementary Table S2. Reactions were then purified by ethanol precipitation and sequenced on a 3,500xl Genetic Analyzer (Applied Biosystems). Sequence alignments were analyzed with Snapgene (GSL Biotech LLC).
Detection of off-target (OT) sites was conducted with the API service of GGGenome (https://gggenome.dbcls.jp/en/). Genomic sites with mismatches of 3 bp or less across the 20 nt spacer region and no more than 1 bp mismatch in the seed sequence (the first 12 nt of the spacer) were considered potential OT sites based on GRCh38. OT sites were ranked by overlap with genomic features (genes, enhancers, and mammalian conservation). After PCR amplification, we confirmed the integrity of OT sites by alignment with sequence results from unedited B2-3 genomic DNA samples. Karyotyping was performed by G-band analysis (Nihon Gene Research Laboratories, Japan). Primers used for OT detection are shown in Supplementary Table S2.
### Immunostaining for pluripotency
Cells were fixed in 4% Paraformaldehyde in PBS without Mg<sup>2+</sup> and Ca<sup>2+</sup> (PBS<sup>−</sup>) for 10 min at room temp. Before immunostaining, the cells were treated with 0.1 M Glycine in PBS<sup>−</sup> for 30 min and rinsed with PBS-. To perform NANOG and OCT3/4 staining, the cells were permeabilized with 0.1% Triton X-100 in PBS<sup>−</sup> for 10 min at room temperature. The samples were blocked with 3% BSA in PBS<sup>−</sup> for 60 min at room temperature and incubated overnight at 4°C with primary antibodies diluted in blocking solution. Antibody dilutions were as follows: anti-Nanog (CST Cat. 4903S) 1:500, anti-OCT3/4 (BD Pharmingen 611203) 1:250, anti-TRA-1-60 (BD Pharmingen 560071) 1:250; and anti-TRA-1-81 (BD Pharmingen 560072) 1:250. Samples were rinsed with PBS<sup>−</sup> and incubated for 60 min at room temperature with secondary antibodies diluted 1:300 in blocking solution (Alexa-488 conjugated anti-rabbit IgG, anti-mouse IgG or anti-mouse IgM; ThermoFisher Scientific). DAPI 1 μg/mL was included together with the secondary antibodies. After rinsing with PBS<sup>−</sup> images were acquired using a fluorescence microscope Keyence BZ-X700 with 10x lenses. Images were prepared using Adobe Photoshop and Illustrator software.
### Generation of airway and alveolar epithelial cells
Both airway and alveolar epithelial cells were differentiated from B2-3 SFTPC-GFP reporter (wild type) iPS cells or gene-edited ACE2 KO iPS cells via NKX2-1<sup>+</sup> lung progenitor cells, respectively (Gotoh et al., 2014; Konishi et al., 2016; Yamamoto et al., 2017). In brief, iPS cells were stepwise differentiated into definitive endodermal cells, anterior foregut endodermal cells, and NKX2-1<sup>+</sup> lung progenitor cells, followed by cell sorting using anti-carboxypeptidase M (CPM) antibody, as previously described (Yamamoto et al., 2017). Upon airway cell induction, isolated CPM<sup>+</sup> cells were seeded onto iMatrix-511 silk (Takara Bio) (20 μg/cm<sup>3</sup>)-coated 24-well cell culture inserts (Falcon) at a density of 1.8 × 10<sup>6</sup> cells/cm<sup>2</sup> with PneumaCult-ALI Maintenance medium (STEMCELL Technologies) supplemented with 10 µM Y-27632 (LC Laboratories), 4 µg/mL heparin (Nacalai Tesque) and 1 µM hydrocortisone (Sigma-Aldrich). After the cells became confluent, the medium was further supplemented with 10 µM DAPT (Wako) and replenished every 2–7 days for a period of 1 month. Upon alveolar epithelial cell induction, isolated CPM<sup>+</sup> lung progenitor cells were seeded onto Geltrex (Gibco)-coated 24-well cell culture inserts at a density of 8.3 × 10<sup>5</sup> cells/cm<sup>2</sup> and the cells were cultured for 1-week in ALI in fibroblast-free alveolarization medium exchanged every other day, as described previously (Yamamoto et al., 2017).
### RNA sequencing
To extract total RNA, we used the RNeasy Mini Kit following the manufacturer’s instructions. For preparing sequencing libraries, we used the TruSeq Stranded Total RNA kit from Illumina. The library was sequenced using the NovaSeq SP Reagent Kit v1.5 (200 cycles), with 101-8-8-101 cycles. We quantified gene expression using the analysis pipeline (2.3.4) described in the ENCODE project (https://www.encodeproject.org/pipelines/ENCPL002LPE/), using GRCh38 ENSEMBL release 98 as a reference sequence and GRCh38 GENCODE release 32 for gene definitions. Bar charts were produced using ggplot2 v3.4.2, ggprism v1.0.4 (https://cran.r-project.org/package=ggprism), and R version 4.1.2, based on a TPM-corrected expression matrix. We extracted genes highly characterized in lung tissue from the top 100 entries in High-expression in GTEx (Lonsdale et al., 2013; Ardlie et al., 2015) using Hamornizone 3.0 (Rouillard et al., 2016) and LungMAP (Sun et al., 2022).
### Western blot analysis
Harvested cells were rinsed with PBS before resuspending in RIPA buffer (Sigma, #R0278) containing 1X protease inhibitor cocktail made by dissolving cOmplete tablets (Roche, #04-693-159-001) in Milli-Q. Protein samples were sonicated and measured by BCA assay (Thermo Scientific, #23250), and 5–10 µg of total protein lysate was applied to each lane. Prior to loading, protein samples were mixed with a final concentration of 1X NuPAGE LDS Sample Buffer (Invitrogen, #NP0007) and 50 mM DTT, then heated at 70°C for 10 min to denature secondary protein structures and placed on ice until ready to load. Polyacrylamide gels were run in denaturing conditions using NuPAGE 10% Bis-Tris protein gels (Invitrogen, #NP0316BOX) and 1X MOPS (50 mM MOPS, 0.1% SDS, 50 mM Tris-Base, 1 mM EDTA) as running buffer. NuPAGE Antioxidant (Invitrogen, #NP0005) was added to the running buffer in 1/400 concentration to prevent sample reoxidation and to maintain proteins in a reduced state during electrophoresis and protein transfer. Samples were then run at 150 V for 1–2 h depending on the size of protein to be detected. Upon completion of electrophoresis, protein bands were transferred at 100 V for 2 h to Immobilon-P PVDF membrane (Millipore, #IPVH00010) using the NuPAGE Transfer Buffer (Invitrogen, #NP0006-1) with 10%–20% (v/v) methanol added. Resulting membranes would first be stained with Ponceau Red to ensure an even protein loading and transfer across all lanes, before blocking at RT for 1 h in 5% skim milk made up in 1X TBS pH 7.4 (Nacalai Tesque, #12748-31) with 0.05% (v/v) Tween-20 (TBS-T). A primary antibody for ACE2 (R&D, #AF933) was generally diluted with 5% skim milk in TBS-T and incubated at 4°C overnight, and secondary antibodies were diluted with 5% skim milk in TBS-T and incubated at RT for 1 h. Protein bands were then detected by using the ECL Primer Western Blotting Detection Reagent (Amersham, #RPN2232) and exposed using the ImageQuant LAS4000 biomolecular imager (Amersham).
### Virus infection and titration
For infection studies, SARS-CoV-2 Japan/TY/WK-521/2020 strain was confirmed by genome sequencing and used for infection studies. SARS-CoV-2 infection and titration were performed under BSL3 containment conditions. Airway epithelial cells and lung alveolar epithelial cells in ALI culture were infected with SARS-CoV-2 from the apical surface (10,000 PFU/well). Following 1 h incubation at 37°C, innoculum was removed and replaced with medium after three washes. Cells were incubated at 37 °C and 5% CO<sub>2</sub> for 48 h. Cells containing supernatant were collected and stored at −80°C until analysis.
To determine the infectious virus titers, monolayers of VeroE6 cells constitutively expressing TMPRSS2 (VeroE6/TMPRSS2) (Matsuyama et al., 2010) were infected with serially diluted samples for 1 h incubation at 37°C, overlaid with minimum essential media containing 1% agarose, and incubated for 3 days at 37°C. After 3 days, plaques were visualized using 0.01% neutral red.
### Statistics
Microsoft Excel (version 2304), GraphPad Prism (version 9.5.0), and R 4.1.2 were used for data collection and analysis. We employed DESeq2 version 1.34.0 with a default parameter to perform statistical analyses on our bulk RNA-Seq data, which was based on raw counts. DESeq2 uses the Wald test to generate *p*-values, and these *p*-values are then adjusted for multiple testing using the Benjamini and Hochberg method as default. One-way ANOVA with Dunnett’s or Tukey’s multiple comparisons *post hoc* test was used to evaluate statistical significance when comparing more than two groups in infection data. The statistical significance level α was set to 0.05 for all experiments. Exact *p*-values are shown in the individual graphs.
### Electron microscopy
The airway and lung epithelial cells infected with SARS-CoV-2 were fixed with 2.5% glutaraldehyde in 0.1 M cacodylate buffer and postfixed with 1% osmium tetroxide. The samples were dehydrated with a gradient series of ethanol, substituted with propylene oxide, and embedded in epoxy resin. Ultrathin sections were stained with uranyl acetate and lead citrate and observed using a Hitachi HT-7700 microscope at 80 kV.
## Results
### ACE2 knockout by MMEJ-based guide RNA design
The ACE2 cell surface protein has been proposed to be essential for infection of human lung tissue by SARS-CoV-2 (Wang et al., 2022b). To model lung infection *in vitro*, we aimed to derive bronchial airway and alveolar epithelial cells from normal and gene-edited human iPS cells. To produce ACE2 KO iPS cell lines, gRNAs were designed to target Predominant MMEJ Allele (PreMA) sites using MENTHU (Figure 1A). Twelve gRNA candidates predicted to result in out-of-frame deletions with a MENTHU score >2.0 were identified (Supplementary Table S3). The expected MMEJ deletions were consistent with an alternative prediction algorithm, inDelphi (Shen et al., 2018). Additionally, their likelihood to result in loss-of-function mutations was further assessed using the Vienna Bioactivity CRISPR (VBC) score (Michlits et al., 2020). The VBC output auto-pick placed two of the top 10 gRNAs in exon 5, which also includes gRNA ACE2x484 (Supplementary Table S4). With these considerations, we selected 3 gRNAs: ACE2x138, ACE2x484, and ACE2x1371, to continue with gene editing experiments (Figures 1A, B).
![Figure 1](https://www.frontiersin.org/files/Articles/1290876/xml-images/fcell-11-1290876-g001.webp)
Genome editing strategy for ACE2 KO in B2-3 cells. **(A)** Designs of guide RNAs (gRNAs) used in this study. The PAM sequences are shown by the pink line over bases. Microhomologies (µHs) are boxed in green. The expected deletion is framed by the dotted line. **(B)** Diagram of ACE2 protein. The positions of each gRNAs are shown above the diagram. **(C)** Tracking of Indels by Decomposition (TIDE) analysis to identify the gene editing outcomes of bulk populations. **(D)** Sequences of each allele of the selected clones.
The majority of the extracellular region of ACE2 (ECTO) is composed of a HEXXH zinc metallopeptidase domain (19aa–611aa) (Towler et al., 2004). The remainder of the protein is 48% identical to human collectrin (617aa–770aa) (Zhang et al., 2001) and contains a transmembrane domain (TM, 741aa–761aa) (Lambert et al., 2005) and cytoplasmic domain (CYTO) (Prabakaran et al., 2004). The three selected gRNAs disrupt the protein coding region prior to the catalytically active HEMGH domain, as well as the transmembrane (TM) anchoring domain (Jackson et al., 2022). ACE2 amino acids K<sup>353</sup>, K<sup>31</sup>, D<sup>30</sup>, D<sup>355</sup>, H<sup>34</sup>, D<sup>38</sup>, Q<sup>24</sup>, T<sup>27</sup>, Y<sup>83</sup>, Y<sup>41</sup>, and E<sup>35</sup> are reported to be key residues to interact SARS-CoV-2 spike receptor-binding domain (Jawad et al., 2021). Therefore, MMEJ-induced frameshifts in these protein regions were expected to not only disrupt cell surface presentation and protein function but also exclude the spike protein interacting domain (353-357aa) known to be critical for viral interaction with ACE2 (Hayashi et al., 2020).
We evaluated gRNAs ACE2x138, ACE2x484, and ACE2x1371 for KO activity in the B2-3 lung reporter iPS cell line (Gotoh et al., 2014). Gene editing outcomes were confirmed by Sanger sequencing and TIDE analysis (Figure 1C). While ACE2x138 did not demonstrate any detectable indels with this assay, ACE2x484 and ACE2x1371 both showed indel formation (42% and 49.3%, respectively). In the ACE2x484 polyclonal population, 15% of indel alleles were represented by the predicted del7 mutation, while for ACE2x1371 the predicted del8 mutation was represented only 0.8% out of the total population. For both gRNAs, ins1 mutations were observed in the TIDE data (13.1% and 9.2%, respectively). The ACE2x484 gRNA had the highest MENTHU score in exon 5. It also ranked fourth when evaluated using the VBC score and was the second best based on the BioScore out of 13 gRNA on exon 5 (Supplementary Table S4).
We generated clonal cell lines from ACE2x484 and ACE2x1371 edited populations (Figure 1D). All cell lines except 1371-21 were compound heterozygotes. For each allele bearing an indel, the predicted outcome was a frameshift resulting in the generation of a premature stop codon (Figure 1D). The clonal iPS cell lines 484-23 and 1371-21 were selected for subsequent experiments. The pluripotency of each iPS cell line was confirmed by immunostaining of OCT3/4, NANOG, TRA-1-60, and TRA-1-81 (Figure 2A). Karyotype (Figure 2B) and off-target analysis (Figure 2C) were performed, and no abnormalities were observed. These results indicate that DNA repair outcomes generated by CRISPR-Cas9 gene editing may be predicted based on sequence context and used to bias the resulting KO alleles.
![Figure 2](https://www.frontiersin.org/files/Articles/1290876/xml-images/fcell-11-1290876-g002.webp)
Quality control of ACE2 KO iPSC clones. **(A)** Immunostaining of pluripotency markers, OCT3/4, NANOG, TRA-1-60, and TRA-1-81. Scale bar 100 µm. **(B)** The image of karyotyping assay of 4 clones **(C)** Off-target sites were identified by GGGenome and were confirmed by Sanger sequencing to be unedited.
### Differentiation of ACE2 KO iPS cells into lung airway and alveolar epithelia
ACE2 KO iPSC clones 484-23 and 1371-21 were differentiated into airway epithelial and alveolar cells (Gotoh et al., 2014), and evaluated by RNA Sequencing (RNA-Seq) for the expression of lung-tissue related genes (Figure 3A). Upon comparison, the knockout cell lines did not exhibit substantial differences in gene expression relative to the parental B2-3 cell line. Expression of ACE2 in parental and ACE2 KO iPSC lines was evaluated by Western blot and RNA-Seq following differentiation (Figures 3B, C). ACE2 protein could be detected in airway cells and at a lower level in alveolar epithelial cells but was undetectable in both lung cell lineages derived from ACE2 KO iPS cells edited using the x484 or x1371 gRNAs. Additional genes associated with SARS-CoV-2 infection, namely, *FURIN* and *TMPRSS2*, were confirmed to be expressed at similar levels in WT and KO cells (Figure 3D). Moreover, the expression of various type II transmembrane serine proteases (TTSP) including TMPRSS11A and TMPRSS11D remained unchanged between WT and ACE2 KO cells (Supplementary Table S5). Based on these data, we concluded that ACE2 KO does not affect lung differentiation *in vitro* or the expression of other genes associated with SARS-CoV-2 infection.
![Figure 3](https://www.frontiersin.org/files/Articles/1290876/xml-images/fcell-11-1290876-g003.webp)
Confirmation of iPS cell differentiation and ACE2 KO. **(A)** RNA-Seq to quantify the expression of lung-related genes in differntiated ACE2 WT and KO iPSCs (Log10 TPM). **(B)** Western blotting for ACE2 in WT and KO cells. **(C)** RNA-Seq analysis showing reduced expression of ACE2 mRNA in KO cells. **(D)** Expression of proteases related to viral infection remain unchanged. The dots in the bar graphs represent biological replicates (N = 3). No statistically significant difference was observed in the expression level of differentiation markers or proteases between differentiated WT and ACE2 KO cells (DESeq2 adjusted *p*-value >0.05).
### ACE2 KO reduces SARS-CoV-2 replication
Next, we examined SARS-CoV-2 replication in differentiated airway and lung epithelial cells to evaluate the suitability as *in vitro* virus infection models. SARS-CoV-2 strain WK521 virions were observed within both airway and alveolar cells (Figures 4A–D). We next infected WT and ACE2 KO lung cells *in vitro* and measured viral titer to quantify the impact of ACE2 KO on viral replication. SARS-CoV-2 strain WK521 replicated efficiently in both WT airway and alveolar epithelial cells derived from parental B2-3 iPS cells (Figures 4E, F). In contrast, ACE2 KO using ACE2x484 or ACE2x1371 resulted in the reduction of SARS-CoV-2 replication in the airway and alveolar epithelial cells. These data demonstrate that ACE2 expression is essential for SARS-CoV-2 replication in iPS cell-derived airway and lung cells, thereby validating our model system.
![Figure 4](https://www.frontiersin.org/files/Articles/1290876/xml-images/fcell-11-1290876-g004.webp)
SARS-CoV-2 infection in the gene edited iPS cell lung model. **(A–D)** Observation of SARS-CoV-2 viral particles in wild-type airway and alveolar epithelial cells using TEM. The images were taken at 4 dpi (days post-infection) in airway epithelial cells **(A,B)** and 2 dpi in alveolar epithelial cells **(C,D)**. A and C were imaged at ×5,000 magnification with a 1 µm scale bar, while B and D were further enlarged to a scale equivalent of ×20000 magnification with a 200 nm scale bar. **(E)** Measurement of virus titers following infection of SARS-CoV-2 strain WK521 into parental and ACE2 KO iPS cell-derived airway and **(F)** alveolar epithelial cells. *p*-value from one-way ANOVA with Dunnett’s or Tukey’s multiple comparisons *post hoc* test is shown in the individual graphs. The dots represent each biological replicate (N = 3).
## Discussion
Here, we showcase the utility of *in silico*-based gRNA design to bias the generation of gene KOs in human iPS cells. Additionally, we establish a model system based on iPS cell-derived lung cells and show that they are susceptible to infection by common SARS-CoV-2. Subsequently, we use this genetically engineered model system to demonstrate that ACE2 KO hinders SARS-CoV-2 viral replication, verifying an essential pathway for SARS-CoV-2 viral entry *in vitro* (Figure 5).
![Figure 5](https://www.frontiersin.org/files/Articles/1290876/xml-images/fcell-11-1290876-g005.webp)
Workflow of this study.
In this study, MMEJ was used for gene knockout. However, of the three gRNAs tested in this study, only ACE2x484 produced the predicted PreMA alleles at high frequency. Various tools to predict gene editing outcomes have been proposed in recent years (Nakamae and Bono, 2022). Tools that predict gRNA activity using linear regression and machine learning models provide reliable gRNAs and reproducible gene editing outcomes to streamline the production of engineered cell lines (Konstantakos et al., 2022). Our goal for ACE2 editing was to employ MMEJ-induced deletions, resulting in predictable frameshifts leading to gene KO. MENdel is effective for predicting MMEJ and single nucleotide insertions and can achieve better accuracy in designing gRNAs (Martínez-Gálvez et al., 2021). While empirical testing of gRNAs in the target cell line is ultimately required, the data presented here shows that *in silico* prediction can help streamline gene editing projects.
ACE2 is an essential component for SARS-CoV infection (Matsuyama et al., 2010). A role of ACE2 for *in vitro* SARS-CoV-2 infection has been previously revealed in human A549 lung cancer cells and African green monkey Vero-E6 kidney cells using CRISPR screening (Daniloski et al., 2021; Wei et al., 2021). An *in vitro* model using kidney differentiation demonstrated that ACE2 is required for SARS-CoV-2 infection (Helms et al., 2021). Similarly, we used *in vitro* iPSC differentiation into two major lung cell types to study lung infection. Using RNA-Seq and WB we confirmed that ACE2 expression is higher in airway epithelial cells than alveolar epithelial cells, consistent with primary cells from human donors (Ziegler et al., 2020). Interestingly, a shift in ACE2 molecular weight between cell types was also observed in our *in vitro* model, suggesting that differential glycosylation may occur, as previously observed in human bronchial epithelial cells (Shajahan et al., 2021). Finally, the iPS cell lines generated in this study confirm that ACE2 KO does not significantly alter lung differentiation, providing an important resource for studying SARS-CoV-2 infection with *in vitro* generated lung tissue.
We acknowledge several limitations of the current study that open avenues to future research. Firstly, our work was conducted using a single iPS cell line, B2-3. Future studies would benefit from utilizing multiple iPS cell lines, in particular COVID-19 patient-derived iPS cell lines to explore the role of human genetic variants in SARS-CoV-2 infection susceptibility and severity. Similarly, we only investigated one strain of the virus (WK521). Since the start of the COVID-19 pandemic, SARS-CoV-2 infections have given rise to multiple genetic variants with S-protein mutations (Cox et al., 2023). Our *in vitro* system should prove valuable for screening viral variants for their infectious properties and host responses, including the emerging variants of concern. Finally, our investigation was limited to two cell types. ACE2 KO iPS cells may be differentiated into other cell types that express ACE2 and may be susceptible to infection such as cardiac cells (Hikmet et al., 2020). Conversely, ACE2 KO iPS cells could aid in our understanding of ACE2-independent pathways of viral entry. Prospective studies using differentiated ACE2 KO iPS cells should reveal the multifaceted interactions between SARS-CoV-2 and host cells.
The COVID-19 pandemic demonstrated that an understanding of individual susceptibility to infectious disease is needed to identify risk groups and develop relevant interventions. Several reports suggested that human genetic variants are associated with the susceptibility to infection and the severity of COVID-19 (Zeberg and Pääbo, 2020; Niemi et al., 2021). For example, previous reports suggest that immune-mediated inflammation plays a major role in the symptoms of COVID-19 (Tay et al., 2020; Cheon et al., 2021). The construction of *in vitro* experimental models is essential to advance research that may reveal such genetic variants. Through ACE2 KO, we showed the possibility of combining gene editing and infection models to explore the phenotypes of infectious disease. The presence of low doses of infectious virus in ACE2 KO iPS cell-derived airway epithelial cells and lung alveolar epithelial cells suggests either residual inoculated virus or viral replication by ACE-independent cell entry pathway. Beyond the role of ACE2 targeted in this study, it will be important to reveal the necessity for other genes implicated in SARS-CoV-2 infection including CATHEPSIN, TMPRSS2, and FURIN through reverse genetics.
Collectively, the current study using iPS cell-derived lung cells provide insights into the mechanism of viral infection, which may lead to the development of anti-viral therapies and a deeper understanding of the molecular biology behind COVID-19.
We thank Drs. Shinya Yamanaka and Toru Kawamura for their valuable supervision, TN for generous support on infection modeling, and all other members of the Fight Corona Project for their feedback and advice. We thank Dr. Masaki Nomura and the CiRA Foundation for performing RNA-seq, Dr. Gabriel Martínez-Gálvez for manuscript editing and technical support on gRNA design with MENTHU, Suji Lee for advice on drafting figures, Dr. Fabian Oceguera-Yanez for supervising aspects of cell line validation, and Dr. Jun Kanamune for supporting the generation of iPSC-derived alveolar epithelial cells. Figure 5 was created with BioRender.com.
## References (56 total, showing 56)
1. Abo
K. M.
Sainz de Aja
J.
Lindstrom-Vautrin
J.
Alysandratos
K. D.
Richards
A.
Garcia-de-Alba
C.
( 2022 ). Air-liquid interface culture promotes maturation and allows environmental exposure of pluripotent stem cell–derived alveolar epithelium . JCI Insight 7 ( 6 ), e155589 . 10.1172/jci.insight.155589
2. Ardlie
K. G.
Deluca
D. S.
Segrè
A. V.
Sullivan
T. J.
Young
T. R.
( 2015 ). Human genomics. The Genotype-Tissue Expression (GTEx) pilot analysis: multitissue gene regulation in humans . Science 348 ( 6235 ), 648 – 660 . 10.1126/science.1262110
3. Ata
H.
Ekstrom
T. L.
Martínez-Gálvez
G.
Mann
C. M.
Dvornikov
A. V.
Schaefbauer
K. J.
( 2018 ). Robust activation of microhomology-mediated end joining for precision gene editing applications . PLOS Genet. 14 ( 9 ), e1007652 . 10.1371/journal.pgen.1007652
4. Ben Jehuda
R.
Shemer
Y.
Binah
O.
( 2018 ). Genome editing in induced pluripotent stem cells using CRISPR/Cas9 . Stem Cell. Rev. Rep. 14 ( 3 ), 323 – 336 . 10.1007/s12015-018-9811-3
5. Cheon
I. S.
Li
C.
Son
Y. M.
Goplen
N. P.
Wu
Y.
Cassmann
T.
( 2021 ). Immune signatures underlying post-acute COVID-19 lung sequelae . Sci. Immunol. 6 ( 65 ), eabk1741 . 10.1126/sciimmunol.abk1741
6. Cox
M.
Peacock
T. P.
Harvey
W. T.
Hughes
J.
Wright
D. W.
( 2023 ). SARS-CoV-2 variant evasion of monoclonal antibodies based on in vitro studies . Nat. Rev. Microbiol. 21 ( 2 ), 112 – 124 . 10.1038/s41579-022-00809-7
7. Daniloski
Z.
Jordan
T. X.
Wessels
H. H.
Hoagland
D. A.
Kasela
S.
Legut
M.
( 2021 ). Identification of required host factors for SARS-CoV-2 infection in human cells . Cell. 184 ( 1 ), 92 – 105.e16 . 10.1016/j.cell.2020.10.030
8. Forchette
L.
Sebastian
W.
Liu
T.
( 2021 ). A comprehensive review of COVID-19 virology, vaccines, variants, and therapeutics . Curr. Med. Sci. 41 ( 6 ), 1037 – 1051 . 10.1007/s11596-021-2395-1
9. Gotoh
S.
Ito
I.
Nagasaki
T.
Yamamoto
Y.
Konishi
S.
Korogi
Y.
( 2014 ). Generation of alveolar epithelial spheroids via isolated progenitor cells from human pluripotent stem cells . Stem Cell. Rep. 3 ( 3 ), 394 – 403 . 10.1016/j.stemcr.2014.07.005
10. Grajcarek
J.
Monlong
J.
Nishinaka-Arai
Y.
Nakamura
M.
Nagai
M.
Matsuo
S.
( 2019 ). Genome-wide microhomologies enable precise template-free editing of biologically relevant deletion mutations . Nat. Commun. 10 ( 1 ), 4856 . 10.1038/s41467-019-12829-8
11. Hayashi
T.
Abiko
K.
Mandai
M.
Yaegashi
N.
Konishi
I.
( 2020 ). Highly conserved binding region of ACE2 as a receptor for SARS-CoV-2 between humans and mammals . Vet. Q. 40 ( 1 ), 243 – 249 . 10.1080/01652176.2020.1823522
12. Helms
L.
Marchiano
S.
Stanaway
I. B.
Hsiang
T. Y.
Juliar
B. A.
Saini
S.
( 2021 ). Cross-validation of SARS-CoV-2 responses in kidney organoids and clinical populations . JCI Insight 6 ( 24 ), e154882 . 10.1172/jci.insight.154882
13. Hikmet
F.
Méar
L.
Å
E.
Micke
P.
Uhlén
M.
Lindskog
C.
( 2020 ). The protein expression profile of ACE2 in human tissues . Mol. Syst. Biol. 16 , e9610 . 10.15252/msb.20209610
14. Hockemeyer
D.
Jaenisch
R.
( 2016 ). Induced pluripotent stem cells meet genome editing . Cell. Stem Cell. 18 ( 5 ), 573 – 586 . 10.1016/j.stem.2016.04.013
15. Huang
J.
Hume
A. J.
Abo
K. M.
Werder
R. B.
Villacorta-Martin
C.
Alysandratos
K. D.
( 2020 ). SARS-CoV-2 infection of pluripotent stem cell-derived human lung alveolar type 2 cells elicits a rapid epithelial-intrinsic inflammatory response . Cell. Stem Cell. 27 ( 6 ), 962 – 973 . 10.1016/j.stem.2020.09.013
16. Jackson
C. B.
Farzan
M.
Chen
B.
Choe
H.
( 2022 ). Mechanisms of SARS-CoV-2 entry into cells . Nat. Rev. Mol. Cell. Biol. 23 ( 1 ), 3 – 20 . 10.1038/s41580-021-00418-x
17. Jawad
B.
Adhikari
P.
Podgornik
R.
Ching
W. Y.
( 2021 ). Key interacting residues between RBD of SARS-CoV-2 and ACE2 receptor: combination of molecular dynamics simulation and density functional calculation . J. Chem. Inf. Model. 61 ( 9 ), 4425 – 4441 . 10.1021/acs.jcim.1c00560
18. Kimura
I.
Yamasoba
D.
Tamura
T.
Nao
N.
Suzuki
T.
Oda
Y.
( 2022 ). Virological characteristics of the SARS-CoV-2 Omicron BA.2 subvariants, including BA.4 and BA.5 . Cell. 185 ( 21 ), 3992 – 4007.e16 . 10.1016/j.cell.2022.09.018
19. Konishi
S.
Gotoh
S.
Tateishi
K.
Yamamoto
Y.
Korogi
Y.
Nagasaki
T.
( 2016 ). Directed induction of functional multi-ciliated cells in proximal airway epithelial spheroids from human pluripotent stem cells . Stem Cell Reports 6 ( 1 ), 18 – 25 . 10.1016/j.stemcr.2015.11.010
20. Konstantakos
V.
Nentidis
A.
Krithara
A.
Paliouras
G.
( 2022 ). CRISPR–Cas9 gRNA efficiency prediction: an overview of predictive tools and the role of deep learning . Nucleic Acids Res. 50 ( 7 ), 3616 – 3637 . 10.1093/nar/gkac192
21. Lambert
D. W.
Yarski
M.
Warner
F. J.
Thornhill
P.
Parkin
E. T.
Smith
A. I.
( 2005 ). Tumor necrosis factor-alpha convertase (ADAM17) mediates regulated ectodomain shedding of the severe-acute respiratory syndrome-coronavirus (SARS-CoV) receptor, angiotensin-converting enzyme-2 (ACE2) . J. Biol. Chem. 280 ( 34 ), 30113 – 30119 . 10.1074/jbc.M505111200
22. Longmire
T. A.
Ikonomou
L.
Hawkins
F.
Christodoulou
C.
Cao
Y.
Jean
J. C.
( 2012 ). Efficient derivation of purified lung and thyroid progenitors from embryonic stem cells . Cell. Stem Cell. 10 ( 4 ), 398 – 411 . 10.1016/j.stem.2012.01.019
23. Lonsdale
J.
Thomas
J.
Salvatore
M.
Phillips
R.
Lo
E.
Shad
S.
( 2013 ). The genotype-tissue expression (GTEx) project . Nat. Genet. 45 ( 6 ), 580 – 585 . 10.1038/ng.2653
24. Martínez-Gálvez
G.
Joshi
P.
Friedberg
I.
Manduca
A.
Ekker
S. C.
( 2021 ). Deploying MMEJ using MENdel in precision gene editing applications for gene therapy and functional genomics . Nucleic Acids Res. 49 ( 1 ), 67 – 78 . 10.1093/nar/gkaa1156
25. Matsuyama
S.
Nagata
N.
Shirato
K.
Kawase
M.
Takeda
M.
Taguchi
F.
( 2010 ). Efficient activation of the severe acute respiratory syndrome coronavirus spike protein by the transmembrane protease TMPRSS2 . J. Virol. 84 ( 24 ), 12658 – 12664 . 10.1128/JVI.01542-10
26. Maurissen
T. L.
Woltjen
K.
( 2020 ). Synergistic gene editing in human iPS cells via cell cycle and DNA repair modulation . Nat. Commun. 11 ( 1 ), 2876 . 10.1038/s41467-020-16643-5
27. Meng
B.
Abdullahi
A.
Ferreira
IATM
Goonawardane
N.
Saito
A.
Kimura
I.
( 2022 ). Altered TMPRSS2 usage by SARS-CoV-2 Omicron impacts infectivity and fusogenicity . Nature 603 ( 7902 ), 706 – 714 . 10.1038/s41586-022-04474-x
28. Michlits
G.
Jude
J.
Hinterndorfer
M.
de Almeida
M.
Vainorius
G.
Hubmann
M.
( 2020 ). Multilayered VBC score predicts sgRNAs that efficiently generate loss-of-function alleles . Nat. Methods 17 ( 7 ), 708 – 716 . 10.1038/s41592-020-0850-8
29. Nakamae
K.
Bono
H.
( 2022 ). Genome editing and bioinformatics . Gene Genome Ed. 3–4 , 100018 . 10.1016/j.ggedit.2022.100018
30. Nambiar
T. S.
Baudrier
L.
Billon
P.
Ciccia
A.
( 2022 ). CRISPR-based genome editing through the lens of DNA repair . Mol. Cell. 82 ( 2 ), 348 – 388 . 10.1016/j.molcel.2021.12.026
31. Niemi
M. E. K.
Karjalainen
J.
Liao
R. G.
Neale
B. M.
( 2021 ). Mapping the human genetic architecture of COVID-19 . Nature 600 ( 7889 ), 472 – 477 . 10.1038/s41586-021-03767-x
32. Okano
H.
Yamanaka
S.
( 2014 ). iPS cell technologies: significance and applications to CNS regeneration and disease . Mol. Brain 7 ( 1 ), 22 . 10.1186/1756-6606-7-22
33. Peacock
T. P.
Brown
J. C.
Zhou
J.
Thakur
N.
Sukhova
K.
Newman
J.
( 2022 ). The altered entry pathway and antigenic distance of the SARS-CoV-2 Omicron variant map to separate domains of spike protein . Microbiology . 10.1101/2021.12.31.474653
34. Prabakaran
P.
Xiao
X.
Dimitrov
D. S.
( 2004 ). A model of the ACE2 structure and function as a SARS-CoV receptor . Biochem. Biophys. Res. Commun. 314 ( 1 ), 235 – 241 . 10.1016/j.bbrc.2003.12.081
35. Rouillard
A. D.
Gundersen
G. W.
Fernandez
N. F.
Wang
Z.
Monteiro
C. D.
McDermott
M. G.
( 2016 ). The harmonizome: a collection of processed datasets gathered to serve and mine knowledge about genes and proteins . Database 2016 , baw100 . 10.1093/database/baw100
36. Saito
A.
Tamura
T.
Zahradnik
J.
Deguchi
S.
Tabata
K.
Anraku
Y.
( 2022 ). Virological characteristics of the SARS-CoV-2 Omicron BA.2.75 variant . Cell. Host Microbe 30 ( 11 ), 1540 – 1555.e15 . 10.1016/j.chom.2022.10.003
37. Scialo
F.
Daniele
A.
Amato
F.
Pastore
L.
Matera
M. G.
Cazzola
M.
ACE2: the major cell entry receptor for SARS-CoV-2 . 2020 ; 198 ( 6 ): 867 – 877 . 10.1007/s00408-020-00408-4
38. Shajahan
A.
Archer-Hartmann
S.
Supekar
N. T.
Gleinich
A. S.
Heiss
C.
Azadi
P.
( 2021 ). Comprehensive characterization of N- and O- glycosylation of SARS-CoV-2 human receptor angiotensin converting enzyme 2 . Glycobiology 31 ( 4 ), 410 – 424 . 10.1093/glycob/cwaa101
39. Shang
J.
Wan
Y.
Luo
C.
Ye
G.
Geng
Q.
Auerbach
A.
( 2020 ). Cell entry mechanisms of SARS-CoV-2 . Proc. Natl. Acad. Sci. 117 ( 21 ), 11727 – 11734 . 10.1073/pnas.2003138117
40. Shen
M. W.
Arbab
M.
Hsu
J. Y.
Worstell
D.
Culbertson
S. J.
Krabbe
O.
( 2018 ). Predictable and precise template-free CRISPR editing of pathogenic variants . Nature 563 ( 7733 ), 646 – 651 . 10.1038/s41586-018-0686-x
41. Sun
X.
Perl
A. K.
Li
R.
Bell
S. M.
Sajti
E.
Kalinichenko
V. V.
( 2022 ). A census of the lung: CellCards from LungMAP . Dev. Cell. 57 ( 1 ), 112 – 145.e2 . 10.1016/j.devcel.2021.11.007
42. Tay
M. Z.
Poh
C. M.
Rénia
L.
MacAry
P. A.
Ng
L. F. P.
( 2020 ). The trinity of COVID-19: immunity, inflammation and intervention . Nat. Rev. Immunol. 20 ( 6 ), 363 – 374 . 10.1038/s41577-020-0311-8
43. Towler
P.
Staker
B.
Prasad
S. G.
Menon
S.
Tang
J.
Parsons
T.
( 2004 ). ACE2 X-ray structures reveal a large hinge-bending motion important for inhibitor binding and catalysis . J. Biol. Chem. 279 ( 17 ), 17996 – 18007 . 10.1074/jbc.M311191200
44. Turner
A. J.
( 2015 ). “ ACE2 cell biology, regulation, and physiological functions ,” in The protective arm of the renin angiotensin system ( China : Elsevier ). Available at: https://linkinghub.elsevier.com/retrieve/pii/B9780128013649000250 .
45. Wang
H.
Paulson
K. R.
Pease
S. A.
Watson
S.
Comfort
H.
Zheng
P.
( 2022a ). Estimating excess mortality due to the COVID-19 pandemic: a systematic analysis of COVID-19-related mortality, 2020–21 . Lancet 399 ( 10334 ), 1513 – 1536 . 10.1016/s0140-6736(21)02796-3
46. Wang
J. Y.
Doudna
J. A.
( 2023 ). CRISPR technology: a decade of genome editing is only the beginning . Science 379 ( 6629 ), eadd8643 . 10.1126/science.add8643
47. Wang
R.
Hume
A. J.
Beermann
M. L.
Simone-Roach
C.
Lindstrom-Vautrin
J.
Le Suer
J.
( 2022b ). Human airway lineages derived from pluripotent stem cells reveal the epithelial responses to SARS-CoV-2 infection . Am. J. Physiol-Lung Cell. Mol. Physiol. 322 ( 3 ), L462 – L478 . 10.1152/ajplung.00397.2021
48. Wei
J.
Alfajaro
M. M.
DeWeirdt
P. C.
Hanna
R. E.
Lu-Culligan
W. J.
Cai
W. L.
( 2021 ). Genome-wide CRISPR screens reveal host factors critical for SARS-CoV-2 infection . Cell. 184 ( 1 ), 76 – 91.e13 . 10.1016/j.cell.2020.10.028
49. Willett
B. J.
Grove
J.
MacLean
O. A.
Wilkie
C.
De Lorenzo
G.
Furnon
W.
( 2022 ). SARS-CoV-2 Omicron is an immune escape variant with an altered cell entry pathway . Nat. Microbiol. 7 ( 8 ), 1161 – 1179 . 10.1038/s41564-022-01143-7
50. Yamamoto
Y.
Gotoh
S.
Korogi
Y.
Seki
M.
Konishi
S.
Ikeo
S.
( 2017 ). Long-term expansion of alveolar stem cells derived from human iPS cells in organoids . Nat. Methods 14 ( 11 ), 1097 – 1106 . 10.1038/nmeth.4448
51. Yao
Y.
Wang
H.
Liu
Z.
( 2020 ). Expression of ACE2 in airways: implication for COVID‐19 risk and disease management in patients with chronic inflammatory respiratory diseases . Clin. Exp. Allergy 50 ( 12 ), 1313 – 1324 . 10.1111/cea.13746
52. Yeh
C. D.
Richardson
C. D.
Corn
J. E.
( 2019 ). Advances in genome editing through control of DNA repair pathways . Nat. Cell. Biol. 21 ( 12 ), 1468 – 1478 . 10.1038/s41556-019-0425-z
53. Zeberg
H.
Pääbo
S.
( 2020 ). The major genetic risk factor for severe COVID-19 is inherited from Neanderthals . Nature 587 ( 7835 ), 610 – 612 . 10.1038/s41586-020-2818-3
54. Zhang
H.
Wada
J.
Hida
K.
Tsuchiyama
Y.
Hiragushi
K.
Shikata
K.
( 2001 ). Collectrin, a collecting duct-specific transmembrane glycoprotein, is a novel homolog of ACE2 and is developmentally regulated in embryonic kidneys . J. Biol. Chem. 276 ( 20 ), 17132 – 17139 . 10.1074/jbc.M006723200
55. Zhao
Y.
Zhao
Z.
Wang
Y.
Zhou
Y.
Ma
Y.
Zuo
W.
( 2020 ). Single-cell RNA expression profiling of ACE2, the receptor of SARS-CoV-2 . Am. J. Respir. Crit. Care Med. 202 ( 5 ), 756 – 759 . 10.1164/rccm.202001-0179LE
56. Ziegler
C. G. K.
Allon
S. J.
Nyquist
S. K.
Mbano
I. M.
Miao
V. N.
Tzouanas
C. N.
( 2020 ). SARS-CoV-2 receptor ACE2 is an interferon-stimulated gene in human airway epithelial cells and is detected in specific cell subsets across tissues . Cell. 181 ( 5 ), 1016 – 1035.e19 . 10.1016/j.cell.2020.04.035
