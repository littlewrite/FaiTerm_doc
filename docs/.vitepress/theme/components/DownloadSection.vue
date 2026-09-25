<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getDownloadGroups } from '../data/downloads'

const { lang } = useData()

const content = {
  zh: {
    eyebrow: '下载',
    title: '选择你的平台',
    subtitle: '完全免费。桌面端与 Android 共享同一套配置与知识库。',
    guideText: '查看安装说明',
    guideLink: '/zh/guide/installation',
  },
  en: {
    eyebrow: 'DOWNLOAD',
    title: 'Choose your platform',
    subtitle:
      'Free to use. Desktop and Android share the same configuration and knowledge base.',
    guideText: 'Installation guide',
    guideLink: '/guide/installation',
  },
}

const current = computed(() => content[lang.value] || content.en)
const groups = computed(() => getDownloadGroups(lang.value))
</script>

<template>
  <section class="download-section">
    <p class="section-eyebrow">{{ current.eyebrow }}</p>
    <h2 class="download-title">{{ current.title }}</h2>
    <p class="download-subtitle">{{ current.subtitle }}</p>

    <div class="platform-grid">
      <div v-for="group in groups" :key="group.key" class="platform-card">
        <div class="platform-head">
          <span class="platform-icon"><component :is="group.icon" /></span>
          <h3 class="platform-name">{{ group.name }}</h3>
        </div>

        <ul class="platform-items">
          <li v-for="item in group.items" :key="item.key">
            <a
              class="item-link"
              :href="item.link"
              target="_blank"
              rel="noopener"
              data-umami-event="download"
              :data-umami-event-platform="item.event.platform"
              :data-umami-event-type="item.event.type"
              :data-umami-event-arch="item.event.arch"
              :data-umami-event-lang="item.eventLang"
            >
              <span class="item-text">{{ item.text }}</span>
              <span class="item-detail">{{ item.detail }}</span>
            </a>
          </li>
        </ul>

        <!-- 各平台条目数不同（1–3 个），把系统要求固定在卡片底部作为“地板”，
             否则条目少的卡片（Windows / Android）底部会留一大片悬空留白。 -->
        <p class="platform-note">{{ group.note }}</p>
      </div>
    </div>

    <p class="download-guide">
      <a :href="current.guideLink">{{ current.guideText }} →</a>
    </p>
  </section>
</template>

<style scoped>
.download-section {
  max-width: var(--ft-section-max);
  margin: 0 auto;
  padding: var(--ft-section-padding);
  /* 通栏底色带：让整页形成「白 → 浅色 → 白」的节奏，
     否则四个板块全是同一底色，读起来是一整条没有起伏的长滚动。
     用 box-shadow + clip-path 而不是 ::before 铺 100vw，避免横向溢出。 */
  box-shadow: 0 0 0 100vmax var(--vp-c-bg-soft);
  clip-path: inset(0 -100vmax);
}

.download-title {
  text-align: center;
  font-size: var(--ft-title-size);
  line-height: var(--ft-title-line-height);
  font-weight: 700;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.download-subtitle {
  text-align: center;
  font-size: var(--ft-body-size);
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0 auto 3rem;
  max-width: 620px;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.platform-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: var(--ft-radius-card);
  border: 1px solid var(--vp-c-divider);
  /* 底片带是 --vp-c-bg-soft，卡片要用页面底色才能浮起来 */
  background: var(--vp-c-bg);
  transition: border-color 0.25s, transform 0.25s;
}

.platform-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.platform-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.platform-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ft-icon-chip);
  height: var(--ft-icon-chip);
  flex: none;
  border-radius: var(--ft-radius-inner);
  color: var(--vp-c-brand-1);
  background: var(--ft-tint);
}

.platform-name {
  font-size: var(--ft-card-title-size);
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  border: none;
  padding: 0;
  line-height: 1.4;
}

.platform-note {
  font-size: var(--ft-meta-size);
  color: var(--vp-c-text-3);
  /* 推到底部，给条目数不同的卡片一个统一的“地板” */
  margin: auto 0 0;
  padding-top: 1.25rem;
}

.platform-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-link {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--ft-radius-inner);
  border: 1px solid var(--vp-c-divider);
  /* 卡片是页面底色，条目回到浅色底形成第三层嵌套 */
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.item-link:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--ft-tint);
}

.item-text {
  font-size: var(--ft-body-size);
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.item-detail {
  font-size: var(--ft-meta-size);
  color: var(--vp-c-text-3);
}

.download-guide {
  text-align: center;
  margin: 2.5rem 0 0;
  font-size: var(--ft-meta-size);
}

.download-guide a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.download-guide a:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .platform-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .download-section {
    padding: var(--ft-section-padding-sm);
  }

  .download-title {
    font-size: var(--ft-title-size-sm);
  }

  .platform-grid {
    grid-template-columns: 1fr;
  }
}
</style>
