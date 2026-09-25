<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { version } from '../../../../package.json'

const { lang } = useData()

const RELEASES = 'https://github.com/littlewrite/FaiTerm_doc/releases/latest'

// 收尾 CTA。放在 FAQ 之后，把漏斗重新收回下载动作上——
// 否则整页读完最后落到的是「更多问题见 FAQ」，转化路径是断的。
const content = {
  zh: {
    eyebrow: '开始使用',
    title: '把终端升级一下',
    desc: '免费使用，支持 macOS、Windows、Linux 与 Android，桌面端与移动端共享同一套配置。',
    primary: '下载最新版',
    secondary: '查看安装说明',
    secondaryLink: '/zh/guide/installation',
    meta: `当前版本 v${version}`,
  },
  en: {
    eyebrow: 'GET STARTED',
    title: 'Upgrade your terminal',
    desc: 'Free to use, on macOS, Windows, Linux and Android. Desktop and mobile share the same configuration.',
    primary: 'Download latest',
    secondary: 'Installation guide',
    secondaryLink: '/guide/installation',
    meta: `Current version v${version}`,
  },
}

const current = computed(() => content[lang.value] || content.en)
</script>

<template>
  <section class="cta-section">
    <div class="cta-panel">
      <p class="section-eyebrow">{{ current.eyebrow }}</p>
      <h2 class="cta-title">{{ current.title }}</h2>
      <p class="cta-desc">{{ current.desc }}</p>

      <div class="cta-actions">
        <a class="cta-button primary" :href="RELEASES" target="_blank" rel="noopener">
          {{ current.primary }}
        </a>
        <a class="cta-button secondary" :href="current.secondaryLink">
          {{ current.secondary }}
        </a>
      </div>

      <p class="cta-meta">{{ current.meta }}</p>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  max-width: var(--ft-section-max);
  margin: 0 auto;
  padding: var(--ft-section-padding);
}

.cta-panel {
  /* 用品牌色淡底与上面的灰色通栏带区分开，让结尾有独立的收束感 */
  padding: 3.5rem 2rem;
  border-radius: var(--ft-radius-card);
  border: 1px solid var(--vp-c-divider);
  background: var(--ft-tint);
  text-align: center;
}

.cta-title {
  font-size: var(--ft-title-size);
  line-height: var(--ft-title-line-height);
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem;
}

.cta-desc {
  font-size: var(--ft-body-size);
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0 auto 2rem;
  max-width: 560px;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 0 24px;
  line-height: 42px;
  border-radius: var(--ft-radius-pill);
  border: 1px solid transparent;
  font-size: var(--ft-body-size);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.25s, border-color 0.25s, color 0.25s;
}

.cta-button.primary {
  color: #fff;
  background: var(--vp-c-brand-3);
}

.cta-button.primary:hover {
  background: var(--vp-c-brand-2);
}

.cta-button.secondary {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.cta-button.secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.cta-meta {
  margin: 1.5rem 0 0;
  font-size: var(--ft-meta-size);
  color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .cta-section {
    padding: var(--ft-section-padding-sm);
  }

  .cta-panel {
    padding: 2.5rem 1.25rem;
  }

  .cta-title {
    font-size: var(--ft-title-size-sm);
  }

  .cta-button {
    flex: 1;
    min-width: 0;
  }
}
</style>
