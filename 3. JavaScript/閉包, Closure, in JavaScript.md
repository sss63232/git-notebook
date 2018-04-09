# 閉包, Closure, in JavaScript

## 簡單說明

> 運作原理：就是呼叫 Function 內的 Function

閉包是一個屬於函數特殊的執行環境 (scope; context)，這「封閉」的環境中保存 (record) 了讓函數可以持續 (甚至在 function 被 return 後) 存取的獨立自由變數 (free variable)。

換句話說，closure 是讓函數能「記得」被建立時的環境的一種機制。

## 作用域說明

JavaScrip 的變量作用域有兩個：**全局變量**與**局部變量**

作用域說明 example:

```javascript
var globalScope="global scope"; 
function f{ 
    var localScope="local scope"; 
    console.log(globalScope); // global scope 
}
console.log(localScope); // undefined
```

## 閉包的概念 

### 建立一個最初級的閉包
> 從一個 function return 另一個 nested function 就可以建立一個 closure 環境。

例如：
```javascript 

function makeFunc() {
    // 一個局部變數
    var name = 'Newt';
    // 返回一個內部函數，並創建一個 closure
    function displayName() {
        // 內部函數可以存取外部函數的變數
        console.log(name);
    }    
    return displayName;
}

var callMyName = makeFunc();
callMyName(); // Newt
```
makeFunc() 執行時返回一個 function，同時自動創建了一個 closure 環境。closure 像是一個特殊的物件 (指定給了 myFunc)，closure 中包含一個函數 (displayName)，以及函數 (makeFunc) 執行當時的環境，讓你在函數返回後還是可以持續存取 closure 保存的環境 (像是能存取 name 變數，name 變數不會因為函數返回後而被刪除)。

而每一個 closure 中保存的都是一個獨立的環境。

### 通常是 return 匿名函式

```javascript
function f{
    var localScope="local scope";
    return function{
        console.log(localScope);
    }
}

f()(); // local scope
```

我們在函數 f 外訪問到了局部變量 localScope，這裡在函數 f 內定義的匿名函數就是一個閉包！

這裡兩個圓括號是什麼意思呢？我們可以簡單理解成執行兩次f，執行一次得到`function{console.log(localScope);}`，再執行一次相當於執行這個匿名函數。

### 持續改變區域變量 localScope

```javascript
// 使用閉包產生兩個作用域
// 這裡的 money 代表身上帶的錢
function buyItem(money) {
  var myMoney = money;
  return function (price) {
    // myMoney 第一次由外部傳入，接下來在這個 function 內不斷更新
    myMoney = myMoney - price;
    return myMoney;
  }
}
let MingCost = buyItem(1000); // 存取內部函式的變數，這個是小明錢包內的錢
let JayCost = buyItem(10000); // 傑哥拿出的小錢

// 小明的內層作用域變數，也就是小明剩的錢
console.log(MingCost(100)); // 900
console.log(MingCost(100)); // 800
console.log(MingCost(100)); // 700

// 傑哥的內層作用域變數，這裡是傑哥剩的錢
console.log(JayCost(1000)); // 9000
console.log(JayCost(1000)); // 8000
console.log(JayCost(1000)); // 7000
```




## 資料來源與參考
[JavaScript Function Closure (閉包)](http://www.fooish.com/javascript/function-closure.html)

[閉包(Closure)的基本概念]x(http://www.victsao.com/blog/81-javascript/301-javascript-function-closure)

https://ithelp.ithome.com.tw/articles/10191515






