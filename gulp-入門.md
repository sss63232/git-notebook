---
title: gulp 入門
date: 2015-05-10 22:05:36
tags:
---
gulp是一個自動化工具，可以用來輔助開發流程，功用據說與grunt大同小異，但比較好理解，不過我之前也沒有用過grunt，所以無從比較起...但是以目前的討論熱度而言，gulp明顯熱門得多。這裡主要紀錄一下粗略的gulp安裝與使用方式。
<!--more-->

# 初步設置：
* 安裝node.js
* 全域環境安裝gulp
	```
	npm install -g gulp
	```

# 使用上操作指令:
1. 移至專案目錄下初始化專案，同時生成 package.json(整理gulp plugin)
	```
	npm init
	```
2. 當前項目安裝gulp
	```
	npm install gulp --save-dev
	```
	（為什麼要有--save-dev呢？當我們寫--save-dev，會將這個模組添加到package.json的devDependencies裡頭，如果是寫--save，就會添加到dependencies裡，這兩個的差異在於讓使用具備這個package.json專案的人，可以清楚的知道這個模組，是開發使用，還是執行專案時使用的。）

3. 下載所需外掛
	```
	npm install gulp gulp-util gulp-jade gulp-coffee gulp-watch...

	簡寫：
	npm i -D gulp-watch
	```
4. 生成gulpfile.js並撰寫 gulpfile.js
5. 操作gulpfile.js

# gulpfile.js 指令起手式
	* gulp.task 定義工作內容
	* gulp.watch 關注指定檔案是否異動
	* gulp.src 指定檔案來源
	* gulp.dest 指定檔案存放位置

# 啟動gulp
	進入專案資料夾，開啟cmd，輸入`gulp`即可。

# 參考及學習資源
	[CP 值很高的 Gulp](http://www.slideshare.net/yvonne_yu/cp-gulp)
	[設定 Bootstrap/SASS/Bower/gulp (Windows平台)](http://www.innovext.com/tw/2014/07/11/%E8%A8%AD%E5%AE%9A-bootstrapsassbowergulp-windows%E5%B9%B3%E5%8F%B0/)
	[gulp入門指南](https://987.tw/2014/07/09/gulpru-men-zhi-nan/)
	[Gulp 學習 1 - 安裝與執行](http://www.oxxostudio.tw/articles/201503/gulp-install-webserver.html)
	[livereload使用範例](http://andyyou.logdown.com/posts/223484-using-gulp-for-front-end-development-server)
