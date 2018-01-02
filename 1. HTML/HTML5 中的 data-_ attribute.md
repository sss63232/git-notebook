# HTML5 中的 data-* attribute

定義自己的屬性名稱，於是為了要避免大家在 HTML 結構中隨意的添加屬性，在 HTML5 中就多了 data-* attribte 這個屬性，其中的 * 就是一個可以自定義的名稱。

## html tag 中的 data-*

```htmlmixed=
<div id="slider" data-type="slideShow">
  <img class='photo' data-item="1" data-size="xs" src="http://fakeimg.pl/350x200/?text=Hello" />
  <img class='photo' data-item="2" data-size="lg" src="http://fakeimg.pl/550x200/?text=Welcome" />
</div>
```

## 利用 JS 操作 data-* 的資料

get, set 都是使用 [HTMLElement.dataset](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/dataset) API

![](https://i.imgur.com/R69CDxm.png)

## 利用 CSS 操作 data-* 的資料

```htmlmixed=
<article data-content="Hello Everyone">
    
</article>
```

顯示 data-content 的內容：

```css=
article::before{
    content: attr(data-content);
}
```

### 配合選擇器

```css=
#slider img[data-size="xs"] {
  width: 400px;
}
#slider img[data-size="lg"] {
  width: 800px;
}
```

## 資料來源

https://pjchender.blogspot.tw/2017/01/html-5-data-attribute.html