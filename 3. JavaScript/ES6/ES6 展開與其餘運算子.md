# ES6 展開與其餘運算子

## 展開

### 依序 return 出 array 中的值

```javascript
let groupA = ['小明', '杰倫', '阿姨'];
let groupB = ['老媽', '老爸'];

const groupAll = [...groupA, ...groupB];
// ['小明', '杰倫', '阿姨', '老媽', '老爸'];
```

`...` 其實就是一次又一次的 return 陣列中的值。

```javascript
let groupA = ['小明', '杰倫', '阿姨'];
console.log(...groupA); 
// 小明 杰倫 阿姨
```

### 淺層複製

展開運算子可以用來實現陣列的淺層複製。

```javascript
// 這個屬於淺拷貝，所以不會影響到另一個物件
let groupA = ['小明', '杰倫', '阿姨'];
let groupB = [...groupA];
groupB.push('阿明');
console.log(groupA); // ['小明', '杰倫', '阿姨'];
```

### 類陣列轉成純陣列

類陣列，這類陣列有著陣列的外皮，但卻不能使用陣列的方法，相信先前有參考過原型章節的文章有發現這點，這類陣列由於原型不同，所以 "不能" 使用許多的陣列方法，如： `map()`, `concat()` 等等。

```javascript
// 可以將類陣列轉成陣列
let doms = document.querySelectorAll('p');
console.log(doms);
let spreadDom = [...doms];
console.log(spreadDom);
```

## 其餘運算子

其餘參數，顧名思義就是傳入的參數，用途類似 `arguments`，但不同的是：

- `arguments` 不是真的陣列，其餘參數則是
- `arguments` 不能混用自訂傳入的參數

```javascript
function log(...numbers){
    console.log(numbers);
}

log(1,2,3); // (3)[1, 2, 3]
```

