# function statements and function expressions

## Function Statements

```javascript
function greet(){
    console.log("hi");
}
```
![](https://1.bp.blogspot.com/-vCKJTNZ3VGQ/VuEwEMLJGpI/AAAAAAAAizA/AmzJ-9OxbA4/s640/11.png)

Function Statements 的特色在於，它在程式執行的最開始，該函式就會透過 hoisting 先被儲存在記憶體中

```javascript
greeting();

function greeting(){
    console.log("hi");
}

/*

輸出結果:
hi

*/
```

## Function Expressions

```javascript
var SayHello = function(){
    console.log("hello");
}
```

![](https://3.bp.blogspot.com/-W45HjLWYwwk/VuExKhGSLnI/AAAAAAAAizI/w7NQK81d6RA/s640/12.png)

一樣會建立一個 Function 物件，但這個 function 的 name 屬性並沒有給它值（因為我們在括號前面並沒有給任何名稱），之所以可以這麼做是因為，我們在function expression前面已經把它指定到一個變項（SayHello）了，所以可以直接用這個變項名稱來指稱這個函式。

對於這種name屬性沒有值的函式，我們可以稱作匿名函式（anonymous function 或 function literal）

和 Function Statements 不同的地方是，因為在一開始執行程式初期，只會先建立並儲存變項名稱到記憶體中，也就是只會儲存SayHello到記憶體中，而不會儲存函式的程式內容（這時候SayHello的值是undefined）

```javascript
SayHello();

var SayHello = function(){
    console.log("hello");
}

/*

輸出結果：
undefined

*/
```