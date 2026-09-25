<script setup>
import { useData } from "vitepress"
import { computed } from 'vue'
import LayoutIcon from './icon/Layout.vue'
import TerminalIcon from './icon/Terminal.vue'
import FolderTransferIcon from './icon/FolderTransfer.vue'
import SparkleIcon from './icon/Sparkle.vue'

const { isDark, lang } = useData()

// 多语言内容配置
// 注意：每张卡只有一个标题层级。原先的 subtitle 与 title 语义重复
// （如「现代化界面设计」+「未来感 UI 设计」），且 subtitle 用品牌色渲染，
// 反而比标题更抢眼，造成层级倒置，故已移除。
const content = {
  zh: {
    eyebrow: "核心能力",
    title: "核心功能展示",
    features: [
      {
        icon: LayoutIcon,
        title: "现代化界面设计",
        description: "采用现代化的玻璃拟态设计风格，提供深色和浅色两种主题模式。界面简洁直观，为用户带来舒适的视觉体验。",
        points: [
          "玻璃拟态效果",
          "深色/浅色主题切换",
          "响应式布局设计"
        ],
        image: "ui"
      },
      {
        icon: TerminalIcon,
        title: "本地与远程终端",
        description: "支持本地终端操作和远程服务器管理，提供多标签页、命令历史、自动补全等功能，让终端操作更加高效。",
        points: [
          "多标签页终端",
          "SSH 远程连接",
          "命令自动补全",
          "命令历史记录"
        ],
        image: "sug",
        reverse: true
      },
      {
        icon: FolderTransferIcon,
        title: "文件传输与管理",
        description: "集成 SFTP 文件管理和 sz/rz 文件传输功能，支持可视化文件浏览、拖拽操作和批量处理，让文件管理变得简单高效。",
        points: [
          "可视化文件浏览",
          "拖拽上传/下载",
          "批量文件操作",
          "高速文件传输"
        ],
        image: "file"
      },
      {
        icon: SparkleIcon,
        title: "AI 智能助手",
        description: "集成 AI 问答助手和智能命令补全功能，支持 Shell 脚本、运维和开发相关问题的智能解答，大幅提升工作效率。",
        points: [
          "AI Agent",
          "智能问答助手",
          "运维问题解答",
          "开发辅助功能"
        ],
        image: "ai",
        reverse: true
      }
    ]
  },
  en: {
    eyebrow: "CAPABILITIES",
    title: "Core Features",
    features: [
      {
        icon: LayoutIcon,
        title: "Modern UI Design",
        description: "Adopts modern glassmorphism design style with dark and light theme modes. Clean and intuitive interface provides a comfortable visual experience.",
        points: [
          "Glassmorphism Effects",
          "Dark/Light Theme Toggle",
          "Responsive Layout Design"
        ],
        image: "ui"
      },
      {
        icon: TerminalIcon,
        title: "Local & Remote Terminal",
        description: "Supports local terminal operations and remote server management with multi-tab, command history, and auto-completion features for efficient terminal operations.",
        points: [
          "Multi-tab Terminal",
          "SSH Remote Connection",
          "Command Auto-completion",
          "Command History"
        ],
        image: "sug",
        reverse: true
      },
      {
        icon: FolderTransferIcon,
        title: "File Transfer & Management",
        description: "Integrated SFTP file management and sz/rz file transfer with visual file browsing, drag-and-drop operations, and batch processing for simple and efficient file management.",
        points: [
          "Visual File Browser",
          "Drag & Drop Upload/Download",
          "Batch File Operations",
          "High-speed File Transfer"
        ],
        image: "file"
      },
      {
        icon: SparkleIcon,
        title: "AI Smart Assistant",
        description: "Integrated AI Q&A assistant and intelligent command completion supporting Shell scripting, operations, and development-related problem solving to significantly boost productivity.",
        points: [
          "AI Agent",
          "Smart Q&A Assistant",
          "Operations Problem Solving",
          "Development Assistance"
        ],
        image: "ai",
        reverse: true
      }
    ]
  }
}

// 获取当前语言的内容
const currentContent = computed(() => content[lang.value] || content.en)

// 生成图片路径
const getImagePath = (imageName) => {
  const theme = isDark.value ? 'dark' : 'light'
  return `/images/screenshots/${imageName}_${theme}.gif`
}
</script>

<template>
  <div class="feature-showcase">
    <p class="section-eyebrow">{{ currentContent.eyebrow }}</p>
    <h2 class="feature-section-title">{{ currentContent.title }}</h2>

    <div class="features-container">
      <div
        v-for="(feature, index) in currentContent.features"
        :key="index"
        class="feature-item"
        :class="{ 'reverse': feature.reverse }"
      >
        <div class="feature-content">
          <div class="feature-header">
            <span class="feature-icon"><component :is="feature.icon" /></span>
            <h3 class="feature-title">{{ feature.title }}</h3>
          </div>
          <p class="feature-description">{{ feature.description }}</p>
          <ul class="feature-points">
            <li v-for="point in feature.points" :key="point">
              {{ point }}
            </li>
          </ul>
        </div>
        <div class="feature-image">
          <img
            :src="getImagePath(feature.image)"
            :alt="feature.title"
            class="theme-aware-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-showcase {
  max-width: var(--ft-section-max);
  margin: 0 auto;
  padding: var(--ft-section-padding);
}

.feature-section-title {
  text-align: center;
  font-size: var(--ft-title-size);
  line-height: var(--ft-title-line-height);
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 与 DownloadSection 的平台卡共用同一套卡片语言：底片 + 描边 + 同圆角 */
.feature-item {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  border-radius: var(--ft-radius-card);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s, transform 0.25s;
}

.feature-item:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.feature-item.reverse {
  flex-direction: row-reverse;
}

.feature-content {
  flex: 1;
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

/* 与平台卡图标底片一致 */
.feature-icon {
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

.feature-title {
  font-size: var(--ft-heading-size);
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.feature-description {
  font-size: var(--ft-body-size);
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin-bottom: 1.25rem;
}

.feature-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-points li {
  margin: 0.6rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--vp-c-text-2);
  font-size: var(--ft-body-size);
}

.feature-points li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

.feature-image {
  flex: 1;
  min-width: 0;
}

/* 四张功能截图的宽高比差异很大（1.41–2.25），且同一功能在深浅色下比例也不一致
   （如命令补全浅色 1.60 / 深色 1.41）。直接按原始比例摆放会让卡片高度参差不齐，
   切换主题时高度还会跳变。这里统一用一个 16:9 的展示框承载，图片一律 contain 居中，
   多出来的部分由框底填充。 */
.theme-aware-image {
  display: block;
  width: 100%;
  /* 用 2:1 的展示框：既容纳了 1.41–2.25 的原始比例，又不至于把卡片撑得太高
     （4 张卡叠起来已经很长，框再高会让整段显得冗长） */
  aspect-ratio: 2 / 1;
  object-fit: contain;
  border-radius: var(--ft-radius-inner);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  transition: transform 0.3s ease;
}

.feature-item:hover .theme-aware-image {
  transform: scale(1.02);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .feature-showcase {
    padding: var(--ft-section-padding-sm);
  }

  .feature-section-title {
    font-size: var(--ft-title-size-sm);
    margin-bottom: 2rem;
  }

  .feature-item,
  .feature-item.reverse {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .feature-content {
    order: 1;
  }

  .feature-image {
    order: 2;
  }
}
</style>
