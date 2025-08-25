---
calendar_date: <%moment(tp.file.folder(false)).format('YYYY-MM-DD[T]HH:mm:ss')%>
duration:
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "[[<%moment(tp.file.folder(false)).format('[0 - Journal]/YYYY/YYYY-MM/YYYY-MM-DD/YYYY-MM-DD')%>|<%moment(tp.file.folder(false)).format('YYYY-MM-DD')%>]]"
related: []
tags:
  - meeting/1-2-1
  - meeting/team
  - meeting/stakeholder
  - meeting/governance
  - meeting/learning
attendees: []
aliases:
summary: Provide meeting summary
---
# <%title%>
<% tp.user.dateNav(moment(tp.file.folder(), "YYYY-MM").format('YYYY-MM-DD'), "days", "link")%>
## Agenda
What's the purpose of the meeting? 
What are we covering today?
What decisions do we need to reach? 
## Notes
What was the key information discussed?
## Actions 
Who owns what actions?
Update **summary** and **related** properties. 

## Resources
Useful resources