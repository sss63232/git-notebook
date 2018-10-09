## git的撤銷操作_取消修改

### untracked狀態，撤銷新增的文件

```shell

# untracked狀態，撤銷新增的文件
rm filename
rm -rf dirName
git clean -f 

# untracked狀態，撤銷所有新增的文件和文件夾，已經被 git add 到暫存區的檔案，不會被刪除
git clean -xdf 
```

### 已修改，但未暫存

```shell
# 列出所有的修改
git diff

# 列出某(幾)個文件的修改
git diff xx/xx.py xx/xx2.py 
```

```shell
# 撤銷當前文件夾下所有的修改
git checkout . 

# 撤銷某幾個文件的修改
git checkout xx/xx.py xx/xx2.py 
```

### 已暫存，未提交

> 這個時候已經執行過 git add，但未執行git commit，用git diff已經看不到任何修改。

> 因為git diff檢查的是工作區與暫存區之間的差異。

```shell
# 這個命令顯示暫存區和「當前分支的最新版」的差異
git diff --cached 
```

```shell
# 暫存區的檔案修改恢復到工作區
git reset HEAD filename

# 暫存區的所有修改恢復到工作區
git reset 
git reset HEAD .

# 與git reset等價，回到已修改狀態，修改的內容仍然在工作區中
git reset --soft 

# 回到未修改狀態，清空暫存區和工作區
git reset --hard 

# 所有被 tracked 的檔案，回覆到 xxxx, 所有未暫存的修改都不保留
git reset --hard xxxx 

# 所有被 tracked 的檔案，回覆到 xxxx, 保留未暫存的修改
git reset --soft xxxx 
```

> git reset --hard 操作等價於 git reset 和 git checkout 2步操作

### 已提交，未推送

> 執行完commit之後，會在倉庫中生成一個版本號(hash值)，標誌這次提交。之後任何時候，都可以借助這個hash值回退到這次提交。

```shell
# 比較2個分支之間的差異
git diff <branch-name1> <branch-name2> 

# 查看本地倉庫與本地遠程倉庫的差異
git diff master origin/master 
```

```shell
# 回退與本地遠程倉庫一致
git reset --hard origin/master 

# 回退到本地倉庫上一個版本
git reset --hard HEAD^ 

# 回退到任意版本，commit_id 可以透過 git log 查詢
git reset --hard <hash code>
git reset commit_id --hard

# 回退且回到已修改狀態，修改仍保留在工作區中
git reset --soft/git reset 

```

### 已推送到遠程

```shell
# 強制覆蓋遠程分支
git push -f orgin master 

# 如果之前已經用 -u 關聯過，則可省略分支名
git push -f 

```

> **慎用**，一般情況下，本地分支比遠程要新，所以可以直接推送到遠程，但有時推送到遠程後發現有問題，進行了版本回退，舊版本或者分叉版本推送到遠程，需要添加 -f參數，表示強制覆蓋。

## 總結

- 首先，先用git status查看下當前狀態。
- git reset可以作用於本地倉庫，用於回退/前進到任意版本，也可以作用於暫存區，用於撤銷暫存區修改。有hard和soft2個參數。soft參數可以省略，soft參數表示撤銷的修改仍放在工作區中。
- git checkout用於撤銷刪除和修改，git clean -df用於撤銷新增。
- git diff可以查看工作區、暫存區、倉庫之間的修改和差異，參數不同。

## 資料來源

http://imtuzi.com/post/git-four-areas-five-states.html

[git放弃修改&放弃增加文件 - 乐呵乐呵 - CSDN博客](https://blog.csdn.net/ustccw/article/details/79068547)

[30 天精通 Git 版本控管 (09)：比對檔案與版本差異 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10135441)