# 常见问题

## macOS 提示「已损坏，无法打开」怎么办？

FaiTerm 暂未进行 Apple 签名，首次打开可能被系统拦截，出现以下提示之一：

- `"FaiTerm"已损坏，无法打开`
- `无法打开"FaiTerm"，因为无法验证开发者`

推荐执行下面的命令移除隔离属性：

```bash
sudo xattr -dr com.apple.quarantine /Applications/FaiTerm.app
```

也可以前往 `系统设置 → 隐私与安全性`，在安全性区域点击「仍要打开」，再在弹窗中点击「打开」。完成一次后通常无需重复。

安装包内还附带了 `损坏修复` 脚本，双击执行并输入管理员密码即可。

## 拖拽上传或 SFTP 文件管理不工作？

- **文件管理**走 SFTP 协议
- **拖拽上传文件**走 ZModem 协议

部分云厂商默认关闭了这两个协议，遇到异常时请先确认服务端已启用。

## AI 助手会自动执行命令吗？

取决于模式：

- **Ask 模式** —— AI 只回答问题，不会触碰你的环境
- **Agent 模式** —— 绑定终端后，AI 会分析你的请求，并尝试在你的环境里执行命令

详见 [AI 助手](/zh/guide/ai)。

## 命令补全支持哪些环境？

- 内置 600+ 常用命令，**默认开启**，本地与 SSH 环境均支持
- Windows 下支持 `powershell`、`bash.exe` 等，**`cmd.exe` 不支持**
- SSH 模式下补全的 UI 渲染受网络影响，可能出现不跟手的情况

如功能异常，可在设置中关闭。详见 [命令补全](/zh/guide/suggestion)。

## FaiTerm 会收集我的服务器信息吗？

**不会。** 我们永远不会收集任何与你数据库相关的信息。

客户端使用 [PostHog](http://posthog.com/) 与 [Google Analytics](https://analytics.google.com/) 收集匿名访客信息，可能包括你的国家、设备类型、操作系统类型、浏览器类型与访问时间。

详见 [隐私政策](/zh/guide/privacy)。

## 还有别的疑问？

欢迎加入 QQ 群（页面右上角图标）或到 [GitHub 仓库](https://github.com/littlewrite/FaiTerm_doc) 提 issue。
