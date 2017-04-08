## 建立 git project
有本地專案資料夾，並在 github建立好對應之 Repo。
```git
cd 專案資料夾位置

git init 

git add . 

git commit -m "XXXX"

git remote add origin https://github.com/ChenYuHsin/XXXX.git 

git push -u origin master
```
### -u參數的意義

-u 參數等同於 --set upstream，意義在於設定 upstream使分支開始追蹤指定的遠端分支，只要做過一次 

```git
git push -u <remote name> <branch name>
```

並且成功 push 出去；本機端的 `master` 就會被設定去追蹤遠端的`<remote name> <branch name>` 分支。設定好 upstream 後，第二次以後要上傳分支時，就只需要透過 `git push` 就可以了，不必再帶` <remote name>` 跟 `<branch name>` 等參數。

## 創建 gh-pages分支

```git
git branch gh-pages

git push origin gh-pages
```


