---
title: hexo寫新文章並發佈到github pages
date: 2015-04-26 10:48:12
tags: hexo
---
當我們設定好 Hexo 的環境之後，就應該要開始充實 blog 內容囉。本篇主題為，要如何在 hexo 中建立一篇新文章，同時在編寫完文章內容之後，要如何把它上傳到 github pages 之上。
<!--more-->
## 將hexo blog 發佈到 github 上
### 安裝套件
要把本地端的hexo blog上傳到github上，使用特定的npm套件可以讓我們輕鬆達成目的。
```javascript
npm install hexo-deployer-git --save
```
### 修改hexo設定
到 hexo 資料中，開啟 _config.yml，移到該文本最面，修改內容如下：
```
deploy:
  type: git
  repository: https://github.com/username/username.github.io.git
  branch: master
```
這是要告訴hexo我們要上傳的位置與分支。接著執行指令：
```
hexo g
hexo d   //發佈到網路空間上（例如 github pages）
上面兩行也可以合併成
hexo d -g
```
如此一來，我們pulic資料夾裡面的文章就發布到github pages囉。
### 觀看成果
輸入網址：username.github.io，如果可以看到你的 hexo blog 呈現出來，那就是成功囉！
## 新增hexo文章
### 新增文章原始檔
進到 hexo 的本地目錄之下，輸入指令：
```javasript
hexo new "title" 
//title代表文章標題，可以自由輸入
```
### 編寫文章內容
文章原始檔（.md）會放在`hexo/source/_post`之下，可以自由使用習慣的文本編輯器開啟並且修改，寫好文章之後存檔。
### 產生靜態文件並上傳
這兩個動作使用 hexo 指令就可以輕鬆達成，指令如下：
```
hexo d -g
```
