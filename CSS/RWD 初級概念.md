# RWD 初級概念

## CSS3 用 media queries判斷螢幕大小

有兩種方式：

- 在同一個CSS 檔案中，用Media Queries @media 來判斷使用者之螢幕寬度，選擇載入哪一段CSS。
- 在HTML 的 <link> 載入的地方，用media 屬性判斷使用者之裝置/ 視窗寬度，選擇載入哪一個CSS 檔案。

以上兩種則一即可，使用第一種的話要寫好幾遍<link> 標籤，另一種要在同一個CSS 檔案中寫好幾遍@media。效果相同，選擇自己喜歡的方式即可。 （網路上的Framework 都是第1種，如Bootstrap。）

### CSS @media 範例：

```scss
@media screen and (min-width: 1200px) { 
  // 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 
}

@media screen and (min-width: 768px) and (max-width: 979px) { 
  // 如果使用者之視窗寬度介於 768px ~ 979px，將會再載入這裡的 CSS。 
}

@media screen and (max-width: 767px) { 
  // 如果使用者之視窗寬度 <= 768px，將會再載入這裡的 CSS。 
}

@media screen and (max-device-width: 480px) { 
  // 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 
}

```

### min-width與 device-width差異

在 Media Queries 中，我們最常使用 min-width 和 max-width 來判斷使用者的視窗寬度，而 max-device-width 則是使用者「裝置」的最大寬度。width 和 device-width 差在哪裡？

- width : 因為瀏覽器可以自由調整寬度，所以這邊指的是該**瀏覽視窗的寬度**。
- device-width : 而device-width 指的是**使用者的「裝置」最大寬度**，而不是瀏覽器視窗。所以就算你把瀏覽器視窗弄到符合最大(小)寬度，還是不會生效， device-width 常用在判斷手機上。

所以，你也可以自己加上其他的條件下去。要注意的是，每一個條件之間請用 and 來分隔，並要適時加上括號以免錯誤。 min-width 是最小寬度；max-width 是最大寬度，可以用來表示一定的範圍。

### HTML media 判斷

螢幕大小的判斷也可以使用 html tag的寫法，藉以載入不同的 .css檔。

範例：

```html
<link rel="stylesheet" type="text/css" href="all.css" media="screen">
<link rel="stylesheet" type="text/css" href="a.css" media="screen and (max-width: 767px)">
<link rel="stylesheet" type="text/css" href="b.css" media="screen and (min-width: 768px) and (max-width: 979px)">
<link rel="stylesheet" type="text/css" href="c.css" media="screen and (min-width: 1200px)">
<link rel="stylesheet" type="text/css" href="d.css" media="screen and (max-device-width: 480px)">
```



### 注意

在Media Queries 中的CSS，其效果是覆蓋原本預設的CSS。 所以，你要先有一份完整的CSS，再使用Medai Queries，對細部元素做調整。 所以，絕對不是把全部的CSS 複製一遍到Media Queries 中再修改喔！



## Viewport 

如果網頁沒有做Responsive Web Design 的話，手機的瀏覽器會自動假裝解析度變很大，會讓網頁完整顯示。 但是，這就讓字變得很小，使用者還要去做放大而不能直接閱讀。 而這個meta 標籤是為了防止這樣的情形發生( iphone 據說會有此情形)，**讓網頁顯示的寬度就直接是裝置的寬度**，不會把網頁硬塞。 這段只要加在HTML 的 <head> 裡頭即可。

範例：

```html
<meta name="viewport" content="width=device-width; initial-scale=1.0" />
```





## 	CSS 調整圖片為最適大小（Flexible image）

這個很常用。在傳統 PC 上，我們的圖片像素通常都遠大於在 Mobile 上的最大解析度，所以如果沒有做任何調整，在看圖片上的體驗會比較差，簡單來說就是圖片會爆出瀏覽區域。

而 CSS 中的 max-width 提供瞭解決方案，這個屬性能夠讓原本一個假設 700px 的圖片，在手機中顯示剛剛好佔滿手機的寬度，而高度就隨著寬度做等比例縮小。

```css
img {
    height: auto;
    max-width: 100%;
}
```

 