# CORS 瀏覽器同源政策與跨域

## 同源政策（same-origin policy）

A 網頁設置的 Cookie，
B 網頁不能打開，
除非這兩個網頁"同源"。

所謂"同源"指的是"三個相同"：

![](https://i.imgur.com/PcjQyB3.png)

舉例而言：

![](https://i.imgur.com/mAk6jsr.png)



## 不同源網站跨域通信

Request 中的 `Origin` 和 Response 中的 `Access-Control-Allow-Origin` 必須匹配，  
否則透過 JavaScript 發送的跨域請求（Fetch, XHR），  
瀏覽器都會在收到 response 時擋下

### 本來就可以跨域的 html 類型

- `<img />, <video />, <audio />` 的 src 屬性
- `<link rel="stylesheet" href />` 的 href 屬性
- `<iframe />`

### 跨域通信ㄨ

分直接作法與 AJAX 作法

![](https://i.imgur.com/WSTNZgz.png)

## 資料來源

阮一峰的網絡日誌:瀏覽器同源政策及其規避方法
http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html

阮一峰的網絡日誌:跨域資源共享 CORS 詳解
http://www.ruanyifeng.com/blog/2016/04/cors.html

