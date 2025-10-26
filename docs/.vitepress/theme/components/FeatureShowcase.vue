<script setup>
import { useData } from "vitepress"
import { computed, ref } from 'vue'

const { isDark, lang } = useData()

// 多语言内容配置
const content = {
  zh: {
    title: "核心功能展示",
    features: [
      {
        icon: "🖥️",
        title: "现代化界面设计",
        subtitle: "未来感 UI 设计",
        description: "采用现代化的玻璃拟态设计风格，提供深色和浅色两种主题模式。界面简洁直观，为用户带来舒适的视觉体验。",
        points: [
          "✨ 玻璃拟态效果",
          "🌙 深色/浅色主题切换", 
          "📱 响应式布局设计"
        ],
        image: "ui"
      },
      {
        icon: "🔧",
        title: "本地与远程终端",
        subtitle: "强大的终端功能",
        description: "支持本地终端操作和远程服务器管理，提供多标签页、命令历史、自动补全等功能，让终端操作更加高效。",
        points: [
          "📋 多标签页终端",
          "🔐 SSH 远程连接",
          "⚡ 命令自动补全",
          "📚 命令历史记录"
        ],
        image: "sug",
        reverse: true
      },
      {
        icon: "📁",
        title: "文件传输与管理",
        subtitle: "便捷的文件操作",
        description: "集成 SFTP 文件管理和 sz/rz 文件传输功能，支持可视化文件浏览、拖拽操作和批量处理，让文件管理变得简单高效。",
        points: [
          "📂 可视化文件浏览",
          "🔄 拖拽上传/下载",
          "📦 批量文件操作",
          "🚀 高速文件传输"
        ],
        image: "file"
      },
      {
        icon: "🤖",
        title: "AI 智能助手",
        subtitle: "AI 驱动的智能体验",
        description: "集成 AI 问答助手和智能命令补全功能，支持 Shell 脚本、运维和开发相关问题的智能解答，大幅提升工作效率。",
        points: [
          "💡 AI Agent",
          "❓ 智能问答助手",
          "🔧 运维问题解答",
          "💻 开发辅助功能"
        ],
        image: "ai",
        reverse: true
      }
    ]
  },
  en: {
    title: "Core Features",
    features: [
      {
        icon: "🖥️",
        title: "Modern UI Design",
        subtitle: "Future-oriented UI Design",
        description: "Adopts modern glassmorphism design style with dark and light theme modes. Clean and intuitive interface provides a comfortable visual experience.",
        points: [
          "✨ Glassmorphism Effects",
          "🌙 Dark/Light Theme Toggle",
          "📱 Responsive Layout Design"
        ],
        image: "ui"
      },
      {
        icon: "🔧",
        title: "Local & Remote Terminal",
        subtitle: "Powerful Terminal Features",
        description: "Supports local terminal operations and remote server management with multi-tab, command history, and auto-completion features for efficient terminal operations.",
        points: [
          "📋 Multi-tab Terminal",
          "🔐 SSH Remote Connection",
          "⚡ Command Auto-completion",
          "📚 Command History"
        ],
        image: "sug",
        reverse: true
      },
      {
        icon: "📁",
        title: "File Transfer & Management",
        subtitle: "Convenient File Operations",
        description: "Integrated SFTP file management and sz/rz file transfer with visual file browsing, drag-and-drop operations, and batch processing for simple and efficient file management.",
        points: [
          "📂 Visual File Browser",
          "🔄 Drag & Drop Upload/Download",
          "📦 Batch File Operations",
          "🚀 High-speed File Transfer"
        ],
        image: "file"
      },
      {
        icon: "🤖",
        title: "AI Smart Assistant",
        subtitle: "AI-powered Smart Experience",
        description: "Integrated AI Q&A assistant and intelligent command completion supporting Shell scripting, operations, and development-related problem solving to significantly boost productivity.",
        points: [
          "💡 AI Agent",
          "❓ Smart Q&A Assistant",
          "🔧 Operations Problem Solving",
          "💻 Development Assistance"
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
  const language = lang.value
  return `/images/screenshots/${imageName}_${theme}.png`
}
</script>

<template>
  <div class="feature-showcase">
    <h2 class="feature-title">{{ currentContent.title }}</h2>
    
    <div class="features-container">
      <div 
        v-for="(feature, index) in currentContent.features" 
        :key="index"
        class="feature-item"
        :class="{ 'reverse': feature.reverse }"
      >
        <div class="feature-content">
          <div class="feature-header">
            <span class="feature-icon">{{ feature.icon }}</span>
            <h3 class="feature-title">{{ feature.title }}</h3>
          </div>
          <h4 class="feature-subtitle">{{ feature.subtitle }}</h4>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
}

.feature-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
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
  gap: 1rem;
  margin-bottom: 1rem;
}

.feature-icon {
  font-size: 2rem;
  line-height: 1;
}

.feature-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.feature-subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--vp-c-brand);
  margin: 0 0 1rem 0;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.feature-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-points li {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.feature-points li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
  font-weight: bold;
  font-size: 1rem;
}

.feature-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme-aware-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.theme-aware-image:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

/* 深色主题适配 */
:root[class*='dark'] .feature-item {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255,255,255,0.1);
}

:root[class*='dark'] .theme-aware-image {
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

:root[class*='dark'] .theme-aware-image:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .feature-showcase {
    padding: 2rem 1rem;
  }
  
  .feature-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .feature-item,
  .feature-item.reverse {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
  }
  
  .feature-content {
    order: 1;
  }
  
  .feature-image {
    order: 2;
  }
  
  .feature-title {
    font-size: 1.5rem;
  }
  
  .feature-subtitle {
    font-size: 1.1rem;
  }
  
  .feature-description {
    font-size: 0.95rem;
  }
  
  .feature-points li {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .feature-showcase {
    padding: 1rem 0.5rem;
  }
  
  .feature-item {
    padding: 1rem;
  }
  
  .feature-title {
    font-size: 1.8rem;
  }
  
  .feature-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style> 