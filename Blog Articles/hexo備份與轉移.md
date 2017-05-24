---
title: hexo備份與轉移
date: 2016-05-10 10:54:22
tags:
---
距今大約一年前，剛開始接觸到hexo時，對這一整個blog架構都還懵懵懂懂、似懂非懂的，所以把環境大致設定好，確定可以發表文章並上傳到gh-pages供人觀看後，就天真的以為大公告成了～根本沒有思考到備份以及以後若是要在別台電腦維護hexo可能會發生的問題....後來電腦重灌之後，悲慘的命運就降臨了，所有文章的原始檔（.md）都沒有了=0="...。所以這次就稍微研究了一下如何備份與快速轉移hexo blog的方法。
<!--more-->
# hexo架構釐清
*  文章原始檔（.md）在經過 `hexo generate` 後會生成public資料夾中的html檔，那才是我們供人閱讀的主體。
* `hexo deploy` 只會上傳public中的資料，並不包含原始的hexo檔案們，包含.md原始檔、theme、comfig...等檔案，姑且把這些檔案統稱為hexo settings。
* 所以要想輕鬆方便的備份與轉移hexo blog，我們必須另外將hexo settings上傳備份到網路空間上。
* 注意，因為config文件會放些比較私人的資訊，所以不建議上傳到公開網路空間（例如github）上，所以並不建議在目前發佈hexo的repo中另外開一個分支來保存hexo setting的作法。
* 我目前是將hexo setting備份在bitbucket的private repo上，雖然為了方便使用仍選擇了一般網路空間，但至少不是隨便人都可以看到我們的hexo blog原始碼。
# 開始備份hexo setting
## 1. 創建bitbucket repo
* bitbucket基本上就是一個類似於github的網路服務，不過它有一個好處是可以建立private repo，這功能在github可是要賣錢錢的啊。
* 首先，進到[bitbucket](https://bitbucket.org/) 官網建立帳號與創立一個private repo，這部份我就不贅述了。
* 滑到bitbucket右上角的人頭，選擇bitbucket settings --> 左欄SSH Keys --> add key。表單中的label建議輸入電腦名稱以方便辨別，下班貼入ssh key。
## 2. 連結本地hexo資料夾與遠端repo
* 基礎的git指令時間，在進到本地放hexo blog的資料夾後，依序鍵入下方指令：
```
git remote add origin git@bitbucket.org:your_name/repo_name.git
git push -u origin --all # pushes up the repo and its refs for the first time
git push origin --tags # pushes up any tags
```
這樣一來就把hexo setting上傳到剛剛建立的bitbucket private repo之中了。
## 3. 日常hexo管理流程
* 要更新blog內容之前，如果先前已經有在別的電腦更新過內容，要先鍵入`git pull` 確保hexo本地端為最新版本內容。
* 發表新文章，按照一般作法：
```
hexo new "title"
修改文章內容
hexo d -g
```
* 在hexo目錄下鍵入`git push` ，將hexo settings上傳。
## 4. 新環境下使用hexo
* 在要放置hexo blog的目錄下鍵入
```
git clone git@bitbucket.org:your_name/repo_name.git
npm install hexo
```
## 5. 參考資料
[Git 分支 - 遠端分支](https://git-scm.com/book/zh-tw/v1/Git-%E5%88%86%E6%94%AF-%E9%81%A0%E7%AB%AF%E5%88%86%E6%94%AF)
[Git 基礎 - 與遠端協同工作](https://git-scm.com/book/zh-tw/v1/Git-%E5%9F%BA%E7%A4%8E-%E8%88%87%E9%81%A0%E7%AB%AF%E5%8D%94%E5%90%8C%E5%B7%A5%E4%BD%9C)
[GitHub Pages + Hexo搭建博客](http://crazymilk.github.io/2015/12/28/GitHub-Pages-Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/#more)
[利用git解決hexo博客多PC間同步問題](http://chitanda.me/2015/06/18/hexo-sync-in-multiple-pc/)
