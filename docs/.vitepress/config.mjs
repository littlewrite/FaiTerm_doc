import {defineConfig} from 'vitepress'
import { inject } from '@vercel/analytics'
import {zhConfig} from './config/zh'
import {enConfig} from './config/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "FaiTerm",
    description: "FaiTerm Doc Site",
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.png'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/images/appicon.png'}],
        ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-VMYVL3SDX3'}],
        ['script', {}, `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-VMYVL3SDX3');`]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/images/logo.png',
        siteTitle: 'FaiTerm',

        sidebar: [],

        socialLinks: [
            {icon: 'discord', link: 'https://discord.gg/VEfzZQZK'},
            {icon: 'twitter', link: 'https://x.com/'}
        ],
        search: {
            provider: 'local'
        }
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            ...enConfig
        },
        zh: {
            label: '中文',
            lang: 'zh',
            ...zhConfig
        },
    },
    vite: {
        plugins: [
            inject()
        ]
    }
})
