# DOMContentLoaded and Load 
## DOMContentLoaded “網頁從空白到出現內容”

DOMContentLoaded event fires when parsing of the current page is complete; 

當一個 HTML 文檔被加載和解析完成後(不包含載入外部圖片或資源)，JS（不包括動態插入的JS）執行完之後，才會觸發DOMContentLoaded事件。

DOMContentLoaded事件本身不會等待CSS文件、圖片、iframe加載完成。

The DOMContentLoaded event is firexd when the document has been 
completely loaded and parsed, without waiting for stylesheets, images, 
and subframes to finish loading

Note: Stylesheet loads block script execution, so if you have a `<script>` after a `<link rel="stylesheet" ...>`, the page will not finish parsing – and DOMContentLoaded will not fire – until the stylesheet is loaded.

### 瀏覽器渲染原理
![](https://github.com/CompileYouth/front-end-study/raw/master/html/domcontentloaded/res/dcl-render-tree.png)

JavaScript 可以阻塞 DOM 的生成，也就是說當瀏覽器在解析 HTML 文檔時，如果遇到 `<script>`，便會停下對 HTML 文檔的解析，轉而去處理腳本。如果腳本是內聯的，瀏覽器會先去執行這段內聯的腳本，如果是外鏈的，那麼先會去加載腳本，然後執行。在處理完腳本之後，瀏覽器便繼續解析 HTML 文檔。

看下面的例子：

```html
<body>
  <script type="text/javascript">
    console.log(document.getElementById('ele')); // 會輸出 null
  </script>

  <div id="ele"></div>

  <script type="text/javascript">
    console.log(document.getElementById('ele')); // 會輸出 <div id="ele"></div>
  </script>
</body>
```
另外，因為 JavaScript 可以查詢任意對象的樣式，所以意味著在 CSS 解析完成，也就是 CSSOM 生成之後，JavaScript 才可以被執行。

到這裡，我們可以總結一下。當文檔中沒有腳本時，瀏覽器解析完文檔便能觸發 DOMContentLoaded 事件；如果文檔中包含腳本，則腳本會阻塞文檔的解析，而腳本需要等 CSSOM 構建完成才能執行。在任何情況下，DOMContentLoaded 的觸發不需要等待圖片等其他資源加載完成。

### script 運作方式
![](https://github.com/CompileYouth/front-end-study/blob/master/html/domcontentloaded/res/dcl-legend.png?raw=true)

#### 同步腳本
寫法：`<script src="***.js" charset="utf-8"></script>`

![](https://github.com/CompileYouth/front-end-study/raw/master/html/domcontentloaded/res/dcl-script.png)

當 HTML 文檔被解析時如果遇見（同步）腳本，則停止解析，先去加載腳本，然後執行，執行結束後繼續解析 HTML 文檔。

#### 異步腳本
HTML5 下有兩種異步執行 script 的方式，defer 和 async。
##### 1. defer
寫法：
```html
<script src="xxx.js" charset="utf-8" defer>
    // write sth here
</script>
```
![](https://github.com/CompileYouth/front-end-study/raw/master/html/domcontentloaded/res/dcl-defer.png)

script 腳本最後再執行。



與 DOMContentLoad 關係：

DOMContentLoaded 只有在 defer 腳本執行結束後才會被觸發。HTML 文檔解析不受影響，等 DOM 構建完成之後 defer 腳本執行，但腳本執行之前需要等待 CSSOM 構建完成。在 DOM、CSSOM 構建完畢，defer 腳本執行完成之後，DOMContentLoaded 事件觸發。



##### 2. async
```html
<script src="xxx.js" charset="utf-8" async>
    // write sth here
</script>
```

![](https://github.com/CompileYouth/front-end-study/raw/master/html/domcontentloaded/res/dcl-async.png)

script 腳本載入完就執行，最後再執行剩下的 HTML 文檔。



與 DOMContentLoad 關係：

HTML 解析完畢後，DOMContentLoaded 觸發。而不需要額外等待 async 腳本執行、樣式表加載等。

## Load

先觸發DOMContentLoaded事件，後觸發Load事件

> the load event fires when all files have finished loading from all resources, including ads and images.

當 HTML 文檔解析完成就會觸發 DOMContentLoaded，而所以資源加載完成之後，load 事件才會被觸發。

我們在 jQuery 中經常使用的 `$(document).ready(function() { // ...代碼... });` 其實監聽的就是 DOMContentLoaded 事件，



而 `$(document).load(function() { // ...代碼... });` 監聽的是 load 事件。