# HTML 重點

## a

```html
<a href="about.html">content</a>
<a href="mailto:xxx@gmail.com">send a mail</a>
<a href="about.html" target="_blank">open in a new tab</a>

<!--
href 是 hyperlink reference 的縮寫
用 mailto: 讓瀏覽器知道你要寄信
用 target="_blank" 開新分頁
-->

```

# CSS 重點

## border

```scss
.container{
  border-width: 2px;
  border-style: solid;
  border-color: #fff;
  
  border: 2px solid #fff;
}
```

## margin

```scss
.wrap{
  margin: 10px 20px 30px; 
  //      上   右   下    
  // 少了「左」，瀏覽器會自動幫你找對面的匹配，所以「左」等於 20px;
}
```

## background-image

```scss
.sth{
  background-image: url(http://google.com/xxx/sss.jpg);
}
```



