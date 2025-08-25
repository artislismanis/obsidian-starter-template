---
calendar_date: <%moment(tp.file.title, "YYYY-[Q]Q").format('YYYY-MM-DD[T]HH:mm:ss')%>
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "<%tp.user.dateNav(moment(tp.file.title, "YYYY-[Q]Q").format('YYYY-MM-DD'), "quarters", "up")%>"
related:
- "<%tp.user.dateNav(moment(tp.file.title, "YYYY-[Q]Q").format('YYYY-MM-DD'), "quarters", "last")%>"
- "<%tp.user.dateNav(moment(tp.file.title, "YYYY-[Q]Q").format('YYYY-MM-DD'), "quarters", "next")%>"
tags:
- periodic/quarter
aliases: 
summary: Journal entry for <%tp.file.title%>
---
# <%tp.file.title%>
<%tp.user.dateNav(moment(tp.file.title, "YYYY-[Q]Q").format('YYYY-MM-DD'), "quarters")%>
<%tp.user.dateNav(moment(tp.file.title, "YYYY-[Q]Q").format('YYYY-MM-DD'), "quarters", "down")%>

<% tp.file.cursor() %>