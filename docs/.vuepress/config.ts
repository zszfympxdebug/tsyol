import {defineUserConfig} from 'vuepress';
import {katex} from '@mdit/plugin-katex';
import {mdEnhancePlugin} from 'vuepress-plugin-md-enhance'

export default defineUserConfig({
    base: "/tsyol/",
    lang: 'zh_CN',
    title: 'Demo',
    description: 'Vuepress Demo!',
    extendsMarkdown: (md) => {
        md.use(katex),
        md.linkify.set({fuzzyEmail: false})
    },
    head: [
        ["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"},],
        ["link", {rel: "text/javascript", href: "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js",},],
        ["link", {rel: "icon", href: "./icon.png",},],
    ],
    plugins: [
        mdEnhancePlugin({
            katex: true,
            mathjax: false,
        }),
    ],
})  