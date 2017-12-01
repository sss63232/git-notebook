---
title: atom 與sublime3 使用技巧筆記
date: 2016-05-21 18:02:50
catgories: 前端技術
tags: atom sublime3
---
這兩天看完了[六角學院](http://www.hexschool.com/courses/)提供的文字編輯器免費課程，順便紀錄一下學習筆記，把一些我可能比較有機會會用到的功能給記起來。
<!--more-->
以下是課程的網址，他們使用的是udemy的課程平台，使用起來還算順手，有興趣的人可以點進去觀看。
1. [一小時上手 Sublime Text 3 網頁編輯器](https://www.udemy.com/sublime-text-3/)
2. [一套用到底的文字編輯器 Atom](https://www.udemy.com/atom-hexschool/)

雖然我本來就知道也使用過這兩個文字編輯器，但我不過就是個網頁前端小菜鳥，一直以來都只有用到他們的基本功能，或許根本沒有發揮到這兩套熱門指數爆表的編輯器的厲害之處，所以還是決定還聽一下高手們的經驗分享，希望自己可以更熟練地運用工具，加快開發效率。

# Atom學習筆記
1. `Ctrl + P`，	快速查找檔案，可以下 public(資料夾名稱) xxx(檔案名稱)
2. Views -> pans，分割視窗
3. `Ctrl + N`，開新檔案
4. 先選字後 `Ctrl + D`，選擇一樣的字
5. 任何地方 `Ctrl + L `選取整行
6. `Ctrl +-` 調整文字大小
7. `Ctrl +ENTER` 跳到下一行同一個地方
8. 內建Emmet，`html:5` =` !`， 輸出html框架
# sublime3 學習筆記
## 熱鍵：
`Ctrl + enter` 跳到下一行(Insert line after)
`Ctrl + shift + enter` ：Insert line before

## Emmet 語法
### HTML
•	html:5  →  html5 文件模式
•	link:css →  插入CSS檔案
•	div       → `<div></div>`
•	.box     → `<div class="box"></div>`
•	div*2   → `<div></div> <div></div>`
•	div>p   → `<div><p></p></div>`
•	div+p   → `<div></div> <p></p>`
### HTML 補充
•	div{hello}        → `<div>hello</div>`
•	div[alt=hello]   → `<div alt="hello"></div>`
•	div>lorem       → `<div>Lorem ipsum dolor……...</div>`
•	div>lorem1      → `<div>Lorem</div>`
•	(.box>h1)*3     → `<div class="box"><h1></h1></div> * 3`
•	p.box$*2→ <p `class="box1"></p> <p class="box2"></p>`
### CSS
•	m0        → `margin: 0 0 0 0`
•	ml10     → `margin-left: 10px`
•	Bg        → `background`
•	c#000   → `color: #000`
•	fl          → `float : left `
•	pos-r    → `position:relative`
•	fz12      →` font-size: 12px`
•	h10   → `height: 10px`
•	w10  → `width: 10px`
