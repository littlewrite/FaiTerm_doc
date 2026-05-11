# 安装使用

## Windows

### 手动下载安装

- 64位安装包请下载 `Setup windows_x64 (.exe)`，下载完成后双击安装即可。
- ARM64位安装包请下载 `Setup windows_arm64 (.exe)`，下载完成后双击安装即可。

## macOS

### 手动下载安装

下载完成之后打开 `.dmg` 文件，将 `FaiTerm.app` 拖到 `Applications` 目录内即可。

::: danger 故障排除

- 由于应用暂未进行 Apple 签名，macOS 可能会弹出以下提示之一：
  - `“FaiTerm”已损坏，无法打开`
  - `无法打开“FaiTerm”，因为无法验证开发者`

可按以下步骤处理：

1. 允许“任何来源”应用运行（如系统未显示该选项可跳过）

```bash
sudo spctl --master-disable
```

执行后前往 `系统设置 -> 隐私与安全性`，在“安全性”区域确认已勾选“任何来源”。

2. 移除应用的安全隔离属性（推荐）

```bash
sudo xattr -dr com.apple.quarantine /Applications/FaiTerm.app
```

如果不确定应用路径，可将应用图标拖到上述命令后方，让终端自动补全路径。

3. macOS Ventura 及以上版本的额外操作

首次打开时仍可能被拦截。请前往 `系统设置 -> 隐私与安全性`，在安全性区域点击“仍要打开”，然后在弹窗中点击“打开”。完成一次后通常无需重复。

- 此外，`dmg` 安装包内也包含了 `损坏修复` 脚本，可双击执行并输入管理员密码，快速修复上述问题。

:::

## Linux

### 手动下载安装

- `deb`安装包选择下载 `linux_amd64.deb (.deb)`
- `AppImage`包选择下载 `linux_amd64.AppImage (.AppImage)`

`deb` 安装使用 `apt-get`
```bash
sudo apt-get install ./faiterm_{version}_linux_amd64.deb
```

`AppImage`的使用
```bash
chmod u+x faiterm_{version}_linux_amd64.AppImage
./faiterm_{version}_linux_amd64.AppImage
```

## Android

### 手动下载安装

- ARM64 安装包请选择下载 `android_arm64.apk (.apk)`
- x86 安装包请选择下载 `android_x86.apk (.apk)`
