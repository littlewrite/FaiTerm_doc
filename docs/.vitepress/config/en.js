import fs from 'fs'
import path from 'path'

export const META_URL = 'https://faiterm.com'
export const META_TITLE = 'FaiTerm'
export const META_DESCRIPTION = 'Modern lightweight Redis GUI desktop manager, intuitive Redis database administration, supports multi-platform Windows, Mac and Linux, easy fast installation, connect local and remote Redis, visualize key-value data, quickly operate on keys and values, built-in console to execute commands directly, data browsing and export, slow log query, perfect for beginners and experts alike, tremendously improves Redis application development efficiency.'

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
            text: 'User Guide',
            items: [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'About FaiTerm', link: '/' },
                        { text: 'Installation', link: '/installation' },
                    ]
                },
            ]
        },
        {
            text: 'Usage and Configuration',
            items: [
                // { text: 'Connection', link: '/connection' },
                // { text: 'Key Loading', link: '/key-loading/' },
                // { text: 'Key Querying', link: '/filter/' },
                // { text: 'Custom Decoder', link: '/custom-decoder/' },
                // { text: 'Personalized', link: '/custom-config' }
            ]
        },
        {
            text: 'Other',
            items: [
                { text: 'Q&A', link: '/faq' },
                { text: 'Privacy Policy', link: '/privacy' }
            ]
        }
    ]
}
