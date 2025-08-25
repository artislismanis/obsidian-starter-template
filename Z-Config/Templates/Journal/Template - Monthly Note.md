---
calendar_date: <%moment(tp.file.title).format('YYYY-MM-DD[T]HH:mm:ss')%>
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "<%tp.user.dateNav(moment(tp.file.title, "YYYY-MM").format('YYYY-MM-DD'), "months", "up")%>"
related:
  - "<%tp.user.dateNav(moment(tp.file.title, "YYYY-MM").format('YYYY-MM-DD'), "months", "last")%>"
  - "<%tp.user.dateNav(moment(tp.file.title, "YYYY-MM").format('YYYY-MM-DD'), "months", "next")%>"
tags:
  - periodic/month
aliases:
summary: Journal entry for <%tp.file.title%>
---
# <%tp.file.title%>
<%tp.user.dateNav(moment(tp.file.title, "YYYY-MM").format('YYYY-MM-DD'), "months")%>
<%tp.user.dateNav(moment(tp.file.title, "YYYY-MM").format('YYYY-MM-DD'), "months", "down")%>

<% tp.file.cursor() %>