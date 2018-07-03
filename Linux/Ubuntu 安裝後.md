# Ubuntu 安裝後

## 預設編輯器 nano 改成 vim

```shell
sudo update-alternatives --config editor

# 打完指令會出現類似下面


===========================
          1    /bin/ed
*+        2    /bin/nano
          3    /usr/bin/nvi
          4    /usr/bin/mcedit-debian
          5    /usr/bin/vim.basic
          
# 輸入數字          
```

## sudo 免密碼

```shell
sudo visudo

# 會出現一個文件，將其中的一行：
%sudo ALL=(ALL:ALL) ALL
# 改為
%sudo ALL=(ALL:ALL) NOPASSWD: ALL
```

