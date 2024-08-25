import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
    
    lang: 'zh-CN',
    title: 'Niuex 文档',
    description: '项目与服务的相关文档说明',

    head: [
        ['link', {rel: 'icon', href: '/icon.png'}],
        ['meta', {name: 'keywords', content: 'Niuex Dev, Niuex, Niuex Documentation, Documentation, 文档, Niuex 文档, 帮助, 说明, 教程, 介绍, 北屿皮肤站'}],
        ['meta', {name: 'author', content: 'Niuex Dev'}],
    ],

    cleanUrls: true,

    
    lastUpdated: true,

    themeConfig: {

        siteTitle: 'Niuex 文档',
        logo: '/logo.png',

        
        outlineTitle: '本页目录',

        
        nav: [
            { text: '北屿皮肤站', link: '/hokoisle-skin/' },
            { text: 'Mahiro Auth', link: '/mahiro-auth/' },
            { text: '关于', link: '/about/' }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/NiuexDev/' }
        ],

        sidebar: sidebar,

        search: {
            provider: 'local',
            options: {
                 locales: {
                    zh_CN: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            }
                        },
                        modal: {
                            noResultsText: '无法找到相关结果',
                            resetButtonTitle: '清除查询条件',
                            footer: {
                                selectText: '选择',
                                navigateText: '切换'
                            }
                        }
                    }
                }
            }
        },

        editLink: {
            pattern:'https://github.com/NiuexDev/docs/edit/main/docs/:path',
            text:'编辑此页'
        },

        
        lastUpdatedText: "本页编辑于",

        
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },

        footer: {
            copyright: '© 2024 Niuex Dev Studio, CC BY-NC-SA 4.0 license.'
        }
    }
})