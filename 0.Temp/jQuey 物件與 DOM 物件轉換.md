# jQuey 物件與 DOM 物件轉換

## 原則

>  jQuery 物件只能使用 jQuery 的方法；而 DOM 物件只能使用 DOM 物件的方法。

## 轉化方法

jQuery 物件 => DOM 物件

```javascript
/* 轉換為真實 DOM 元素集合 */
var container = $("#container").get();
/* 取得 $(".containers") 元素集合裡的第X個 DOM 元素 get後面接的是索引值，索引值由0開始 */
var containers = $(".containers").get(0);
// 或
var container = $("#container")[0];

```

DOM 物件 => jQuery 物件

```javascript
jQuery(elements);
// 或
$(elements);

// example
$(document.getElementById("id"));
```

