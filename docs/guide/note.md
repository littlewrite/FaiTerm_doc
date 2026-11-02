
# Notebooks and Knowledge Base

## Notebooks

The notebook tool provides a tree of notes and folders beside a Markdown editor and preview. You can create notes, folders, and code snippets, rename entries inline, and keep notebook tabs in the restored workspace.

## Knowledge-base retrieval

Turn on **Knowledge Base** in an AI conversation to retrieve relevant notes before the AI answers. This is useful when you want answers grounded in your own documentation.

- Search is scoped to notebook contents.
- You can configure a separate embedding model under **Settings → AI**.
- Retrieved notes are sent as context, and the conversation shows their sources.

> If the knowledge base is unavailable, for example because no embedding model is configured, the conversation says so instead of silently answering without it.

