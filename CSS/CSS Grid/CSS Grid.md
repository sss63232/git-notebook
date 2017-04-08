# CSS Grid

## 與 Flex 的差異

Flex: 1-dimensional layout solution

Grid : 2-dimensional layout solution

## CSS Grid 相關術語

再開始嘗試實作之前，我們先來瞭解並記憶一下相關的術語。

- grid container : 母元素
- grid item : 子元素
- Grid Line: 分隔元素的線，可以是垂直與水平，如下圖的紅色線
- Grid Track: 兩條分隔線中間的區域，簡單想就是 Grid 中的 Columns 或 Rows，如下圖的綠色區塊
- Grid Cell: Grid 中的基本單位，四條線組成的區域，如下圖的藍色區塊。
- Grid Area: 由數個 Cell 組成的區域，如下圖的紅色區塊。
- fr: track-size 的單位，通常用於分配 row 或 column 的非彈性尺寸設定完後之剩餘空間。以下圖的 column 為例，意思即：將去掉 100px 與 10px 後的剩餘空間，分配為 30% 與 70%。

![Grid Terminology](http://blog.techbridge.cc/img/arvinh/grid-term.png)

圖片來源：http://blog.techbridge.cc/img/arvinh/grid-term.png

## Properties

### for grid container

#### display

```scss
.container {
  display: grid | inline-grid | subgrid;
}

/* 特別解釋一下 subgrid
if your grid container is itself a grid item (i.e. nested grids), you can use this property to indicate that you want the sizes of its rows/columns to be taken from its parent rather than specifying its own.
*/

// Note: column, float, clear, and vertical-align have no effect on a grid container.
```

#### grid-template-rows, grid-template-columns 

設定 rows, columns 的架構。

Values:

- **<track-size>** - can be a length, a percentage, or a fraction of the free space in the grid (using the `fr` unit)
- **<line-name>** - an arbitrary name of your choosing

##### 基本用法

Examples:

```scss
.container{
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```

![Grid with auto named lines](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-numbers.png)
圖片來源：https://css-tricks.com/snippets/css/complete-guide-grid/



##### 也可以自己替你的 lines 命名

Example:

```scss
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

![Grid with user named lines](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-names.png)
圖片來源：https://css-tricks.com/snippets/css/complete-guide-grid/

##### 一條線可以有不只一個名子

Example:

```scss
.container{
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
```

##### 用 repeat() 宣告重複的樣式設定

Example:

```scss
.container {
  grid-template-columns: repeat(3, 20px [col-start]) 5%;
}

// equal to 

.container{
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start 5%]
}
```

##### 用 fr 設定空間分配比例

Example

```scss
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
// set each item to one third the width of the grid container

.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
// 寬度扣掉 50px 後，剩下的分三等份
```

#### grid-template-areas

Values:

- **<grid-area-name>** - the name of a grid area specified with `grid-area`
- **.** - a period signifies an empty grid cell
- **none** - no grid areas are defined

##### 基本佈局

```scss
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

That'll create a grid that's four columns wide by three rows tall. 

![Example of grid-template-areas](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-template-areas.png)
圖片來源：https://css-tricks.com/snippets/css/complete-guide-grid/

Each row in your declaration needs to have the same number of cells.

Notice that you're not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is **foo**, the name of the area's starting row line and starting column line will be **foo-start**, and the name of its last row line and last column line will be **foo-end**. This means that some lines might have multiple names, such as the far left line in the above example, which will have three names: header-start, main-start, and footer-start.

#### grid-template

 `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`的縮寫。

Values:

- **none** - sets all three properties to their initial values
- **subgrid** - sets `grid-template-rows` and `grid-template-columns` to `subgrid`, and `grid-template-areas` to its initial value
- **<grid-template-rows> / <grid-template-columns>** - sets `grid-template-columns`and `grid-template-rows` to the specified values, respectively, and sets `grid-template-areas` to `none`

```scss
.container {
  grid-template:
    [row1-start] 25px "header header header" [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}

// equal to 

.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}
```

  

#### grid-column-gap, grid-row-gap

Specifies the size of the grid lines. 

Values:

- **<line-size>** - a length value

Example:

```scss
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

![Example of grid-column-gap and grid-row-gap](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-column-row-gap.png)
圖片來源：https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-column-row-gap.png

The gutters are only created *between* the columns/rows, not on the outer edges.

#### grid-gap

`grid-row-gap` and `grid-column-gap`的縮寫。

```scss
.container{
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-gap: 10px 15px;
}

// If no grid-row-gap is specified, it's set to the same value as grid-column-gap
```

  

#### justify-items

調整水平位置

Aligns the content inside a grid item along the *row* axis (as opposed to `align-items` which aligns along the *column* axis). 

This value applies to all grid items inside the container.

Values:

- **start** - aligns the content to the left end of the grid area
- **end** - aligns the content to the right end of the grid area
- **center** - aligns the content in the center of the grid area
- **stretch** - fills the whole width of the grid area (this is the default)

Examples:

```
.container {
  justify-items: start;
}
```

![Example of justify-items set to start](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-start.png)

```
.container{
  justify-items: end;
}
```

![Example of justify-items set to end](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-end.png)

```
.container{
  justify-items: center;
}
```

![Example of justify-items set to center](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-center.png)

```
.container{
  justify-items: stretch;
}
```

![Example of justify-items set to stretch](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-stretch.png)

This behavior can also be set on individual grid items via the `justify-self` property.

#### align-items

調整垂直位置

Examples:

```
.container {
  align-items: start;
}
```

![Example of align-items set to start](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-start.png)

```
.container {
  align-items: end;
}
```

![Example of align-items set to end](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-end.png)

```
.container {
  align-items: center;
}
```

![Example of align-items set to center](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-center.png)

```
.container {
  align-items: stretch;
}
```

![Example of align-items set to stretch](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-stretch.png)

This behavior can also be set on individual grid items via the `align-self` property.

#### justify-content

當內容小於整個 container 時，調整整個內容的水平位置。

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the *row* axis (as opposed to `align-content` which aligns the grid along the *column* axis).

Values:

- **start** - aligns the grid to the left end of the grid container
- **end** - aligns the grid to the right end of the grid container
- **center** - aligns the grid in the center of the grid container
- **stretch** - resizes the grid items to allow the grid to fill the full width of the grid container
- **space-around** - places an even amount of space between each grid item, with half-sized spaces on the far ends
- **space-between** - places an even amount of space between each grid item, with no space at the far ends
- **space-evenly** - places an even amount of space between each grid item, including the far ends

```
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}
```

Examples:

```
.container {
  justify-content: start;
}
```

![Example of justify-content set to start](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-start.png)

```
.container {
  justify-content: end;	
}
```

![Example of justify-content set to end](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-end.png)

```
.container {
  justify-content: center;	
}
```

![Example of justify-content set to center](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-center.png)

```
.container {
  justify-content: stretch;	
}
```

![Example of justify-content set to stretch](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-stretch.png)

```
.container {
  justify-content: space-around;	
}
```

![Example of justify-content set to space-around](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-space-around.png)

```
.container {
  justify-content: space-between;	
}
```

![Example of justify-content set to space-between](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-space-between.png)

```
.container {
  justify-content: space-evenly;	
}
```

![Example of justify-content set to space-evenly](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-space-evenly.png)

  

#### align-content

當內容小於 container 高度時，調整垂直位置。

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the *column* axis (as opposed to `justify-content` which aligns the grid along the *row* axis).

Values:

- **start** - aligns the grid to the top of the grid container
- **end** - aligns the grid to the bottom of the grid container
- **center** - aligns the grid in the center of the grid container
- **stretch** - resizes the grid items to allow the grid to fill the full height of the grid container
- **space-around** - places an even amount of space between each grid item, with half-sized spaces on the far ends
- **space-between** - places an even amount of space between each grid item, with no space at the far ends
- **space-evenly** - places an even amount of space between each grid item, including the far ends

```
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}
```

Examples:

```
.container {
  align-content: start;	
}
```

![Example of align-content set to start](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-start.png)

```
.container {
  align-content: end;	
}
```

![Example of align-content set to end](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-end.png)

```
.container {
  align-content: center;	
}
```

![Example of align-content set to center](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-center.png)

```
.container {
  align-content: stretch;	
}
```

![Example of align-content set to stretch](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-stretch.png)

```
.container {
  align-content: space-around;	
}
```

![Example of align-content set to space-around](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-space-around.png)

```
.container {
  align-content: space-between;	
}
```

![Example of align-content set to space-between](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-space-between.png)

```
.container {
  align-content: space-evenly;	
}
```

![Example of align-content set to space-evenly](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-space-evenly.png)

  

#### grid-auto-rows, grid-auto-columns

對於自動產生的 grid track，設定預設大小。

Specifies the size of any auto-generated grid tracks (aka *implicit grid tracks*). Implicit grid tracks get created when you explicitly position rows or columns (via `grid-template-rows`/`grid-template-columns`) that are out of range of the defined grid.

Values:

- **<track-size>** - can be a length, a percentage, or a fraction of the free space in the grid (using the `fr` unit)

```
.container {
  grid-auto-columns: <track-size> ...;
  grid-auto-rows: <track-size> ...;
}
```

To illustrate how implicit grid tracks get created, think about this:

```
.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px
}
```

![Example of 2 x 2 grid](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-auto.png)

This creates a 2 x 2 grid.

But now imagine you use `grid-column` and `grid-row` to position your grid items like this:

```
.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
```

![Example of implicit tracks](https://cdn.css-tricks.com/wp-content/uploads/2016/03/implicit-tracks.png)

We told .item-b to start on column line 5 and end at column line 6, *but we never defined a column line 5 or 6*. Because we referenced lines that don't exist, implicit tracks with widths of 0 are created to fill in the gaps. We can use `grid-auto-columns`and `grid-auto-rows` to specify the widths of these implicit tracks:

```
.container {
  grid-auto-columns: 60px;
}
```

![Example of implicit tracks](https://cdn.css-tricks.com/wp-content/uploads/2016/03/implicit-tracks-with-widths.png)

  

#### grid-auto-flow

自動排列的規則

If you have grid items that you don't explicitly place on the grid, the *auto-placement algorithm* kicks in to automatically place the items. This property controls how the auto-placement algorithm works.

Values:

- **row** - tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary
- **column** - tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
- **dense** - tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

```
.container {
  grid-auto-flow: row | column | row dense | column dense
}
```

Note that **dense** might cause your items to appear out of order.

Examples:

Consider this HTML:

```
<section class="container">
  <div class="item-a">item-a</div>
  <div class="item-b">item-b</div>
  <div class="item-c">item-c</div>
  <div class="item-d">item-d</div>
  <div class="item-e">item-e</div>
</section>
```

You define a grid with five columns and two rows, and set `grid-auto-flow` to `row` (which is also the default):

```
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}
```

When placing the items on the grid, you only specify spots for two of them:

```
.item-a {
  grid-column: 1;
  grid-row: 1 / 3;
}
.item-e {
  grid-column: 5;
  grid-row: 1 / 3;
}
```

Because we set `grid-auto-flow` to `row`, our grid will look like this. Notice how the three items we didn't place (**item-b**, **item-c** and **item-d**) flow across the available rows:

![Example of grid-auto-flow set to row](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-auto-flow-row.png)

If we instead set `grid-auto-flow` to `column`, **item-b**, **item-c** and **item-d** flow down the columns:

```
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: column;
}
```

![Example of grid-auto-flow set to column](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-auto-flow-column.png)

  

#### grid

終極縮寫！

A shorthand for setting all of the following properties in a single declaration: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`. 

It also sets `grid-column-gap` and `grid-row-gap` to their initial values, even though they can't be explicitly set by this property.

Values:

- **none** - sets all sub-properties to their initial values
- **<grid-template-rows> / <grid-template-columns>** - sets `grid-template-rows` and `grid-template-columns` to the specified values, respectively, and all other sub-properties to their initial values
- **<grid-auto-flow> [<grid-auto-rows> [ / <grid-auto-columns>] ] **- accepts all the same values as `grid-auto-flow`, `grid-auto-rows` and `grid-auto-columns`, respectively. If `grid-auto-columns` is omitted, it is set to the value specified for `grid-auto-rows`. If both are omitted, they are set to their initial values

```
.container {
    grid: none | <grid-template-rows> / <grid-template-columns> | <grid-auto-flow> [<grid-auto-rows> [/ <grid-auto-columns>]];
}
```

Examples:

The following two code blocks are equivalent:

```
.container {
  grid: 200px auto / 1fr auto 1fr;
}
```

```
.container {
  grid-template-rows: 200px auto;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: none;
}
```

And the following two code blocks are equivalent:

```
.container {
  grid: column 1fr / auto;
}
```

```
.container {
  grid-auto-flow: column;
  grid-auto-rows: 1fr;
  grid-auto-columns: auto;
}
```

It also accepts a more complex but quite handy syntax for setting everything at once. You specify `grid-template-areas`, `grid-template-rows` and `grid-template-columns`, and all the other sub-properties are set to their initial values. What you're doing is specifying the line names and track sizes inline with their respective grid areas. This is easiest to describe with an example:

```
.container {
  grid: [row1-start] "header header header" 1fr [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}
```

That's equivalent to this:

```
.container {
  grid-template-areas: 
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;    
}
```