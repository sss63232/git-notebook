# ES6 的 module, import 與 export

## 沒有 default 的 export

### export 多個 funtion 

```javascript
// hello.js
function Hello(){...}
function HowOld(){...}
class Person {...省略}
class Vehicle {...省略}

export {Hello, HowOld, Person, Vehicle};
```

### import

export 沒有 default 時，

import 必須要有大括號。

```javascript
import {Hello, HowOld, Person, Vehicle} from './hello.js';

Hello();
var david = new Person();
```

import 後要改變 module 名稱的話，

必須要搭配 as 。

```javascript
import {Hello as alia1, HowOld, Person as alia2, Vehicle} from './hello.js';
```

要一次全部 import 的話用 `*` 搭配 as

```javascript
import * as Greeting from './hello.js';

Greeting.Hello();
var ben = new Greeting.Person();
```
## 有 default 的 export

### 唯一的 export default 

一支 js 檔案只可以有一個 default，

```javascript
export default const Hello = (name) => {
	console.log(`Hello ${name}`);
}
```

### import

module 的 export 有加上 default 時，

會自動把該 module 定名為 default 再 export。

```javascript
import Hello from '../xx.js'
// 實際上等於:
import {default as Hello} from '../xx.js';

Hello("Mike");
```

import 後要改變 module 名稱的話，

就直接改名字就好囉

```javascript
import Hola from '../xx.js'
// 實際上等於:
import {default as Hola} from '../xx.js';

Hola("Mike");
```



## export class 範例

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
let someOne = new Person('Peter', 25, 'male');
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



## export 匿名函數 

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

https://www.nctusam.com/2017/11/12/368/