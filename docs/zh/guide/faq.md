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

## 升级后我的主机不见了？

`v1.0.9` 起主机与分组换成了新的存储结构（ObjectBox），**不会迁移旧版本 SQLite 里保存的主机与分组**。如果你从更早的版本升级，请先在旧版本里备份主机信息，再在新版本里重新导入或添加。

详见 [连接与主机](/zh/guide/ssh)。

## AI 需要自己准备 API Key 吗？

需要。FaiTerm 不内置任何模型额度，你在 设置 → AI 里填自己的服务商与 Key（OpenAI、Anthropic、Gemini、DeepSeek、Kimi、Qwen、GLM、MiniMax、Ollama 或任意 OpenAI 兼容端点），可以「测试连接」确认配置是否可用。

另外要提醒一句：**AI 只有在绑定了终端时才会执行命令**（绑定了终端就是 Agent 模式，没绑定就是 Ask 模式）；Ask 只回答、不碰你的环境。

详见 [AI Agent](/zh/guide/ai)。

## 为什么 Docker 面板提示需要管理员权限？

在 macOS 上通过 `docker` 命令行访问 Docker 需要 `sudo` 或者已经加入 `docker` 用户组；面板会把这个提示原样显示出来。你可以：

- 先给当前用户添加 Docker 的免密权限，或在终端里确认 `docker ps` 可以正常工作
- 也可以直接切到对应主机上排查

## 主机工具面板一直是空白？

主机工具与监控都**跟随当前终端的主机**：请先在 ③ 工作区里选中一台已连接主机的终端，再打开 ④ 工具集合里的工具。连接断开时面板会给出状态提示，重连后会自动刷新。

详见 [主机工具与监控](/zh/guide/host-tools)。

## 还有别的疑问？

欢迎加入 QQ 群（页面右上角图标）或到 [GitHub 仓库](https://github.com/littlewrite/FaiTerm_doc) 提 issue。
