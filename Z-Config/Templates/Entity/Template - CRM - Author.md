---
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).add(6, 'months').format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "[[3-Reference/@Creators/@Creators|@Creators]]"
related: []
tags:
  - creator/author
aliases:
summary: Author Card
---
# <% tp.file.title %>
## Overview
<% tp.file.cursor() %>