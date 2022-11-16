---
aside: false
---



最先进的目标检测网络依赖于区域提议算法来假设目标位置。SPPnet[7]和Fast R-CNN[5]等先进技术减少了这些检测网络的运行时间，暴露出区域提议计算成为瓶颈。在这项工作中，我们引入了一个区域提议网络(RPN)，它与检测网络共享全图像卷积特征，从而实现几乎无成本的区域提议。RPN是一个全卷积网络，它同时预测物体边界和每个位置的物体性得分。rpn经过端到端训练，生成高质量的区域建议，并被Fast R-CNN用于检测。通过简单的交替优化，可以训练RPN和Fast R-CNN共享卷积特征。对于非常深的VGG-16模型[19]，我们的检测系统在GPU上的帧率为5fps(包括所有步骤)，同时在PASCAL VOC 2007 (73.2% mAP)和2012 (70.4% mAP)上使用每张图像300个提议实现最先进的对象检测精度。代码可从 https://github.com/ShaoqingRen/faster_rcnn 获得。

<iframe src="/papers/faster_rcnn.pdf" width="100%" height="700"> </iframe>

[下载链接](/papers/faster_rcnn.pdf)