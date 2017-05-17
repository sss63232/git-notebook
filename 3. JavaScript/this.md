# this

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


