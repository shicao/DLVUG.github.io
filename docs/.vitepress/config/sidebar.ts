export const sidebar = {
  // 当处于该文件夹下时现实下面的侧边栏
  "/publications/": [
    {
      text: "论文专利",
      collapsible: true, //设置菜单项是折叠栏
      // collapsed: true, //折叠栏默认是打开的，这里设置为关闭
      items: [
        // This shows `/guide/index.md` page.
        { text: "ResNet", link: "/publications/papers/resnet" }, // /guide/index.md
        { text: "Faster R-CNN", link: "/publications/papers/faster_rcnn" }, // /guide/one.md
        { text: "Mask R-CNN", link: "/publications/papers/mask_rcnn" }, // /guide/two.md
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
