# for..in 與 for...of

## 結論

1. 遍歷物件，使用`for...in` ；遍歷陣列，使用`for...of`
2. `for...in`循環出的是 key，`for...of`循環出的是 value
3. `for...of`是 ES6 新引入的特性。修復了 ES5 引入的`for...in`的不足
4. `for...of`不能循環普通的物件，需要通過和`Object.keys()`搭配使用

## 遍歷一般陣列的狀況下

```javascript
let aArray = [
    'a',
    123,
    {
        a:'1',
        b:'2'}
];
```

![](https://i.imgur.com/IAzjaJR.png)

看好像好像只是寫法不一樣而已，那為什麼說`for...of`修復了`for...in`的缺陷和不足?

## 遍歷物件的狀況下

假設我們往數組添加 `aArray.name = 'demo'`, 再分別查看上面寫的兩個循環：

![](https://i.imgur.com/daAWeTK.png)

作用於 Array 的`for-in`循環除了遍曆 Array 元素以外, 還會遍歷自定義屬性。