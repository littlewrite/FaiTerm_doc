# Quick Commands and History

## Quick commands

Quick commands are reusable buttons shown in the terminal. The same configuration is used by desktop and mobile terminals and can be edited under **Settings → Quick Commands**.

| Action | Behavior |
| --- | --- |
| Execute command | Runs the command and sends Enter. |
| Insert text | Inserts text at the prompt without running it. |
| Send keys | Sends a key sequence such as `Ctrl+B D`; separate keys with spaces. |

Common uses include fixed commands such as `git status`, templates whose arguments change, and tmux prefixes such as `Ctrl+B %`.

## Command history

The History tool stores commands run in terminals:

- Search and page through long histories.
- Refresh the list or clear filters.
- On desktop, records from the older SQLite store are imported automatically during the first migration.

> History is local application data. **Delete all data** removes it along with the rest of your application data, and the operation cannot be undone.

History also contributes candidates to [command completion](/guide/suggestion), where entries are labeled by source.
