# JavaScript 物件屬性描述器 PropertyDescriptor

物件的 property (屬性)不只是簡單的 key-value pair 而已，
其實每一個 property 都有一些 "屬性的特徵" 可以設定

## 屬性的特徵種類

有六種：

- writable
- configurable
- enumerable
- value
- get
- set

每一種屬性特徵的作用與細節，
這一次先暫且不提，
把重點擺在物件屬性的整體架構上。

### 取得屬性特徵

```javascript
// 一次看一個屬性
Object.getOwnPropertyDescriptor(object, 'propertyName')
// 一次看多個屬性
Object.getOwnPropertyDescriptors(object, 'propertyName1', 'propertyName2', ...)
```

所以我們現在可以嘗試一下：

```javascript
const obj = {
    a: 'aa',
    b: 'bb',
    c(sth) {
        console.log(sth);
    },
};

const propertyDescriptor_a = Object.getOwnPropertyDescriptor(obj, `a`);
const propertyDescriptor_abc = Object.getOwnPropertyDescriptors(obj, `a`, `b`, `c`);

console.log('--------');
console.log(`propertyDescriptor_a`, propertyDescriptor_a);
console.log(`propertyDescriptor_abc`, propertyDescriptor_abc);
console.log('--------');
```

 output:

![](https://i.imgur.com/dfKvshi.png)

#### 每次取得的物件都是不同的

這裡額外要注意，
`Object.getOwnPropertyDescriptor(object, 'propertyName')` 每次拿到的都會是一個全新的物件，
單純描述該屬性目前的特徵。

我們可以用 window 的 alert 方法來嘗試：

```javascript
const propertyDescriptor_alert_1 = Object.getOwnPropertyDescriptor(window, `alert`);
const propertyDescriptor_alert_2 = Object.getOwnPropertyDescriptor(window, `alert`);

console.log('--------');
console.log(propertyDescriptor_alert_1 === propertyDescriptor_alert_2); //false
console.log('--------');
```

### 設定屬性特徵

```javascript
// 設定單一屬性
Object.defineProperty(object, 'propertyName', descriptor);

// 設定多個屬性
Object.definedProperties(object, {
  	'properyName1': descriptor1,
  	'properyName2': descriptor2
});
```

example:

```javascript
const obj = {
    a: 'aa',
    b: 'bb',
    c(sth) {
        console.log(sth);
    },
};

const propertyDescriptor_a_before = Object.getOwnPropertyDescriptor(obj, `a`);
const propertyDescriptor_abc_before = Object.getOwnPropertyDescriptors(obj, `a`, `b`, `c`);
console.log('--------');
console.log(`propertyDescriptor_a`, propertyDescriptor_a_before);
console.log(`propertyDescriptor_abc`, propertyDescriptor_abc_before);
console.log('--------');

/////////////// 改變屬性特徵 ///////////////////////////////////////////////////////////

// 一次改一個屬性
Object.defineProperty(obj, `a`, {
    // 不用列出所有屬性特徵，寫要改的特徵就可以了，用以類似 CSS 規則的方式蓋過舊的設定
    enumerable: false,
    value: `this is property a`,
});

// 一次改多個屬性
Object.defineProperties(obj, {
    b: {
        configurable: false,
        value: `this is property b`,
    },
    c: {
        writable: false,
        value: `this is property c`,
    },
});

const propertyDescriptor_a_after = Object.getOwnPropertyDescriptor(obj, `a`);
const propertyDescriptor_abc_after = Object.getOwnPropertyDescriptors(obj, `a`, `b`, `c`);
console.log('--------');
console.log(`propertyDescriptor_a`, propertyDescriptor_a_after);
console.log(`propertyDescriptor_abc`, propertyDescriptor_abc_after);
console.log('--------');
```

output:

![](https://i.imgur.com/7M8ZzUf.png)

![1531983316520](1531983316520.png)

## References

https://ithelp.ithome.com.tw/articles/10197826

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty