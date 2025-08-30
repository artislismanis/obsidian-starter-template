---
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).add(6, 'months').format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
start_date:
target_date:
completed_date:
priority: 5
up: "[[1-Efforts]]"
related:
tags:
  - effort/on
  - effort/ongoing
  - effort/simmering
  - effort/sleeping
aliases:
summary:
---
# <% tp.file.title %>

## Overview
Briefly describe the purpose, scope, intended outcomes, and stakeholders. 

## Milestones
High-level dates, phases, checkpoints with their status updates. 

## Tasks
Track your actions here. 



**Related Tasks Elsewhere**

```dataview
TASK
WHERE !completed
AND contains(file.folder, this.file.folder)
AND file.name != this.file.name
```

## Meeting Notes

```dataview
TABLE WITHOUT ID   
link(file.link) AS "Meeting",
summary AS "Description"
FROM #meeting
WHERE contains(file.outlinks, this.file.link)
```


## Useful Resources 
Links to useful resources in your PKM and elsewhere.

## Retrospective

- Did the effort deliver expected outcomes? How so? 
- What worked and what didn't? What can do differently next time?