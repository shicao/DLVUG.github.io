import DefaultTheme from "vitepress/theme";
import Particles from "vue3-particles";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Particles);
  },
};
