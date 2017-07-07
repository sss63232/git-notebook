# ES6 的 module, import 與 export

## 匯出 funtion 基本用法

```javascript
// hello.js
export default const Hello = (name) => {
	console.log(`Hello ${name}`);
}

// main.js
import Hello from './hello';
Hello('Peter');

// 輸出：Hello Peter

//////////// 匯出多個 funtion 
// hello.js
...
export { Hello, HowOld };
// main.js
import { Hello, HowOld } from './hello';

///////////// 搭配 as 用法
// greet.js
...
export { Hello, HowOld };
// main.js
import * as Greeting from './greet';
Greeting.Hello('Peter');
// => Hello Peter
Greeting.HowOld(20);
// => I'm 20 years old.

```

用 export default 的方式將方法 Hello 匯出，default 表示 Hello 是這個 module 預設的名稱，因此相對應的 import 就直接使用該名稱載入。

## 匯出 class 基本用法

```javascript
// person.js
export default class Person {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	greeting() {
		console.log("I am `${this.name}`, I am `${this.age}` years old.");
	}
}

// main.js
import Person from './person';
let someOne = Person.new('Peter', 25, 'male');
someOne.greeting();
// => I am Peter, I am 25 years old.

/////////// 匯出多個 class
// item.js
class Person {...省略}
class Vehicle {...省略}
export {Person, Vehicle};
// main.js
import {Person, Vehicle} from './item';

```



## export default 

想要輸出匿名函數，可以使用 export default 命令。

```javascript
// export-default.js

export default function () {
    console.log('foo');
}

// 其他模塊輸入該模塊時，import 命令可以為該匿名函數指定任意名字。
// import-default.js

import customName from './export-default';
customName(); // 'foo'
```

非匿名函數也可以使用

```javascript

// export-default.js

export default function foo() {
  console.log('foo');
}

// 或者寫成

function foo() {
  console.log('foo');
}

export default foo;

// 上面代碼中，foo 函數的函數名 foo，在模塊外部是無效的。加載的時候，視同匿名函數加載。
```

export default 命令用於指定模塊的默認輸出。如果模塊加載時，只能輸出一個值或方法，那就是 export default 所指定的那個值或方法。所以，import 命令後面才不用加大括號。顯然，一個模塊只能有一個默認輸出，因此 export deault 命令只能使用一次。

##  資料來源與參考

https://wohugb.gitbooks.io/ecmascript-6/content/docs/class.htmlx