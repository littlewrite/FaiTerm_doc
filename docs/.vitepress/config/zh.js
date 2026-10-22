import fs from 'fs'
import path from 'path'

export const META_URL = 'https://faiterm.com'
export const META_TITLE = 'FaiTerm'
export const META_DESCRIPTION = 'FaiTerm 是新一代 AI Terminal 客户端，支持 Windows、Mac、Linux 和 Android，集成本地终端、远程 SSH、文件管理、命令提示、工作笔记、代码片段，AI 助手与 RAG 知识库，适合开发、运维与日常效率办公场景。'

const versions = getAllChangelog()

export const zhConfig = {
    description: META_DESCRIPTION,
    head: [
        ['meta', {property: 'og:url', content: META_URL}],
        ['meta', {property: 'og:description', content: META_DESCRIPTION}],
        ['meta', {property: 'twitter:url', content: META_URL}],
        ['meta', {property: 'twitter:title', content: META_TITLE}],
        ['meta', {property: 'twitter:description', content: META_DESCRIPTION}],
    ],
    themeConfig: {
        nav: nav(versions[0]),
        sidebar: {
            '/zh/guide/': {base: '/zh/guide', items: sidebarUserGuide()},
            '/zh/changelog/': {base: '/zh/changelog', items: sidebarChangelog(versions)},
        },
        footer: {
            message: 'All rights reserved.',
            copyright: 'Copyright © 2025-2026 FaiTerm'
        }
    }
}

function nav(version = 'v1.0.0') {
    return [
        {text: '主页', link: '/zh/'},
        {text: '使用指南', link: '/zh/guide/', activeMatch: '/zh/guide/'},
        {
            text: version, items: [
                {text: '更新日志', link: '/zh/changelog/' + version, activeMatch: '/zh/changelog/'},
            ]
        },
        // {text: 'Redis指南', link: '#'},
        // {text: '关于', link: '#'}
    ]
}

function getAllChangelog() {
    const changelogDir = path.join(__dirname, '../../', 'zh', 'changelog')
    let files = fs.readdirSync(changelogDir)
    return files.map(file => {
        return file.replace(/\.md$/, '')
    }).sort((a, b) => {
        return b.localeCompare(a, undefined, {numeric: true, sensitivity: 'base'})
    })
}

function sidebarChangelog() {
    return [
        {
            text: '更新日志',
            // collapsed: false,
            items: versions.map(v => {
                return {text: v, link: '/' + v}
            })
        },
    ]
}

function lastChangelog() {
    const clist = sidebarChangelog()
    for (const item of clist) {
        if (item.text === '更新日志') {
            if (item.items.length > 0) {
                return item.items[0].text
            }
        }
    }
    return 'v1.0.0'
}

function sidebarUserGuide() {
    return [
        {
            text: '简介',
            items: [
                {text: '关于 FaiTerm', link: '/'},
                {text: '安装使用', link: '/installation'},
                {text: '界面与工作区', link: '/workspace'},
            ]
        },
        {
            text: '连接与文件',
            items: [
                {text: '连接与主机', link: '/ssh'},
                {text: '文件传输与管理', link: '/files'},
                {text: '密钥与凭据', link: '/secrets'},
                {text: '端口转发', link: '/port-forward'},
            ]
        },
        {
            text: '终端',
            items: [
                {text: '命令补全', link: '/suggestion'},
                {text: '终端高亮', link: '/highlight'},
                {text: '快捷命令与命令历史', link: '/quick-commands'},
                {text: '通知', link: '/notifications'},
            ]
        },
        {
            text: 'AI 与知识库',
            items: [
                {text: 'AI Agent', link: '/ai'},
                {text: '笔记本与知识库', link: '/note'},
            ]
        },
        {
            text: '主机与监控',
            items: [
                {text: '主机工具与监控', link: '/host-tools'},
            ]
        },
        {
            text: '个性化与账号',
            items: [
                {text: '主题', link: '/theme'},
                {text: '快捷键', link: '/shortcuts'},
                {text: '个性化配置', link: '/custom-config'},
                {text: '账号与数据同步', link: '/sync'},
            ]
        },
        {
            text: '移动端与帮助',
            items: [
                {text: '移动端', link: '/mobile'},
                {text: '常见问题', link: '/faq'},
                {text: '隐私政策', link: '/privacy'},
            ]
        }
    ]
}
