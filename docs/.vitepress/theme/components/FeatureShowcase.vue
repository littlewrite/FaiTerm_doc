<script setup>
import { useData } from "vitepress"
import { computed } from 'vue'
import LayoutIcon from './icon/Layout.vue'
import TerminalIcon from './icon/Terminal.vue'
import FolderTransferIcon from './icon/FolderTransfer.vue'
import SparkleIcon from './icon/Sparkle.vue'
import MonitorIcon from './icon/Monitor.vue'

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
        title: "工作区与界面",
        description: "四栏工作区：工具轨道、列表栏、工作区、工具集合。分栏宽度可拖拽、面板可收起，内置 11 套应用主题与浅色 / 深色 / 跟随系统三种模式，并支持亚克力半透明窗口与启动恢复上次工作区。",
        points: [
          "四栏可拖拽布局",
          "11 套应用主题与深浅模式",
          "亚克力半透明窗口",
          "启动恢复上次工作区"
        ],
        image: "ui",
        ext: "png"
      },
      {
        icon: TerminalIcon,
        title: "终端与多协议连接",
        description: "本地终端与远程连接在同一个界面里管理：SSH、SFTP、Telnet、FTP、串口统一成一份主机列表，粘贴连接命令即可自动识别协议并填充。600+ 常用命令补全、终端文本高亮、快捷命令、端口转发与 tmux 工具条一应俱全。",
        points: [
          "SSH / SFTP / Telnet / FTP / 串口",
          "600+ 命令补全与子命令提示",
          "终端文本高亮（支持自定义规则）",
          "多标签页、分屏与终端内端口转发"
        ],
        image: "sug",
        ext: "png",
        reverse: true
      },
      {
        icon: FolderTransferIcon,
        title: "文件传输与管理",
        description: "内置 SFTP 双栏文件管理（本地 ↔ 远端），支持拖拽上传下载、批量操作与传输队列；ZModem（sz / rz）可以在终端里直接收发文件，传输进度在 Dock / 任务栏同步显示，失败时自动清理残留文件。",
        points: [
          "本地 ↔ 远端双栏文件管理",
          "拖拽上传 / 下载",
          "传输队列与完成提醒",
          "sz / rz（ZModem）终端内收发"
        ],
        image: "file"
      },
      {
        icon: SparkleIcon,
        title: "AI Agent 与知识库",
        description: "Ask 问答与 Agent 任务两种模式，Agent 可绑定一个已连接的终端自动执行命令；支持 OpenAI、Anthropic、Gemini、DeepSeek、Kimi、Qwen、GLM、MiniMax、Ollama 以及任意 OpenAI 兼容端点，并可接入本地 MCP 工具与笔记知识库检索。",
        points: [
          "Ask / Agent 双模式",
          "危险命令审批、黑名单与执行上限",
          "会话历史：搜索、详情、导出、重发",
          "知识库检索（RAG）与 MCP 外部工具"
        ],
        image: "ai",
        ext: "png",
        reverse: true
      },
      {
        icon: MonitorIcon,
        title: "主机工具与监控",
        description: "针对当前连接的主机，直接查看进程、服务、Docker、tmux、计划任务与端口占用；资源监控面板给出 CPU、内存、磁盘与网络的实时曲线，本地与远端主机同样可用。",
        points: [
          "进程 / 服务 / Docker / tmux",
          "计划任务与端口占用",
          "CPU / 内存 / 磁盘 / 网络曲线",
          "跟随当前终端切换主机"
        ],
        image: "host",
        ext: "png"
      }
    ]
  },
  en: {
    eyebrow: "CAPABILITIES",
    title: "Core Features",
    features: [
      {
        icon: LayoutIcon,
        title: "Workspace & UI",
        description: "A four-pane workspace: tool rail, list column, workspace and tool collection. Panes are resizable and collapsible, with 11 app themes plus light / dark / follow-system modes, acrylic translucency and restore-last-workspace on launch.",
        points: [
          "Resizable four-pane layout",
          "11 app themes, light & dark",
          "Acrylic translucent window",
          "Restore last workspace on launch"
        ],
        image: "ui",
        ext: "png"
      },
      {
        icon: TerminalIcon,
        title: "Terminal & Multi-Protocol Connections",
        description: "Local terminals and remote connections live in one place: SSH, SFTP, Telnet, FTP and serial share a single host list, and pasting a connection command fills in the right protocol automatically. 600+ completions, terminal highlighting, quick commands, port forwarding and a tmux toolbar.",
        points: [
          "SSH / SFTP / Telnet / FTP / Serial",
          "600+ completions with subcommands",
          "Terminal highlighting with custom rules",
          "Tabs, splits and in-terminal port forwarding"
        ],
        image: "sug",
        ext: "png",
        reverse: true
      },
      {
        icon: FolderTransferIcon,
        title: "File Transfer & Management",
        description: "Built-in dual-pane SFTP manager (local ↔ remote) with drag-and-drop, batch operations and a transfer queue; ZModem (sz / rz) sends and receives files right inside the terminal, with progress mirrored to the Dock / taskbar and leftover files cleaned up on failure.",
        points: [
          "Dual-pane local ↔ remote manager",
          "Drag & drop upload / download",
          "Transfer queue and finish alerts",
          "sz / rz (ZModem) inside the terminal"
        ],
        image: "file",
        ext: "png"
      },
      {
        icon: SparkleIcon,
        title: "AI Agent & Knowledge Base",
        description: "Ask and Agent modes — an Agent can bind to a connected terminal and run commands for you. Works with OpenAI, Anthropic, Gemini, DeepSeek, Kimi, Qwen, GLM, MiniMax, Ollama or any OpenAI-compatible endpoint, plus local MCP tools and knowledge-base retrieval.",
        points: [
          "Ask / Agent modes",
          "Approvals, command blacklist and run limits",
          "History: search, detail, export, re-run",
          "RAG knowledge base and MCP tools"
        ],
        image: "ai",
        ext: "png",
        reverse: true
      },
      {
        icon: MonitorIcon,
        title: "Host Tools & Monitoring",
        description: "Inspect processes, services, Docker, tmux, scheduled tasks and listening ports on the host behind the current terminal; the monitor pane charts CPU, memory, disk and network in real time, for local and remote hosts alike.",
        points: [
          "Processes / services / Docker / tmux",
          "Scheduled tasks and listening ports",
          "CPU / memory / disk / network charts",
          "Follows the current terminal's host"
        ],
        image: "host",
        ext: "png"
      }
    ]
  }
}

// 获取当前语言的内容
const currentContent = computed(() => content[lang.value] || content.en)

// 生成图片路径
const getImagePath = (feature) => {
  const theme = isDark.value ? 'dark' : 'light'
  const ext = feature.ext || 'gif'
  return `/images/screenshots/${feature.image}_${theme}.${ext}`
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
            :src="getImagePath(feature)"
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
