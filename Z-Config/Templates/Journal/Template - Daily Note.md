---
calendar_date: <%moment(tp.file.title).format('YYYY-MM-DD[T]HH:mm:ss')%>
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "<% tp.user.dateNav(tp.file.title, "days","up") %>"
related:
  - "<% tp.user.dateNav(tp.file.title, "days","last") %>"
  - "<% tp.user.dateNav(tp.file.title, "days","next") %>"
tags:
  - periodic/day
aliases:
summary: Journal entry for <%tp.file.title%>
---
# <%moment(tp.file.title).format('YYYY-MM-DD')%>
<% tp.user.dateNav(tp.file.title, "days") %>

>[!quote] Daily Quote
><%* 
	const quotes = DataviewAPI.pages('#quotes').quote 
	const randomIndex = Math.floor(Math.random() * quotes.length)
	tR += quotes[randomIndex] 
%>

## Today's Focus
What do I need to do today to move towards my weekly goals? 
<% tp.file.cursor() %>

## Notes
A scratch pad for thoughts, notes, reminders. 


## Daily Reflection

- What went well?
- What didn’t go so well?
- What have I learned?
- What still puzzles me?
- Update **Summary** field for the day

## Today's Meetings

```dataview
TABLE WITHOUT ID   
link(file.link) AS "File",
summary AS "Description" 
FROM #meeting AND -"Z - Obsidian" 
WHERE dateformat(calendar_date, "yyyy-MM-dd") = dateformat(date("<%moment(tp.file.title).format('YYYY-MM-DD')%>"), "yyyy-MM-dd")
SORT calendar_date asc
```

## Documents Created Today

```dataview
TABLE WITHOUT ID   
link(file.link) AS "File",
summary AS "Description" 
FROM -"Z-Config"  
WHERE date(default(created_date, file.cdate)) = date("<%moment(tp.file.title).format('YYYY-MM-DD')%>") 
AND file.name != this.file.name
SORT link(file.link) asc
```