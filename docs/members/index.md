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
    title: '2020级',
    desc: '简介',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/liyuteng.jpg',
    name: '李玉腾',
    title: '2020级',
    desc: 'Yuteng Li received B.E. degree from Jining Medical University in 2016. Now he is  a Master student majoring in Computer technology degree at Qingdao University of Science and Technology,under the supervision of Ph.D. Cao Shi. His research interests include deep learning, computer vision, image processing.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/zhanghonghong.jpg',
    name: '张洪红',
    title: '2020级',
    desc: 'Honghong Zhang  is currently pursuing the M.S. degree with School of Information Science and Technology, Qingdao University of Science and Technology, Shandong, China. Her research interests include artificial intelligence, computer vision, image processing.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/何健飞.jpg',
    name: '何健飞',
    title: '2021级',
	desc: 'Jianfei He received B.E. degree from Hebei University of Science and Technology in 2021. Now he is  a Master student majoring in Computer Science and Technology degree at Qingdao University of Science and Technology, under the supervision of Ph.D. Canhui Xu . His research interests include deep learning, computer vision, and medical image segmentation.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/王翔.jpg',
    name: '王翔',
    title: '2021级',
	desc: 'My name is Xiang Xang.I am a Postgraduate student majoring in SE in QUST.I love gaming(like Snooker offline, LOL on-line), programming(like Python, Cplusplus, lua and nothing else) and sleeping most and regard peace as my destination.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '陈文达',
    title: '2021级',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: '/imgs/avatars/邱海涛.jpg',
    name: '邱海涛',
    title: '2021级',
	desc: 'Haitao Qiu received B.E. degree from Qingdao Agricultural University. Now I am  a Master student majoring in Electronic and Information Engineering degree at Qingdao University of Science and Technology, under the supervision of Ph.D. Cao Shi. My research interests include deep learning, computer vision, medical image segmentation.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '杨琦',
    title: '2021级',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
{
    
},
    {
    avatar: '/imgs/avatars/袁正一.jpg',
    name: '袁正一',
    title: '2022级',
	desc: 'yuanzhengyi received B.E. degree from Qingdao University of Science and Technology in 2021.Now he is a Master student majoring in Software Engineering degree at Qingdao University of Science and Technology,under the supervision of Ph.D. CaoShi. He research interests include deep learning, computer vision, image processing.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
{
    avatar: '/imgs/avatars/张栋.jpg',
    name: '张栋',
    title: '2022级',
	desc: 'Dong Zhang received B.E. degree from XiHua University in 2021. Now he is  a Master student majoring in Computer technology degree at Qingdao University of Science and Technology,under the supervision of Ph.D. Canhui Xu. His research interests include deep learning, computer vision, image processing.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
{
    avatar: '/imgs/avatars/谢彧.jpg',
    name: '谢彧',
    title: '2022级',
	desc: '',
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
      <VPTeamMembers size="medium" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>