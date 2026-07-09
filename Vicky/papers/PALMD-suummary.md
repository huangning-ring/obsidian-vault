---
sort_index: 4000
---
# PALMD regulates aortic valve calcification via altered glycolysis and NF-κB-mediated inflammation
# Background
CAVD(Calcific aortic valve disease), is the most common heart valvular disease, which usually happens when heart valvular get thick, 纤维化, and eventually calcific. The only way to treat the disease is surgical, but it remains high risk with thrombus, infection and heart failure. Therefore, it's urgent for us to find out the way that CAVD happens and the potential molecular pathway to block in.
# PALMD entry and dependancy analysis
GWAS(Genome-wide Association Study) and TWAS(Transcriptome-wide association study) told us that PALMD(palmdephin) gene has been associated to CAVD risk for serveral times.
We got aortic valve tissues from CAVD patients after surgery, and confirmed the calcification area by HE and alizarin red dye. Then we conducted immunofloresence assay to verify the co-locolization between them. The result showed that the expression of PALMD is much higher in calcificated area than in uncalcificated area. We also got the same result in human valve interstitial cells (hVIC) calcification model. This told us that PALMD is indeedly associated with CAVD.
# Mechanism exploration: how does PALMD affect calcification?
First, we used siRNA to knock down PALMD, and upregulated PALMD using AAV overexpression as well. The results showed that PALMD's knock down can dramatically upregulate calcification deposition, the expression of bone formation genes (MSX2、RUNX2、BMP2) and apotosis marker (caspase3) , while its overexpression resulted totally the opposite.
Second, we explored the molecular mechanism that PALMD works. We chose RNA-sequencing to independantly investivate the genome expression change. We found 751 differently  expression genes, and the degration dramatically enriched in 2 pathways: glycolysis and TNFα signal pathway, whose downstream is NF-κB signal to mediate inflammation.
RNA-seq gave us the assumption, so we need to verify them in protein and functional level. We verified the downregulates of key enzymes in glycolysis, while overexpressing PALMD led to upregulation. Then we measured its glucose absorbing capability, finding the same result.
At this point, we can conclude that PALMD can regulate glycosis in hVIC, so we assume we could block glycosis to inhibit calcification and inflammation caused by PALMD. We knocked down PFKFB3, one of the key limiting factors of the glycolysis process,  finding that PFKFB3 could regulate hVIC's glycolysis effect, but it can't block bone fomation genes' expression induced by PALMD. 
This revealed there must be another pathway to regulate inflammation and calcification. RNA-seq results pointed out TNFα-NF-κB pathway could be the candidate. It's early investigated that NF-κB plays a role in inflammation by p65 亚基's phosphate. And we detected that p65's phosphate level decreased after PALMD knockdown. Meanwhile, after we blocked NF-κB pathway using SC75741 chemical inhibitor, inflamatory genes and bone formation genes were notably inhibited. This validated our synthesis that NF-κB is the key connection between PALMD, inflammation and calcification. 
# THP1 attachment assay: the cytometry level confirmation
One of the core pathological feature of the early CAVD is that monocytes' infiltration. Therefore we conducted THP1 attachment assay to found that PALMD knockdown notably decreased THP1 cells' infiltration under TNFα's activation. 
# Conclusion
After all these experiments above, we obtained a whole machenism:
1. In the early calcification, PALMD's expression upregulated
2. PFKFB3 induced glycolysis is boosted, and NF-κB pathway is activated
3. The two pathways lead to hVIC's inflammation and transdifferentiation to bone formation phenotype and cell aptosis, promoting the process of valve calcification