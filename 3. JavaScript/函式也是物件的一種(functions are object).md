# 函式也是物件的一種(functions are object)

## First Class Functions

JavaScript 中的 function 就符合 First Class Functions 這樣的特性：

- 函式只是物件的一種
- 可以將 function 儲存成變數
- 可以將 function 當成參數代入另一個 function 中
- 可以在一個 function 中回傳另一個 function
- function 跟物件一樣有屬性（property）

## 函數物件結構

![](https://1.bp.blogspot.com/-9EYOUWAVvkA/VuDqA_xEGtI/AAAAAAAAiwo/5nN1GOZZQyE/s640/2.png)

圖片來源:https://pjchender.blogspot.tw/2016/03/javascriptfunctionobjects.html

function 就是一個物件，其中這個物件包含了兩個比較特別的部分，一個是名稱(name)，一個是執行的程式內容(code)。

**function 的名稱是可有可無的，它可以是一個無名的函式(anonymous function)**，而程式內容的部分，我們則是可以透過( )來加以執行(invoke)。

## 範例
```javascript
function greet(){
    console.log("hello");
}
greet.language = "english";

greet(); // hello
console.log(greet); // function greet(){console.log("hello");}
console.log(greet.language); // english;
```
