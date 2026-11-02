# Terminal Highlighting

Terminal highlighting is a drawing layer. It changes display colors without modifying the ANSI text stored by the terminal, so copied text and the actual colors used by programs such as tmux remain intact.

## Built-in rules

FaiTerm recognizes commands, arguments, paths, strings, and related shell elements. Under **Settings → Syntax Highlighting**, you can enable individual rules and change their colors.

## Custom rules

You can add JSON rules for keywords, log levels, IP addresses, and other patterns:

```json
{
  "name": "log level",
  "pattern": "\\b(ERROR|WARN|INFO)\\b",
  "color": "#e5ba7d",
  "bold": true
}
```

Rules support plain text or regular-expression matching, foreground color, bold text, and options such as preserving ANSI colors. JSON, expressions, and color values are validated before saving.

## Live preview

The settings page renders real terminal output with the current theme and enabled rules, so changes are visible immediately.

## Master switch

Turning off **Enable highlighting** also disables language parsing, ANSI preservation, rule editing, and the JSON editor to prevent changes that would have no effect.
