# Block Formatting Context

一個 BFC 是一個`HTML`盒子並且至少滿足下列條件中的任何一個：

- `float`的值不為`none`
- `position`的值不為`static`或者`relative`
- `display`的值為 `table-cell`, `table-caption`, `inline-block`, `flex`, 或者 `inline-flex`中的其中一個
- `overflow`的值不為`visible`

## 創建 BFC

一個新的 BFC 可以通過給容器添加任何一個觸發 BFC 的 CSS 樣式，如`overflow: scroll`, `overflow: hidden`, `display: flex`, `float: left`, 或者 `display: table`來創建。

- float 除了none以外的值
- overflow 除了visible 以外的值（hidden，auto，scroll ）
- display (table-cell，table-caption，inline-block, flex, inline-flex)
- position值為（absolute，fixed）
- fieldset元素

所以每當想要創建一個新的 BFC 的時候，基於需求選擇最好的樣式條件。

## BFC概況

在 BFC 中，每個盒子的左外邊框緊挨著包含塊的左邊框（從右到左的格式，則為緊挨右邊框）。即使存在浮動也是這樣的

![](bfc.jpg)

## BFC內會有的外邊距折疊

```html
<div class="container">
    <p>Sibling 1</p>
    <p>Sibling 2</p>
</div>
```

```scss
.container {
    background-color: red;
    overflow: hidden; /* creates a block formatting context */
}

p {
    background-color: lightgreen;
    margin: 10px 0;
}
```

![](collapsing-border.jpg)

理論上兩個兄弟元素之間的邊距應該是來兩個元素的邊距之和（`20px`），但它實際上為`10px`。這就是被稱為[外邊距摺疊](http://www.sitepoint.com/web-foundations/collapsing-margins/)。

當兄弟元素的外邊距不一樣時，將以最大的那個外邊距為準。