# Function

## function 都是物件

javascript 中函式是物件，是 Function 的實例，可以將之傳給另一個變數參考。

```javascript
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

var maximum = max;

console.log(max(10, 20));      // 20
console.log(maximum(10, 20));  // 20
```

將 max 指定給 maximum 時，max 後並沒有加上 () 運算子，這表示要將 max 參考的物件指定給 maximum 參考（`加上括號表示要執行函式`）。

將一個函式指定給變數，就像將一個數字指定給一個變數一樣，這看來如果覺得奇怪的話，或許下這個看來比較不奇怪

```javascript
var max = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

var maximum = max;

console.log(max(10, 20));      // 20
console.log(maximum(10, 20));  // 20
```

對於支持函式可如數值一樣指定給變數的語言，我們稱函式在這個語言中是一等（First-class）函式或一級函式。

## function literal 函式實字

上面你所看到的函式撰寫方式，稱之為函式實字（Function literal），這就像你寫下一個數值實字、物件實字或陣列實字，會產生數值或物件等：

```javascript
var number = 10;        // Number literal
var obj = {x : 10};     // Object literal
var array = [1, 2, 3];  // Array literal
var func = function() { // Function literal
    // do something...
};
```

函式實字會產生 Function 實例，在 JavaScript 中，無論是函式宣告或函式實字，都會產生 Function 實例。事實上，你也可以直接指定建立 Function 實例：

```javascript
var max = new Function('num1', 'num2',
    'return num1 > num2 ? num1 : num2'
);

var maximum = max;

console.log(max(10, 20));      // 20
console.log(maximum(10, 20));  // 20
```

## 匿名函式（Anonymous function）

以函式實字所建立的 Function 實例，在指定給別的變數前，稱為所謂的匿名函式（Anonymous function）。你可以完全不使用名稱來執行函式：

```javascript
(function() {
    console.log('匿名函式...');
})();
```

## 注意 hoisting

```javascript
func();
function func() {
    console.log('func');
}
// =================================================
// 上面的函式可以正常運作，下面則會有錯誤
//
//
func(); // TypeError: undefined is not a function
var func = function() {
    console.log('func');
};
```

直譯器在載入 .js 時，會先處理所有的宣告，包括變數與函式宣告，接著再執行程式。

在第一個範例中，是以函式宣告方式，直譯器已處理完成，因此接下來再執行時，就可以找到 func 所參考的函式。

第二個程式中，僅宣告了 func 變數，直譯器處理完這個宣告後，接下來要執行程式時，範圍中可以看到 func 變數，但此時還沒有指定值給 fu