# JavaScript 語言核心（11）this 是什麼？

```javascript
function toString() {
    return '[' + this.name + ',' + this.age + ']';
}

var p1 = {
    name     : 'Justin',
    age      : 35,
    toString : toString
};

var p2 = {
    name     : 'momor',
    age      : 32,
    toString : toString
};

console.log(p1.toString());  // [Justin,35]
console.log(p2.toString());  // [momor,32]
```

在上例中定義了一個 toString 函式，並分別設定為 p1 與 p2 的 toString 來參考，透過 p1 呼叫時，toString 就像是 p1 的方法（Method），透過 p2 呼叫時，toString 就像是 p2 的方法。

在上例中，toString 函式中使用了 this，在呼叫函式時，每個函式都會有個 this，然而 this 參考至哪個物件，其實依呼叫方式而有所不同。以上例而言，透過 p1 呼叫時，toString 中的 this 會參考至 p1 所參考的物件，也因此顯示 p1 物件的 name 與 age 值，透過 p2 呼叫時，toString 中的 this 則會參考至 p2 所參考的物件。

如果呼叫函式時是透過物件與點運算子的方式呼叫，則 this 會參考至點運算子左邊的物件。

## call function

在 JavaScript 中，函式是 Function 的實例，Function 都會有個 call 方法，可以讓你決定 this 的參考對象。舉例來說，你可以如下呼叫：

```javascript
function toString() {
    return '[' + this.name + ',' + this.age + ']';
}

var p1 = {
    name : 'Justin',
    age  : 35,
};

var p2 = {
    name     : 'momor',
    age      : 32,
};

console.log(toString.call(p1));  // [Justin,35]
console.log(toString.call(p2));  // [momor,32]
```

這次並沒有將 toString 指定為物件的特性，而是直接使用 call 方法來呼叫函式， call 方法的第一個參數就是用來指定函式中的 this 所參考的物件。如果函式原本具有參數，則可接續在第一個參數之後。例如：

```javascript
function add(num1, num2) {
    return this.num + num1 + num2;
}

var o = {num : 10};

console.log(add.call(o, 20, 30)); // 60
```

## apply function

Function 也有個 apply 方法，作用與 call 方法相同，也可讓你在第一個參數指定 this 所參考的對象。

不過 apply 方法指定後續引數時，必須將引數收集為一個陣列，如果你有一組引數，必須在多次呼叫時共用，就可以使用 apply 方法。例如：

```javascript
function add(num1, num2) {
    return this.num + num1 + num2;
}

var o1 = {num : 10};
var o2 = {num : 100};
var args = [20, 30];

console.log(add.apply(o1, args)); // 60
console.log(add.apply(o2, args)); // 150
```

## this 是以呼叫方式而定

```javascript
function toString() {
    return this.name;
}

var p1 = {
    name     : 'Justin',
    toString : toString
};

var p2 = {
    name     : 'momor',
    toString : toString
};

console.log(p1.toString());        // Justin
console.log(p2.toString());        // momor
console.log(p1.toString.call(p2)); // momor
```

## 無法確定 this 是誰的時候

如果呼叫函式時，無法透過 . 運算、call、apply 等方法確定 this 的對象，如果`不是嚴格模式`，那麼 this 會直接轉為參考全域物件（Global object）。`嚴格模式`下，this 無法確認對象下，就會是 undefined。
ㄌ