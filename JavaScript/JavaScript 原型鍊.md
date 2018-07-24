# JavaScript 原型鍊

## JavaScripy 中的 class

要理解原型鍊，可以先從這兩篇切入：

1. [Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
2. [从设计初衷解释 JavaScript 原型链](http://www.jasonsi.com/2017/03/15/36/)



```javascript
// constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
var nick = new Person('nick', 18);
var peter = new Person('peter', 18);

// Person就是一個構造函數，可以用new這個關鍵字 new 出一個 instance 來。
```



### class 的問題點

name 跟 age 這兩個屬性，很明顯是每一個 instance 都會不一樣的。可是 log 這個 method，其實是每一個 instance 彼此之間可以共享的，因為都在做同一件事情。

在現在這種情況下，雖然 nick 的 log 這個 function 跟 peter 的 log 這個 function 是在做同一件事，但其實還是佔用了兩份空間，意思就是他們其實是兩個不同的 function。

```javascript
console.log(nick.log === peter.log) // false
```



### 利用 object.prototype

那怎麼辦呢？我們可以把這個 function 抽出來，變成所有 Person 都可以共享的方法。講到這邊，你應該有聽過一個東西叫做`prototype`。只要把 log 這個 function 指定在 `Person.prototype` 上面，所有 `Person` 的 instance 都可以共享這個方法。



```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}
  
var nick = new Person('nick', 18);
var peter = new Person('peter', 20);
  
console.log(nick.log === peter.log) // true
  
// 功能依舊跟之前一樣
nick.log(); // nick, age:18
peter.log(); // peter, age:20
```



### 結論

你有一個叫做`Person`的函數，就可以把`Person`當作 constructor，利用`var obj = new Person()`來 new 出一個`Person`的 instance，並且可以在`Person.prototype`上面加上你想讓所有 instance 共享的屬性或是方法。



## prototype 深入理解

以上面`var nick = new Person('nick', 18);`的例子來說，當我在呼叫`nick.log()`的時候，JavaScript 是怎麼找到這個 function 的？

因為 nick 這個 instance 本身並沒有 log 這個 function。但根據 JavaScript 的機制，nick 是 Person 的 instance，所以如果在 nick 本身找不到，它會試著從`Person.prototype`去找。

JavaScript 怎麼知道要到這邊去找？所以一定是 nick 跟`Person.prototype`會透過某種方式連接起來，才知道說要往哪邊去找 log 這個 function。

而這個連接的方式，就是`__proto__`。
（附註：其實比較好的方式是用`Object.getPrototypeOf()`，但這邊為了方便起見，還是使用比較常見的`__proto__`，更詳細的說明可參考：[MDN: Object.prototype.**proto**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)）

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}
  
var nick = new Person('nick', 18);
  
console.log(nick.__proto__ === Person.prototype) // true
```

那假如`Person.prototype`還是沒有呢？那就繼續依照這個規則，去看`Person.prototype.__proto__`裡面有沒有 log 這個 method，就這樣一直不斷找下去。找到時候時候為止？找到某個東西的`__proto__`是 null 為止。意思就是這邊是最上層了。

而上面這一條透過`__proto__`不斷串起來的鍊，就叫做原型鍊。透過這一條原型鍊，就可以達成類似繼承的功能，可以呼叫自己 parent 的 method。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}
  
var nick = new Person('nick', 18);
  
// 這個剛講過了，nick.__proto__ 會指向 Person.prototype
console.log(nick.__proto__ === Person.prototype) // true
  
// 那 Person.prototype.__proto__ 會指向誰呢？會指向 Object.prototype
console.log(Person.prototype.__proto__ === Object.prototype) // true
  
// 那 Object.prototype.__proto__ 又會指向誰呢？會指向 null，這就是原型鍊的頂端了
console.log(Object.prototype.__proto__) // null
```

### `hasOwnProperty()`

如果想知道一個屬性是存在 instance 身上，還是存在於它屬於的原型鍊當中，可以用`hasOwnProperty`這個方法：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}
  
var nick = new Person('nick', 18);
console.log(nick.hasOwnProperty('log')); // false
console.log(nick.__proto__.hasOwnProperty('log')); // true
```

## Function.prototype

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}
  
var nick = new Person('nick', 18);
  
console.log(Person.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__); //null
```

因為`Person`其實就是個 Function 的 instance，所以`Person.__proto__`當然就是`Function.prototype`囉！

## instanceof

`A instanceof B` 就是拿來判斷 A 是不是 B 的 instance，舉例來說：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}
  
var nick = new Person('nick', 18);
  
console.log(nick instanceof Person); // true
console.log(nick instanceof Object); // true
console.log(nick instanceof Array); // false
```

## constructor

順帶一提，每一個 prototype 都會有一個叫做`constructor`的屬性，例如說`Person.prototype.constructor`，而這個屬性就會指向構造函數。`Person.prototype`的構造函數是什麼？當然就是`Person`囉。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}
  
var nick = new Person('nick', 18);
  
// 這段是要讓大家知道，這邊其實是往原型鍊的上面去找
console.log(nick.constructor === Person); // true
console.log(nick.hasOwnProperty('constructor')); // false
  
// Person 的 constructor 就是 Person
console.log(Person.prototype.constructor === Person); // true
console.log(Person.prototype.hasOwnProperty('constructor')); // true
```

所以其實`constructor`也沒什麼好講的，`A.prototype.constructor === A`，你把 A 用 `Function`, `Person`, `Object` 之類的值帶進去都成立。

## 資料來源

[該來理解 JavaScript 的原型鍊了](http://blog.techbridge.cc/2017/04/22/javascript-prototype/)

