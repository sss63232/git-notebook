# Git 放棄修改

## 在 local 修改了檔案（還沒有 git add 到暫存），要放棄

單一檔案或資料夾

```shell
git checkout -- filename
```

所以檔案

```shell
git checkout .
```

## 在 local 新增了些許檔案（還沒有 git add 到暫存），要放棄

單一檔案或資料夾

```shell
rm filename
rm -rf dirname
```

所有檔案

```shell
git clean -xdf
# 已經被 git add 到暫存區的檔案，不會被刪除
```

## 在 local 新增修改了些許檔案，已經 git add，要放棄

單一檔案或資料夾

```shell
git reset HEAD filename
```

所有檔案

```shell
git reset HEAD .
```

## 在 local 已經完成 git add, git commit 後，想放棄這次的 commit

```shell
git reset commit_id
git reset commit_id --hard

 # commit_id 可以透過 git log 查詢
 # --hard 參數的有無在於 commit 被清除後，原本在 local/暫存的程式碼會不會被還原
```



## References

### git clean

```shell
git clean -df # 删除所有 untracked 的修改，已經被 tracked 的修改不會被回覆
git clean 參數
    -n  顯示要刪除的檔案與資料夾
    -f  刪除檔案
    -df 刪除所有檔案與資料夾
```

### git reset

```shell
git reset --hard xxxx # 所有被 tracked 的檔案，回覆到 xxxx, 所有未暫存的修改都不保留
git reset --soft xxxx # 所有被 tracked 的檔案，回覆到 xxxx, 保留未暫存的修改

# git reset 下，untracked 的檔案不會被刪除
```



[git放弃修改&放弃增加文件 - 乐呵乐呵 - CSDN博客](https://blog.csdn.net/ustccw/article/details/79068547)

