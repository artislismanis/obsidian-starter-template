---
calendar_date: <%moment(tp.file.title).format('YYYY-MM-DD[T]HH:mm:ss')%>
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "<%tp.user.dateNav(moment(tp.file.title, "GGGG-[W]WW").format('YYYY-MM-DD'), "weeks", "up")%>"
related:
  - "<%tp.user.dateNav(moment(tp.file.title, "GGGG-[W]WW").format('YYYY-MM-DD'), "weeks", "last")%>"
  - "<%tp.user.dateNav(moment(tp.file.title, "GGGG-[W]WW").format('YYYY-MM-DD'), "weeks", "next")%>"
tags:
  - periodic/week
aliases:
summary: Journal entry for <%tp.file.title%>
---
# <%tp.file.title%>
<%tp.user.dateNav(moment(tp.file.title, "GGGG-[W]WW").format('YYYY-MM-DD'), "weeks")%>
<%tp.user.dateNav(moment(tp.file.title, "GGGG-[W]WW").format('YYYY-MM-DD'), "weeks", "down")%>

<% tp.file.cursor() %>