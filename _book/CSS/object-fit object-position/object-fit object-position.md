`object`實際上指的是`replaced element`(替換元素)([W3C](http://www.w3.org/TR/CSS21/conform.html#replaced-element), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element))。

`object-position`和`object-fit`只針對替換元素有作用，也就是`form`表單家族控件系列，老牌勁旅`img`圖片，HTML5新貴`video`視頻等元素

# object-fit

The **object-fit** CSS property specifies how the contents of a **replaced element**(img, video, svg, iframe...) should be fitted to the box established by its used height and width.

## value

```scss
/* Keyword values */
object-fit: fill;
	// 塞滿容器，不保持原有比例。
object-fit: contain;
	// 保持比例，並確保一定要塞下整張照片，所以除非圖片原始長寬比例與容器相同，否則會有空隙出現。
object-fit: cover;
	// 保持比例，長寬至少有一邊會與容器長寬符合，除非圖片原始長寬比例與容器相同，否則會超出容器。
object-fit: none;
	// 保持原有大小與比例。
object-fit: scale-down;
	//就好像依次設置了none或contain, 最終呈現的是尺寸比較小的那個。

/* Global values */
object-fit: inherit;
object-fit: initial;
object-fit: unset;
```

## 範例

```html
<div class="box">
  <img src="some-where" class="fill">
</div>
<!-- 下面依序設立 class為 contain, cover, none, 和 scale-down的同架構 box -->
```

```scss
.box {
    width: 160px;
    height: 160px;
    background-color: #333;
}

.box>img {
    width: 100%;
    height: 100%;
    background-color: #cd0000;
}

.fill {
    object-fit: fill;
}

.contain {
    object-fit: contain;
}

.cover {
    object-fit: cover;
}

.none {
    object-fit: none;
}

.scale-down {
    object-fit: scale-down;
}

```

結果：

![範例結果](example.png)



## img 觀念澄清

Q: 明明 img設置了寬高都是 100%, 為何實際效果除了(`fill`)，似乎都無視了這些聲明呢？圖片的實際尺寸變小或變大了，而不是根據容器實際尺寸走呢？

```scss
.box > img { 
  width: 100%; 
  height: 100%; 
}
```



A: 這表明你對一些概念還沒有認識清楚。

1. `img`是個元素，且是個替換元素
2. 一個 img，如果沒有`src`，它依然是個替換元素，它在瀏覽器中的解析依然是正確的
3. `src`指向的圖片屬於替換內容，注意，這個替換內容和這個`img`替換元素是殼子與內容的關係，**兩者是獨立的**。在CSS2.1時代，殼子的實際尺寸（如果沒有CSS或HTML設置），則是跟隨內容的實際尺寸，因此，網頁加載的時候，我們會看到圖片佔據的高度從0到圖片實際高度跳動的過程；如果殼子，也就是`img`有尺寸限制，則替換內容`fill`拉伸適應於 `img`替換元素的設定尺寸。總而言之，殼子與內容的尺寸永遠是一樣的。於是，我們就會誤認為圖片就是那個圖片，唯一的存在，導致我們理解`object-fit`的特性表現出現了障礙。
4. 在CSS3時代，`object-fit`的世界裡，`object-fit`控制的永遠是替換內容的尺寸表現，注意，是替換內容的尺寸表現，不是`img`替換元素。或者這麼講吧，我們對`img`設置：`.box > img { width: 100%; height: 100%; }`實際上是控制`img`這個元素的，這個殼子的尺寸是100%撐滿容器。上面截圖的5個示例的圖片實際上都是100%拉伸與容器的；之所以實際的圖片內容沒有拉伸，是因為受`object-fit`控制，`object-fit`控制了`src`對應的替換內容的尺寸，或者包含，或者覆蓋。
5. 之所以`object-fit:contain`會透明留白，是因為我們沒有對殼子`img`設置背景色，假設我們給殼子`img`增加個紅色背景，大家就會明白我說的意思了：`.box > img { width: 100%; height: 100%; background-color: #cd0000; }`效果如下截圖，會發現，原來的透明留白現在是紅色背景，說明了什麼？說明`img`替換元素和`src`替換內容是兩個獨立體。`img`替換元素受到了CSS `100%`拉伸控制（所以紅色背景充滿容器），`src`替換內容也受到了`object-fit`展示控制。大家各司其職，沒有什麼覆蓋，衝突！



# object-position

默認值是`50% 50%`，也就是居中效果。

與`background-position`類似，`object-position`的值類型為`<position>`類型值。也就是說，CSS3的相對坐標設定樣式支持的。

同樣的，`object-position`也支持負值，特徵表現與`background-position`一致。

