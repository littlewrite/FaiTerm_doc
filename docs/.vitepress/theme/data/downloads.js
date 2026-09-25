import Apple from '../components/icon/Apple.vue'
import Windows from '../components/icon/Windows.vue'
import Linux from '../components/icon/Linux.vue'
import Android from '../components/icon/Android.vue'
import { version } from '../../../../package.json'

/**
 * 下载数据集中在这里，供 HeroActions（hero 下载下拉）与 DownloadSection（下载板块）共用。
 *
 * 注意：资产文件名随 release 变动过，改版本时务必对照
 * https://github.com/littlewrite/FaiTerm_doc/releases 的实际资产名。
 * v1.0.7 把 macOS Intel 包从 `macos-x64.dmg` 改名成了 `macos-x86_64.dmg`，
 * 旧名会导致 404 —— 改这里之前先确认资产列表。
 */
const RELEASE_BASE = `https://github.com/littlewrite/FaiTerm_doc/releases/download/v${version}`
const asset = (name) => `${RELEASE_BASE}/faiterm-${version}-${name}`

/**
 * 按平台分组的下载项。
 * - key / url / event 与语言无关
 * - label / detail / note 按语言区分
 */
export const PLATFORM_GROUPS = [
  {
    key: 'macos',
    icon: Apple,
    name: 'macOS',
    note: { zh: 'macOS 14+', en: 'macOS 14+' },
    items: [
      {
        key: 'macos-arm64',
        label: { zh: 'Apple 芯片', en: 'Apple Silicon' },
        detail: { zh: '.dmg · M 系列芯片', en: '.dmg · M-series chip' },
        url: asset('macos-arm64.dmg'),
        event: { platform: 'mac', type: 'dmg', arch: 'arm64' },
      },
      {
        key: 'macos-x86_64',
        label: { zh: 'Intel 芯片', en: 'Intel' },
        detail: { zh: '.dmg · x86_64', en: '.dmg · x86_64' },
        url: asset('macos-x86_64.dmg'),
        event: { platform: 'mac', type: 'dmg', arch: 'x64' },
      },
    ],
  },
  {
    key: 'windows',
    icon: Windows,
    name: 'Windows',
    note: { zh: 'Windows 10+', en: 'Windows 10+' },
    items: [
      {
        key: 'windows-x64',
        label: { zh: '安装包', en: 'Installer' },
        detail: { zh: '.exe · x64', en: '.exe · x64' },
        url: asset('windows-setup.exe'),
        event: { platform: 'windows', type: 'setup', arch: 'x64' },
      },
    ],
  },
  {
    key: 'linux',
    icon: Linux,
    name: 'Linux',
    note: { zh: '主流发行版', en: 'Major distributions' },
    items: [
      {
        key: 'linux-deb',
        label: { zh: 'Debian / Ubuntu', en: 'Debian / Ubuntu' },
        detail: { zh: '.deb · amd64', en: '.deb · amd64' },
        url: asset('linux-amd64.deb'),
        event: { platform: 'linux', type: 'deb', arch: 'amd64' },
      },
      {
        key: 'linux-rpm',
        label: { zh: 'Fedora / RHEL', en: 'Fedora / RHEL' },
        detail: { zh: '.rpm · amd64', en: '.rpm · amd64' },
        url: asset('linux-amd64.rpm'),
        event: { platform: 'linux', type: 'rpm', arch: 'amd64' },
      },
      {
        key: 'linux-appimage',
        label: { zh: '通用免安装', en: 'Portable' },
        detail: { zh: '.AppImage · amd64', en: '.AppImage · amd64' },
        url: asset('linux-amd64.AppImage'),
        event: { platform: 'linux', type: 'AppImage', arch: 'amd64' },
      },
    ],
  },
  {
    key: 'android',
    icon: Android,
    name: 'Android',
    note: { zh: 'Android 8+', en: 'Android 8+' },
    items: [
      {
        key: 'android-arm64',
        label: { zh: '安装包', en: 'Package' },
        detail: { zh: '.apk · arm64', en: '.apk · arm64' },
        url: asset('android-arm64.apk'),
        event: { platform: 'android', type: 'apk', arch: 'arm64' },
      },
    ],
  },
]

const pick = (field, lang) => (lang === 'zh' ? field.zh : field.en)

/** 按平台分组，供 DownloadSection 使用 */
export function getDownloadGroups(lang) {
  return PLATFORM_GROUPS.map((group) => ({
    key: group.key,
    icon: group.icon,
    name: group.name,
    note: pick(group.note, lang),
    items: group.items.map((item) => ({
      key: item.key,
      text: pick(item.label, lang),
      detail: pick(item.detail, lang),
      link: item.url,
      event: item.event,
      eventLang: lang,
    })),
  }))
}

/** 扁平化下载项，供 HeroActions 的下载下拉使用 */
export function getDownloads(lang) {
  return getDownloadGroups(lang).flatMap((group) =>
    group.items.map((item) => ({
      text: `${group.name} · ${item.text} (${item.detail.split(' · ')[0]})`,
      link: item.link,
      icon: group.icon,
      event: 'download',
      eventPlatform: item.event.platform,
      eventType: item.event.type,
      eventArch: item.event.arch,
      eventLang: lang,
    })),
  )
}
