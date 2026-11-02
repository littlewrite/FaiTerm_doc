# Notifications

## Notification Center

The bell at the bottom of the tool rail opens the notification center. It collects terminal alerts, command completion notices, and transfer results, and shows an explicit empty state when there is nothing to review.

## Settings

The notification settings include these master controls:

| Setting | Effect |
| --- | --- |
| Notify on terminal Alert | Delivers alerts emitted by programs, including long-running commands and script notifications. |
| Suppress terminal notifications | Disables terminal alert delivery across Toasts, the notification center, and system notifications. |
| Suppress system notifications in foreground | Keeps operating-system notifications quiet while you are using the app. |

OSC notifications commonly sent by command-line tools use the same path, so disabling the master control quiets those as well.

Terminal notifications are rate-limited to avoid bursts. Identical title-and-body pairs are not repeated within five seconds, and no more than one terminal notification is delivered per second.

Mobile reports only notifications explicitly sent by programs; it no longer guesses task completion from the terminal title.

## Transfer notifications

When an upload or download finishes or fails:

- In the background, the macOS Dock bounces or the Windows taskbar flashes.
- On desktop with system notifications enabled, FaiTerm shows a completion notification.

See [Files and Transfers](/guide/files) for transfer progress.
