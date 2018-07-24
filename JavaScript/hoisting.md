# Hoisting in JavaScript

> Hoisting is JavaScript's default behavior of moving declarations to the top.

## 範例
```javascript
b():
console.log(a);

var a = "hello world";

function b(){
    console.log("called b);
}
```

輸出結果：

![](https://3.bp.blogspot.com/-OqqWkc2Cr6k/Vme9mUNsf9I/AAAAAAAAc7o/24nU5E0U1xo/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_120915_013632_PM.jpg)

hoisting 在JavaScript中，它會把定義的變項移到最前面先執行。

結果當中並沒有出現任何的錯誤！因為它其實在程式一開始執行的時候，就已經把var a 和function b(){....}這些宣告(declare)的變項都存在記憶體中了，但是還沒把值指定進去a這個變項當中，這使得 a 得到了 undefined的結果（註： undefined 在 JavaScript 並不是真正的 undefined，它其實也是一個值(value)，而且是一個特殊值）。

## 「宣告」與「給值」是分開的

在我們定義變項的過程中，可以分成宣告(declaration)和給值(initialization)的兩個過程，只有declaration的內容會在逐行執行程式前先被執行並儲存在記憶體中(hoisted)；給值的內容則是在hoisted後，逐行執行程式時，才會被執行到。

> JavaScript Declarations are Hoisted  
> JavaScript Initializations are Not Hoisted

