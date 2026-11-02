# Port Forwarding

Port forwarding is available from the terminal footer for SSH connections. It creates a tunnel on the current SSH session, so you do not need a second `ssh -L` window.

## Local forwarding

Expose a remote service on your computer:

```text
local client → localhost:<local port> → SSH tunnel → remote host:port
```

This is useful for accessing a database, web dashboard, or Redis instance that is only reachable from the server.

## Remote forwarding

Expose a local service on the SSH server:

```text
remote client → server:<remote port> → SSH tunnel → your computer
```

This can temporarily share a local development service with a colleague or an external callback.

## Fields

| Direction | Fields |
| --- | --- |
| Local listener to remote target | Local bind address and port, remote hostname, remote port |
| Remote listener to local target | Remote bind address and port, local hostname, local port |

A tunnel stays alive with the current SSH session and closes when that session ends.

## Status

- Before the terminal is connected, the panel asks you to connect first.
- Telnet, serial, and local terminals report that port forwarding requires SSH.

> Binding to `0.0.0.0` exposes the port to the local network. Use `127.0.0.1` when access should be limited to the same computer.
