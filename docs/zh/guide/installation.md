# 安装使用

## Windows

### 手动下载安装

- 64位安装包请下载 `Setup windows_x64 (.exe)`，下载完成后双击安装即可。
- ARM64位安装包请下载 `Setup windows_arm64 (.exe)`，下载完成后双击安装即可。

## macOS

### 手动下载安装

- 如果您使用 M1/M2/M3 芯片的 Mac，请下载 `mac_arm64 (.dmg)`
- 如果您使用 Intel 芯片的 Mac，请下载 `mac_intel (.dmg)`

下载完成之后打开 `.dmg` 文件，将 `FaiTerm.app` 拖到 `Applications` 目录内即可。

::: danger 故障排除

- 由于应用没有签名，如果显示开发者无法验证：

点击`取消`按钮，并打开`设置 -> 隐私与安全性`页面，点击`仍要打开`按钮，最后在弹出窗口里点击`打开`按钮即可。

- 如果安装后提示 `“FaiTerm”已损坏，无法打开` ，请打开 `Terminal.app` 并执行以下命令即可：

```bash
sudo xattr -d com.apple.quarantine /Applications/FaiTerm.app
```

然后再次尝试打开`FaiTerm`。

- 此外，`dmg`安装包内也包含了 `损坏修复` 脚本，可通过双击执行并输入管理员密码，快速修复以上问题

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
