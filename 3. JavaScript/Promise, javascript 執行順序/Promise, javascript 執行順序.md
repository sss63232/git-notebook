# JavaScript 執行順序, Promise

雖然 JavaScript 是單線執行，但有異步的功能，所以有時候特別注意執行順序。要確保 JavaScript 照順序執行有幾種作法：

## callback

```javascript
function do_mission_two() {
  console.log('任務二內容');
}

function do_mission_one(do_mission_two) {
  console.log('任務一內容');
  // 其他代碼執行完畢，最後執行回調函數
  do_mission_two && do_mission_two();
}

do_mission_one(do_mission_two);
```

## 隊列機制

```javascript
function do_mission_two() {
  console.log('任務二內容');
}

function do_mission_one(do_mission_two) {
  // 根據事件循環的機制，不用非得將任務二放到最後面了，但它實際上會最後執行
  do_mission_two && setTimeout(do_mission_two, 0);
  console.log('任務一內容');
}

do_mission_one(do_mission_two);
```

## Promise

```javascript
function do_mission_two() {
  console.log('任務二內容');
}

function do_mission_one(do_mission_two) {
  console.log('任務一內容');

  return new Promise(function(resolve, reject){
    if(typeof do_mission_two === "function"){
      resolve(do_mission_two);
    }else{
      reject(`TypeError: ${want} is not a function`);
    }
  });
}

do_mission_one(do_mission_two).then(function(do_mission_two){
  do_mission_two()
});
```
```javascript
// 使用 ES5 語法
var promise = new Promise(function(resolve, reject) {
    var flag = Math.random();
    setTimeout(function() {
        if(flag) {
            resolve('success');
        }
        else {
            reject('fail');
        }
    }, 1000);
});

console.log(promise); // 在瀏覽器的控制台運行的話，它返回的是一個包含了許多屬性的Promise對象；在Node.js環境中控制台輸出 Promise { <pending> }。

promise.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
}); // 1s後這裡的輸出可能是fail也可能是success
```

下面來解釋一下上面的代碼：

1. **因為 Promise 是一個構造函數，所以我們使用了 new 操作符來創建 promise。**
2. **構造函數 Promise 的參數是一個函數（暫時叫它 func），這個函數（func）有兩個參數 resolve 和 reject，它們分別是兩個函數，這兩個函數的作用就是將 promise 的狀態從 pending（等待）轉換為 resolved（已解決）或者從 pending（等待）轉換為 rejected（已失敗）。**
3. **創建後的 promise 有一些方法，then 和 catch。當然我們也可以人為的在 Promise 函數上添加一些滿足我們自己需求的方法，方便每一個 promise 對象使用。**

如果我們使用一些 ES6 的語法的話，我們上面的代碼會更加簡潔：

```javascript
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('success') : reject('fail');
    }, 1000)
});

console.log(p);

p.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});
```

其實可以這樣理解，**Promise 函數體的內部包裹著一個異步的請求或者操作或者函數；然後我們可以在這個異步的操作完成的時候使用 resolve 函數將我們獲得的結果傳遞出去，或者使用 reject 函數將錯誤的消息傳遞出去。**

### Promise.then()

```javascript
let p = new Promise((resolve, reject) => {
   let flag = Math.random() > 0.5 ? true : false;
   if(flag) {
       console.log('使用resolve將promise狀態從pending變為resolved');
       resolve('success');
   }
   else {
       console.log('使用reject將promise狀態從pending變為rejected');
       reject('fail');
   }
});

// @1
p.then((result) => {
    console.log('接受resolved的結果');
    console.log(result);
}, (err) => {
    console.log('捕獲錯誤的結果');
    console.log(err);
});
```

hen 方法可以接受兩個函數作為參數，**第一個函數是用來處理 resolve 的結果，第二個是可選的，用來處理 reject 的結果。**也就是說，我們在創建 p 這個 Promise 對象的時候，**通過函數 resolve 傳遞出去的結果可以被 p 的第一個 then 方法中的第一個函數捕獲然後作為它的參數。通過函數 reject 傳遞出去的結果可以被 p 的第一個 then 方法中的第二個函數捕獲然後作為它的參數。**

### .then() 中可以繼續創建 Promise

可以在每一個 then 方法中創建新的 Promise，然後將這個 Promise 對象返回，之後我們就可以在後面的 then 方法中繼續對這個對象進行操作。下面是一個簡單的例子：

```javascript
let p1 = new Promise((resolve, reject) => {
    let flag = Math.random() > 0.5 ? true : false;
    resolve();
});
// @2 使用then方法進行鏈式的調用
p1.then(() => {
    return 1;
}).then((result) => {
    console.log(result);
    return 'hello'
}).then((result) => {
    console.log(result);
});

// @3 在then方法內部可以再次使用異步的操作
p1.then(() => {
    console.log('******');
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 1000);
    });
    return p1;
}).then((result) => {
    console.log(result);
});
```

**一旦創建一個 Promise 對象之後，我們就可以使用 then 方法來進行鏈式的調用，而且我們可以把每一次的結果都返還給下一個 then 方法，然後在下一個 then 方法中對這個值進行處理。每一個 then 方法中都可以再次新創建一個 Promise 對象，然後返還給下一個 then 方法處理。**

### Promise.catch()

這個方法其實是 then 方法的一種特例，這個特例就是：

```javascript
.then(null, rejection)
```

**當於我們不使用 then 方法的第一個函數，只是用第二個函數**；catch 函數比較簡單，就是用來捕獲之前的 then 方法裡面的異常，我們可以簡單的來看一個例子：

```javascript
let p = new Promise((resolve, reject) => {
    resolve();
});
p.then(() => {
    console.log('progress...');
}).then(() => {
    throw new Error('fail');
}).catch((err) => {
    console.log(err);
});
```

### Promise.all()

**Promise.all** 方法用來包裝許多個 Promise 實例，然後組成了一個新的 Promise 對象，**新的 Promise 對象的狀態由前面幾個被包裹的 Promise 對象的狀態決定。**

**如果前面的 Promise 都被 resolve 了，那麼新的 Promise 的狀態也是 resolve 的；**

**只要有一個 Promise 被 reject 了，那麼組成的新的 Promise 的狀態也是 reject 的。**

```javascript
let arr = [1, 2, 3].map(
    (value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, value * 1000);
        });
    }
);

console.log(arr);

let promises = Promise.all(arr)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

```

結果：

```javascript
[ Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> } ]

[ 1, 2, 3 ] // 3s後輸出的結果
```

### Promise.race()

**Promise.race** 方法和上面的 **Promise.all** 有點類似，都是包裝許多的 Promise 對象，然後組成了一個新的 Promise 對象，但是使用 Promise.race 的含義是：只要包裹的的 Promise 對象中有一個的狀態發生了改變，那麼組成的這個新的 Promise 對象的狀態就是上面那個率先改變的 Promise 實例的狀態。

```javascript
let arr = [1, 2, 3].map(
    (value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, value * 1000);
        });
    }
);

console.log(arr);

let promises = Promise.race(arr)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
```

結果：

```javascript
[ Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> } ]

1 // 是最先改變狀態的那個Promise實例resolve的值
```



### Promise.resolve()

將一個值轉變為一個 Promise 對象，然後使它具有 Promise 的一些方法和特性，為了滿足我們一些特殊情況下的要求。

```javascript
let arr = [null, 0, 'hello',
    { then: function() { console.log(' a thenable obj')}}
];

arr.map((value) => {
        return Promise.resolve(value);
    });

console.log(arr);
```

結果：

```javascript
[ null, 0, 'hello', { then: [Function: then] } ]

 a thenable obj  // Promise.resolve方法會將具有then方法的對象轉換為一個Promise對象，然後就立即執行then方法。
```

### Promise.reject()

**Promise.reject** 方法和**Promise.resolve** 方法一樣，只不過通過** Promise.reject** 方法產生的 Promise 對象的狀態是** rejected** 的，下面是一個示例：

```javascript
let p = Promise.reject('fail');
p.catch((err) => {
    console.log(err);
}); // fail
```

## 資料來源

https://zhuanlan.zhihu.com/p/23907711

