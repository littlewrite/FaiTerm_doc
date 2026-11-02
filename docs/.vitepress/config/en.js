import fs from 'fs'
import path from 'path'

export const META_URL = 'https://faiterm.com'
export const META_TITLE = 'FaiTerm'
export const META_DESCRIPTION = 'FaiTerm is a next-generation AI Terminal client for Windows, Mac, Linux, and Android, integrating local terminal, remote SSH, file management, command suggestions, work notes, code snippets, an AI assistant, and a RAG knowledge base for development, operations, and daily productivity.'

const versions = getAllChangelog()

export const enConfig = {
    description: META_DESCRIPTION,
    head: [
        ['meta', { property: 'og:url', content: META_URL }],
        ['meta', { property: 'og:description', content: META_DESCRIPTION }],
        ['meta', { property: 'twitter:url', content: META_URL }],
        ['meta', { property: 'twitter:title', content: META_TITLE }],
        ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
    ],
    themeConfig: {
        nav: nav(versions[0]),
        sidebar: {
            '/guide/': { base: '/guide', items: sidebarUserGuide() },
            '/changelog/': { base: '/changelog', items: sidebarChangelog(versions) },
        },
        footer: {
            message: 'All rights reserved.',
            copyright: 'Copyright © 2025-2026 FaiTerm'
        }
    }
}

function nav(version = 'v1.0.0') {
    return [
        { text: 'Home', link: '/' },
        { text: 'User Guide', link: '/guide/', activeMatch: '/guide/' },
        {
            text: version, items: [
                { text: 'Changelog', link: '/changelog/' + version, activeMatch: '/changelog/' },
            ]
        }
        // {text: 'Redis Guide', link: '#'},
        // {text: 'About', link: '#'}
    ]
}

function getAllChangelog() {
    const changelogDir = path.join(__dirname, '../../', 'changelog')
    let files = fs.readdirSync(changelogDir)
    return files.map(file => {
        return file.replace(/\.md$/, '')
    }).sort((a, b) => {
        return b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' })
    })
}

function sidebarChangelog(versions) {
    return [
        {
            text: 'Changelog',
            items: versions.map(v => {
                return { text: v, link: '/' + v }
            })
        },
    ]
}

function sidebarUserGuide() {
    return [
        {
            text: 'Getting Started',
            items: [
                { text: 'About FaiTerm', link: '/' },
                { text: 'Installation', link: '/installation' },
                { text: 'Workspace', link: '/workspace' },
            ]
        },
        {
            text: 'Connections and Files',
            items: [
                { text: 'Connections and Hosts', link: '/ssh' },
                { text: 'Files and Transfers', link: '/files' },
                { text: 'Secrets', link: '/secrets' },
                { text: 'Port Forwarding', link: '/port-forward' },
            ]
        },
        {
            text: 'Terminal',
            items: [
                { text: 'Command Completion', link: '/suggestion' },
                { text: 'Terminal Highlighting', link: '/highlight' },
                { text: 'Quick Commands and History', link: '/quick-commands' },
                { text: 'Notifications', link: '/notifications' },
            ]
        },
        {
            text: 'AI and Knowledge',
            items: [
                { text: 'AI Agent', link: '/ai' },
                { text: 'Notebooks and Knowledge Base', link: '/note' },
            ]
        },
        {
            text: 'Hosts and Monitoring',
            items: [
                { text: 'Host Tools and Monitoring', link: '/host-tools' },
            ]
        },
        {
            text: 'Personalization and Account',
            items: [
                { text: 'Themes', link: '/theme' },
                { text: 'Keyboard Shortcuts', link: '/shortcuts' },
                { text: 'Personalization', link: '/custom-config' },
                { text: 'Account and Sync', link: '/sync' },
            ]
        },
        {
            text: 'Mobile and Help',
            items: [
                { text: 'Mobile', link: '/mobile' },
                { text: 'FAQ', link: '/faq' },
                { text: 'Privacy Policy', link: '/privacy' }
            ]
        }
    ]
}
