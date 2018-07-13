---
title: 利用  GithHb Pages 架設 Hexo Blog
date: 2015-04-26 13:43:23
tags: hexo
---
決定要架設一個自己的部落格來紀錄讀書心得與技術筆記，一方面方便自己日後回憶，另一方面也分享給有緣看到的朋友們。

我決定使用 [Hexo](https://hexo.io/zh-tw/)。

因為它所有文章都是靜態網頁，讀取快、效率佳並且可以利用 GitHub 的 gh-pages 服務來託管產生出來的靜態部落格。更重要的是，它的開發者大神是我們台灣人啊！一定要支持一下的啊～
<!--more-->
簡單來說整個架設過程分兩個步驟，「設置好 GithHb Pages」和「設置好 hexo」。

## 設置 GithHb Pages 環境
### GitHub Pages 有兩種
要使用 GitHub 所提供的網頁託管服務，有兩種方式：
1. User/Organization Pages：
  * Repo 必須命名為 username.github.io
  * 使用 master 分支
  * 利用 http://username.github.io 即可瀏覽網頁
2. Projects Pages：
  * Repo 命名沒有特殊要求
  * 使用 gh-pages 分支
  * 利用 http://username.github.io/projectname 瀏覽網頁

### 建立存放部落格的 Repo

在自己的 GitHub 帳號中新創一個用來放 Hexo Blog 的 Repo。可以自行選擇要用哪一種 GitHub Pages方式，不過要注意一個帳號只可以創一個名稱為 username.github.io 的 Repo。

### 安裝 Git

請詳閱 [Git Downloads](https://git-scm.com/downloads)，裝好 Git ，以後就可以直接輕鬆把在電腦上編寫的新內容推上 GitHub Pages。

## 設置本地端 Hexo環境

### 安裝 Hexo

1.   安裝 Node.js：
    *  利用 google 到官網下載安裝檔，並且執行即可。
2. 利用 npm 裝 Hexo
    * 目前 Node.js 都已經內建好 npm，所以這時候可以直接下指令
    ```
    npm install -g hexo-cli
    ```

### 建立本地 Hexo 資料夾

選一個喜歡的位置，創一個資料夾（例如 "D/hexo_blog"）後，就可以按右鍵點擊 git bash 來輸入下列指令：
1. 初始化hexo
```javascript
hexo init
```
2. 安裝相關套件
```javascript
npm install
```
最基礎的hexo blog環境這樣就算建立完成了。
3. 讓blog在本地運行
```
hexo g   //生成靜態頁面至public資料夾
```
4. 開啟本地伺服器

```
hexo s
```
接著用習慣的瀏覽器開啟localhost:4000，便可以預覽 Hexo Blog 目前的模樣了。
