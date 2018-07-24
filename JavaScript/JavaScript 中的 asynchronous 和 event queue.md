# JavaScript 的 asynchronous 和 event queue

## synchronous VS asynchronous

synchronous 指的是 one at a time，也就是程式會逐列執行，一次執行一列；

asynchronous 多了一個 a，指的就是more than one at a time，也就是程式在執行的時候會同時執行不只一列的程式碼。

## JavaScript 是 synchronous

基本上 JavaScript 在執行時是 synchronous，逐行執行，如果程式是逐行執行，那為什麼它可以監控瀏覽器的一些事件（event）呢？像是偵測滑鼠的點擊、滑動等等這類的非同步呼叫（asynchronous callback）。

首先我們不能忽略的一點是，JavaScript Engine 只是在瀏覽網頁過程中的其中一個部分，另外還包含許多其它的部分，像是 rendering engine 和 http request，也就是說，整個網頁在執行的過程中可以是非同步（asynchronous）的。

但是單就 JavaScript Engine 來說，它還是同步（synchronous）逐行執行的。

