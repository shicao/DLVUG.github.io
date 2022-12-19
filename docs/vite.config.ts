import { defineConfig } from "vite";
// 搜索插件
// https://github.com/emersonbottero/vitepress-plugin-search/issues/11#issuecomment-1304778903
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
