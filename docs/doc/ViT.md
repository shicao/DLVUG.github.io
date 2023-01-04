---
title: ViT
description: ViT
date: 2022-07-05
tags:
  - 谢彧
  - ALL
---



# ViT

## 一、整体架构



### 1、论文版本

 ![img](https://img-blog.csdnimg.cn/20210626105321101.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NTQxMDk3,size_16,color_FFFFFF,t_70#pic_center) 



### 2、详细版本

 <img src="https://img-blog.csdnimg.cn/20210704124600507.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NTQxMDk3,size_16,color_FFFFFF,t_70#pic_center" alt="img"  /> 



背景：

所以这篇文章提出来的背景是，看到了transformer在NLP领域中，随着model变复杂，以及数据集的增大，模型性能仍然未达到饱和。想把transformer用在视觉领域。



实验：

证明效果比CNN好的过程： 在中小型数据集上训练，比如mid-size的imagenet,但是效果还是比resnet差几个百分点。

如果images 14M-300M,  发现VIT战胜了归纳偏置

当然，也举例了以往人做的实验， 有的结果不错，但是实现起来很复杂。  也有与他们工作很相似的，但是只能处理小分辨率，而作者可以处理中分辨率的图像

![1667522873787]()









![1667523244451]()

 Figure 5: Performance versus pre-training compute for different architectures: Vision Transformers, ResNets, and hybrids. Vision Transformers generally outperform ResNets with the same computational budget. Hybrids improve upon pure Transformers for smaller model sizes, but the gap vanishes for larger models 



conclusion: 既然vit在分类问题上做的效果很好，那么在这种分割，检测等领域是不是也有迹可循。为其提供了一种新的思路





code in github:

https://github.com/WZMIAOMIAO/deep-learning-for-image-processing/tree/master/pytorch_classification/vision_transformer