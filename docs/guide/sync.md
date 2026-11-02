# Account and Sync

Account information and cloud synchronization are under **Settings → Personal**.

## Account

Signing in enables synchronization and account-backed features. The same page lists signed-in devices and can sign out of all of them. Sync actions explain when sign-in is required instead of failing silently.

## What syncs

- Hosts
- Secrets
- Notes

Local encryption and cloud sync are separate: encryption protects data on disk, while sync keeps multiple devices aligned. See [Secrets](/guide/secrets).

## When sync runs

You can sync manually or let these events trigger it:

| Trigger | Description |
| --- | --- |
| Manual | Choose **Sync now**. |
| Startup | Check and sync when the app starts. |
| Schedule | Periodically check, normally every five minutes. |
| Edit | Merge with a delay after data changes. |
| Close | Push once before the app exits. |

## Sync activity

Recent activity lists each run and whether it came from manual sync, startup, schedule, editing, or app close. Results distinguish downloads from merges. The list can be cleared permanently.

The page also shows the last sync time, tracked categories, unsynced local changes, and the cloud checksum. If no successful run appears for a long time, confirm that you are signed in and run **Sync now** to see the error.
