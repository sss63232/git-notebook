title: npm 缺陷，路徑太長的解決方法
tags:
  - npm
  - 路徑太長
categories:
date: 2016-05-24 15:26:14
---
似乎是因為套件相依性的關係，當我在使用npm下載套件或是要刪除套件時，接連發生過好幾次"資料夾名稱太長"導致windows無法新增刪除的狀況...
<!--more-->

經過googlev一些資料後，確認這是npm在Windows平台上的天生缺陷，因為 Windows 作業系統有路徑檔名的限制（完整的檔名必須少於 260 個字元，並且目錄名稱必須少於 248 個字元）。

# 兩個問題

我目前遇到它會造成的問題就是：
1. 套件抓不下來
2. 套件資料夾（node_modules）刪不掉

以下依序介紹兩種問題的解決方法。

# 套件抓不下來—解法

這是從大神`保哥`網站上看到的解決方法，但是`不一定有效`！我們要做的就是變更 Node.js / npm 全域模組的預設安裝路徑。

## 預設安裝路徑

由於在 Windows 平台預設的 npm 全域模組安裝路徑為 `%APPDATA%\npm`，當使用者帳號比較長一點，例如常用的Administrator時，npm的安裝路徑就會是 `C:\Users\Administrator\AppData\Roaming\npm`，超過Windows限制字元數的機率就是很大。

## 縮短路徑

改變 Node.js / npm 全域模組的預設安裝路徑(例如 `C:\Users\Administrtor\AppData\Roaming\npm`），把路徑縮短，那麼成功率就會提高，但還是有可能會失敗，就是當套件本身的資料夾層級就已經超過Windows限制時，那我們就也真的沒有法子了...

## 新創npm資料夾為預設路徑

先準備好一個資料夾 ( C:\npm )
```
mkdir c:\npm
```
修改npm的設定檔
```
npm config set prefix "C:\npm" -g
```
這樣一來預設安裝路徑就會變成`C:\npm`，是不是短了很多呢！

## 修改PATH環境變數

將原本的 npm 安裝路徑變更到新指定的目錄下，因為你安裝的全域模組預設會在 prefix 目錄下建立一個相對應的 .cmd 批次檔，方便你在命令提示字元下執行 node.js 工具程式，所以得要跟著一起修改它的設定。

![修改PATH環境變數](/images/npm_too_long/PATH1.png)
![修改PATH環境變數](/images/npm_too_long/PATH2.png)

以上圖片引用於（http://blog.miniasp.com/post/2015/09/01/Change-npm-default-global-installation-directory-for-nodejs-modules-in-Windows.aspx）

# node_modules刪不掉—解法

要刪除層級太深的資料夾比較簡單，我們要借助linux中的刪除指令，將它們全數刪除。

## 方法一：使用rm指令
進入專案資料夾。
```
cd work_directory
```
刪除資料夾
```
rm -rf node_modules
```
到此就清除乾淨囉！

## rm指令簡介

指令名稱：rm
功能說明：刪除檔案或目錄
語法：rm [options] file

[options]
-d：直接刪除一個目錄，既使目錄不是空的，super user 才可以用。
-f：--force 就是強制刪除檔案或目錄。
-i：執行前提供使用者確認。
-r, -R：--recursive遞迴處理，將指定的目錄下所有的檔案與子目錄一併處理。

範例：
1.刪除目錄node_modules中所有的檔案和子目錄
```
rm -rf node_modules
```

## 注意

使用這個指令時一定要再三確認要刪除的資料夾是不是對的，有沒有進錯路徑，有沒有打錯字。不然刪錯資料就死定囉～

## 方法二：使用7-zip

偶然在網路上發現有人分享的小方法，可以借助7-zip來刪除過長路經的資料夾。開啟7-zip之後，對要刪除的資料夾用 `shift` + 點擊上面的`刪除`即可。有在使用7-zip的人嘗試看看，我是覺得還滿方便的啦！
![7zi刪除檔案](/images/npm_too_long/7zip.png)

# 參考與資料來源

[rm 刪除檔案或目錄](http://blog.xuite.net/altohorn/linux/17259898-rm+%E5%88%AA%E9%99%A4%E6%AA%94%E6%A1%88%E6%88%96%E7%9B%AE%E9%8C%84)

[如何在 Windows 平台變更 Node.js / npm 全域模組的預設安裝路徑](http://blog.miniasp.com/post/2015/09/01/Change-npm-default-global-installation-directory-for-nodejs-modules-in-Windows.aspx)