# Event Loop

## 進程與線程

### 進程 Process

- 系統中正在運行的一個應用程序；程序一旦運行就是進程；
- 進程是線程的容器，可以想像成是一座 `工廠`
- 進程——資源分配的最小單位

### 線程 Thread

- 進程中獨立執行的一個單元執行流，可以想像成是一個 `工人`
- 線程——程序執行的最小單位。

## 瀏覽器內核

瀏覽器是多線程，通常包含：

- GUI 渲染線程
- JavaScript 執行線程
- 定時器線程
- 事件觸發線程
- HTTP 請求線程
- ...

### 瀏覽器中的 Event Loop

#### 宏任務與微任務

##### 宏任務 macro-task

- setTimeout, setInterval
- script (整體程式碼)
- I/O, UI 渲染...

##### 微任務 micro-task

- Promise().then()
- MutationObserver

## Conclusion

瀏覽器和Node 環境下，microtask 任務隊列的執行時機不同

- Node端，microtask 在事件循環的各個階段之間執行
- 瀏覽器端，microtask 在事件循環的 macrotask 執行完之後執行

## References

\* [✨♻️ JavaScript Visualized: Event Loop - DEV Community 👩‍💻👨‍💻](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif) 

