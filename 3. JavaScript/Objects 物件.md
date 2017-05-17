# Objects

Objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through what are called `properties`.

Here's a sample object:

```javascript
var cat = {

  "name": "Whiskers",

  "legs": 4,

  "tails": 1,

  "enemies": ["Water", "Dogs"]

};
```

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

物件簡單來說，就是一堆「名稱-值」的配對（a collection of name value pairs）。至於可以放入哪些值呢？

## 物件內可以存的值

第一種是原生的值（primitive ），像是布林值（Boolean）、數值或是字串，而在物件當中，我們把這類的值稱做屬性（Property）。

第二種可以放入的值，是物件，也就是在一個物件裡面再嵌入一個物件，這種以物件為值的情況我們也把它稱作屬性（Property）。

第三种放入的值可以是函數（function），在物件的情況下，我們會把這種函式／函數稱做方法（method）。

在物件中的每一個Property或是Method都會佔據電腦當中一個記憶體的位置，在需要使用到的時候，把它們呼叫出來。

## Accessing Objects Properties with the Dot Operator

Here is a sample of using the dot operator (`.`) to read an object property:

```javascript
var myObj = {

  prop1: "val1",

  prop2: "val2"

};

var prop1val = myObj.prop1; // val1

var prop2val = myObj.prop2; // val2

```



