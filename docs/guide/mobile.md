# Mobile

The Android app has its own workspace, terminal interaction, and AI chat layout. It can share hosts, secrets, and notes with desktop through account sync.

## Workspace

With no open tabs, the workspace shows quick actions and recent work:

- Open **Local Terminal**, create a **Notebook**, or start a new **AI chat**.
- Recently used hosts, edited notes, and conversations are listed below.

## Terminal

- Switch tabs from the bar at the top or by dragging from the screen edge.
- The bottom bar provides quick commands and common control characters.
- External keyboards are supported.
- Copy and paste use the system clipboard.

WSL hosts appear in the mobile host list with a `WSL: distribution` label. The app preserves the distribution, shell, and working directory configured on desktop, but explains that WSL terminals are only available on Windows.

## AI chat

- The composer combines text, attachments, approval mode, usage, voice input, and Send in one capsule.
- Selectors above the composer control the model, terminal context, knowledge base, and reasoning.
- Attachments can come from the photo library, Files, or the camera.
- Voice input inserts recognized text at the cursor.
- There is no separate Ask/Agent switch: selecting a terminal makes the conversation an Agent; leaving it unselected keeps it in Ask mode.
- Conversation history is in the left drawer and grouped by recency.

See [AI Agent](/guide/ai) for approval and context details.

## Settings

Mobile settings mirror the desktop categories: General, Terminal, Themes, Highlighting, Notifications, Quick Commands, Hosts, Secrets, AI, Personal, Sync, and About.

On a landscape tablet, host lists, secrets, and AI settings use a side-by-side list/editor layout. Phones and portrait tablets keep single-page navigation.

## Files and notebooks

Mobile includes local and remote file management, upload/download, image and text previews, and notebooks. Notebook content participates in the same knowledge-base retrieval used on desktop.
