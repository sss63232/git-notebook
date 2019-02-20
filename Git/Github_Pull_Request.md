# Github_Pull_Request

## 在 Github 上使用 pull request 步驟

### Fork 原始專案(或稱為 `upstream`)

fork 後 clone 下來，
將原始專案設為上游，
方便隨時追蹤該專案目前的新進度

```shell
git remote add upstream git@github.com:XXXXX
```

### 在 fork 回來的專案中建立 topic branch

通常在一個獨立的 branch 上進行開發，

```shell
git branch new-feature
git checkout new-feature
```

接著就在 new-feature 這條 branch 寫 code~

#### 想接受 upstream 的更新時，rebase or merge

當在開發過程中，
想要導入來至 upstream 的更新時，
在沒有衝突的情況下，
可以使用 `git rebase`

```shell
git rebase upstream/master new-feature

# 如果在當前 branch 已經是 new-feature 的情況下，也可以直接
git rebase upstream/master
```



使用 rebase 而非 merge 的原因請參考：

>  這將把當前 branch 的開發 “base（基礎）” 推進到一個新的起點，而不會引入多餘的 commits。
>
> ​       當你在某個 branch 下工作時，`git merge`可以用來合併來自其他 branch 的更新。
>
> ​       如果 merge 的 branch 來自遠程庫，一次 merge 操作會增加一個額外的 commit（“Merge branch ‘master’ of something”）。如果在一個需要發送`Pull Request`的主題 branch 下面進行這種操作，（我個人覺得）這不是一種乾淨的手段。
>
> ​       當你在主線 branch（例如 master）下進行開發時，git merge 可以用來吸收其他開發 branch 引入的新特性（包括主項目維護者用來直接 merge Pull Requests），很恰當。

### 在 Github 上發送 pull request

#### base branch

就是你希望被 merge 到 upstream 的哪個 branch

#### head branch

在上述例子中，
就是 new-feature 啦～

### pull request 更新

一旦推送了一條 pull request，
在它被關閉以前，
再次向這個 branch 中 push commit，
都會被自動納入該 pull request 裡，
不需要另外開 pull request

舉例來說，
我今天提交了 new-feature 的 pull request，
結果被拒絕了，
被要求加上 unit test。

那我就一樣在 new-feature 這條 branch 中寫測試，
寫完以後 push commits， 
不用再開新 pull request

## References

[Github使用之Pull Request的正确打开方式（如何在GitHub上贡献开源项目） - 你见，或者不见 - CSDN博客](https://blog.csdn.net/yxys01/article/details/78316649)

[如何貢獻開源專案？ | Shing's Blog](https://shinglyu.github.io/web/2018/05/12/how-to-contribute-to-open-source.html)

[Yoda生活筆記: 以pull request參與github專案開發](https://yodalee.blogspot.com/2014/05/pull-requestgithub.html?m=1)