
# SSH

通过Faiterm 的 SSH 功能，管理远端服务器

## 添加 ssh host

点击右上角的 ▼ 菜单呼出设置，选到 Host 添加连接信息。

<img src="/images/screenshots/add_ssh.gif" width="600" alt="Example of exact matching" />

输入的命令很多，你可以直接帮一行 ssh -p 命令输入到文本框，Faiterm 会帮你自动解析并填写到各个表单内

## 发起 ssh 连接

点击右上角的 ▼ 菜单, 选择并点击刚刚添加的 ssh 访问主机

<img src="/images/screenshots/conn_ssh.gif" width="600" alt="Example of exact matching" />

## 远程文件管理

在 ssh 终端内，右键呼出菜单，选择文件管理，就会弹出一个文件管理tab。 

<img src="/images/screenshots/file_dark.gif" width="600" alt="Example of exact matching" />

> 这里的文件管理使用的 sftp 协议，如果功能异常，请检查是否关闭了此协议。

## 拖拽上传文件

将本地的文件拖拽到 ssh 终端内，就会将此文件上传到远端。

<img src="/images/screenshots/drag_upload.gif" width="600" alt="Example of exact matching" />

> 这里拖拽文件上传用的 ZModem 协议，某些云厂商可能关闭了此协议。