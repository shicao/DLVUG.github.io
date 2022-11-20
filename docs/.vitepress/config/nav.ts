//根目录是docs，可以跳转当前目录文档，子目录首页，子目录文档以及外链
export const nav = [
  { text: "主页", link: "/" },
  { text: "研究", link: "/researchs/" },
  { text: "出版", link: "/publications/" },
  { text: "成员", link: "/members/" },
  { text: "招生", link: "/enroll/" },
  {
    text: "其它",
    items: [
      {
        // 子菜单的名字
        text: "教程",
        items: [
          { text: "VitePress", link: "/others/tutorials/VitePress.md" },
          { text: "Section B Item B", link: "..." },
        ],
      },
      { text: "Item A", link: "/item-1" },
      { text: "Item B", link: "/item-2" },
      { text: "Item C", link: "/item-3" },
    ],
  },
  { text: "EN", link: "中英文切换" },
];
