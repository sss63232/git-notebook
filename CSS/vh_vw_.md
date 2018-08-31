# vh vw 

## 比較 vhvw / px / %

```html
<body>
  <div class="outer">
      <div class="inner">
      </div>
  </div>
</body>

```

```scss
.outer{
  background-color: rgba(92, 92, 92, 0.6);
}

.inner{
  margin:auto;
  background-color: #f4f405;
  width:100（輸入不同單位）;
  height:100（輸入不同單位）;
}
```

### 用 px![](https://2.bp.blogspot.com/-0S3iCez7nUw/VSuF5CchPQI/AAAAAAAAXxc/dC-8aMTkdzE/s1600/1.png)

網頁上就會呈現一個100px*100px的正方形，當我們縮放螢幕的時候，這個正方形並不會隨著變動。

### 用 %

![](https://2.bp.blogspot.com/-fvFoh26bt0s/VSuF4zAJsNI/AAAAAAAAXxY/1a2-zZa39TI/s1600/2.png)

使用 % 的時候，呈現的結果會是空白的，因為我們的 div 內並沒有任何內容，所以即使設定為100%，還是不會顯示出任何東西。

### 用 vh、vw

![](https://1.bp.blogspot.com/-guVUjC3ww84/VSuF5A6SNTI/AAAAAAAAXxk/mhwF3g3UtpA/s1600/3.png)

vh代表的是view height，也就是螢幕可視範圍高度的百分比；vw表示的是view width，也就是螢幕可是範圍寬度的百分比。

這兩個單位的使用上和百分比很類似，當填100vh和100vw時，意思就是我的這個div要是整個螢幕的可是範圍，所以你會看到，瀏覽器全部都是黃色的，而且很重要的是，這個區塊會隨著瀏覽器的縮放而改變。

如果我填的是30vh和30vw，表示這個div要占我的可視範圍的30%，因為它會隨著你的網頁縮放而改變。只有當你視窗的長和寬比例為1:1時，它才會是正方形的。

![](https://4.bp.blogspot.com/-5r6tJJWoyo0/VSuJhz4bMdI/AAAAAAAAXyA/u7MjvMRMe8c/s1600/5.png)

這時候，如果我們希望畫出一個可以隨著視窗大小而改變的正方形時，我們只要把長和寬都設成一樣的單位就可以了，例如width:20vw; height:20vw。

這時候，螢幕上就會always呈現出一個寬和長，都是可視範圍20%的正方形。