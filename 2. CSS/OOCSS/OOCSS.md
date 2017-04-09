# OOCSS 基本實行方式

## 基本原則

* 「結構」與「樣式」分離
  想像：車子與顏色，車子可以隨時漆成不同顏色。
* 「內容」與「容器」分離
  想像：車子與輪子，不同車子有不同輪胎，但是輪胎可以通用。

## CSS 屬性簡單的分類

### 結構類

* margin
* padding
* display
* vertical-align
* ...

### 樣式類

#### 色彩樣式

* color
* background-color
* border-color
* ...

#### 尺吋樣式

* height
* font-size
* ...

### 容器類

* grid
* card
* form
* ...

### 內容類

* button
* input
* progress-bar

## 避免「繼承」寫法

為了確實做到「容器」與「內容」分離，CSS 選擇器要盡量避免使用繼承的寫法。

```scss
// 不好的架構
.container{
  ...
}

.container .btn{
  ...
}

// 比較好的架構
.container{
  ...
}

.btn{
  ...
}
```

## CSS 命名技巧

### 命名基本概念

1. 抽象化（避免使用具體的顏色、單位尺寸...等）
2. 用元件本身的型態命名，而不是它在頁面上的功能

### 範例說明

```scss
// 不好的命名
.btn-blue{
  ...
}

.btn-red{
  ...
}

.modal-50{
  ...
}

.modal-70{
  ...
}

// 比較好的方式
.btn-primary{
  ...
}

.btn-alarm{
  ...
}

.modal-m{
  ...
}

.modal-l{
  ...
}
```

### 要為未來著想

命名要命的好，要有一點想像力～～～多為未來修改頁面的夥伴（或自己...）多著想一點。可以思考一些未來的發展可能，元件模組化的可能，

簡單整理概念：

- 元件的外型命名
  - 避免限制性的命名：`.product-list`
  - 建議：`.list`
- 色彩的命名
  - 避免直接用色名：`.text-blue`
  - 建議：`.text-primary`
- Layout 的命名
  - 避免直接用位置命名：`.left-menu`
  - 建議：`col-4`

## CSS 狀態

### 元件套用狀態方式

主要分兩類：

1. 原生的 CSS 偽類（pseudo classes）
2. 用 JavaScript 套上狀態 class

### 常見偽類

- `:active` 滑鼠按下的樣式
- `:focus` 鍵盤聚焦的樣式
- `:hover` 滑鼠滑過的樣式
- `:link` 還沒被訪問的樣式
- `:visited` 被訪問過的樣式
- `:disable` 不可用

### 關鍵在於：想好想滿

要讓 CSS 狀態的使用清晰明確，最好的方法就是在一開始的時候就把所有常見的狀態規劃好，因為遲早會用上的。

```scss
// 不好的作法：一開始沒想好，後來才加上去，會顯得比較雜亂
.input{
  ...
}

.input:focus{
  ...
}
/* 過了 200 行後才熊熊想到要設定 :disabled */
.input:disabled, .input.disabled{
...
}


// 理想作法：可以一開始就「想好想滿」，反正常用的就那幾種嘛～～～
.input {
  ...
}

.input:focus {
  border-color: blue;
}

.input:disabled, .input.disabled {
  cursor: not-allowed;
}

/* success feedback */
.input.success {
  border-color: green;
}
/* error feedback */
.input.success {
  border-color: red;
}
```

