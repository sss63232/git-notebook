# flex 詳解

flex用於在 RWD或行動版網頁中實現更便利的佈局方式，不再侷限於 float和 position。flex佈局只會作用於設定（display: flex）的容器中，而簡單來說 flex的運作基礎就是**子容器根據自身的屬性設定去瓜分父容器所佔據的空間**。

## flex容器設定

```
.flex-container{
  display: flex;
}
```

單單一行 CSS 程式碼我們完成了下面這些功能

- 套用 `.flex-container` 的元素成為一個 `flex container`
- 內部第一層的子元素會變成 `flex item`
- 預設 Flex item 會依照水平的方式排列
- Flex item 會依照程式碼的順序排列
- Flex item 會在 container 內從左至右排列
- **Flex item 的尺寸會依照正規的 width 屬性或內容自身的寬, block-box(div etc) 不會自動長滿 100%**
- 如果沒有足夠的空間, 那麼 Flex item 會自動依照寬度 width 的比例去縮小, 直到空間完全不足 scrollbar 才會出現
- Flex item 會自動展延高度使其與其他 Flex item 中最高的那個相等

------

## Properties for the Parent(flex-container)：

### display

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```css
.container{
    display: flex; /* or inline-flex */
    }
```
### flex-direcction 物件排列方向

![img](https://css-tricks.com/wp-content/uploads/2014/05/flex-direction1.svg)

```css
.container{
  flex-direction: row | row-reverse | column | column-reverse
}
```

- row: Items are placed the same as the text direction.

- row-reverse: Items are placed opposite to the text direction.

- column: Items are placed top to bottom.

- column-reverse: Items are placed bottom to top.



### flex-wrap 

![img](https://css-tricks.com/wp-content/uploads/2014/05/flex-wrap.svg)

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap` (default): single-line / left to right in `ltr`; right to left in `rtl`
- `wrap`: multi-line / left to right in `ltr`; right to left in `rtl`
- `wrap-reverse`: multi-line / right to left in `ltr`; left to right in `rtl`

### flex-flow

This is a shorthand `flex-direction` and `flex-wrap`properties, which together define the flex container's main and cross axes. Default is `row nowrap`.

### justify-content 操縱物件的水平方向

![img](https://css-tricks.com/wp-content/uploads/2013/04/justify-content.svg)



- flex-start: Items align to the left side of the container.

- flex-end: Items align to the right side of the container.

- center: Items align at the center of the container.

- space-between: Items display with equal spacing between them.

- space-around: Items display with equal spacing around them.

  ​

### align-items 操縱物件的垂直方向

![img](https://css-tricks.com/wp-content/uploads/2014/05/align-items.svg)

- flex-start: Items align to the top of the container.
- flex-end: Items align to the bottom of the container.
- center: Items align at the vertical center of the container.
- baseline: Items display at the baseline of the container.
- stretch: Items are stretched to fit the container.


Notice that when the flex direction is a column, `justify-content` changes to the vertical and `align-items` to the horizontal.

### align-content 多根軸線的對齊方式

`align-content`屬性定義了多根軸線的對齊方式。如果項目只有一根軸線，該屬性不起作用。

![img](https://css-tricks.com/wp-content/uploads/2013/04/align-content.svg)

- `flex-start`: lines packed to the start of the container
- `flex-end`: lines packed to the end of the container
- `center`: lines packed to the center of the container
- `space-between`: lines evenly distributed; the first line is at the start of the container while the last one is at the end
- `space-around`: lines evenly distributed with equal space around each line
- `stretch` (default): lines stretch to take up the remaining space

------

## Properties for the Children(flex-item)：

### order 用數值表示物件順序 (用在單一物件上)

By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value. 預設是0，數字越小越前面。

![img](https://css-tricks.com/wp-content/uploads/2013/04/order-2.svg)

### flex = flex-grow, flex-shrink, flex-basis

The `flex` property is a shorthand for the flex-grow, flex-shrink, and the flex-basis properties.`Default value:  0 1 auto` 

flex 用來設定子元素如何瓜分父元素的**剩餘空間**，而後面三個是 property: flex的 3個子屬性，需要一起理解。

#### 主體邏輯

如果子容器設置了 flex-basis或者 width，那麼在分配空間之前，他們會先跟父容器預約這麼多的空間，然後剩下的才是歸入到剩餘空間，然後父容器再把剩餘空間分配給設置了 flex-grow的容器。 如果同時設置flex-basis和 width，那麼 width屬性會被覆蓋，也就是說 flex-basis的優先級比 width高。

什麼是剩餘空間呢？具備 flex環境的父容器，通常是有一條主軸和一條側軸，默認情況下主軸就是水平從左向右的，側軸是垂直從上到下的（類似書寫模式）。 剩餘空間就是父容器在主軸的方向上還有多少可用的空間。比如有一網頁結構：

```html
div.container
	span.A
	span.B
	span.C
```

那剩餘空間就是 div.container.width - ( span.A.width + span.B.width + span.C.width) 

方便理解，假設實際數字：

| 元素   | div.container | span.A | span.B | span.C |
| ---- | ------------- | ------ | ------ | ------ |
| 寬度   | 100px         | 20px   | 20px   | 20px   |

則剩餘空間為：100 - ( 20 + 20 + 20 ) = 40px

flex 範例：

```css
.item{
  flex: 2 2 20rem;
  /* 上面一行的意思等同於下面三行 */
  flex-grow: 2;
  flex-shrink: 2;
  flex-basis: 20rem;
}
```



#### flex-grow 物件放大，爭搶剩餘空間比例 

![img](https://css-tricks.com/wp-content/uploads/2014/05/flex-grow.svg)

* 當**剩餘空間 > 0** 時發揮效果。

* 預設值為 0，代表子元素不爭搶剩餘空間。

* Flex-grow計算邏輯-橫向展開

以下計算步驟只適用於當橫向展開時 flexbox容器寬度大於所有子元素的寬度時：
1. 首先算出 flexbox容器內所有子元素的原始寬度總和 initial_space。
2. 用 flexbox容器的總寬度減去 initial_space，得到 flexbox容器內剩餘空間 remained_space。
3. 獲取 flexbox容器中有 flex-grow屬性的子元素，算出 flex-grow的總和 grow_total。
4. Flew-grow = 0的元素默認按原大小顯示。
5. Flew-grow > 0的元素，寬度=原寬度+ flex-grow / grow_tatal * remainded_space。

同樣使用上面範例做說明：

```html
div.container.width_100
	span.A.width_20
	span.B.width_20
	span.C.width_20
```

此時若有設定 CSS為

```scss
span.A, span.B{
  flex-grow: 1;
}

span.C{
  flex-grow: 2;
}
```

則各運算要素為

| 要素   | initial_space | remained_space | grow_total |
| ---- | ------------- | -------------- | ---------- |
| 大小   | 60px          | 40px           | 4          |

最終結果

| 元素   | span.A                 | span.B                 | span.C                 |
| ---- | ---------------------- | ---------------------- | ---------------------- |
| 寬度   | 20 + 1 / 4 * 40 = 30px | 20 + 1 / 4 * 40 = 30px | 20 + 2 / 4 * 40 = 40px |

flex-grow 宣告寫法

```css
.item{
  flex-grow: <number>; /* default 0 */
}
```



#### flex-shrink 物件縮小，分擔不足空間的比例

- 當**剩餘空間 < 0** 時發揮效果。

- 預設值為 1，代表子元素按原比例縮小。

- 以下計算步驟只適用於當橫向展開時flexbox容器寬度小於所有子元素的寬度時：

  1.  首先算出 flexbox容器內所有子元素的原始寬度總和 initial_space。

  2.  用 initial_space減去 flexbox容器的總寬度，得到超出 flexbox容器的那部分空間 over_space。

  3.  獲取 flexbox容器中 flex-shrink > 0的子元素，算出 flex-shrink的總和 shrink_total。

  4.  Flew-shrink = 0的元素默認按原大小顯示。

  5.  Flew-shrink > 0的元素，寬度 = 原寬度 - flex-shrink / shrink_tatal * over_space。

同樣架構做範例說明：

```html
div.container.width_40
	span.A.width_20
	span.B.width_20
	span.C.width_20
```

此時若有設定 CSS為

```scss
span.A, span.B{
  flex-shrink: 1; /* 等於預設值 */
}

span.C{
  flex-shrink: 2;
}
```

則各運算要素為：

| 要素   | initial_space | over_space | shrink_total |
| ---- | ------------- | ---------- | ------------ |
| 大小   | 60px          | 20px       | 4            |

最後結果如下：

| 元素   | span.A                 | span.B                 | span.C                 |
| ---- | ---------------------- | ---------------------- | ---------------------- |
| 寬度   | 20 - 1 / 4 * 20 = 15px | 20 - 1 / 4 * 20 = 15px | 20 - 2 / 4 * 20 = 10px |





#### flex-basis 物件預設寬度

Flex-basis affects an element's size *across the main axis.*Flex-basis thus alternately determines width **or** height, depending on flex-direction.

![](flex-basis.gif)

- 如果子元素有 flex-basis，就算作子元素的原始 width（不包括邊框和補邊）。
- 如果沒有`flex-basis`或其屬性值為`0`，在有`width`的情況下以`width`來計，沒有`width`的話，則按其內容來計。
- 如果同時聲明`width`屬性和`flex-basis`屬性時，會以`flex-basis`的值來計算。
- 預設為 auto：無特定寬度值，取決於其它屬性值( = flex-basis: 0px)。


```css
.item{
  flex-basis：<length> | <percentage> | auto | content ;
}
```



#### flex syntax總結

```css
/* 0 0 auto */
flex: none;

/* One value, unitless number: flex-grow (flex-basis changes to 0, 而此時的 flex-shrink會是預設值：1。) */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30px;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink (flex-basis changes to 0) */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: unset;
```

* 幾個常見的表示法：	 

| 寫法   | flex: 1;      | flex: none;     | flex: auto;     | flex: 0 auto; OR flex: initial; |
| ---- | ------------- | --------------- | --------------- | ------------------------------- |
| 意思表示 | flex: 1 1 0%; | flex: 0 0 auto; | flex: 1 1 auto; | flex: 0 1 auto; 即是 flex的預設值     |

* 如果父級的空間足夠：`flex-grow`有效，`flex-shrink`無效。
* 如果父級的空間不夠：`flex-shrink` 有效，`flex-grow`無效。

### align-self

![img](https://css-tricks.com/wp-content/uploads/2014/05/align-self.svg)

the same values as align-items and its value for the specific item.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

------

## Reference：

[Flexbox Froggy](http://flexboxfroggy.com/) 
練習 flex用法的小遊戲

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
flex完整圖示講解

http://zhoon.github.io/css3/2014/08/23/flex.html 
https://segmentfault.com/a/1190000006741711
https://segmentfault.com/a/1190000005006056
剩餘空間的詳盡計算請參閱以上文章

https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties
flex的 Visual Guide ，可以動態即時展現結果



