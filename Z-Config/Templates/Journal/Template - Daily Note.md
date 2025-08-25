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

<% tp.file.cursor() %>