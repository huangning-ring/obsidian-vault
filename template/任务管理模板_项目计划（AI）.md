---
title: <% tp.file.title %>
author:
noteType: 项目计划
tags:
taskValue: 3
hardDegree: 3
status: 待拆解
dateCreate: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
dateUpdate: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
---

# 1 风险管理
## 1.1 非预期处理
## 1.2 进度监控
```dataviewjs
// 允许用户传入自定义参数
const userParams = {}


await dv.view("DataFetcher");
await dv.view("DataRender");
const currentLink = dv.current().file.link;
const planList = await window.processModule.processPlan(currentLink, userParams);
window.renderModule.displayPlan(planList, userParams);
```
# 2 收获总结
无