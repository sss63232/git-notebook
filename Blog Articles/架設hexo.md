---
title: 利用GitHub Pages架設Hexo Blog
date: 2015-04-26 13:43:23
tags:
---
hexo是一個blog框架，所有文章都是靜態網頁，所以有讀取快速、效率佳...等優點。同時可以利用github的gh-pages服務來託管產生出來的靜態部落格。
<!--more-->
簡單來說整個架設過程分兩個步驟，「設置好github pages」和「設置好hexo」。

# 設置github pages環境
## github pages 有兩種
要使用github所提供的網頁託管服務，有兩種方式：
1. User/Organization Pages：
  * Repo必須命名為username.github.io
  * 使用master分支
  * 利用http://username.github.io 即可瀏覽網頁
2. Projects Pages：
  * Repo命名沒有特殊要求
  * 使用gh-pages分支
  * 利用http://username.github.io/projectname 瀏覽網頁

## 新創repo
在自己的github帳號中新創一個到時候要放hexo blog的Reop。可以自行選擇要用哪一種github pages方式，不過要注意一個帳號只可以創一個名稱為username.github.io的Repo。

## 安裝git
最簡單的方式就是直接google git，到官方網站去下載安裝檔。



# 設置本地端hexo環境
## 安裝hexo
  1. 安裝node.js：
    *  利用google到官網下載安裝檔，並且執行即可。
  2. 利用npm裝hexo
    * 目前node.js都已經內建好npm，所以這時候可以直接下指令
    ```
    npm install -g hexo-cli
    ```

## 建立本地hexo資料夾
選擇一個喜歡的位置，創立一個資料夾（例如D/hexo_blog）後，就可以按右鍵點擊git bash來輸入下列指令：
1. 初始化hexo
```
hexo init
```
2. 安裝相關套件
```
npm install
```
最基礎的hexo blog環境這樣就算建立完成了。
3. 讓blog在本地運行
```
hexo g   //生成靜態頁面至public資料夾
```
開啟本地伺服器
```
hexo s
```
接著用習慣的瀏覽器開啟localhost:4000，便可以預覽hexo blog目前的模樣了。
