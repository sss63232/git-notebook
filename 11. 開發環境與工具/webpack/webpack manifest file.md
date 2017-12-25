# webpack manifest file

搭配 `webpack.optimize.CommonsChunkPlugin` 使用。

## 提取共用 library 

當 application code(以此例來說就是 `./app/index.js`檔)，有做任何改變的時候，然後再執行 `webpack` 指令後，所 bundle 出來的 `./dist/[hash].app.js`、`./dist/[hash].vendor.js`，都會完全產生新的檔案，這其實就不太好了，因為我們會希望 `./dist/[hash].vendor.js` 應該是不需要變動的，否則瀏覽器會視為不同的檔案而再重新載入。造成這樣的原因是因為 webpack 本身有自己的 `runtime code`，這會造成每次執行 `webpack` 時，都會被視為不同的檔案，而造成 `[hash]` 數值不一樣。

```javascript
…
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'] // Specify the common bundle's name.
    })
…
```

這個時候再執行 `webpack` 指令，會額外產生 `./dist/[hash].manifest.js` 檔，就是將 `runtime code` 挪出來了。之後我們只要有修改 application code(`./app/index.js`)，再進行 `webpack` 指令的話，`./app/vendor.js` 所 bundle 出來的檔案，就都會是同一個了，`[hash]` 碼也會一樣，而達到 vendor cache 的效果。