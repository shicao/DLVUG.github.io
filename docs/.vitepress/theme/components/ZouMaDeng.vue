<script lang="ts">
import { ref } from 'vue';

export default {

    name: 'MyCarousel',
    setup() {
        const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
        const urls = ["/imgs/lunbotu/document.jpg", "/imgs/lunbotu/ruangu.jpg", "/imgs/lunbotu/1.jpg", "/imgs/lunbotu/2.jpg", "/imgs/lunbotu/3.jpg", "/imgs/lunbotu/4.jpg", "/imgs/lunbotu/5.jpg"]
        const hrefs = ['document', 'ruangu', 'cover', 'none', 'scale-down']
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
    <el-carousel :interval="2000" type="card" height="400px" @change="handleChange">
        <el-carousel-item v-for="(url, index) in urls" :key="index">
            <a :href=hrefs[index] target="-blank" title="查看详情">

                <el-image style="width: 940px; height: 400px" :src="url" fit="fill" />


            </a>
            <!-- 走马灯的每个子项都是940*400 -->
        </el-carousel-item>
    </el-carousel>
    <div class="index-container">
        <transition name="fade">
          <div class="index" v-if="currentIndex === 0">摘要1</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 1">摘要2</div>
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
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 24px;
    margin-right: 10px;
    padding: 10px;
}
</style>
  