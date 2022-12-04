import DefaultTheme from "vitepress/theme";
import Particles from "vue3-particles";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Particles);
    app.use(ElementPlus);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};

// const app = createApp(App)
