---
created_date: 2025-08-31
next_review_date: 2026-02-28
updated_date: 2025-08-31
up: "[[S"
related:
tags:
  - content/note
aliases:
summary: Re-usable button setup
---
# Buttons

This is where I define inline [Buttons](obsidian://show-plugin?id=buttons) I want to re-use across the vault.  
## Content Capture

```button
name 📓 Quick Note
type command
action QuickAdd: 📓 Quick Note
```
^button-quick-note

```button
name 📃 Log
type command
action QuickAdd: 📃 Log
```
^button-log

```button
name ⚒️ Task
type command
action QuickAdd: ⚒️ Task
```
^button-task

## Calendar

```button
name 📅 Today
type command
action Periodic Notes: Open daily note
```
^button-today