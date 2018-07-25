# Git 放棄修改

## git clean

```shell
git clean -df # 删除所有 untracked 的修改，已經被 tracked 的修改不會被回覆
git clean 參數
    -n  顯示要刪除的檔案與資料夾
    -f  刪除檔案
    -df 刪除所有檔案與資料夾
```

## git reset

```shell
git reset --hard xxxx # 所有被 tracked 的檔案，回覆到 xxxx, 所有未暫存的修改都不保留
git reset --soft xxxx # 所有被 tracked 的檔案，回覆到 xxxx, 保留未暫存的修改

# git reset 下，untracked 的檔案不會被刪除
```

