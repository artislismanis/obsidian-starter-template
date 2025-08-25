---
calendar_date: <%moment(tp.file.title, "YYYY").format('YYYY-MM-DD[T]HH:mm:ss')%>
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "<%tp.user.dateNav(moment(tp.file.title, "YYYY").format('YYYY-MM-DD'), "years", "up")%>"
related:
- "<%tp.user.dateNav(moment(tp.file.title, "YYYY").format('YYYY-MM-DD'), "years", "last")%>"
- "<%tp.user.dateNav(moment(tp.file.title, "YYYY").format('YYYY-MM-DD'), "years", "next")%>"
tags:
- periodic/year
aliases: 
summary: Journal entry for <%tp.file.title%>
---
# <%tp.file.title%>
<%tp.user.dateNav(moment(tp.file.title, "YYYY").format('YYYY-MM-DD'), "years")%>
<%tp.user.dateNav(moment(tp.file.title, "YYYY").format('YYYY-MM-DD'), "years", "down")%>

<% tp.file.cursor() %>