# Ubuntu oh-my-zsh 安裝

## Ubuntu 預設的 bash

Ubuntu 預設 terminal 為 `/bin/bash`，
是已經比 window 上的終端機好用不少，
但整體而言在使用方便性、擴充性與外觀上還是遜色於 `zsh` 不少

## oh-my-zsh

基本上好像很少看到有人在使用單純的 `zsh` ，
似乎是設定非常複雜的關係，
於是我也安裝目前主流框架： `oh-my-zsh`

### 安裝 zsh

```shell
sudo apt install zsh

# 確認 zsh 是否存在
zsh --version

# zsh 設為預設 shell
chsh -s /bin/zsh

# 檢查目前的 shell 是誰，
echo $SHELL

# 如果出現的不是 /user/bin/zsh，改用
sudo vim /etc/passwd

# 把第一行跟最後一行後面改為 zsh 
# 改完大概會像這樣
root:x:0:0:root:/root:/bin/zsh
...
...中略
...
username:x:1000:1000:newtchen,,,:/home/username:/bin/zsh
```

有時候可能需要重新開機，
才可以看到預設 shell 改變為 zsh

### 安裝 oh-my-zsh

```shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### 更改 oh-my-zsh 主題

```shell
vim ~/.zshrc

# 找到 ZSH_THEME= 開頭那一行，改成
ZSH_THEME="agnoster"

# 或是安裝 https://github.com/caiogondim/bullet-train.zsh
```

### 安裝o h-my-zsh 主題所需字體

```shell
sudo apt-get install fonts-powerline
```

## zsh plugin

最後在安裝一些可以增加工作效率的 zsh 工具

```shell
sudo apt install autojump

sudo apt install fasd

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### 修改 .zshrc

要啟用的 zsh plugins 要在寫在設定檔中才能發會作用

```shell
vim ~/.zshrc

# 找到 plugins=() 區塊，改成
plugins=(
  git extract autojump zsh-autosuggestions zsh-syntax-highlighting
)

# 啟用設定
source ~/.zshrc
```

## References

https://www.jianshu.com/p/2c9cc1eb2548

https://www.jianshu.com/p/ba090b3a7035

https://github.com/zsh-users/zsh-syntax-highlighting

https://juejin.im/post/5b216263f265da6e44326959

https://github.com/zsh-users/zsh-autosuggestions