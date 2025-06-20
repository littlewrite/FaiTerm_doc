<script setup>
import DefaultTheme from "vitepress/theme"
import {useData} from "vitepress"
import {computed, onMounted, ref} from 'vue'

const {Layout} = DefaultTheme
const {page, isDark, lang, frontmatter: fm} = useData()

const loaded = ref(false)
onMounted(() => {
    loaded.value = true
})

const preview = computed(() => {
    // do not display preview image if not finish loading
    if (!loaded.value) {
        return ''
    }
    return `/images/screenshots/${!!isDark.value ? 'dark' : 'light'}_${lang.value}.png`
})
</script>

<template>
    <div class="preview-wrapper">
        <div class="preview-inner">
            <img :src="preview" alt="preview"/>
        </div>
    </div>
</template>

<style scoped>
.preview-wrapper {
    margin-top: -30px;
    padding: 0 24px 24px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.preview-inner {
    object-fit: cover;
    max-width: 100%;
    background: var(--preview-bg, #fff);
    padding: 5px;
    border-radius: 16px;
    /* 更深的阴影 */
    box-shadow: 0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15);
    display: inline-block;
    transition: background 0.3s, box-shadow 0.3s;
}

/* 暗色模式下，VitePress 会自动加 .dark 到 body */
.dark .preview-inner {
    --preview-bg: #23272f;
    box-shadow: 0 8px 40px rgba(0,0,0,0.45), 0 2px 12px rgba(0,0,0,0.25);
}

@media (min-width: 640px) {
    .preview-wrapper {
        padding: 0 48px 24px;
    }
}

@media (min-width: 960px) {
    .preview-wrapper {
        padding: 0 64px 24px;
    }

    .preview-inner {
        max-width: 1080px;
    }
}
</style>
