---
title: Emmet 快速小範例
date: 2015-06-08 15:08:32
tags:
---
紀錄使用Emmet撰寫html的範例，方便快速回憶起Emmet的使用規則。
<!--more-->
# 基本用法
```
div + p + a
div > p > a ^ span
ul > li*4
```
# 遞增數字$的運用
## 範例A
```
ul > li.item$ * 4
```
==>
```
ul
    li.item1
    li.item2
    li.item3
    li.item4
```
## 範例B
```
ul > li * 2 > a{item$}
```
==>
```
ul 
    li
        <a> item1 </a>
        <a> item2 </a>
```
# 填入屬性內容
```
a[title="ABC" href="google.com"]
```
==>
```
<a title="ABC" href="google.com">
```

# 參考及學習資源 
[Emmet Cheatsheet](http://docs.emmet.io/cheat-sheet/)
