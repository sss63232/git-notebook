---
title: 更換hexo主題
date: 2015-05-17 22:34:47
tags:
---
github上有許多強者大神提供自己設計的hexo theme在上面，我們隨時可以把他套用在自己hexo上面。
<!--more-->
1. 把主題相關資源clone到hexo下themes資料夾中
	```
	cd hexo/themes
	git clone xxx@gitxxxx
	```
2. 修改_config.yml
	打開config後，修改theme: xxx，把冒號後面改成剛剛clone下來的資料夾名稱。
3. 重新generate
	重新執行
	```
	hexo g
	hexo d
	```