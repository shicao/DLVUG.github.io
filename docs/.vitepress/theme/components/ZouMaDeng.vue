<script lang="ts">
import { ref } from 'vue';

export default {

    name: 'MyCarousel',
    setup() {
        const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
        const urls = ["/imgs/lunbotu/PDF.png", "/imgs/lunbotu/rock.jpg", "/imgs/lunbotu/1.jpg", "/imgs/lunbotu/2.jpg", "/imgs/lunbotu/3.jpg", "/imgs/lunbotu/4.jpg", "/imgs/lunbotu/5.jpg"]
        const hrefs = ['PDF', 'ruangu', 'cover', 'none', 'scale-down']
        const currentIndex = ref(0);
        const items = [
            { image: 'https://picsum.photos/id/1018/800/300' },
            { image: 'https://picsum.photos/id/1015/800/300' },
            { image: 'https://picsum.photos/id/1019/800/300' },
        ];
        const handleChange = (index) => {
            currentIndex.value = index;
        };
        return {
            fits,
            urls,
            hrefs,
            currentIndex,
            items,
            handleChange,
        };
    },
};
</script>
<!-- https://element-plus.gitee.io/zh-CN/component/carousel.html -->
<template>
    <!-- 设置 autoplay="false"不能停止自动播放，所以把时间间隔设置长一点-->
    <el-carousel :interval="300000" trigger="click" type="card" autoplay="false" height="400px" arrow="always" @change="handleChange">
        <el-carousel-item v-for="(url, index) in urls" :key="index">
            <!-- <a :href=hrefs[index] target="-blank" title="查看详情"> -->

                <el-image style="width: 940px; height: 400px" :src="url" fit="fill" />


            <!-- </a> -->
            <!-- 走马灯的每个子项都是940*400 -->
        </el-carousel-item>
    </el-carousel>
    <div class="index-container">
        <transition name="fade">
          <div class="index" v-if="currentIndex === 0"><el-card class="box-card">   <h1>PDF文档结构信息提取系统</h1><div style="text-align:center;">
            <el-link type="danger" href="PDF.html">详细内容>></el-link>
</div>
      <p>随着移动阅读终端种类的多样化，如手机、电子阅读器、GPS等，电子文档在不同移动设备平台上的自适应显示，要求文档内容根据屏幕进行流式化重排和自适应调整，从而保证舒适的阅读体验。为满足移动阅读可读性需求，保证文档内容显示方式的重新调整，其关键在于获得原文档的物理逻辑结构和顺序信息。此外，电子文档结构化信息提取直接影响着信息检索、文本挖掘、搜索引擎、机器翻译、信息存储和管理等应用领域的发展和进步。</p>
      <p>综上所述，研究团队研发了“PDF文档结构信息提取系统”。该系统能够提取结构化PDF文档中的文本、图片、图表、公式信息。</p>
      <p>To ensure comfortable reading experience the adaptive display of electronic documents on different mobile devices requires the document content to be streamed rearranged and adaptive adjusted according to the screen. In order to meet the readability requirements of mobile reading and ensure the readjustment of document content display mode, the key is to obtain the physical logical structure and sequence information of the original document. In addition, the structural information extraction of electronic documents directly affects the development and progress of information retrieval, text mining, search engine, machine translation, information storage and management and other application fields.</p>
      <p>To sum up, our research group developed the prototype of "PDF document structure information extraction system". The prototype can extract text, picture, chart and formula information from structured PDF documents.</p>
    </el-card>  </div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 1"><el-card class="box-card">   <h1>岩心图像交互式分割系统</h1><div style="text-align:center;">
            <el-link type="danger" href="rock.html">详细内容>></el-link>
</div>
      <p>我们通过一个交互模块对2D砂岩的图像进行人机交互式的分割。在训练过程中以点击的方式进行交互式分割，所有的点击均可自动生成。经过每次的分割结果自动模拟点击下一次的误差最大的地方，在训练过程中不需要人机交互，训练之后我们将采用交互工具来修订一些存在不合理的地方的分割图像。交互工具的其流程为加载数据，进行点击分割，最后保存mask。交互工具的作用可表现为人们参与到对分割结果的补充修正的过程中进而提升分割的精准度。</p>
      <p>We perform human-computer interactive segmentation of 2D sandstone images by means of an interactive module. The interactive segmentation is performed with clicks during the training process, and all clicks can be generated automatically. After each segmentation result the next click is automatically simulated where the error is the largest. No human-machine interaction is required during the training process, and after the training we will use the interactive tool to revise the segmented images with some unreasonable areas. The process of the interactive tool is to load the data, click on the segmentation, and finally save the mask. The interactive tool can be used to improve the accuracy of the segmentation by involving people in the process of adding corrections to the segmentation results.</p></el-card></div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 2">摘要3</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 3">摘要4</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 4">摘要5</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 5">摘要6</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 6">摘要7</div>
        </transition>
      </div>
</template>
  
<style scoped>
/* 设置卡片和文本样式 */
.box-card {
    width: 70%;
    margin: 0 auto;
}

h1 {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
}

p {
    text-indent: 2em;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.index-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.index {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-size: 19px;
    margin-right: 10px;
    padding: 10px;
}
</style>
  