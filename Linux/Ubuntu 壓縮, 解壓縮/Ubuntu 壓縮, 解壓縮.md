# Ubuntu 壓縮, 解壓縮

## zip

```shell
zip -r filename.zip folder
zip -r filename.zip folder1 folder2
zip -r filename.zip /path/to/folder1 /path/to/file2
```

## others

```shell
# tar
tar cvf <檔案名稱> < 目錄 >  
tar xvf <檔案名稱>

# gzip
(apt-get install gzip)
gzip <檔案名稱>  
gzip -d <檔案名稱>  
```

## References

https://www.cyberciti.biz/faq/how-to-zip-a-folder-in-ubuntu-linux/