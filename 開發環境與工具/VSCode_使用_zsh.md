# VSCode 使用 zsh

## 安裝 powerline 字型

```shell
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts
```



## VSCode User Setting

打開 VSCode 的 User Setting，
在裡面加入

```bash
    "terminal.integrated.shell.linux": "/bin/zsh",
    "terminal.integrated.fontFamily": "Source Code Pro for Powerline",
```

