# Ubuntu 改大量檔案名稱 rename, find

# rename 指令

```shell
# 基本用法
rename  s / 檔名的原始字串 / 新的檔案字串 /  要變更的檔案類型
```

### 更改當前目錄副檔名

```shell
# 當前目錄 .html 改成 .txt
rename -v s/\.html$/\.txt/ *html
```

### 改檔案名稱特定字串

```shell
# xyz_sth.html 改成 aaa_sth.html
rename -v s/xyz/aaa/ *
```

### 常用參數

```shell
-v 把 rename 有動到的檔案都列出來
-n 預覽執行結果
```

## find 指令

改目錄下包含子目錄中的所有檔案副檔名

```shell
# 目錄下所有 .es6 改成 .js
find . -name "*.es6" -exec rename -v 's/\.es6$/\.js/i' {} \;
```

## for windows

```shell
FOR /R "C:\Users\newtchen.JUMBO\Documents\work\jinbao_html_game\src" %f IN (*.es6) DO REN "%f" *.js
```

## References

https://www.arthurtoday.com/2015/01/how-to-bulk-rename-files-inubuntu.html

https://superuser.com/questions/213134/recursively-rename-files-change-extension-in-linux