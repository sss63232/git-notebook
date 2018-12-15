# git merge --no-ff

`--no-ff` 避免 git merge 時發生 `fast forward`。

## fast forward

git merge 的時候，如果發現只需要移動目前 branch 的位置即可完成 merge，git 預設不會產生新的 merge commit，這稱為 「fast forward」。

## git merge --no-ff 確保有 commit 紀錄

![img](https://cdn-images-1.medium.com/max/880/1*SjSWhbwhPqFUTlPL8IV2mg.png)