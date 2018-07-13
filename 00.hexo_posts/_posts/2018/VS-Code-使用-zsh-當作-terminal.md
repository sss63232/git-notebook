---
title: VS Code 使用 zsh 當作 terminal
date: 2018-07-13 16:17:08
categories:
tags:
- zsh
- VS Code
---

# VS Code with zsh

## install zsh

可以看我的上一篇文章

## install Powerline font

```shell
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts
```

## User Settings in VS Code

開啟 VS Code 的 user settings，
修改內容，
加入下面兩項

```javascript
{
    // other settings...
    "terminal.integrated.fontFamily": "Source Code Pro for Powerline",
    "terminal.integrated.fontSize": 14 // decided by yourself
}
```

## References

https://www.jazz321254.com/visual-studio-code-zsh/

https://medium.com/@wifferlin0505/%E5%9C%A8-visual-studio-code-terminal-%E4%B8%AD%E4%BD%BF%E7%94%A8-oh-my-zsh-799cb106df75
