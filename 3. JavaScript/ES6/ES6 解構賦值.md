# ES6 解構賦值

像是鏡子的概念，將右方的資料往左邊送，然後會一個位置對一個值。



## 陣列解構

將值從右邊鏡射到左邊

```javascript
// 傳統寫法
let family = ['小明', '杰倫', '阿姨', '老媽', '老爸'];
let ming = family[0];
let jay = family[1];
let auntie = family[2];
// ... 略

// 解構賦值
let [ming, jay, auntie, mom, papa] = family;
```

互換變數值

```javascript
let Goku = '悟空';
let Ginyu = '基紐';
[Goku, Ginyu] = [Ginyu, Goku];
// Goku: '基紐'
// Ginyu: '悟空'
```



## 物件解構

陣列是使用順序的索引值對應，但物件則是使用物件的屬性名稱來做對應 (因此沒有順序性)。

```javascript
let family = {
  ming: '小明',
  jay: '杰倫',
};

// 傳統作法
let ming = family.ming
let jay = family.jay

// 縮寫版
let { ming, jay } = family
// ming: 小明
// jay: 杰倫
```

重新賦予變數名稱

```javascript
let GinyuTeam = {
  Ginyu: '基紐',
  Jeice: '吉斯',
  Burter: '巴特',
  // ...
}
let { Ginyu: Goku } = GinyuTeam;
// Goku: '基紐'


let { ming: Goku, family: [, mom] } = { ming: '小明', family: ['阿姨', '老媽', '老爸'] }
console.log(Goku, mom); // 小明 老媽
```

混合使用

```javascript
let { ming: Goku, family: [, mom] } = { ming: '小明', family: ['阿姨', '老媽', '老爸'] }
console.log(Goku, mom); // 小明 老媽
```



## 預測值

```javascript
// 陣列解構的預設值
let [ming = '小明', jay = '杰倫'] = ['阿明'] 
// 第一個會被賦值，第二個會用預設
// ming: "阿明"
// jay: "杰倫"

// 物件解構的預設值
let { family: ming = '小明' } = {}
// ming: '小明'
```

