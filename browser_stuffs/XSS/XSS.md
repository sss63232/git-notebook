# XSS

Cross-Site Scripting

攻擊者在受害網站上注入惡意腳本，  
藉此取得機密資訊如 `Cookie`, `SessionID` 進而危害網站服務。

## XSS 基礎

惡意程式碼與網站正常的程式碼混雜在一起被瀏覽器執行

## XSS 幾種類型

### Reflected XSS 反射型

非持久行攻擊，  
Server 在收到瀏覽器的 GET Request 後沒有對 URL 中的 query string 進行過濾就回送給瀏覽器。

`test.com/?name=<script>alert(apple)</script>`

### Stored XSS 存儲型

惡意腳本被存在 Server, DB 中，  
下次被取出並送到瀏覽器上時執行，  
會造成除了自身以外的瀏覽器遭受攻擊。

通常是 Server 沒有過濾與檢查使用者提交的內容就直接存入 DB 造成，  
同常發生在頁面有文字編輯器供使用者可以自由輸入內容的情況下。

### DOM XSS

純粹發生在前端，  
將惡意腳本插入渲染到 HTML 上。

```html
<script>
	var handleSubmit = function(){
    var name = document.getElementById("nameInput").value
    document.getElementById('nameSpan').innterHTML = name
  }	
</script>

<h3>
  hi, <span id='nameSpan'></span>
</h3>
<input id="nameInput" type="text" />
<button onclick="create">
  submit 
</button>
```

如果 user 在 input 中輸入 `<img src=# onerror="alert(123)">` 就會造成問題

## XSS 防禦

基本上，  
XSS 攻擊都根基在兩點上：

1. 攻擊者 submit 惡意腳本程式碼
2. 被害瀏覽器執行惡意腳本

所以防禦的大原則就是，  
會經過前端的輸入輸出都要進行過濾與 encode。

細部防範：

### Reflected, Stored 防禦

需後端協助，  
任何 user 輸入的內容都需要進行檢查，  
過濾關鍵字 `<script>`, `onerror=`...之類等可以執行程式碼的字串。

### DOM-Based 防禦

避免用 `innerHTML` 等方式拼接 HTML，  
使用 `createElement`, `setAttribute`, `textContent`, `innerText`...等方式

## References

[前端 | XSS 的攻击手段及其防御 - 知乎](https://zhuanlan.zhihu.com/p/61773197)

[JavaScript 關於 XSS 攻擊 | Welcome.Web.World](https://hsiangfeng.github.io/javascript/20190717/3117322084/)

[【網頁安全】給網頁開發新人的 XSS 攻擊 介紹與防範 @程式設計板 哈啦板 - 巴哈姆特](https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267)

[前端安全总结之XSS - 掘金](https://juejin.im/post/5d35a73ef265da1bc23fb612)

[Content Security Policy (CSP) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)