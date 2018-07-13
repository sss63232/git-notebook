---
title: GitHub中 Watch、Star和 Fork的使用差異
categories:
date: 2016-07-24 11:33:01
tags: github watch star fork
---
GitHub Repo頁面右上角有3個我們可以使用的操作，分別是 Watch、Star和Fork。不過，他們的使用時機與差異在哪裡呢？ 說實在的，我剛開使用Github的時候有好一陣子也不是很清楚，看了不少文章之後才有比較了解他們的差別。
<!--more-->
## Watch

有三種狀態，預設為 Not watching。
![3種狀態](../images/watch_fork_star/watch3type.png)
1. Watching：表示願意收到該 Repo的所有消息，以後只要有 issue或 pull request之類的事件發生，你都會收到通知。此外如果你有在 GitHub設置電子信箱的話，也會同時收到電子郵件通知喔，所以如果動不動就 Watching別人的專案的話，很容易被給滿滿的訊息給淹沒啊...
2. Not watching：只有在被加入成該 Repo的參與者或是被別人用 `@your_id`呼叫的時候才有收到通知。
3. Ignoring：完全不會收到任何通知。

總結一下，3種狀態的通知機率（吵你的機率）就是：  `Watching >>> Not watching > Ignoring`

## Star
簡單來說就是按讚啦！可以是一種對作者的支持，也可以方便自己以後在 GitHub中的 your stars列表中找到自己有興趣的專案。
![your stars](../images/watch_fork_star/your_stars.png)

## Fork
拷貝一份 Repo副本到自己的帳號之下，可以對它有完整的權限，簡單來說就是可以`複製別人的程式碼回自己家隨便玩`。很多人（包括我自己）誤把它當作收藏在使用，結果導致自己的 Repo數量爆棚...其實要收集有感趣的專案，應該用 Star就好了。因為 Fork是複製當下的程式碼狀態，所以如果該專案日後有更新，那我們複製回家的那一份過時程式碼基本上就是廢了，要另外取得更新，那我們一開始就等真的有需要的時候再來 Fork最新版的專案回去就好了啊～

Fork 另外一個主要用途是當你想要對該專案有貢獻的時候，可以 Fork一份回家，修修改改之後提交 pull request。

## 參考與資料來源
[如何正確接收 GitHub的消息郵件](https://github.com/cssmagic/blog/issues/49)
[如何用好 GitHub中的watch star fork](http://www.jianshu.com/p/6c366b53ea41)
