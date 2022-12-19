import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  plugins: [
    SearchPlugin({
      //   previewLength: 62,
      buttonLabel: "搜索",
      placeholder: "关键词",
      encode: false,
      tokenize: "full",
    }),
  ],
});
