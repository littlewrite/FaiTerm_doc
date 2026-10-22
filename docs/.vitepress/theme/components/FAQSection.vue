<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

// 内容全部来自 docs/ 下已存在的文档，改动前请先核对来源，不要凭空添加声明。
// macOS 未签名处理 / 协议依赖 -> zh/guide/installation.md、zh/guide/ssh.md
// AI 模式 -> zh/guide/ai.md；补全支持范围 -> zh/guide/suggestion.md
// 数据收集 -> zh/guide/privacy.md
const content = {
  zh: {
    eyebrow: '常见问题',
    title: '你可能想知道的',
    items: [
      {
        q: 'macOS 提示「已损坏，无法打开」怎么办？',
        a: 'FaiTerm 暂未进行 Apple 签名，首次打开可能被系统拦截。执行下面的命令移除隔离属性，或前往「系统设置 → 隐私与安全性」点击「仍要打开」。安装包内也附带了「损坏修复」脚本。',
        code: 'sudo xattr -dr com.apple.quarantine /Applications/FaiTerm.app',
      },
      {
        q: '拖拽上传或 SFTP 文件管理不工作？',
        a: '文件管理走 SFTP 协议，拖拽上传走 ZModem 协议。部分云厂商默认关闭了这两个协议，遇到异常时请先确认服务端已启用。',
      },
      {
        q: 'AI 助手会自动执行命令吗？',
        a: '取决于模式。不绑定终端就是 Ask 模式，AI 只回答问题、不碰你的环境；绑定一台已连接的终端就是 Agent 模式，AI 会分析你的请求并在你的环境里执行命令——每条调用都可以逐条审批，高危命令会被硬拦截。',
      },
      {
        q: '升级后我的主机不见了？',
        a: '从 v1.0.9 起主机与分组改用新的存储结构（ObjectBox），不会迁移旧版本 SQLite 里保存的主机与分组。升级前请先备份，或在新版本里重新导入、添加。',
      },
      {
        q: '命令补全支持哪些环境？',
        a: '内置 600+ 常用命令，默认开启，本地与 SSH 环境均支持。Windows 下支持 powershell、bash.exe 等，cmd.exe 不支持。SSH 模式下补全的 UI 渲染受网络影响，可能略有不跟手。',
      },
      {
        q: 'FaiTerm 会收集我的服务器信息吗？',
        a: '不会。我们永远不会收集任何与你数据库相关的信息。客户端使用 PostHog 与 Google Analytics 收集匿名访客信息，例如国家、设备类型、操作系统、浏览器类型与访问时间。',
      },
    ],
    moreText: '更多问题请见',
    moreLabel: '完整常见问题',
    moreLink: '/zh/guide/faq',
  },
  en: {
    eyebrow: 'FAQ',
    title: 'Frequently asked',
    items: [
      {
        q: 'macOS says the app is "damaged" — what now?',
        a: 'FaiTerm is not yet signed by Apple, so Gatekeeper may block the first launch. Run the command below to strip the quarantine flag, or go to System Settings → Privacy & Security and click "Open Anyway". The installer also ships a repair script.',
        code: 'sudo xattr -dr com.apple.quarantine /Applications/FaiTerm.app',
      },
      {
        q: 'Drag-and-drop upload or SFTP file management stopped working?',
        a: 'File management uses SFTP and drag-and-drop upload uses ZModem. Some cloud providers disable both by default — check that your server has them enabled.',
      },
      {
        q: 'Does the AI assistant run commands on its own?',
        a: 'It depends on the mode. With no terminal bound it runs in Ask mode and only answers questions. Bind a connected terminal and it becomes Agent mode: it analyses your request and runs commands in your environment, where every call can be approved and high-risk commands are blocked outright.',
      },
      {
        q: 'My hosts disappeared after upgrading?',
        a: 'From v1.0.9 the host list and its groups use a new store (ObjectBox). Hosts saved in the old SQLite database are not migrated — back up first, or simply re-import / re-add them in the new version.',
      },
      {
        q: 'Where does command completion work?',
        a: 'It ships with 600+ common commands and is on by default, covering both local and SSH sessions. On Windows it supports powershell, bash.exe and others — cmd.exe is not supported. Over SSH the completion UI is affected by network latency and may feel sluggish.',
      },
      {
        q: 'Does FaiTerm collect my server data?',
        a: 'No. We never collect any information related to your databases. The client uses PostHog and Google Analytics to collect anonymous visitor data such as country, device type, operating system, browser type and access time.',
      },
    ],
    moreText: 'More questions in the',
    moreLabel: 'full FAQ',
    moreLink: '/guide/faq',
  },
}

const current = computed(() => content[lang.value] || content.en)
</script>

<template>
  <section class="faq-section">
    <p class="section-eyebrow">{{ current.eyebrow }}</p>
    <h2 class="faq-title">{{ current.title }}</h2>

    <div class="faq-list">
      <details v-for="(item, i) in current.items" :key="i" class="faq-item">
        <summary class="faq-question">
          <span>{{ item.q }}</span>
          <span class="faq-marker" aria-hidden="true"></span>
        </summary>
        <div class="faq-answer">
          <p>{{ item.a }}</p>
          <pre v-if="item.code"><code>{{ item.code }}</code></pre>
        </div>
      </details>
    </div>

    <p class="faq-more">
      {{ current.moreText }}
      <a :href="current.moreLink">{{ current.moreLabel }} →</a>
    </p>
  </section>
</template>

<style scoped>
.faq-section {
  /* 问答正文刻意比其他板块窄，控制行长便于阅读 */
  max-width: 820px;
  margin: 0 auto;
  padding: var(--ft-section-padding);
}

.faq-title {
  text-align: center;
  font-size: var(--ft-title-size);
  line-height: var(--ft-title-line-height);
  font-weight: 700;
  margin: 0 0 3rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ft-radius-card);
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s;
}

.faq-item[open] {
  border-color: var(--vp-c-brand-1);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.35rem;
  font-size: var(--ft-card-title-size);
  font-weight: 600;
  color: var(--vp-c-text-1);
  cursor: pointer;
  list-style: none;
}

/* 隐藏浏览器默认的三角标记 */
.faq-question::-webkit-details-marker {
  display: none;
}

.faq-marker {
  position: relative;
  width: 14px;
  height: 14px;
  flex: none;
}

.faq-marker::before,
.faq-marker::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 2px;
  border-radius: 1px;
  background: var(--vp-c-brand-1);
  transition: transform 0.25s;
}

.faq-marker::after {
  transform: rotate(90deg);
}

.faq-item[open] .faq-marker::after {
  transform: rotate(0deg);
}

.faq-answer {
  padding: 0 1.35rem 1.25rem;
}

.faq-answer p {
  margin: 0;
  font-size: var(--ft-body-size);
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.faq-answer pre {
  margin: 0.85rem 0 0;
  padding: 0.85rem 1rem;
  border-radius: var(--ft-radius-inner);
  background: var(--vp-c-bg-alt);
  overflow-x: auto;
}

.faq-answer code {
  font-size: var(--ft-meta-size);
  color: var(--vp-c-text-1);
  background: none;
  padding: 0;
}

.faq-more {
  text-align: center;
  margin: 2.5rem 0 0;
  font-size: var(--ft-meta-size);
  color: var(--vp-c-text-2);
}

.faq-more a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.faq-more a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .faq-section {
    padding: var(--ft-section-padding-sm);
  }

  .faq-title {
    font-size: var(--ft-title-size-sm);
    margin-bottom: 2rem;
  }

  .faq-question {
    padding: 1rem;
    font-size: var(--ft-body-size);
  }

  .faq-answer {
    padding: 0 1rem 1.1rem;
  }
}
</style>
