# jQuery 要點

## 頁面載入

```javascript
 // 原始寫法
 jQuery(document).ready(function(){});

 // 簡寫(開發用)
 $(function(){});
```

## jQuery 與 DOM 物件的轉換

```javascript
// jQueryObj => DOM
$(element)[0]

// DOM => jQueryObj
$(DOM)

// jQueryObj 與 DOM 物件 "不共用" 屬性與方法。
```

## each 用法

```javascript
// i 表示 index, n 代表每一個 DOM 對象

// 第一種表示方法  
jQueryObj.each(function(i,n){
  ...
});

// 第二種表示方法  
$.each(要被遍歷的對象, function(i,n){
  ...
});
```

## 選擇器概述

### 層級選擇

`A B` 找 A 下的含 B 的子孫輩元素

`A>B` A 下含 B 的子元素，只找兒子

### 基本過濾與表單選擇

`:first`

`:last`

`:even`

`:odd`

`:input`

`:text`

`:checked`

`:selected`

## jQuery 屬性操作

```javascript
$.attr(name)          // 獲取屬性名為name屬性值
$.attr(name,value)    // 設置屬性 name，值為 value
$.removeAttr(name)    // 刪除 name 屬性

$.html()              // 取 html 裡的內容，包含html標籤
$.html(val)           // 設置一個內容
$.text()              // 取文本值，不包含html標籤
$.text(val)           // 設置文本
$.val()               // 取 value 屬性的值
$.val(val)         	  // 設置 value 的值
```

## jQuery 插入

### 內部插入

```javascript
append()  A.append(B):將B插入到A的內部的末尾處 

appendTo()  A.appendTo(B):將A插入到B的內部的末尾處 

prepend()   A.prepend(B):將B插入到A的內部的開頭處 

prependTo()   A.prependTo(B):將A插入到B的內部的開頭
```

###  外部插入

```javascript
after()        A.after(B):將B插入到A的外部的後面 

before()      A.before(B):將B插入到A的外部的前面 

insertBefore()  A.insertBefore(B)  將A添加到B的前面(外部)

insertAfter()  A.insertAfter(B)  將A加入B的後面(外部)
```

## jQuery 複製

```javascript
clone()
clone(true)

// 如果裡面有參數true，那麼表示複製過去的內容也與原內容具有相同的事件
```

## jQuery 刪除

```javascript
empty()   // 刪除所有的子節點，不包括自己

Remove()  // 刪除所有子節點，包括自己，同時刪除事件

detach()  // 刪除所有子節點，包括自己，將事件保留
```

## jQuery 替換

```javascript
$(A).replaceWith($(B))   // 用對象$(B)的替換掉$(A)

$(A).replaceAll($(B))    // 用$(A)替換掉$(B)
```

## jQuery 進出效果

```javascript
// 顯示：
show()
// 隱藏：
hide()

// 淡入：
fadeIn()
// 淡出：
fadeOut()

// 滑入：
slideDown()
// 滑出：
slideUp()

以上函數都可以有參數：
可以是英文字母 : slow /normal / fast
可以是毫秒值：   例如:  $(A).show(3000)
```

