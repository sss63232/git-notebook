---
title: 使用github SSH key省去Deploy時需要輸入帳密
date: 2015-04-26 13:30:09
tags:
---
利用SSH key進行deploy，除了安全性的優點之外，我自己覺得最方便的地方在於我要上傳東西到github的時候可以不用再手動輸入帳號密碼，雖然這不過是1分鐘就可以完成的事情，但可以讓事情更自動化，我們又何樂而不為呢！
<!--more-->
# 設置ssh key
## 先看是否有已經存在的ssh key
輸入以下指令：
```
ls -al ~/.ssh
```
一般狀況下，如果沒有在該台電腦上使用過相關服務或程式的話，是不會有ssh key的。
## 產生ssh key
輸入指令：
```
ssh-keygen -t rsa -C "youremail@xxx.com"
```
這會產生一個用youremail@xxx.com作為標籤的ssh key，為了方便，輸完指令後所跳出的幾個選項，我們都直接enter到底，設為空值。
## ssh Agent
輸入:
```
ssh-agent -s
```
只可以出現一行 Agent pid XXXX 這樣的字樣，
若不行則輸入:
```
eval $(ssh-agent)
```
確定最後出現只有一行的Agent pid XXXX字樣之後，輸入：
```
ssh-add ~/.ssh/id_rsa
```
此步驟即算完成。
## 將ssh key加入github
打開github的setting頁面，點選`add ssh key`。
1. `title`欄位輸入自己可以記憶的名稱，例如可以輸入電腦名稱，好讓自己可以辨別這個key是哪一台電腦所用。
2. 另外用記事本打開id_rsa.pub，把所有內容複製，貼到key欄位中。
這樣就算加入完畢了。

## 測試
輸入以下指令：
```
ssh -T git@github.com
```
應該會顯示：
```
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?
```
輸入yes，若顯示
```
Hi username! You've successfully authenticated, but GitHub does not
provide shell access.
```
這樣就代表ssh 設定完成了，以後可以輕輕鬆鬆發佈hexo blog了
