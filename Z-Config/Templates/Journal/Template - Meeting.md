---
calendar_date: <%moment(tp.file.folder(false)).format('YYYY-MM-DD[T]HH:mm:ss')%>
duration:
created_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
next_review_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
updated_date: <%moment(tp.date.now()).format('YYYY-MM-DD')%>
up: "<% tp.user.dateNav(moment(tp.file.folder(false)), "days", "link")%>"
related: []
tags:
  - meeting/1-2-1
  - meeting/team
  - meeting/stakeholder
  - meeting/delivery
  - meeting/learning
attendees: []
aliases:
summary: Provide meeting summary
---
# <%tp.file.title%>
<% tp.user.dateNav(moment(tp.file.folder(false)), "days", "link")%>

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