---
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).add(6, 'months').format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "[[2-Areas/@Contacts/@Contacts|@Contacts]]"
related: []
tags:
  - contact/organisation
aliases:
summary: <% tp.file.title %> - Contact Card
---
# <% tp.file.title %>
## Overview
<% tp.file.cursor() %>

## Contact Details

**Email**:: Description | Address  
**Phone**:: Description | Number 
**Address**:: Description | Address
**Socials**::  Description | URL

## Notable Dates

**Notable Date**::  1900-00-00 | 1900-00-00 | Event Category | Event Description