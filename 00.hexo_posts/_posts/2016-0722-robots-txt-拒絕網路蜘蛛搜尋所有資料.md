---
title: robots.txt 拒絕網路蜘蛛搜尋所有資料
categories:
date: 2016-07-22 11:50:38
tags: robots.txt
---
今天在看 SEO相關文章時學到的新東西：robots.txt，可以避免我們網站的內部檔案被網路爬蟲搜尋到。將robots.txt配置在網站的根目錄，用來限制網路爬蟲隨意的抓取資料!
<!--more-->
## 它不是用來"隱藏"網頁的
### 控制檢索流量
根據[Google的相關說明](https://support.google.com/webmasters/answer/6062608?hl=zh-Hant)，robots.txt的用途為「控制檢索流量」，簡單來說就是讓載入網頁的時候可以略過不重要的圖片、檔案或資源，減少流量負擔，並不能做到100%隱藏網頁！
### 無法禁止其他網站參照你的網址
假設你使用 robots.txt鎖住了網頁A，讓它不被搜尋到，但你有另一個正常在線上的網頁B，其內容中帶有連結指向到網頁A。那當 Google爬蟲爬到網頁B時，還是會對網頁A建立起一份索引，網頁A就有機會被放上搜尋結果頁上。所以才說 robots.txt並不是用來隱藏網頁的。
### 非所有網路搜尋引擎都支援
網路資料有提到說，這個方法並不是一個強而有力的協定，基本上只能算是幾個大廠（Google、Yahoo...）之間約定俗成的。
### 想要完全隱藏網頁的話
請使用 ＜META＞標記 noindex、nofollow，細部教學請見最下方參考資料。
## 使用方法
### 文件檔案名稱
統一為小寫的 robots.txt
### 文件內容
#### 範例
```
第一種： 開放所有搜尋引擎
User-agent: *
Allow: /
------------------------------------------
第二種：禁止所有機器人造訪特定目錄：
User-agent: *
Disallow: /cgi-bin/
Disallow: /images/
Disallow: /tmp/
Disallow: /private/
------------------------------------------
第三種：禁止所有機器人造訪特定檔案類型：
User-agent: *
Disallow: /*.php$
Disallow: /*.js$
Disallow: /*.inc$
Disallow: /*.css$
```
#### 相關說明：
User-agent代表要禁止的對象，常見如下：
```
User-agent: *          (針對所有搜尋引擎設定)
User-agent: Googlebot  (針對google搜尋引擎設定)
User-agent: Slurp      (針對Yahoo!奇摩搜尋引擎設定)
User-agent: Baiduspider(針對百度搜尋引擎設定)
```
Allow 和 Disallow 分別代表是否允許搜尋引擎爬取資料。
### 檔案放置位置
放在網站的根目錄即可。

## 參考與資料來源
[使用robots.txt教學、防止目錄內資料被登錄](http://www.dami.tw/2012/11/14dami.html)
[robots.txt](https://zh.wikipedia.org/wiki/Robots.txt)
[瞭解 robots.txt 檔案](https://support.google.com/webmasters/answer/6062608?hl=zh-Hant)
[實戰設計robots.txt與<META>標籤](http://www.ithome.com.tw/node/35591)
