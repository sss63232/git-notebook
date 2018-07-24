# this

## 大原則

1. this 的是由所在函數的執行環境決定，也就是說要看函數是如何被調用的；
1. 同一個函數每一次調用，this 都可能指向不同的對象;

## window object (global object)

```javascript
console.log(this);

// function statement
function a(){
    console.log(this);
}

a();

// function expression
var b = function(){
    console.log(this);
}
```

三個 "this" 都會指稱到同樣的記憶體位置，也就是global environment的window object (global object)：
![](https://4.bp.blogspot.com/-RgCDNXpOBC8/VvOFd7wPOfI/AAAAAAAAjNo/ooGd7Ct5Q4cCLSsJb17a8nV7GDZn_j0_A/s640/2.png)

## 利用 this.NewVariable = "..."來在 window object 建立新的屬性，

我們可以直接 console.log(NewVariable)，這裡之所以可以不用打 this.NewVariable 或 window.NewVariable是因為任何在 global object (window)的屬性，我們都可以直接去指稱它，而不用使用"."。

```javascript
function a(){
    console.log(this);
    this.newVariable = "Create a new property";
}

a();

console.log(newVariable);
```

結果：

![](https://3.bp.blogspot.com/-t9z06JTUdy4/VvOIns4OVxI/AAAAAAAAjOA/9KmkU3UpMucbCZT995YZ3nTGcmlRh4ZFQ/s640/4.png)

它會呼叫出我們的"Create a new property"，同時，在window這個落落長的object中，我們也會找到NewVariable這個屬性：

![](https://3.bp.blogspot.com/-Ih7SbmgD10w/VvOI1FZ42rI/AAAAAAAAjOE/gmgWUya8XAMfuvHoXZz4vE0qqsl5EuONQ/s1600/5.png)

## method in object

在物件裡的值如果是原生值（primitive type；例如，字串、數值、邏輯值），我們會把這個新建立的東西稱為「屬性（property）」；

如果物件裡面的值是函式（function）的話，我們則會把這個新建立的東西稱為「方法（method）」。

建立 method 

```javascript
var c = {
    name : "the c object",
    log: function(){
        console.log(this);
    }
}

c.log();
```

這時候我們的 "this" 會是：

![](https://4.bp.blogspot.com/-LiNqHf7Q6Ag/VvONmzom1eI/AAAAAAAAjOc/Qc1DZ_INEeIoineik8pmwMAWeBm2-m3oA/s640/7.png)

物件c！

當這個函式是物件裡面的 method 時，這時候的 this 就會指稱到包含這個 method 的物件。

## JavaScript 中的 this bug

```javascript 
var c = {
    name : "the c object",
    log: function(){
        this.name = "Updated object C name" ;
        console.log(this);
    }
}

c.log();
```
"this" 現在指的是物件c，所以可以想像的，當我執行這個 method 的時候，它會去變更 c.name 的值。

![](https://1.bp.blogspot.com/-1OfgGOUInHo/VvOQmNfrzqI/AAAAAAAAjOw/-uCuOCpr_YIc2PpRhad8HQ8LyRqQuL9Rg/s640/9.png)

進階：

```javascript
var c ={
    name : "物件 c 的初始名字",
    log: function(){
        console.log(c.name); 

        this.name = "第一次改的名字";
        console.log(c.name);
        console.log(this);

        var setNewName = function(newName){
            this.name = newName; // 重點: 這時候的 this 指的是 window !!!

            console.log(this);
            console.log(c.name);
        }

        setNewName("第二次改的名字");
        console.log(this);
    }
}

c.log();

/*

結果輸出：

// 物件 c 的初始名字
// 第一次改的名字
// Object {name: "第一次改的名字", log: function}
// 第一次改名字
// Window {...}
// Object {name: "第一次改的名字", log: function}

*/
```

## 解法

怎麼做來避免指稱到不同的物件呢？

先把確定是本身的 this 存起來!

```javascript

var c ={
    name : "物件 c 的初始名字",
    log: function(){
        this.name = "第一次改的名字";
        console.log(c.name);
        ////////////////
        var self = this;
        ////////////////
        var setNewName = function(newName){
            self.name = newName; // 重點: 這時候的 this 指的是 window !!!

            console.log(this);
            console.log(self);
        }

        setNewName("第二次改的名字");
        console.log(c.name);
    }
}

c.log();

/*

結果輸出：

// 第一次改的名字
// Window {...}
// Object {name: "第一次改的名字", log: function}
// 第二次改的名字

*/

```

## Conclusion

1. 在global environment 建立函式並呼叫 this，這時候 this 會指稱到 global object (window object)。

2. 如果我們是在物件裡面建立函式，也就是方法（method）的情況時，這時候的 this 一般就會指稱到包含這個方法的物件（之所以說"一般"是因為除了上述bug的情況之外）。

3. 碰到 method 中可能會有不知道this指稱到什麼的情況時，為了避免不必要的錯誤，我們可以在method中的最上面建立一個變數，去把它指定成this（var self = this）。

4. 如果真的還是不知道那個情況下的this會指稱到什麼，就console.log出來看看吧！

## 資料來源

[[筆記] 談談JavaScript中的"this"和它的bug](https://pjchender.blogspot.tw/2016/03/javascriptthisbug.html)