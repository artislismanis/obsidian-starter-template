---
created_date: 2025-08-25
next_review_date: 2026-02-25
updated_date: 2025-08-25
up: "[[0-Atlas/0-Atlas|0-Atlas]]"
related:
  - "[[@Inbox/@Inbox|@Inbox]]"
  - "[[0-Journal/0-Journal|0-Journal]]"
  - "[[1-Efforts/1-Efforts|1-Efforts]]"
  - "[[2-Areas/2-Areas|2-Areas]]"
  - "[[2-Zettels/2-Zettels|2-Zettels]]"
  - "[[3-Reference/3-Reference|3-Reference]]"
  - "[[4-Archive/4-Archive|4-Archive]]"
tags:
  - content/moc
aliases:
summary: MOC of MOCs - a guided entry point into my PKM
---
# 0-Atlas

`button-quick-note` `button-log` `button-task` `button-today`

> [!summary] Vault Summary
> ```dataviewjs
> // counts
> const openTasks = dv.pages().file.tasks.where(t => !t.completed).length;
> const inboxToProcess = dv.pages('"@Inbox"').length;
> 
> // where to go when clicked (wikilink targets: file, #heading, or ^block work)
> const targets = {
>  openTasks: "@Inbox",
>   inbox:     "@Inbox"
> };
> 
> const dashboard = dv.el("div", "", { cls: "dashboard" });
> 
> function metric(label, value, target) {
>  const card = dv.el("div", "", { cls: "metric", attr: { role: "link", tabindex: "0" }});
>  card.innerHTML = `
>    <div class="label">${label}</div>
>   <div class="value">${value}</div>
>   `;
>   const open = () => app.workspace.openLinkText(target, dv.current().file.path);
>   card.addEventListener("click", open);
>   card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }});
 >  dashboard.appendChild(card);
> }
> 
> metric("Open tasks", openTasks, targets.openTasks);
> metric("Inbox", inboxToProcess, targets.inbox);
>  ```

 --- start-multi-column: AtlasEntry 
```column-settings  
number of columns: 2  
border: off
shadow: off
```

**Pinned**
```dataview
LIST
FROM #pin AND -"Z - Obsidian" 
SORT file.mdate DESC
LIMIT 5
```
--- end-column ---

**Recent**
```dataview
LIST 
FROM -"Z-Config" 
SORT file.mdate DESC
LIMIT 5
```

--- end-multi-column

- Add notable dates 'today' & coming up
- Overview of useful MoCs