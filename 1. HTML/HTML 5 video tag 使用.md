# HTML 5 video 使用

## video 

```html
<video
  id="video" 
  src="video.mp4" 
  controls = "true"
  poster="images.jpg" /*視頻封面 */
  preload="auto" 
  webkit-playsinline="true" /*這個屬性是ios 10中設置可以
                     讓視頻在小窗內播放，也就是不是全屏播放*/  
  playsinline="true"  /*IOS微信瀏覽器支持小窗內播放*/ 
  x-webkit-airplay="allow" 
  x5-video-player-type="h5"  /*啟用H5播放器,是wechat安卓版特性*/
  x5-video-player-fullscreen="true" /*全屏設置，
                     設置為 true 是防止橫屏*/
  x5-video-orientation="portraint" //播放器支付的方向， landscape橫屏，portraint豎屏，默認值為豎屏
  style="object-fit:fill">
</video>
```

## 基本屬性內容

- src: 影片位址
- controls: 是否顯示 control 面板，各 browser 實作不同。
- poster: 屬性規定視頻下載時顯示的圖像，或者在用戶點擊播放按鈕前顯示的圖像。如果未設置該屬性，則使用視頻的第一幀來代替。
- preload: 載入影片的時間點。

## 進階屬性

- webkit-playsinline 和 playsinline: 視頻播放時局域播放，不脫離文檔流 。但是這個屬性比較特別， 需要嵌入網頁的 APP 比如 WeChat 中 UIwebview 的 allowsInlineMediaPlayback = YES webview.allowsInlineMediaPlayback = YES，才能生效。換句話說，如果 APP 不設置，你頁面中加了這標籤也無效，這也就是為什麼安卓手機 WeChat 播放視頻總是全屏，因為 APP 不支持 playsinline，而 ISO 的 WeChat 卻支持。
  這裡就要補充下，如果是想做全屏直播或者全屏 H5 體驗的用戶，IOS 需要設置刪除 webkit-playsinline 標籤，因為你設置 false 是不支持的 ，安卓則不需要，因為默認全屏。但這時候全屏是有播放控件的，無論你有沒有設置 control。 做直播的可能用得著播放控件，但是全屏 H5 是不需要的，那麼去除全屏播放時候的控件，需要以下設置：同層播放
- x-webkit-airplay="allow" : 這個屬性應該是使此視頻支持 ios 的 AirPlay 功能。使用 AirPlay 可以直接從使用 iOS 的設備上的不同位置播放視頻、音樂還有照片文件，也就是說通過 AirPlay 功能可以實現影音文件的無線播放，當然前提是播放的終端設備也要支持相應的功能
- x5-video-player-type: 啟用同層 H5 播放器，就是在視頻全屏的時候，div 可以呈現在視頻層上，也是 WeChat 安卓版特有的屬性。同層播放別名也叫做沉浸式播放，播放的時候看似全屏，但是已經除去了 control 和微信的導航欄，只留下 "X" 和 "<" 兩鍵。目前的同層播放器只在 Android（包括微信）上生效，暫時不支持 iOS。至於為什麼同層播放只對安卓開放，是因為安卓不能像 ISO 一樣局域播放，默認的全屏會使得一些界面操作被阻攔，如果是全屏 H5 還好，但是做直播的話，諸如彈幕那樣的功能就無法實現了，所以這時候同層播放的概念就解決了這個問題。不過在測試的過程中發現，不同版本的 IOS 和安卓效果略有不同
- x5-video-orientation: 聲明播放器支持的方向，可選值 landscape 橫屏, portraint 豎屏。默認值 portraint。無論是直播還是全屏 H5 一般都是豎屏播放，但是這個屬性需要 x5-video-player-type 開啟 H5 模式
- x5­-video­-player­-fullscreen: 全屏設置。它又兩個屬性值，ture 和 false，true 支持全屏播放，false 不支持全屏播放。其實，IOS 微信瀏覽器是 Chrome 的內核，相關的屬性都支持，也是為什麼 X5 同層播放不支持的原因。安卓微信瀏覽器是 X5 內核，一些屬性標籤比如 playsinline 就不支持，所以始終全屏。

## full-screen 設定

- **iOS**
  ios 加 playsinline 屬性，之前只帶 webkit 前綴的在 ios10 以後，會吊起系統自帶播放器，兩個屬性都加上基本 ios 端都可以保證內斂到瀏覽器 webview 裡面了。如果仍有個別版本的 ios 會吊起播放器，還可以引用一個庫 iphone-inline-video（具體用法很簡單看它 github，這裡不介紹了，只需加 js 一句話，css 加點），[github 地址](https://github.com/bfred-it/iphone-inline-video)加上 playsinline webkit-playsinline 這兩個屬性和這個庫基本可以保證 ios 端沒有問題了（不過親測，只加這兩個屬性不引入庫好像也是 ok 的，至今沒有在 ios 端微信沒有出現問題，如果你要兼容 uc 或者 qq 的瀏覽器建議帶上這個庫）.
- **android** 
  x5-video-player-type="h5" 屬性，騰訊 x5 內核系的 android 微信和手 Q 內置瀏覽器用的瀏覽器 webview 的內核，使用這個屬性在微信中視頻會有不同的表現，會呈現全屏狀態，貌似播放控件剝去了，至少加了這個屬性後視頻上層可以有其他 dom 元素出現了（非騰訊白名單機制的一種處理措施）。

```html
<video id="video" src="xx.mp4" playsinline webkit-playsinline></video>
```

## 參考資源

https://segmentfault.com/a/1190000009395289

