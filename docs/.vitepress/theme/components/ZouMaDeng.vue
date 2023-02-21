<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const urls = ["/imgs/lunbotu/document.jpg", "/imgs/lunbotu/ruangu.jpg", "/imgs/lunbotu/1.jpg", "/imgs/lunbotu/2.jpg", "/imgs/lunbotu/3.jpg", "/imgs/lunbotu/4.jpg", "/imgs/lunbotu/5.jpg"]
const hrefs = ['document', 'ruangu', 'cover', 'none', 'scale-down']
</script>
<!-- https://element-plus.gitee.io/zh-CN/component/carousel.html -->
<template>
    <el-carousel :interval="2000" type="card" height="400px">
        <el-carousel-item v-for="(url, index) in urls" :key="index">
            <a :href=hrefs[index] target="-blank" title="查看详情">

                <el-image style="width: 940px; height: 400px" :src="url" fit="fill" />


            </a>
            <!-- 走马灯的每个子项都是940*400 -->
        </el-carousel-item>
    </el-carousel>
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
</style>
  