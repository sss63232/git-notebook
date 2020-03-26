# Client-side/Server-side Rendering

資料與 HTML 之間的整合放在  Server 做還是瀏覽器做。  

現代前端在討論 CSR/SSR 時只著重在**首屏載入**的部分，  
因為依目前盛行的 Single Page Application 架構，  
網站後續的變化都會由前端 Router 來處理，  

也就是說，  
只有第一次請求 HTML 的時候會分使用 CSR 還是 SSR，  
瀏覽器在獲得 HTML 檔後，  
後面的操作都會是 CSR。

## Server-side Rendering

傳統渲染方式（例如 JSP ），  
由 Server 渲染好 HTML 後再吐給前端瀏覽器，  
每次畫面的變化瀏覽器都必須由 Server 取得一個完整的新 HTML，  
所以如果網頁的互動頻繁, 網速不佳的話，  
會影響用戶體驗。

但比起純 Client-side Rendering 可以減少一些初期的 HTTP 請求，
一般用於首屏優化。

## Client-side Rendering 

依賴在瀏覽器端執行的 JavaScript，  
一開始只會從 Server 端獲得相對簡單的 HTML，
接下來藉由前端 Router 發出更多 HTTP Request 去取得資料並渲染畫面。

## 比較

|      | 優勢                                                  | 劣勢                                                         |
| ---- | ----------------------------------------------------- | ------------------------------------------------------------ |
| SSR  | - SEO  <br />- 初始畫面載入快速  <br />- 適合靜態網站 | - 每次畫面變化都要與 Server 溝通<br />- 每次畫面變化都要重新渲染整份 HTML  <br />- 網站互動麻煩 |
| CSR  | - 適合多樣互動  <br />- 適合做 Web Application        | - 不利 SEO<br />- 初始畫面載入可能較慢                       |

## References

[SSR VS CSR ,一次讲个通透 - 知乎](https://zhuanlan.zhihu.com/p/60975107)

[[React] SSR 筆記 | PJCHENder 私房菜](https://pjchender.github.io/2018/09/21/react-ssr-%E7%AD%86%E8%A8%98/)

[【SEO】SPA、SSR 差別 - Neil Yang - Medium](https://medium.com/@des75421/seo-spa-ssr-%E5%B7%AE%E5%88%A5-c85f5dbc4bc8)