---
title: Bower簡單入門
date: 2015-05-23 12:03:14
categories:
tags: Bower
---
目前絕大多數人在寫網頁時，難免會引用不少相關套件來輔助開發，畢竟 GitHub上有許許多多大神們的各式心血結晶啊，好套件不用嗎！而 Bower的作用就在於協助我們管理我們在一個專案中所使用的大大小小前端套件，自動處理下載更新，或是相依性等問題。不過後來發現，越來越強大的 npm似乎讓 Bower顯得不是那麼重要了。

<!--more-->

## 沒有 Bower的時候
當我們還沒有使用 Bower的時候，要引用某個套件時，又或者是要更新套件版本的時候，往往是：
1. google該套件官網，通常最後會從 GitHub上抓下來。
2. 找看看有沒有CDN，直接一行程式碼引用。
3. 嫌麻煩，直接舊版沿用算了...

Bower 就是為了解決這類麻煩而存在的。

## 安裝 Bower
先裝好 Node.js，然後使用 npm輕鬆下載：
```bash
npm install Bower -g
```
## 搜尋套件
1. 利用[Search Bower package](http://Bower.io/search/) 網頁搜尋。
2. 使用指令搜尋。
```bash
Bower search <package-name>
```
## Bower的使用
這裡簡單說幾個最常用的指令，大概可以涵蓋日常開發80%的用途，其餘比較詳細專業的操作就等需要用到的時候再去查一下囉～
### CD進入project目錄後
1. 查詢指令 `bower -help`
2. 搜尋套件 `bower search <package-name>`
3. 安裝套件 `bower install <package-name>` ，
   * 例如 `bower install bootstrap`。
   * 預設會將套件安裝至專案目錄下的 bower_components。
4. 指定版本並更名`bower install <name>=<package-name>#<version>`
   * 例如 `bower install renameFolder=jquery#1.9`
5. 查詢目前安裝套件`bower list`
6. 更新套件 `bower update <package name>`
7. 刪除套件 `bower uninstall`
   * 例如`bower uninstall renameFolder`
8. 建立 package.json `npm init`
### Bower設定
要在專案資料夾底下創立一個`".bowercc"`檔案，以下為[官網範例](http://Bower.io/docs/config/)。
```json
// Bower can be configured using JSON in a .Bowerrc
// file. For example:
{
  "directory": "app/components/",
  "timeout": 120000,
  "registry": {
    "search": [
      "http://localhost:8000",
      "https://Bower.herokuapp.com"
    ]
  }
}
```
通常設定Bower的目的都是為了自訂下載路徑，基本上留著第一行就可以了。其他詳細內容請查詢[官方文檔](https://GitHub.com/Bower/spec/blob/master/config.md)。

## 參考及學習資源
[Bower](http://Bower.io/)
[Bower javascript套件管理工具 初探](http://iambigd.blogspot.tw/2014/06/javascript-Bower-javascript.html)
[Bower – 安裝與發佈封包 (windows)](http://jsnwork.kiiuo.com/archives/2120/Bower-%E5%AE%89%E8%A3%9D%E8%88%87%E7%99%BC%E4%BD%88%E5%B0%81%E5%8C%85)
