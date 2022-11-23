<template>
    <Particles id="tsparticles" :options="options" :particlesInit="particlesInit" />
</template>
<!-- https://github.com/matteobruni/tsparticles
视频教程https://particles.js.org/video.html
API文档https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html -->
<script lang="ts">
import Particles from "vue3-particles";

import type { Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles"
import { loadSlim } from "tsparticles-slim"
export default {
    // 使用空的options: {}，加载默认设置：像素为3的白色静态粒子
    // options: {}，
    data() {
        return {
            options: {
                // background: { color: "#242424" },  //设置背景颜色
                fullScreen: {
                    enable: true, //取消后只在局部作用
                    zIndex: -1,  //取消后没有遮挡效果
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",  //驱赶效果
                        },
                    },
                    modes: {
                        push: {
                            quantity: 10  //点击后生成的粒子数
                        },
                        repulse: {
                            distance: 100,
                        },
                    },
                },

                particles: {

                    links: {
                        distance: 100, //杆长度
                        enable: true,
                        color: "#000", //设置杆的颜色
                    },
                    // 粒子移动速度
                    move: {
                        enable: true,
                        speed: { min: 1, max: 5 },
                    },
                    //粒子透明度
                    opacity: {
                        value: { min: 0.3, max: 0.7 }
                    },
                    //粒子大小
                    size: {
                        value: { min: 1, max: 3 }
                    },
                    // color: "#242424", 设置粒子的颜色
                },
            },
        };
    },
    methods: {
        async particlesInit(engine: Engine) {
            await loadSlim(engine);
        }
    },
};

</script>