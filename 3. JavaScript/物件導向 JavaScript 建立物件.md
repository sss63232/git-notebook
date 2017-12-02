# 物件導向 JavaScript: 建立物件

## 建立物件

### 使用 function

```javascript
function createNewPerson(name){
  var obj = {};
  obj.name = name;
  obj.greeting = function(){
    console.log("hi I am "+this.name);
  }
  return obj;
}

// 可以在瀏覽器主控台中測試
var david = creatNewPerson('david');
david.name;
david.greeting();
```

### 使用建構子

```javascript
function Person(name){
  this.name = name;
  this.greeting = function(){
    console.log("hi, I am "+ this.name);
  };
}

// 使用方式
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
```

