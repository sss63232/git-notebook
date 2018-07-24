# 回復版本 git reset、checkout、revert

https://github.com/geeeeeeeeek/git-recipes/wiki/5.2-%E4%BB%A3%E7%A0%81%E5%9B%9E%E6%BB%9A%EF%BC%9AReset%E3%80%81Checkout%E3%80%81Revert%E7%9A%84%E9%80%89%E6%8B%A9

http://yijiebuyi.com/blog/8f985d539566d0bf3b804df6be4e0c90.html



總有一天你會遇到下面的問題.

(1) 改完代碼匆忙提交, 上線發現有問題, 怎麼辦? 趕緊回滾.

(2) 改完代碼測試也沒有問題, 但是上線發現你的修改影響了之前運行正常的代碼報錯, 必須回滾.



這些開發中很常見的問題, 所以 git 的取消提交, 回退甚至返回上一版本都是特別重要的.

大致分為下面 2 種情況:



1. 沒有 push

這種情況發生在你的本地代碼倉庫, 可能你 add ,commit 以後發現代碼有點問題, 準備取消提交, 用到下面命令

reset
git reset [--soft | --mixed | --hard


上面常見三種類型



--mixed

會保留源碼, 只是將 git commit 和 index 信息回退到了某個版本.

git reset 默認是 --mixed 模式 
git reset --mixed  等價於  git reset


--soft

保留源碼, 只回退到 commit 信息到某個版本. 不涉及 index 的回退, 如果還需要提交, 直接 commit 即可.



--hard

源碼也會回退到某個版本, commit 和 index 都回回退到某個版本.(注意, 這種方式是改變本地代碼倉庫源碼)

當然有人在 push 代碼以後, 也使用 reset --hard <commit...> 回退代碼到某個版本之前, 但是這樣會有一個問題, 你線上的代碼沒有變, 線上 commit,index 都沒有變, 當你把本地代碼修改完提交的時候你會發現權是衝突.....

所以, 這種情況你要使用下面的方式





2. 已經 push

對於已經把代碼 push 到線上倉庫, 你回退本地代碼其實也想同時回退線上代碼, 回滾到某個指定的版本, 線上, 線下代碼保持一致. 你要用到下面的命令



revert

git revert 用於反轉提交, 執行 evert 命令時要求工作樹必須是干淨的.

git revert 用一個新提交來消除一個歷史提交所做的任何修改.

revert 之後你的本地代碼會回滾到指定的歷史版本, 這時你再 git push 既可以把線上的代碼更新.(這裡不會像 reset 造成衝突的問題)



revert 使用, 需要先找到你想回滾版本唯一的 commit 標識代碼, 可以用 git log 或者在 adgit 搭建的 web 環境歷史提交記錄裡查看.

git revert c011eb3c20ba6fb38cc94fe5a8dda366a3990c61
通常, 前幾位即可

git revert c011eb3


git revert 是用一次新的 commit 來回滾之前的 commit，git reset 是直接刪除指定的 commit

看似達到的效果是一樣的, 其實完全不同.

第一:

上面我們說的如果你已經 push 到線上代碼庫, reset 刪除指定 commit 以後, 你 git push 可能導致一大堆衝突. 但是 revert 並不會.

第二:

如果在日後現有分支和歷史分支需要合併的時候, reset 恢復部分的代碼依然會出現在歷史分支裡. 但是 revert 方向提交的 commit 並不會出現在歷史分支裡.

第三:

reset 是在正常的 commit 歷史中, 刪除了指定的 commit, 這時 HEAD 是向後移動了, 而 revert 是在正常的 commit 歷史中再 commit 一次, 只不過是反向提交, 他的 HEAD 是一直向前的.