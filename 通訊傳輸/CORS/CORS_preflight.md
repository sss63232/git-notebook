# CORS preflight 預檢

藉由在伺服器使用 `Access-Control-Allow-Origin` 可以讓瀏覽器實現跨域請求。  

CORS機制在**非簡單請求**的狀況下，  
瀏覽器會先發出一個 preflight( a `OPTIONS` request)

![](Flowchart_showing_Simple_and_Preflight_XHR.svg)



from https://upload.wikimedia.org/wikipedia/commons/c/ca/Flowchart_showing_Simple_and_Preflight_XHR.svg

## 簡單請求

[Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests)

