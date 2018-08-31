# RWD 易犯錯誤
## orientation: landscape 不僅僅是螢幕方向打橫
```scss
orientation:portrait   // 螢幕的高比寬大
orientation:landscape  // 螢幕的高比寬小
```
特殊情況:
點擊輸入框，彈出鍵盤時，會造成手機是直的，卻觸發 `orientation:landscape`
![](https://lh3.googleusercontent.com/-ODkhEOfyUjY/VU4sePpYNJI/AAAAAAAAJbQ/VWxvRqVPpHY/s720/Screenshot_2015-05-09-23-28-39.jpg)

## PC 網頁的輔助輸入元件，在行動裝置上往往不好用
現代的網頁常常都有一些輔助輸入的網頁元件，例如小日曆、自動完成功能、離開輸入框焦點時自動驗證；彈出訊息…之類的功能。如果未對這些輔助輸入元件在行動裝置版面做處理，將會導致表單難以輸入，差一點的頂多是畫面顯示多餘的功能，或是伺服器請求的浪費，但要是發生阻擋主要畫面，或是重要的警示訊息顯示在畫面外，讓使用者無法完成造成操作流程，這些都是災難性的。

### 範例：jQuery UI 小日曆 -> html5 input type
```javascript
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#date").datepicker("destroy");
    ㄌ$("#date").prop("type", "date");
//(請注意日期格式要調整成跟 JQ UI 的 datepicker 日期格式一樣)
}
```

### 缺點：每個系統預設的顯示方式都不一樣
使用系統 UI 元件的缺點是每個系統的顯示方式不相同，造成使用者體驗不一致(如下圖範例)，甚至有些合約驗收標準是畫面要顯示得跟合約一樣，這都容易造成麻煩。

![](https://lh3.googleusercontent.com/-iNyZIAF6Rxk/VcXzKftlF_I/AAAAAAAALTE/EslDOrCHYgQ/s608-Ic42/Screenshot_2015-08-08-20-06-44.jpg)

### 設定 html5 input type 跳出不同的鍵盤
html5 增加了一些 input type ，使用正確的 type，可以讓輸入電話、email 之類的欄位跳出對應的鍵盤，而不是跳出完整的字母鍵盤。如使用 type="tel"，會跳出數字鍵盤，使用 type="email"，會跳出帶有.com 跟 @ 的字母鍵盤。

### 關閉輸入法自動矯正功能
有一些手機輸入法會自動校正、自動首字轉大寫、自動加空格，在某些輸入情境下反而會造成麻煩，可以在 input 加入 `autocapitalize="off"` 與 `autocorrect="off"`，關閉自動大寫與自動校正。

## references
[易犯的 RWD 網站製作失誤](https://blog.user.today/rwd-mistake/)
x