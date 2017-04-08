---
title: 在 hexo s 下實現頁面自動刷新，Browsersync套件
categories: 前端技術
comments: true
---
最近要開始動工修改我的 hexo blog樣式，當我要測試我的 hexo blog目前是什麼樣子的時候，會使用`hexo s`開啟本地端伺服器來看看它的效果。它雖然可以在同一時間監控程式碼是否有修改，但是我們仍需要到瀏覽器頁面按下F5才能看到修改過後的樣子，這對要需要進行畫面調整的人而言實在是太麻煩了吧...
<!--more-->
所以我希望像使用 Gulp一般實現 LiveReload的效果，經過一番 Google後，找到[Browsersync](https://www.browsersync.io/)可以幫助我們做到這件事。
# 安裝套件
## Browsersync
首先全域安裝Browsersync
```
npm install -g browser-sync
```
測試安裝是否成功
```
browser-sync --version
```
## hexo-browsersync
進到 hexo目錄，安裝 hexo的 plugin
```
npm install hexo-browsersync --save
```
# 使用
## hexo s
基本上像往常一樣地輸入
```
hexo s
```
相對應的頁面監控到修改後就可以正常自動刷新了

## 其他應用
稍微看了一下[Browsersync](https://www.browsersync.io/)，LiveReload似乎只是它最基本的功能而已，它還可以有更進階的用法，像「同時在PC、平板、手機等設備下進項調試」，而且也可以跟Gulp結合，看起來好像真的滿威的，有機會再來玩玩看。

# 參考與資料來源
[Browsersync.cn](http://www.browsersync.cn/#install)
[Browsersync + Gulp](http://www.browsersync.cn/docs/Gulp/)
[Hexo 頁面自動刷新與移動端調試](http://moxfive.xyz/2016/03/27/hexo-browsersync/)
