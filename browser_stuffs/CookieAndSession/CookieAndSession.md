# Cookie and Session

## HTTP 是無狀態的

對 server 而言，  
每一次收到的 request 都是不相關的。  
不同 request 之間關係的狀態管理機制就稱為 Session 。

### Session 實作方式

1. 利用網址的 query string：  
   user 原本在 `shopping.com` 購物，  
   對 apple 按下加入購物車後，將 user 導到 `shopping.com?buy=apple`  
   接著再對 banana 按下加入購物車，將 user 導到 `shopping.com?buy=apple,banana`  
   最後 user 結帳的時候，server 就會知道 user 要買 apple 跟 banana
2. Cookie：  
   user 對 apple 按下加入購物車，Server 發送 `Set-Cookie: buy=apple`

## Cookie 安全性

Cookie 存在瀏覽器，  
所以使用者其實是可以隨時檢視並更改的。

### 解決方法

1. 加密 Cookie 內容，  
   把資訊內容存在使用者的瀏覽器端稱為 `Cookie-based session` ，
   缺點是內容有可能過多，超過瀏覽器限制。
2. Server-side data storage  
   瀏覽器  Cookie 中只存一個 `Session ID` ，  
   其他資料都存在 Server 中。（可以是存在記憶體或是資料庫中）



## express-session

[expressjs/session: Simple session middleware for Express](https://github.com/expressjs/session)

```javascript
const express = require('express')
const session = require('express-session')

const app = express()
const port = 8888

// use session middleware
app.use(session({
  secret: 'keyboard cat'
}))

// root route
app.get('/', function(req, res, next) {
  // 可以用 req.session 拿取存在 session 的值
  // 這邊判斷有沒有 req.session.viewsjj
  // 如果有的話就 +1，反之初始化成 1
  // 所以 req.session 可讀也可寫
  if (req.session.views) {
    req.session.views++
    res.write('views: ' + req.session.views)
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
```

