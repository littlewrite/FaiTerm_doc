import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '功能介绍', link: '/features' },
      { text: '下载', link: '/download' },
      { text: '文档', items: [
        { text: 'Markdown 示例', link: '/markdown-examples' },
        { text: 'API 示例', link: '/api-examples' },
      ]},
    ],
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/theme/custom.css' }],
  ],
}) 