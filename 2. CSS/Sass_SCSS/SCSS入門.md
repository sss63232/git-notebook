# SCSS特色入門

## 變數

用錢字號（$）來定義變數，用冒號（:）來給給定變數的值。

```scss
$color-white: #fff;
$color-pink: #ee11ab;
$title-font: normal 24px/1.5 'Open Sans', sans-serif;

$primary-color: $color-pink;

a {
  background-color: $color-white;
  color: $color-pink;
}
```

變數可以進行加減乘除運算，字串與顏色色碼也可以進行運算。

```scss
$_num: 5px;

.container {
  color: $color-pink / 2;
  margin: $_num * 2 $_num;
}
```



## 巢狀

### 一般巢狀

```scss
ul {
  list-style: none;

  li {
    display: inline-block;
    padding: 15px;

    a {
      color: #999;
      font-size: 18px;
    }
  }
}
```

會編譯成：

```css
/* css */
ul {
  list-style: none;
}

ul li {
  display: inline-block;
  padding: 15px;
}

ul li a {
  color: #999;
  font-size: 18px;
}
```



### 使用（&）的巢狀

```scss
// scss
.btn{
  &:hover{}
  &.other-class{}
}
```

會編譯成：

```css
/* CSS */
.btn:hover{}
.btn.other-class{}
```

使用(&)表示中間無間隔。



## 匯入（import）

匯入其他的 .scss檔案，一般而言要被匯入的 .scss檔案名稱最前面會加上底線（\_），例如`\_reset.scss`。這樣編譯工具在編譯 SCSS時就會掠過這些（\_xxx.scss）檔案，它們就不會被編譯兩次。

假設今天要匯入`_reset.scss`，寫法如下：

```scss
@import 'reset';

body {
  background-color: #fffffff;
}
```

要注意的是只需要寫`@import 'reset'`，不用加副檔名或下底線(_)，編譯程式會自動尋找對應的檔案。



## 混合（mixin）

微函式的概念，可以用一行設定代表整串 css設定

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

常用來解決跨瀏覽器所需之不同前綴字的問題。

複雜一點的用法，讓 mixin有預設值

```scss
@mixin label($text: 'Code', $background: $yellow, $color: rgba(black, 0.5)) {
  position: relative;
  &:before {
    background: $background;
    color: $color;
    content: $text;
    display: inline-block;
    font-size: .6rem;
  }
}
```



## 擴充 / 繼承（extend）

可以引用現有的 class，並且加以修改使用。

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}
```

以上會轉成：

```css
.message, .success, .error {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}
```



函式（function）

要回傳一個數值，通常用於需要運算的部份。

```scss
@function calculate-width ($col-span) {
  @return 100% / $col-span;
}

.span-two {
  width: calculate-width(2); // spans 2 columns, width = 50%
}

.span-three {
  width: calculate-width(3); // spans 3 columns, width = 33.3%
}
```

### 內建函式

SCSS也同時也有些許[內建函數](http://sass-lang.com/documentation/Sass/Script/Functions.html)可以直接供我們使用。最基本的就像是，加深顏色的`darken`。

```scss
$awesome-blue: #2196f3;

a {
  background-color: $awesome-blue;
  padding: 10px 15px;
}

a:hover {
  background-color: darken($awesome-blue,10%);
}
```



## 註解

CSS規定要用`/*...*/`來註解，SCSS則可以用類似程式碼寫法的兩條斜線(//)來註解。



# 源於[SCSS 15分鐘入門](http://eddychang.me/blog/others/91-scss-15-mins.html)