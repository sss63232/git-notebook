---
title: CSS 版面設定基礎
date: 2015-06-08 14:44:55
tags: 前端技術
---
主要包含 box-sizing與 position，紀錄一些我自己理解後的心得筆記，方便記憶與未來查詢。因為這兩個概念常常只要一段時間沒有碰，就會忘記一些小眉角，但偏偏 CSS排版就是魔鬼藏在細節裡，一個小地方沒有弄好就可以讓你瞬間跑版...
<!--more-->
## box-sizing:border-box
| content | padding | border | margin |
| :-----: | :-----: | :----: | :----: |
|    V    |    V    |   V    |        |
有 V表示為 width範圍
## box-sizing:content-box => (預設)
| content | padding | border | margin |
| :-----: | :-----: | :----: | :----: |
|    V    |         |        |        |
有 V表示為 width範圍
## 設定元件消失差異
|         屬性          |  空間保留  |
| :-----------------: | :----: |
|    display:none     | 不會保留空間 |
| visibility : hidden | 會保留空間  |
## position 差異
* position : relative:
  人家以它為準
  原本位子仍佔著
  可以使用 top, left…
* position: absolute
  以上一層的 relative為準
  原本位子不存在
  跳出文件流
* position: absolute
  以視窗進行定位，不佔原本位子



## 參考及學習資源
[學習CSS版面配置](http://zh-tw.learnlayout.com/)
