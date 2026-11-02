# Host Tools and Monitoring

![Host tools](/images/screenshots/host_light.png)

Tools in the right-side collection follow the host used by the active terminal. Switching terminals switches the host being inspected. Local hosts are supported too, including Windows processes, services, Docker, and scheduled tasks.

## Tools

| Tool | What it does |
| --- | --- |
| Processes | Sort by CPU, memory, or PID; inspect usage and owners; stop, continue, or change priority. |
| Services | Inspect status and descriptions, start/stop/restart, and read journal logs. |
| Docker | Browse containers and images; start, stop, restart, remove, read logs, or enter a container shell. |
| tmux | Browse sessions, windows, and panes; attach, rename, end, or create sessions. |
| Scheduled tasks | Inspect cron jobs, systemd timers, and Windows scheduled tasks. |
| Ports | Inspect listeners and connections, protocol, state, and owning process. |

Each panel has a filter row at the top, a refresh action on the right, and a `⋯` menu for row-specific operations.

## Resource monitoring

The monitoring panel shows live values and trends for the current host:

- CPU, including user/system/idle breakdown, and load
- Memory usage
- Disk partition usage and read/write activity
- Network send and receive rates

Choose the sampling interval and time range from the chips at the top. The polling choices match the process, port, and log panels.

## Tips

- Tool panels are tabs in the right-side collection. Use the overflow menu if they do not all fit.
- A disconnected or unreachable host shows an explicit state, then refreshes after reconnection.
- Large command output is summarized in the panel; the complete output remains in the log.
