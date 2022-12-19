export const sidebar = {
  // 当处于该文件夹下时现实下面的侧边栏
  "/publications/": [
    {
      text: "论文专利",
      collapsible: true, //设置菜单项是折叠栏
      // collapsed: true, //折叠栏默认是打开的，这里设置为关闭
      items: [
        { text: "论文", link: "/publications/#论文" },
        { text: "专利", link: "/publications/#专利" },
      ],
    },
  ],

  "/config/": [
    {
      text: "Config",
      items: [
        // This shows `/config/index.md` page.
        { text: "Index", link: "/config/" }, // /config/index.md
        { text: "Three", link: "/config/three" }, // /config/three.md
        { text: "Four", link: "/config/four" }, // /config/four.md
      ],
    },
  ],
};
