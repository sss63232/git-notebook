# HTTP Cache 機制

## Expires

可以在 HTTP Response Header 裡面加上一個`Expires`的字段，裡面就是這個 Cache 到期的時間，例如說：

`Expires: Wed, 21 Oct 2017 07:28:00 GMT`

當下一次使用者再度造訪這個頁面或是要求這個圖片的資源的時候，瀏覽器會檢視「現在的時間」是否有超過這個 Expires。如果沒有超過的話，那瀏覽器「不會發送任何 Request」，而是直接從電腦裡面已經存好的 Cache 拿資料。

若是打開 Chrome dev tool，就會看到它寫著：「Status code 200 (from disk cache)」，代表這個 Request 其實沒有發出去，Response 是直接從 disk cache 裡面拿的。

![img](http://blog.techbridge.cc/img/huli/cache/p1.png)

## cache-control, max-age

`Cache-Control: max-age=30`，就代表這個 Response 的過期時間是 30 秒。假設使用者在收到這個 Response 之後的第 10 秒重新整理，那就會出現上面那樣被瀏覽器 Cache 住的現象。

但假如使用者是過 60 秒之後才重新整理，瀏覽器就會發送新的 Request。

如果 `Expires`跟`max-age` 同時出現在 Response 中，max-age 會蓋過 expires.

## Last-Modified, If-Modified-Since

在 Server 傳送 Response 的時候，可以多加一個`Last-Modified`的 Header，表示這個檔案上一次更改是什麼時候。而當快取過期，瀏覽器下次再發送 Request 的時候，就可以利用這個資訊，改用`If-Modified-Since`來跟 Server 指定拿取：某個時間點以後有更改的資料。

server send:

```
Last-Modified: 2017-01-01 13:00:00
Cache-Control: max-age=31536000
```

to browser.



browser send:

```
GET /logo.png
If-Modified-Since: 2017-01-01 13:00:00
```

to server.







## 資料來源

http://huli.logdown.com/posts/2223601-http-cache

