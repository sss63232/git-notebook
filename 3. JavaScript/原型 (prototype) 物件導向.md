# 原型 (prototype) 物件導向

JavaScript 本身就是原型為基礎的物件導向設計，至 ES6 標準制定後仍沒變動過。在物件的章節中所介紹的類別定義方式，只是原型物件導向語法的語法糖，骨子裡還是原型，並不是真正的以類型為基礎的物件導向設計。

## prototype

所有 JavaScript 中的函式都有一個內建的`prototype`屬性，指向一個特殊的 prototype 物件。

prototype 物件中也有一個`contructor`屬性，指向原來的函式。

以下的程式碼可以看出這個關係:

```javascript
function Player() { }

console.log(Player)
console.log(Player.prototype)
console.log(Player.prototype.constructor)
console.log(Player.prototype.constructor === Player) //true
```

為了更容易理解，以下是一個簡單的關係圖:

![Prototype Image 01](https://raw.githubusercontent.com/eyesofkids/javascript-entry-level-es6/master/assets/prototype_1.png)

### 物件都有的內部屬性`__prototype__`

`__proto__`是每一個 JavaScript 中**物件**都有的內部屬性，代表該物件繼承而來的源頭，也就是指向該物件繼承而來的源頭的原型 (prototype)，它會用來連接出**原型鏈**，或可以理解為原型的繼承結構。

以上面的範例程式碼為例，對於一個函式而言，它本身也是一個物件，它的原型就是最上層的`Function.prototype`，你可以說這是所有函式的發源地。所以`Player`函式本身的`__proto__`指向`Function Prototype`，這應該可以很容易理解。

那麼，`Player.prototype`的`__proto__`指向哪裡？`Player.prototype`本身也是個物件，它指向的就是所有 JavaScript 中最上層的物件起源，也就是`Object.prototype`。由此也可推知，`Function.prototype`也同樣指向`Object.prototype`。以下面的程式就可以看到這個結果:

```
function Player() { }

console.log(Player.__proto__)
console.log(Player.prototype.__proto__)

//最上層的Object.prototype的__proto__是null值，它是一個特例
console.log(Object.prototype.__proto__)  //null

console.log(Player.__proto__ === Function.prototype)  //true
console.log(Player.prototype.__proto__ === Object.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true

```

為了更容易理解，以下是一個簡單的關係圖，在圖片中綠色的虛線即是`__proto__`的指向，原本的`prototype`為紅色的實線:

![Prototype Image 02](https://raw.githubusercontent.com/eyesofkids/javascript-entry-level-es6/master/assets/prototype_2.png)

> 註: `__proto__`注意是前後各有兩條下底線 (_)，不是只有一條而已。
>
> 註: `__proto__`在一些舊的瀏覽器品牌 (例如 IE) 中不能使用。雖然在 ES6 中已經正式納入標準之中，它是個危險的內部屬性，也不要用在真正的應用程式上。

### 用函式 new 新物件的 `__proto__`指向

```javascript
function Play(name){
  this.name = name;
}

const newPlyaer = new Player('andy')
```

此時在`newPlayer`物件中的`prototype`與`__proto__`又是如何？

由於`newPlayer`是一個物件，並不是函式，它不會有`prototype`這個屬性。

`newPlayer`的`__proto__`則是指向`Player.prototype`，把物件的原型鏈整個串接起來。

```javascript
//不是函式，不會有prototype
console.log(newPlayer.prototype)  // undefined

console.log(newPlayer.__proto__)
console.log(newPlayer.__proto__ === Player.prototype) //true
```

### prototype 摘要

- 每個函式中都會有`prototype`屬性，指向一個`prototype`物件。例如 MyFunc 函式的`prototype`屬性，會指向對應的 MyFunc.prototype 物件。
- 每個函式的`prototype`物件，會有一個`constructor`屬性，指回到這個函式。例如 MyFunc.prototype 物件的`constructor`屬性，會指向 MyFunc 函式。
- 每個物件都有一個`__proto__`內部屬性，指向它的繼承而來的原型`prototype`物件
- 由`__proto__`指向連接起來的結構，稱之為原型鏈 (prototype chain)，也就是原型繼承的整個連接結構