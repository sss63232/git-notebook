
::before
::after
## "偽"元素
不會出現在 DOM之中。

四個偽元素代表的意義，並放上一張示意圖， (假使在這邊的符合元素為 <p> )
```
p::first-line
//可以給<p>的第一行定義樣式 (瀏覽器會隨著放大或縮小來換行)
p::first-letter
//可以給<p>的第一個字母定義樣式 (以英文來看是第一個字母；中文就是第一個中文字)
p::before
//可以在<p>之前插入樣式/內容
p::after
//可以在<p>之後插入樣式/內容
p::selection
//定義當使用者反白<p>時的樣式
```
![example](http://i.imgur.com/ZzXxIyr.jpg)

## 基本語法範例
```css
#example:brfore{
	content:"xxx";
}

#example:after{
	content:"XXX";
}
```
<p data-height="282" data-theme-id="0" data-slug-hash="RRqyzG" data-default-tab="css,result" data-user="ChenYuHsin" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/ChenYuHsin/pen/RRqyzG/">RRqyzG</a> by ChenYuHsin (<a href="http://codepen.io/ChenYuHsin">@ChenYuHsin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### 注意
1. 單冒號與雙冒號無重大分別。雙冒號只是用來區別 CSS3的偽類（使用單冒號）
2. 偽元素如果沒有設置 content屬性，偽元素是無效的。但是可以設定它是空值：
```
#example:before{
	content:"";
	display:block;
	width : 100px;
	height : 100px;
}

```
## 範例：調整反白顏色
```
<style>
span.hightlight::selection {
background: #333;
color: #eee;
}
</style>

<span class="hightlight">請將這串文字以反白觀看效果，如果你的瀏覽器有支援，反白後你會看到文字變成灰色，背景變成黑色的效果。</span>
```
