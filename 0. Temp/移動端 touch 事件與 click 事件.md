# 移動端 touch 事件與 click 事件

## touch event

1. touchstart  // 手指放上螢幕時觸發
1. touchmove   // 手指在螢幕上滑動時觸發
1. touchend    // 手指離開螢幕時觸發
1. touchcancel // 系統取消 touch 事件時觸發

## 移動端 touch 事件過程

在移動裝置中，手指點擊一個元素的流程:

> touchstart -> touchmove -> touchend ==> click

## 移動端 touch 與 click 的觸發時機

### touchstart

很單純。

在這個 dom（或冒泡到這個 dom，這當然是廢話）上手指觸摸開始即能觸發。

### click

複雜一點，而且不同瀏覽器會有差異。

在這個 dom（或冒泡到這個 dom，這當然是廢話）上手指觸摸開始，  
且手指未曾在屏幕上移動（某些瀏覽器允許移動一個非常小的位移值），  
且在這個在這個 dom 上手指離開屏幕，  
且觸摸和離開屏幕之間的間隔時間較短（某些瀏覽器不檢測間隔時間，也會觸發 click）