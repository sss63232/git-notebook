---
title: 使用Gulp 實現LiveReload + SCSS開發環境
date: 2015-05-11 22:23:07
categories: 前端技術
tags: Gulp SCSS
---
SCSS簡單來說是加強版的CSS，可以增進編寫CSS的效率。而Livereload則是自動重新整理網頁，可以省下讓我們省下按F5的力氣。這兩個東西目前是我在每一個專案都會使用到的功能，剛好最近接觸到gulp這個自動化工具，所以決定試著做出一個屬於我自己的自動化流程工具。
<!--more-->

## 參考與學習資源
要使用gulp來同時實現SCSS及livereload，我基本上就是將下面兩個功能寫到同一支gulpfile.js裡面，同時選擇不用安裝chrome-extension的作法。
[gulp執行livereload](http://michaelhsu.tw/2014/06/11/gulp-livereload/)
[gulp 編譯 scss](http://www.oxxostudio.tw/articles/201503/gulp-4-scss-sass.html)
[gulp執行livereload 不用加裝chrome-extension](http://andyyou.logdown.com/posts/223484-using-gulp-for-front-end-development-server)

# 前置作業
安裝全域gulp
```
npm install -g gulp
```

# 整合步驟簡要說明
	1. 安裝ruby
		因為我是使用windows系統，所以使用(RubyInstaller)[http://rubyinstaller.org/]。
	2. 安裝compass
		`gem install compass`
	3. 進入專案目錄，初始化npm，Managing module dependencies。
		`npm init`
	4. 安裝所需套件：
		要達成所需功能，需要以下4個套件，缺一不可。
		```
		npm install gulp --save-dev
		npm install gulp gulp-livereload --save-dev
		npm install gulp gulp-compass -save-dev
		npm install gulp-connect --save-dev
		簡寫：
		npm i -D gulp gulp-livereload gulp-compass gulp-connect
		```
	6. 編寫gulpfile.js
		```javascript
		var gulp= require('gulp'),
			connect= require('gulp-connect');
		  compass   = require('gulp-compass');

		gulp.task('compass',function(){
		  gulp.src('sass/*.*')
		    .pipe(compass({
		// config_file: './style/scss/config.rb',
		        css: '.tmp/',   //輸出位置
		        sass: 'sass/',  //來源位置
		        style: 'compact', //nested, expanded, compact, compressed 壓縮格式
						comments: false, //是否要註解 預設為true
		          }))
		          .pipe(gulp.dest('.tmp')); //輸出位置，非必要

		});

		gulp.task('server',function(){
			connect.server({
				livereload:true,
			});
		});

		gulp.task('reload',function(){
			gulp.src('*.html')
				.pipe(connect.reload());
		});

		gulp.task('watch',function(){
			gulp.watch('*.html',['reload']);
		  gulp.watch('sass/*.*',['compass']);
		  gulp.watch('.tmp/*.css',['reload']);
		});

		gulp.task('default',['server','watch']);
		```
# 資料夾結構說明：
sass 資料夾內放xxx.scss，然後自動轉換成xxx.css檔案放在 .tmp的資料夾內。
