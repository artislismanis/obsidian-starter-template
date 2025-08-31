---
created_date: 2025-08-25
next_review_date: 2026-02-25
updated_date: 2025-08-25
up: "[[0-Atlas/0-Atlas|0-Atlas]]"
related:
  - "[[0-Journal/0-Journal|0-Journal]]"
  - "[[1-Efforts/1-Efforts|1-Efforts]]"
  - "[[2-Areas/2-Areas|2-Areas]]"
  - "[[2-Zettels/2-Zettels|2-Zettels]]"
  - "[[3-Reference/3-Reference|3-Reference]]"
  - "[[4-Archive/4-Archive|4-Archive]]"
tags:
  - content/moc
aliases:
summary: This is where all inbound information needing review and processing goes
---
# @Inbox

`button-quick-note` `button-log` `button-task`


## Notes to process
```dataview
TABLE WITHOUT ID   
link(file.link) AS "File",
summary AS "Description" 
FROM -"Z-Config"  
WHERE contains(file.folder, this.file.folder)
AND file.name != this.file.name
SORT link(file.link) asc
LIMIT 10
```

