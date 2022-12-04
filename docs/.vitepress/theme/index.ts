import DefaultTheme from "vitepress/theme";
import Particles from "vue3-particles";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import MyParticles from "./components/MyParticles.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 添加粒子效果组件
    app.use(Particles);
    // 使用较多的组件，可以注册为全局组件
    app.component("MyParticles", MyParticles);
    //添加ElementPlus UI组件
    app.use(ElementPlus);
    //注册ElementPlus UI组件中的icon图标为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
