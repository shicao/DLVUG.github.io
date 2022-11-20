官方文档：[Getting Started | VitePress (vuejs.org)](https://vitepress.vuejs.org/guide/getting-started)

## 快速开始

### 初始化

先使用`yarn`初始化包管理器，初始化信息

````
yarn init
````

---

### 安装VitePress

安装`VitePress`，添加VitePress 和 Vue作为`dev`依赖

````
yarn add --dev vitepress vue
````

---

### 创建，目录

创建一个放md文件的docs文件夹，并在里面创建`index.md`

`index.md`里面的内容就是首页的内容

---

### 启动dev开发环境

为了简化命令行，添加代码到 `package.json`

```
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

然后使用`yarn docs:dev`就可以启动了

>在md中修改的内容马上就会热更新到网页

---

### 添加其他页面

直接在docs中添加其他md文件和它对应的目录即可。

首页是`index.md`，访问其他页面直接在网址后面加路径名字即可

---

### 简单配置

配置文件`config.js`要存放在`docs/.vitepress`文件夹下面，改配置中导出JavaScript对象

```js
export default {
  title: 'VitePress', ## 首页左上角的名称
  description: 'Just playing around.' ## description meta tag
}
```

更详细的配置见[Theme Introduction | VitePress (vuejs.org)](https://vitepress.vuejs.org/guide/theme-introduction)和[Introduction | VitePress (vuejs.org)](https://vitepress.vuejs.org/config/introduction)

### 部署

最后是部署了，可以本地部署和<font color='red'>线上部署</font>

build构建后在`.vitepress/dist`生成目标文件。

+ 此时的目录结构如下：

````
.
├─ docs
│  ├─ .vitepress
│  │  └─ dist
│  │  └─ config.js
│  └─ index.md
│  ├─ public
│  ├─ foo
│  │  ├─ index.md
│  │  ├─ one.md
│  │  └─ two.md
│  └─ bar
│     ├─ index.md
│     ├─ three.md
│     └─ four.md
└─ package.json
````

#### 本地部署

````shell
yarn docs:build

yarn docs:serve
````

如果要改默认端口号，在`package.json`中修改

```json
{
  "scripts": {
    "docs:serve": "vitepress serve docs --port 8080"
  }
}
```

#### 线上部署：GithubPage

创建的xxx.github.io名字的repo。注意一定要设为公开。

+  `.github/workflows` 中创建一个github action  `deploy.yml`，一旦oush到仓库就会触发自动构建部署

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn install --frozen-lockfile

      - name: Build
        run: yarn docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
          ## cname: example.com ## if wanna deploy to custom domain
```

+ 上面的action会创建一个新的分支gh-pages，github page需要绑定该分支

在仓库设置的pages中将branch设置为gh-pages

<img src="/markdown/others/vitepress/image-20221102165557340.png" alt="image-20221102165557340" style="zoom:50%;" /> 

## 高级配置



## Markdown

VitePress附带内置Markdown扩展。

### 链接

#### 内部链接

#### 外部链接

内部链接转换为路由器链接，用于SPA（Single-Page Applications）导航。

每个子目录中包含的`index.md`将自动转换为`index.html`，访问时需要在结尾加上`/`，而访问index除外的其他文件不需要。

举例：

```markdown
[Home](/) `<!-- sends the user to the root index.md -->` 

[foo](/foo/) `<!-- sends the user to index.html of directory foo -->` 

[foo heading](./#heading) `<!-- anchors user to a heading in the foo index file -->` 

[bar - three](../bar/three) `<!-- you can omit extension -->` 

[bar - three](../bar/three.md) `<!-- you can append .md -->` 

[bar - four](../bar/four.html) `<!-- or you can append .html -->
```

默认情况下，页面和内部链接以`.html`后缀生成。

#### 外部链接

`[vuejs.org](https://vuejs.org/)`

因为build时会自动加上 `target="_blank" rel="noreferrer"`

### Frontmatter

在typora中，md文件的顶部可以添加yaml片段

[YAML frontmatte](https://jekyllrb.com/docs/front-matter/)现成支持：

```markdown
---
title: Docs with VitePress
editLink: true
---

## {{ $frontmatter.title }}

Guide content

```

在三条虚线之间，可以设置[预定义的变量](https://vitepress.vuejs.org/config/frontmatter-configs)，甚至创建自己的自定义变量。这些变量可以通过特殊的`$frontmatter`变量使用。

该数据将可用于页面的其余部分，以及所有自定义和主题化组件。

#### JSON frontmatter语法

VitePress还支持JSON frontmatter语法，以大括号开头和结尾：

```json
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```



#### 预定义变量

+ title：浏览器选项卡显示的名字

### Emoji 🎉

```
:tada: :100:
```

:tada: :100:

所有可用表情符号的[列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)。

### 目录

```
[[toc]]
```

TOC的渲染可以使用 `markdown.toc` 选项进行配置。

### 自定义容器

自定义容器可以通过其类型、标题和内容来定义。

```markdown
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

效果：

<img src="/markdown/others/vitepress/image-20221102194900491.png" alt="image-20221102194900491" style="zoom: 80%;" />

#### 自定义标题

可以通过在容器的“类型”之后添加文本来设置自定义标题  

````markdown
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

效果：

<img src="/markdown/others/vitepress/image-20221102195237553.png" alt="image-20221102195237553" style="zoom:80%;" />

### 代码块中的特殊显示 

#### 突出某行代码

[Line Highlighting in Code Blocks](https://vitepress.vuejs.org/guide/markdown#line-highlighting-in-code-blocks)

````markdown
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

效果：

<img src="/markdown/others/vitepress/image-20221102200149280.png" alt="image-20221102200149280" style="zoom: 80%;" /> 

还可以多行：

<img src="/markdown/others/vitepress/image-20221102200414541.png" alt="image-20221102200414541" style="zoom:80%;" /> 

#### 聚焦

[Focus in Code Blocks](https://vitepress.vuejs.org/guide/markdown#focus-in-code-blocks)

![image-20221102200526974](/markdown/others/vitepress/image-20221102200526974.png) 

#### 代码块中的彩色差异 

[Colored diffs in Code Blocks](https://vitepress.vuejs.org/guide/markdown#colored-diffs-in-code-blocks)

![image-20221102200606350](/markdown/others/vitepress/image-20221102200606350.png) 

#### 错误和警告

[Errors and warnings](https://vitepress.vuejs.org/guide/markdown#errors-and-warnings)

![image-20221102200650748](/markdown/others/vitepress/image-20221102200650748.png) 

#### 添加行号

![image-20221102200833509](/markdown/others/vitepress/image-20221102200833509.png)

在`.vitepress/config.js`中设置：

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

### 导入外部代码片段

[Import Code Snippets](https://vitepress.vuejs.org/guide/markdown#import-code-snippets)

优点：外面代码改变，md中的代码显示可以同步更新

### md中插入md文件

[Markdown File Inclusion](https://vitepress.vuejs.org/guide/markdown#markdown-file-inclusion)

### 高级配置

VitePress使用 [markdown-it](https://github.com/markdown-it/markdown-it)作为markdown渲染器。上面的许多扩展都是通过自定义插件实现的。您可以使用`.vitepress/config.js`中的`markdown`选项进一步自定义`markdown-it`实例：

```js
const anchor = require('markdown-it-anchor')

module.exports = {
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: anchor.permalink.headerLink()
    },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

查看[Configs: Markdown Configs](https://vitepress.vuejs.org/config/app-configs#markdown).中可配置属性的完整列表

比如要渲染Latex格式，使用[markdown-it-mathjax3](https://github.com/tani/markdown-it-mathjax3)插件

先安装`npm install markdown-it markdown-it-mathjax3`

再

```typescript
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-mathjax3"));
    },
```

### 插入PDF

推荐使用`iframe`标签

```html
<iframe src="/a.pdf" width="100%" height="1000"> </iframe>
```



## 资产asset处理

+ 在docs下有public文件夹存放资产
+ 使用时直接`![An image](/xxx.png)`，是`public/xxx.png`的简洁表示

所有Markdown文件都编译成Vue组件，并由[Vite](https://github.com/vitejs/vite)处理。

常见的图像、媒体和字体文件类型被自动检测并作为资产包括在内。

资产在build时会在dist文件夹中生成相应的hash文件

---

如果要创作一个动态链接到资产的主题组件，例如一张`src`基于主题配置值的图像：

```vue
<img :src="theme.logoPath" />
```

在这种情况下，建议使用VitePress提供的 [`withBase` helper](https://vitepress.vuejs.org/guide/api#withbase) 助手包装路径

```vue
<script setup>
import { withBase, useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>
```

## vue

在VitePress中，每个markdown文件都被编译成HTML，然后被当做Vue单个文件组件(Single-File Component，SFC)进行处理。

可以在markdown中使用任何Vue功能，包括动态模板、使用Vue组件，或通过添加＜script＞标记在页面中使用任意Vue组件逻辑。

VitePress利用Vue 3的编译器自动检测和优化Markdown的纯静态部分。只需处理任何给定页面上的动态部分。

### 模板化

#### 插值 Interpolation

每个Markdown文件首先被编译成HTML，然后作为Vue组件传递到Vite流程管道。可以在文本中使用Vue样式插值：

```markdown
{{ 1 + 1 }}
```

2

#### 指令 Directives

```html
<span v-for="i in 3">{{ i }}</span>
```

1 2 3 

#### 访问网站和页面数据

您可以在`＜script＞`块中使用 [`useData` helper](https://vitepress.vuejs.org/guide/api#usedata)助手，并将数据公开给页面。

输入：

```html
<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>
```

输出：

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

### 组件

如果组件将只在少数地方使用，就将组件导入使用的文件中。

```markdown
<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>

## Docs

This is a .md using a custom component

<CustomComponent />

### More docs

...
```

#### 在主题中注册全局组件

如果组件要跨文档中的多个页面使用，则可以在主题中全局注册它们（或作为扩展默认VitePress主题的一部分）。有关详细信息，请查看[主题指南](https://vitepress.vuejs.org/guide/theme-introduction)。

在`.vitepress/theme/index.ts`中， `enhanceApp` 函数接受Vue `app`实例，所以可以像在常规Vue应用程序中那样[注册组件](https://vuejs.org/guide/components/registration.html)。

## 主题

### Nav 导航栏

默认情况下，nav显示的是引用 `config.title` 值的网站标题。

如果想更改导航上显示的内容，可以在 `themeConfig.siteTitle` 选项中定义自定义文本。

还能设置 logo图片，根目录是public文件夹

````js
export default {
  themeConfig: {
    siteTitle: 'My Custom Title', //只要logo不要名字就设置为false
    logo: '/my-logo.svg'
  }
},
````

如果要添加alt属或基于暗/亮模式自定义它，也可以将对象作为logo传递，详见

 [`themeConfig.logo`](https://vitepress.vuejs.org/config/theme-configs#logo) 

### 导航链接

 `themeConfig.nav` 

```js
//根目录是docs，可以跳转当前目录文档，子目录首页，子目录文档以及外链
nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/foo/" },
      { text: "Configs", link: "/foo/one" },
      { text: "Changelog", link: "https://github.com/..." },
      //下拉菜单，注意点击是展开，而不是跳转，加不了link
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      {
        text: "Dropdown Menu",
        items: [
          {
            // 子菜单的名字
            text: "Section A Title",
            items: [
              { text: "Section A Item A", link: "..." },
              { text: "Section B Item B", link: "..." },
            ],
          },
        ],
      },
    ],
```

### 侧边栏

一般的侧边栏是常驻的，每一页都是一样的

但常用的是每个页面专属的侧边栏，如下所示

```js
   sidebar: {
      // 当处于foo文件夹下时现实下面的侧边栏
      "/foo/": [
        {
          text: "Guide",
          collapsible: true, //设置菜单项是折叠栏
          collapsed: true, //折叠栏默认是打开的，这里设置为关闭
          items: [
            // This shows `/guide/index.md` page.
            { text: "Index", link: "/guide/" }, // /guide/index.md
            { text: "One", link: "/guide/one" }, // /guide/one.md
            { text: "Two", link: "/guide/two" }, // /guide/two.md
          ],
        },
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
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
    },
```

### 前/后一页一页跳转链接

不设置就默认根据侧边栏自动生成

在md的顶部yaml中设置

```yaml
---
prev: 'Get Started | Markdown'
---
```

或者next

## Layout 布局

3种布局方式`doc`, `page`, 和`home`，默认是doc

在md的yaml中设置

```yaml
---
layout: doc
---
```

#### doc

+ `doc`将整个内容包装在`vp-do`c css类中，并将样式应用于其下的元素
  + 几乎所有通用元素（如`p`或`h2`）都有特殊的样式。如果在Markdown内容中添加任何自定义HTML，这些样式也会受到这些样式的影响。
  + `doc`布局下特有的功能
    + Edit Link
    + Prev Next Link
    + Outline



#### Page 

选项 `page` 被视为“空白页”。Markdown仍将被解析，所有[Markdown Extensions](https://vitepress.vuejs.org/guide/markdown) 扩展都与 `doc` 布局相同，但它不会得到任何默认样式。

页面布局将允许您在不影响标记markup的VitePress主题的情况下为所有内容设置样式。

请注意，即使在这种布局中，如果页面具有匹配的侧边栏配置，侧边栏仍将显示。

#### Home 

默认的主页布局：[VitePress | Vite & Vue Powered Static Site Generator (vuejs.org)](https://vitepress.vuejs.org/)

```yaml
---
layout: home
---
```

选项 `home` 将生成模板化的“Homepage主页”。在此布局中，您可以设置额外的选项，如 `hero` 和`features` ，以进一步自定义内容。

##### hero

```yaml
---
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
```

![image-20221106153130174](/markdown/others/vitepress/image-20221106153130174.png) 

```typescript
interface Hero {
  // 显示在“text”的顶部。带有品牌颜色，比较短，如产品名称。
  name?: string

  // 正文部分
  text: string

  // 标语
  tagline?: string

  // 动作按钮
  actions?: HeroAction[]
}

interface HeroAction {
  // Color theme of the button. Defaults to `brand`.
  theme?: 'brand' | 'alt'

  // Label of the button.
  text: string

  // Destination link of the button.
  link: string
}
```

##### 自定义名称颜色

VitePress使用品牌颜色brand color（`--vp-c-brand`）作为 `name`。可以通过重写 `--vp-home-hero-name-color` 变量来自定义此颜色。

````css
:root {
  --vp-home-hero-name-color: blue;
}
````

还可以通过组合 `--vp-home-hero-name-background` 来进一步定制 `name` 渐变色。

```css
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
```

##### 功能部分

可以在“Hero”部分之后列出想要显示的任意数量的功能。

```yaml
---
layout: home

features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---
```

![image-20221106153030731](/markdown/others/vitepress/image-20221106153030731.png)

```typescript
interface Feature {
  // Show icon on each feature box. Currently, only emojis
  // are supported.
  icon?: string

  // Title of the feature.
  title: string

  // Details of the feature.
  details: string

  // Link when clicked on feature component. The link can
  // be both internal or external.
  //
  // e.g. `guide/theme-home-page` or `htttps://example.com`
  link?: string

  // Link text to be shown inside feature component. Best
  // used with `link` option.
  //
  // e.g. `Learn more`, `Visit page`, etc.
  linkText?: string
}
```

#### 无布局

如果不需要任何布局，可以通过frontmatter传递 `layout: false` 。

一个完全可定制的 landing page着陆页（默认情况下没有任何侧边栏、导航栏或页脚）。

## 团队页面

可以使用团队组件来构建团队页面。

有两种使用这些组件的方法。一种是将其嵌入文档页面，另一种是创建完整的团队页面。

### 在页面中显示团队成员
