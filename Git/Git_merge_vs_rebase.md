# Git_merge_vs_rebase

## git merge

將 branch `feature` 合併到 `master`，
兩步驟：

1. 切換到 `master` , `git checkout master`
2. `git merge feature`

## git rebase

將 `feature` rebase 到 `master` 上

1. 切換到 `feature` 
2. `git rebase master`

### rebase 過程有衝突

手動解決衝突後要先 `git add 解決完衝突的檔案 ` 
再接著輸入 `git rebase --continue`

### 最後 `master` merge `feature`

最後可以再回到 `master` 下 `git merge feature`
這樣一來，就僅僅只是 fast-forward，
不會有多餘的節點

## 總結：Rebase vs Merge

### Rebase

Rebase 很像是把本次修改直接貼到新的基準點的後面。 在解衝突方面，提交紀錄是一個一個 apply 後來解衝突，所以如果本次修改有很多的提交紀錄，就要做很多次 apply & 解衝突的動作。

在指令的使用上

```
$ git fetch
$ git rebase <remote>/<branch>
$ git push <remote> <branch>
```

說明

- 將資料從遠端取下來。
- 複製本次修改並接在目前 `<remote>/<branch>` 指向的位置，於是 `<branch>` 指向最新的位置。
- 同步遠端狀態，並重新設定 `<remote>/<branch>` 參考的基準點與 `<branch>` 相同。

等同於

```
$ git pull —-rebase
$ git push <remote> <branch>
```

### Merge

Merge 是將遠端的更新加入本次修改中，所以遠端的提交紀錄會在本次修改提交紀錄之後。並且會多一個合併的提交紀錄（小耳朵），用來記錄合併的來源與合併後的修改，如果沒有修改而只是選擇用哪一個版本，合併時的修改檔案就是空白。

在指令的使用上

```
$ git pull <remote> <branch>
$ git push <remote> <branch>
```

說明

- 將資料從遠端取下來，合併本次修改與遠端狀態，並產生一個合併的 Commit 同時指向兩個 Parent Commit。
- 同步遠端狀態，並重新設定 `<remote>/<branch>` 參考的基準點與 `<branch>` 相同。

等同於

```
$ git fetch
$ git merge <remote>/<branch>
$ git push <remote> <branch>
```

## References

[Git merge和rebase分支合并命令的区别 - 掘金](https://juejin.im/post/5af26c4d5188256728605809)









