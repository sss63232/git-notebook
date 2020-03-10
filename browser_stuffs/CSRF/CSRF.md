# CSRF

在不同的 domain 下偽造出「使用者本人發出的 request」。

## 防禦

### 瀏覽器端

CSRF 攻擊之所以能成立，是因為使用者在被攻擊的網頁是處於已經登入的狀態

- 每次使用完網站就登出

### 伺服器端

假設網站的 API 伺服器跟前端網頁在同一個 domain 上，  
那伺服器端的防護 CSRF 重點就在 `怎麼擋掉從別的 domain 來的 request`

- 檢查 referer，但不保證每個 request 都會帶 referer

- 圖形或簡訊驗證碼

- set cookie 時加上 `SameSite`  
  `Set-Cookie: session_id=ejdnne31; SameSite`，  
  表示這個 cookie 只允許 same site 使用，  
  做 cross site request 的時候不可以帶上。

- 加 CSRF token，確保有些資訊只有使用者知道

  - `<form>` 裡加上一個 hidden 欄位，通常會叫 `csrftoken` ，裡面填的值由 server 隨機產生並存在 session 中  

    ```html
    <form action="https://xxxbank.com/withdraw" method="POST">
    	// some input ...
      <input type="hidden" name="csrftoken" value="sdfnusdfpnerjf"/>
      <input type="submit" value="withdraw"/>
    </form>
    ```

    server 在收到 POST 後，  
    需要比對 form 裡面的 csrftoken 跟 session 裡面的是否一致。

  - Double Sumit Cookie, 不需要 server state。  
    一樣產生隨機數 csrftoken 放在 form 裡面，  
    但是不把 csrftoken 存在 session 裡，  
    轉而存在瀏覽器的 cookie 中

## CSRF

[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)



