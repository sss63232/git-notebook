# Scope Chain

## 概述

javascript 可沿著 Scope chain 來查找變數，也就是看看函式自身的 context 物件上是否有該特性，如果沒有就往外頭的 context 物件看看有沒有該特性。

## Lexical Scope

這代表著 JavaScript 原始碼的物理位置（Physical placement）。例如：

```javascript
var x = 10;
function outer() {
    var y = 20;
    function inner() {
        var z = 30;
    }
}
func();
```

在結構上，函式 inner 在原始碼中的位置是被 outer 包裹，而 outer 則是被 Global context 包裹，這樣的結構在原始碼寫下後就不變了，是屬於靜態的結構部份。

每段 JavaScript 程式碼都會執行在一個 Execution context 中，對應 Lexical Scope 就是 Execution context。

上例中，x 變數定義是在 Global execution context 中，而每個函式在呼叫時都會建立新的 Function execution context，有個物件用來代表 Execution context，而區域變數則是 context 物件上的特性。

在 Rhino 直譯器中，可以使用函式上「非標準」的 `__parent__` ，取得 Lexical Scope 建立時，該函式外部函式的 context 物件。

以上例來說，outer.`__parent__` 是包裹 outer 函式的 Global execution context，對頂層函式而言也就是全域物件，而 inner.`__parent__` 可取得 outer 的 Function execution context，如果要取得包裹著 outer 的 context 物件，則可以使用 inner.`__parent__.__parent__`，此時取得的就是 Global execution context，也就是全域物件。

當你試圖在 inner 中使用某變數，它會看看 inner 的 context 物件上是否有該特性，如果有就使用，沒有就查找 inner.__parent__，也就是外部函式 outer 的 context 物件上是否有該特性，若沒有就繼續查找 inner.__parent__.__parent__ …

## 參考來源

http://www.codedata.com.tw/javascript/essential-javascript-13-scope-chain/