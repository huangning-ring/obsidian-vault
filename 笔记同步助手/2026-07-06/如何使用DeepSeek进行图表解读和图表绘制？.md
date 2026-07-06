---
author: 莫北
source: 微信公众号
url: https://mp.weixin.qq.com/s?__biz=MzIyOTY3MDA3MA==&mid=2247559273&idx=1&sn=dbe9db25fb116a35b55a95fbb3527f70&chksm=e9f7c333e20f9d0b37cf07c6d3469523e1dbdeb1c23d32cb514d72433d4ea26988ccf461cb5a&mpshare=1&scene=1&srcid=0707Smh2Pofuhu5LMrhbPdYj&sharer_shareinfo=f7f13a0951c041c48fab93ae24549785&sharer_shareinfo_first=f7f13a0951c041c48fab93ae24549785#rd
saved: 2026-07-06 21:39:15
tags:
  - 笔记同步助手
id: cb43a723-522a-494f-942e-f833955ece3e
---
公众号名称：SCIPainter
作者名称：莫北
发布时间：2026-07-02 11:04
推荐公众号奥智生物，分享前沿组学技术、实用生信技能、数据挖掘思路
前段时间，在一篇 NC 文章看到一个带有“等高线”的 PCA 分组散点图，如下图L，我觉得还挺好看的！
![[笔记同步助手/images/7330b541a88de9a59938613c00ae7c14_MD5.png]]
（Nature Communications，2025）
那么，如何对文中图表进行解读并轻松复现出这样的PCA分组散点图？
![[笔记同步助手/images/7c7e85de278fcda51a7ac4d273993010_MD5.png]]
> 01
> 提交需求

由于新版的DeepSeek增加了识图模式，所以这次识图用到的是DeepSeek。将文章中的图表截图上传到附件，并输入提示词。注意，为了便于模型精准识图，可将相应图表的原始图例文本加入到提示词中。
![[笔记同步助手/images/97996da0f81d8a139424d23495755d99_MD5.png]]
官网链接：
https://chat.deepseek.com/
尝试输入分析绘图提示词：
附件中图表对应的图例为：Fig. 1 | Immune dysregulation is established early in the course of WM with disease-specific immune hallmarks. L Principal component embedding of BM samples from patients with AWM (n =25), SMM (n = 24), and HD (n = 18). Patients with at least 100 immune cells were included in this analysis；你是一名生物学研究生，对附件图表进行解读；并给出绘图R代码，注意代码中要包含生成示例数据
![[笔记同步助手/images/b50d7760f586a4bb87353a504d2a4ed8_MD5.png]]
经过42秒的思考，DeepSeek给出了文章中图表的详细解读(如下图) 和 绘图代码。
![[笔记同步助手/images/6c27643816192044742946e47996cc34_MD5.png]]
其中，代码包含数据生成、绘图步骤和中文注释，结构一目了然！如果对代码内容感兴趣，也可以查看下方关键步骤的代码说明。
![[笔记同步助手/images/b43b30d3f66bb0c5e39dec4940e3276f_MD5.png]]
![[笔记同步助手/images/d71f94b621f717b3f49278e5a97db8c3_MD5.png]]
> 02
> 绘图测试

点击给出代码块右上角的“复制”按钮，将DeepSeek生成的R代码复制粘贴到Rstudio的脚本编辑器中运行，得到的初始绘图效果如下。
![[笔记同步助手/images/a1dc3b80ab2668bd9473187ee9d3636b_MD5.png]]
> 03
> 图形调整

初始结果图表已基本满足我们的需求，不过由于默认横轴数据范围较小，图中的“等高线“图形出现了畸变，不过我们可以通过scale\_x\_continuous函数修改横轴的数值范围，另外，也可以将坐标轴标题字体由 “bold”改为 “plain”，效果如下图。
![[笔记同步助手/images/b4185bf63ba29031036046ae13b13e74_MD5.png]]
当然，如果对原文的配色不满意，我们也可以尝试自定义其他配色，如下图。
![[笔记同步助手/images/9a72f205d6ed0a78be0460b54653c14c_MD5.png]]
最终的绘图效果如下图：
![[笔记同步助手/images/7c7e85de278fcda51a7ac4d273993010_MD5.png]]
调整后的绘图代码如下：
```
# 加载必要的绘图包
library(ggplot2)
# 1. 生成示例数据 (模拟原图空间分布)
set.seed(123)# 设置随机种子以保证结果可复现
# HD (健康供体)：集中在右下 (PC1正, PC2负)
n_hd <-18
pc1_hd <-rnorm(n_hd, mean=0.12, sd=0.04)
pc2_hd <-rnorm(n_hd, mean=-0.10, sd=0.04)
# SMM (冒烟型WM)：集中在左侧偏下 (PC1负, PC2微负)
n_smm <-24
pc1_smm <-rnorm(n_smm, mean=-0.08, sd=0.07)
pc2_smm <-rnorm(n_smm, mean=-0.05, sd=0.06)
# AWM (有症状WM)：集中在右上 (PC1微正, PC2正)
n_awm <-25
pc1_awm <-rnorm(n_awm, mean=0.02, sd=0.07)
pc2_awm <-rnorm(n_awm, mean=0.10, sd=0.06)
# 整合为数据框
df<- data.frame(
PC1 =c(pc1_hd, pc1_smm, pc1_awm),
PC2 =c(pc2_hd, pc2_smm, pc2_awm),
Group =factor(c(rep("HD", n_hd), rep("SMM", n_smm), rep("AWM", n_awm)),
levels=c("HD", "SMM", "AWM"))
)
# 2. 绘制图表
# 定义贴近原图的配色
my_colors <-c("HD"="#1f77b4", "SMM"="#ff7f0e", "AWM"="#ffcc00")
my_colors <-c("HD"="#93cc82", "SMM"="#f3d78a", "AWM"="#c9a1ca")
my_colors <-c("HD"="#80d52b", "SMM"="#83c2e5", "AWM"="#fa0aa1")
ggplot(df, aes(x = PC1, y = PC2, fill = Group, color = Group))+
# 2.1 绘制二维密度轮廓 (底层半透明阴影)
stat_density_2d(
geom ="polygon",
alpha =0.2,              # 轮廓透明度，叠加后呈现原图的阴影渐变效果
contour=TRUE,
aes(group = Group)# 按组别独立计算密度分布
)+
# 2.2 绘制散点
geom_point(
size =4,                 # 点的大小
shape =21,               # 形状21为实心圆带边框
color ="black",          # 统一使用黑色边框
stroke =0.8# 边框粗细
)+
# 2.3 颜色与图例设置
scale_fill_manual(
values = my_colors,
labels=c("HD, n=18", "SMM, n=24", "AWM, n=25")# 图例文本格式
)+
# 调整横坐标轴范围
scale_x_continuous(limits =c(-0.25, 0.25))+
scale_y_continuous(limits =c(-0.22, 0.22))+
scale_color_manual(values = my_colors, guide ="none")+# 隐藏颜色线/边框的图例，避免冗余
# 2.4 图表主题与坐标轴修饰
theme_bw()+
theme(
panel.grid = element_blank(),               # 移除网格线
panel.border = element_rect(color ="black", size =1),
legend.position =c(0.2, 0.8),              # 图例放在左上角
legend.title = element_blank(),             # 移除图例标题
legend.background = element_rect(fill ="transparent"), # 图例背景透明
legend.text = element_text(size =12),
axis.title = element_text(size =14, face ="plain"),
axis.text = element_text(size =12, color ="black")
)+
labs(x ="PC1", y ="PC2")
```
好了，本次的 DeepSeek 复现 “等高线” PCA散点图实操教程就分享到这里啦！
参考文献：
Sklavenitis-Pistofidis, Romanos, et al. "Single-cell RNA sequencing defines distinct disease subtypes and reveals hypo-responsiveness to interferon in asymptomatic Waldenstrom’s Macroglobulinemia." Nature Communications 16.1 (2025): 1480.
![[笔记同步助手/images/39b81f339986c184f7fbd426bbfa6b6a_MD5.png]]
基迪奥生物不仅提供转录、翻译、蛋白、代谢、表观、微生物等常规组学服务，还拥有空间组学和单细胞等多种前沿技术，以及行业内最专业的开发团队和长达十几年的成果积累，始终专注于组学测序和生信分析，为不同领域研究人员提供最好的组学研究策略。欢迎有项目意向的老师扫描下方二维码填写信息，基迪奥为您定制个性化项目执行方案。
**长按识别二维码咨询：**
![[笔记同步助手/images/d31c81b39977cc9a63895cc2b0b62fda_MD5.png]]
长按识别二维码咨询
**咨询当地销售或拨打客服电话：**
020-39341079
> **延伸阅读**

READ MORE
![[笔记同步助手/images/ec8aa332935631f9cf573c9fc7e1c4e5_MD5.jpg]]
\*未经许可，不得以任何方式复制或抄袭本篇文章之部分或全部内容。版权所有，侵权必究。
![[笔记同步助手/images/cc68c0326b8133a64620729804a10d7b_MD5.png||28]]
![[笔记同步助手/images/1e5a229f1ce148a90bf1458f22bc8b47_MD5.jpg||208]]
**\# SCIPainter**
分享科研绘图技能与工具
欢迎关注与转发～
![[笔记同步助手/images/1366e2389bbca80d8f194b263e3ddf0d_MD5.gif||58]]
**你的好友拍了拍你**
**并请你帮她点一下****“分享”****～**
***
内容效果不满意？[点此反馈](https://feedback.notebooksyncer.com/feedback/8664b42e_1783370353086?u=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyOTY3MDA3MA%3D%3D%26mid%3D2247559273%26idx%3D1%26sn%3Ddbe9db25fb116a35b55a95fbb3527f70%26chksm%3De9f7c333e20f9d0b37cf07c6d3469523e1dbdeb1c23d32cb514d72433d4ea26988ccf461cb5a%26mpshare%3D1%26scene%3D1%26srcid%3D0707Smh2Pofuhu5LMrhbPdYj%26sharer_shareinfo%3Df7f13a0951c041c48fab93ae24549785%26sharer_shareinfo_first%3Df7f13a0951c041c48fab93ae24549785%23rd&s=obsidian)