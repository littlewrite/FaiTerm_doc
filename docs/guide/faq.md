# FAQ

## macOS says the app is "damaged" — what now?

FaiTerm is not yet signed by Apple, so Gatekeeper may block the first launch with:

- `"FaiTerm" is damaged and can't be opened`
- `"FaiTerm" cannot be opened because the developer cannot be verified`

Run the command below to remove the quarantine flag:

```bash
sudo xattr -dr com.apple.quarantine /Applications/FaiTerm.app
```

Alternatively, go to `System Settings → Privacy & Security` and click "Open Anyway", then confirm in the dialog. You usually won't be asked again.

The installer also ships a repair script — double-click it and enter your admin password.

## Drag-and-drop upload or SFTP file management stopped working?

- **File management** uses the SFTP protocol
- **Drag-and-drop upload** uses the ZModem protocol

Some cloud providers disable both by default. Check that your server has them enabled.

## Does the AI assistant run commands on its own?

It depends on the mode:

- **Ask mode** — the AI only answers questions and never touches your environment
- **Agent mode** — with a terminal bound, the AI analyses your request and attempts to run commands in your environment

See [AI assistant](/guide/ai) for details.

## Where does command completion work?

- Ships with 600+ common commands, **on by default**, covering local and SSH sessions
- On Windows it supports `powershell`, `bash.exe` and others — **`cmd.exe` is not supported**
- Over SSH the completion UI is affected by network latency and may feel sluggish

You can turn it off in settings if it gets in the way. See [Command completion](/guide/suggestion).

## Does FaiTerm collect my server data?

**No.** We never collect any information related to your databases.

The client uses [PostHog](http://posthog.com/) and [Google Analytics](https://analytics.google.com/) to collect anonymous visitor data, which may include your country, device type, operating system, browser type and access time.

See the [Privacy Policy](/guide/privacy).

## Still stuck?

Join the QQ group (icon in the top-right of the page) or open an issue on [GitHub](https://github.com/littlewrite/FaiTerm_doc).
