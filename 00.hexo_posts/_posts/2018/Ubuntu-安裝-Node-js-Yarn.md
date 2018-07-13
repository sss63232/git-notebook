---
title: 'Ubuntu 安裝 Node.js, Yarn'
date: 2018-07-12 15:46:30
categories: Linux
tags:
- Ubuntu
- Node.js
- Yarn
---

## install Node.js

```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## install Yarn

```shell
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```

### remove cmdtest

如果安裝不成功，
而且 error 中有出現關鍵字 `cmdtest` 的話，
引述自官網：
{% asset_img '1531382493729.png' %}
<!-- ![1531382493729](/home/newtchen/Documents/MyWorks/hexo_blog_source/source/_posts/2018/0712---Ubuntu-安裝-Node-js-Yarn/1531382493729.png) -->

```shell
sudo apt remove cmdtest
```

之後再重新安裝 Yarn 一次

## References

https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

https://yarnpkg.com/en/docs/install#debian-stable

