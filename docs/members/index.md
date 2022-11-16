---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const coreMembers = [
  {
    avatar: '/imgs/avatars/shicao.jpg',
    name: '史操',
    title: 'Creator',
    desc: '简介',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/xucanhui.jpg',
    name: '许灿辉',
    title: 'Creator',
    desc: '简介',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
const partners =[
  {
    avatar: '/imgs/avatars/bihengyue.jpg',
    name: '毕恒悦',
    title: 'Creator',
    desc: '简介',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/liyuteng.jpg',
    name: '李玉腾',
    title: 'Creator',
    desc: '简介',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/zhanghonghong.jpg',
    name: '张洪红',
    title: 'Creator',
    desc: '简介',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'yq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'yq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'yq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'yq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'yq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>导师</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>学生</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>