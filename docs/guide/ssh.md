
# Connections and Hosts

SSH, SFTP, Telnet, FTP, serial, and local terminals share one host list. Group, search, sort, and assign icons to connections, while each protocol keeps its own parameters.

## Add a connection

Open **Hosts** from the tool rail or **Settings → Hosts**, then create a connection.

![Add a connection](/images/screenshots/add_ssh.gif)

You can paste a connection URL such as `ssh://`, `sftp://`, `telnet://`, `ftp://`, `serial://`, or `local://`, a command such as `ssh user@host`, or a serial device path. FaiTerm detects the protocol and fills the form. If no port is supplied, the protocol default is used.

## Connect

Select **Hosts**, then double-click a host or choose **Connect** from its context menu. A successful connection opens a terminal tab in the workspace.

![Connect to an SSH host](/images/screenshots/conn_ssh.gif)

FTP and SFTP hosts can also open **File Browser** directly without a terminal tab.

## Authentication and secrets

A host can use a password or private key. If several hosts share a password, key, or passphrase, save it as a reusable secret and reference it from each host. See [Secrets](/guide/secrets).

## Local terminal and WSL

Create a local host to run a shell on your own computer. FaiTerm detects installed shells and starts new local tabs in the current directory when Shell Integration is enabled.

On Windows, enable **Use WSL** and choose a distribution to run the local terminal inside WSL:

- Leave **Shell** and **Working directory** blank to use the distribution's default shell and start in its home directory.
- Shell and directory fields use Linux paths inside the selected distribution. `~` is not expanded, and FaiTerm does not create a missing directory.
- The shell and directory pickers start inside the selected WSL distribution.
- Drag a Windows file into a WSL terminal to insert its `/mnt/<drive>/...` path.
- WSL hosts currently provide terminal access only. Opening files is not available, and FaiTerm explains that WSL requires Windows when the host is opened on macOS or Android.

The mobile app can display a WSL host configured on desktop without rewriting its distribution, shell, or directory. The host is labeled `WSL: distribution`, and the editor identifies both paths as paths inside the distribution.

## Shell Integration

**Settings → Terminal → Shell Integration** controls terminal-to-shell awareness:

- When enabled, new tabs start in the current directory, command state and Git branches can be detected, and paths in output can be opened.
- When disabled, your shell starts exactly as configured and these integrations are unavailable.

Some shells do not report their working directory. FaiTerm can still read the local system working directory for cases such as tmux and custom shell setups, keeping new tabs and completion aligned with `cd`.

## SSH

- Authenticate with a password or key and inspect known-host fingerprints during connection.
- Use the terminal context menu to open file management, monitoring, or terminal splits.
- Use the host context menu for file browsing, monitoring, and known-host management.
- Create local or remote port forwards from the terminal footer. See [Port Forwarding](/guide/port-forward).

## File management and drag-and-drop

After an SSH connection is established, open **File Manager** from the terminal footer or context menu. The tab shows your local files on the left and the remote files on the right.

![Remote file management](/images/screenshots/file_dark.gif)

> File management uses SFTP. If the list is empty or the action fails, check whether SFTP is enabled on the server.

Dragging files into an SSH terminal uploads them to the current remote directory through ZModem. Some cloud providers disable ZModem by default.

## Other protocols

**Telnet** supports terminal type, encoding, newline conversion, and option negotiation. **FTP** supports browsing and file operations, passive mode, ASCII/Binary transfer, encoding, and an initial directory. **Serial** supports enumerated and manually entered devices, baud rate, data bits, stop bits, parity, flow control, encoding, and newline behavior.

## Disconnections

FaiTerm distinguishes a reconnecting session, a session that ended normally, and a failed connection. Connection failures use readable causes such as authentication failure, DNS failure, timeout, proxy failure, or a closed connection; technical details are written to logs.

## Host data

Hosts and groups use the storage layout introduced in v1.0.9. Data from older versions is not migrated automatically, so export or record important hosts before upgrading from an older release. Command history is separate and is imported automatically on desktop where supported.

