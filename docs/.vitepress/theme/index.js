// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import Theme from "vitepress/theme"
import googleAnalytics from 'vitepress-plugin-google-analytics'
import "./style.css"
import AppPreview from './components/AppPreview.vue'
import HeroActions from './components/HeroActions.vue'
import FeatureShowcase from './components/FeatureShowcase.vue'

export default {
    extends: Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'home-hero-actions-after': () => h(HeroActions),
            'home-hero-after': () => h(AppPreview),
            'home-features-after': () => h(FeatureShowcase)
        })
    },
    enhanceApp({ app, router, siteData }) {
        googleAnalytics({
            id: 'G-VMYVL3SDX3', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
        })
    }
}
