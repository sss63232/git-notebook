# overflow

屬性作用於 **block型元素**上。它規定了當內容元素溢出元素框時發生的事：裁剪內容，使用滾動條來顯示 或 直接顯示超出部分 。

預設值：overflow: visible;

## syntax and value

```scss
/* 默認值。內容不會被修剪，會呈現在元素框之外 */
overflow: visible;

/* 內容會被修剪，並且其餘內容不可見 */
overflow: hidden;

/* 內容會被修剪，瀏覽器會顯示滾動條以便查看其餘內容 */
overflow: scroll;

/* 由瀏覽器定奪，通常如果內容被修剪，就會顯示滾動條 */
overflow: auto;

/* 規定從父元素繼承overflow屬性的值 */
overflow: inherit;
```



## 







