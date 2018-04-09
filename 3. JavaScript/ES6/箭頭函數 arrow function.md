# 箭頭函數 arrow function



## 沒有 arguments 參數

```javascript
let originCash = 1000;
const updateEasyCard = () => {
  let cash = 0;
  console.log(arguments); // arguments is not defined
}

updateEasyCard(10, 50, 100, 50, 5, 1, 1, 1, 500);
```

當需要使用 `arguments`時 請使用傳統`function`。



## this 的不同

- 傳統函式：
  - 依呼叫的方法而定
  - 物件呼叫傳統函式方法時，方法內的 this 會是該物件
- 箭頭函式：
  - 想像 this 為一個在 localScope 沒有定義的變數，所以要向外 lexical context 尋找
  - 物件呼叫箭頭函式方法時，方法內的 this 會是 window 或全域物件

```javascript
var name = '全域阿婆'
var auntie = {
  name: '漂亮阿姨',
  callName: function () { 
    // 注意，這裡是 function，以此為基準產生一個作用域
    console.log('1', this.name); // 1 漂亮阿姨
    setTimeout(() => {
      console.log('2', this.name); // 2 漂亮阿姨
      console.log('3', this); // 3 auntie 這個物件
    }, 10);
  },
  callName2: () => { 
    // 注意，如果使用箭頭函式，this 依然指向 window
    console.log('4', this.name); // 4 全域阿婆
    setTimeout(() => {
      console.log('5', this.name); // 5 全域阿婆
      console.log('6', this); // 6 window 物件
    }, 10);
  }
}

```



## 物件內的縮寫函式屬於傳統 function 

```javascript
var auntie = {
  name: '漂亮阿姨',
  callName () { 
    setTimeout(() => {
      console.log(this); // auntie 這個物件
    }, 10);
  }
}
auntie.callName();
```



## 不適合使用 arrow function 的情況

因為 this 在 arrow functin 中會被綁定，所以在一些需要動態改變 this 的狀況中，不適合使用。

### apply, call, bind

```javascript
let family = {
  ming: '小明'
}
const func = () => {
  console.log(this);
}
const func2 = function () {
  console.log(this);
}
func.call(family); // Window ， 無法改變 func 作用域中的 this
func2.call(family); // {ming: "小明"}
```

### 建構式

```javascript
const PhoneTemplate = (brand, modal, withCamera) => {
  this.brand = brand;
  this.modal = modal;
  // ...
}

const sonyPhone = new PhoneTemplate('Sony', 'Z100', true);
// 錯誤：PhoneTemplate is not a constructor
```

### DOM 事件監聽

```javascript
var elements = document.getElementsByTagName('div');
var changeDOM = () => {
  console.log(this);                   // 指向 window Object
  this.style.border = '1px solid red'. // 錯誤
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeDOM, false);
}
```

### Prototype 中會用到 this 的函式

```javascript
function PhoneTemplate (brand, modal, withCamera) {
  this.brand = brand;
  this.modal = modal;
  // ...
}

PhoneTemplate.prototype.callSomeone = function (someone) {
  console.log(this.brand + ' 打通電話給 ' + someone)
}
PhoneTemplate.prototype.callSomeone2 = (someone) => {
  console.log(this.brand + ' 打通電話給 ' + someone)
}

const sonyPhone = new PhoneTemplate('Sony', 'Z100', true);
sonyPhone.callSomeone('小明'); // Sony 打通電話給 小明
sonyPhone.callSomeone2('傑哥'); // undefined 打通電話給 傑哥
```



## 參考資料

https://ithelp.ithome.com.tw/articles/10192732