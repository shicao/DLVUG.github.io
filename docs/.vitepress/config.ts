import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
export default {
  title: "DLVUG",
  description: "Deep Learning and Vision Understanding Group",
  //   base: "https://imyq7.github.io",
  logo: "/imgs/logo.jpg",
  themeConfig: {
    logo: "/imgs/logo.jpg",
    siteTitle: "DLVUG",
    nav,
    sidebar,
    lastUpdatedText: "更新时间",
    lastUpdated: true,
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-mathjax3"));
    },
  },
};
