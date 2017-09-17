# getComputedStyle  取得元素樣式的族譜

## jQuery.css()

jQuery 的CSS()方法，其底層運作就應用了 getComputedStyle 以及 getPropertyValue 方法。

## getComputedStyle

`getComputedStyle`是一個可以獲取當前元素所有最終使用的 CSS 屬性值。返回的是一個 CSS 樣式聲明對象 ([object CSSStyleDeclaration])，只讀。

> getComputedStyle() gives the final used values of all the CSS properties of an element.

```javascript=
var style = window.getComputedStyle("元素", "偽類");

var dom = document.getElementById("test"),
    style = window.getComputedStyle(dom , ":after");
```
![](https://i.imgur.com/MKe27T7.png)

## 取得特定屬性

getComputedStyle 返回的是樣式聲明對象, 包含了元素所有的樣式值。

如何獲取到想要的屬性值呢? 有兩種方法:

```javascript=
// 1. window.getPropertyValue()
window.getComputedStyle(element, null).getPropertyValue('屬性名');
//// 需要注意: 不支持駝峰命名, 屬性名按照 css 的寫法, 如background-color:
window.getComputedStyle(element, null).getPropertyValue('background-color');

// 2. 鍵值訪問
// 
window.getComputedStyle(element, null).float //錯誤!

// 錯誤原因是 float 是 js 的一個保留字, 不能直接使用。
// IE 下對應的是styleFloat,
// Firefox, Chorme, Safari 下是 cssFloat. 
// 相較而言更建議使用 getPropertyValue 來獲取具體屬性值.
```


## getComputedStyle 與 HTMLElement.style

使用`HTMLElement.style`也可以獲取元素的 CSS 樣式聲明對象，但是其與`getComputedStyle`方法還有有一些差異的。

### HTMLElement.style

HTMLElement 指的就是用 document.getElementById 或 getElementsByTagName 取得的 HTML 元件。

### 兩者的區別

1. 只讀與可寫
    正如上面提到的 `getComputedStyle` 方法是只讀的，只能獲取樣式，不能設置；而 `element.style` 能讀能寫，能屈能伸。
1. 獲取的對象範圍
    `getComputedStyle`方法獲取的是最終應用在元素上的所有 CSS 屬性對象（即使沒有 CSS 代碼，也會把默認的祖宗八代都顯示出來）；
    而`element.style`只能獲取元素style屬性中的 CSS 樣式。因此對於一個光禿禿的元素`<p>`，getComputedStyle方法返回對象中length屬性值（如果有）就是190+(據我測試 FF:192, IE9:195, Chrome:253, 不同環境結果可能有差異), 而element.style就是0
    
## IE 上的使用

IE 上有自己的方法，如 currentStyle, getPropertyValue, getAttribute...之類的。

## getComputedStyle 最大優勢：獲取偽類元素樣式

有了 jQuery 等優秀庫，我們有熟悉底層的getComputedStyle方法的必要嗎？

實際上，本文一直沒有深入展開getComputedStyle方法一個很重要的，類似css()方法沒有的功能——獲取偽類元素樣式。但從這一點上將，熟悉getComputedStyle方法有必要。

```htmlmixed=
<style>
 h3::after {
   content: 'rocks!';
 }
</style>
<h3>generated content</h3>
<script>
  var h3       = document.querySelector('h3'),
      result   = getComputedStyle(h3, ':after').content;
  console.log(result); // returns 'rocks!'
</script>
```
    
## 資料來源與參考

https://juejin.im/entry/5884f1a2128fe10065e436a8

https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/style

https://xdlrt.github.io/2017/01/30/2017-01-30/