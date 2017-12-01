---
title: Sass初探
date: 2016-05-23 10:38:56
tags:
---
Sass是提昇撰寫CSS效率的最佳幫手。我在偶然狀況之下接觸了Sass，發覺它真的是滿好用的，以前在寫CSS時候，的確有些時候會想說要是CSS有變數或函數之類的功能該有多好啊！後來才知道原來只要有了Sass，這些功能都可以如願實現。
<!--more-->
# Sass有兩種
先介紹一下，Sass目前有兩種寫法：
1. .sass
2. .scss
Sass所具備的功能在兩者上都可以實現，差別在於前者使用類似於Python的縮排語法，用縮排來區分段落與建立格式；而後者則與我們所熟悉的CSS並無差異，使用 { } 作為編寫主軸。我目前是使用.scss的寫法，純粹是因為我跟Python不熟，所以使用 { } 比用縮排更讓我覺得親切。
# 環境建立
Sass並不像CSS一樣可以直接被瀏覽器給讀懂，在我們打開文字編輯撰寫完成之後，它們（.sass .scss）需要被轉譯為.css檔案後才可以正常執行。所以以下簡單介紹如何建立起一個可以開發Sass專案的環境。
## 安裝Ruby
因為我是Windows的使用者，所以我使用方便的[RubyInstaller](http://rubyinstaller.org/downloads/)來替我的電腦安裝Ruby。

在安裝過程中，一如往常得不停按下「下一步」就可以了。只有一個地方要稍微注意一下，如果Add Ruby executables to your PATH這個選項沒有打勾的話，一般的命令列（command-line）就無法使用Ruby相關指令，必須另外開啟「Start Command Prompt with Ruby」來使用Ruby相關指令。

## 安裝套件
請輸入依序以下指令，完成系統升級和安裝所需套件程式。
```
gem update-system     //升級
gem install sass      //安裝Sass
gem install compass   //一個輔助Sass專案開發的有利套件
```
# 新增 compass專案
compass 是一個整合型工具，可以幫助我們處理一些使用Sass上會遇到的雜事。我們首先要利用它來建立一個新專案，這樣我們才不用自己在那邊手動創一堆新資料夾，還要邊改名子邊小心翼翼地注意資料夾結構，這種麻煩事就該交給自動化工具幫我們解決。
## 建立專案有兩種
假設我今天我在D槽下創了一個資料夾叫projects，輸入以下兩種不同指令，會有不一樣的效果：
1. 此處建立專案
```
compass create
```
以上指令的效果是在D:\projects建立新專案。
2. 在新資料夾建立專案
```
compass create sass
```
以上指令會先新增一個叫sass的資料夾，然後才在裡面建立起專案目錄。
# 監控專案資料夾
## 使用compass
在用compass建立的專案資料夾中會有一個config.rb的檔案，它是我們整個專案的設定檔，當我們用compass監視專案時，就是監控config.rb所在的那一個資料夾。
## 使用gulp
我目前是使用gulp來監控我的Sass專案，因為我同時可以在gulp裡面塞入一些其他東西來自動幫助我最佳化我的專案，有興趣的人歡迎參考我的另一篇文章[使用gulp 實現LiveReload + scss開發環境](http://chenyuhsin.github.io/2015/05/11/%E4%BD%BF%E7%94%A8gulp-%E5%AF%A6%E7%8F%BELiveReload-scss%E9%96%8B%E7%99%BC%E7%92%B0%E5%A2%83/)。
# 參考及學習資源
[CSS開發工具(Sass + Compass)的環境安裝教學及基本操作](http://blog.shihshih.com/installing-the-sass-and-compass/)
[當CSS遇上變數、函式，就變成SASS啦～ SASS安裝教學](https://coder.tw/?p=859)
