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

第三種放入的值可以是函數（function），在物件的情況下，我們會把這種函式／函數稱做方法（method）。

在物件中的每一個 Property 或是 Method 都會佔據電腦當中一個記憶體的位置，在需要使用到的時候，把它們呼叫出來。

## 建立物件
```javascript
var person = {
  name: "NewChen",
  address: {
    country: "Taiwan",
    city: "Lugang",
    number: "20"
  }
}

// or 不想在person這個物件裡面多一層 { }，可以透過這種寫法：


var person = {
  name: "NewChen"
}

person.address = {
  country: "Taiwan",
  city: "Lugang",
  number: "20"
}
```

## 使用物件方法一：Accessing Objects Properties with the Dot Operator

Here is a sample of using the dot operator (`.`) to read an object property:

```javascript
var myObj = {
  prop1: "val1",
  prop2: "val2"
};

var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

```

## 使用物件方法二：[ ]

```javascript
var person = new Object();
person["name"] = "NewChen";
person["gender"] = "male";

console.log(person["name"]); // NewChen

// 特別的是[]內可以放變數，[]裡面放的是變數時不加引號，這是（"."）做不到的
var whatIWant = "gender";
console.log(person[whatIWant]); // male
```

## 物件搭配 function

```javascript
  var KobeBryant = {
    firstname: "Kobe",
    lastname: "Bryant",
    address: {
      country: "USA",
      location: "LA"
    }
  }

  function SayHiTo(people){
    console.log("hi " + people.lastname);
  }

  SayHiTo(KobeBryant); // hi Bryant
```

### 直接在 function 參數的地方建立物件

```javascript

function SayHiTo(people){
  console.log("hi " + people.lastname);
}

SayHiTo({
  firstname: "Chris",
  lastname: "Paul"
})

// hi Paulx
```

這種直接在函式的參數中建立物件的方法稱做"creating object on the fly"。

