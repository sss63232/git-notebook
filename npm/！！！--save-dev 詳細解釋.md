# --save-dev 詳細解釋

```
特別說明：
如果沒有使用 --save-dev 這個參數，不會更新 package.json，只會默默的幫你在專案裡新增 node_modules 這個資料夾，並且把你的套件放進去。
```

```
除了 --save-dev 之外，還有 --save 可以使用，兩者的差別在於：
--save-dev：用來安裝開發時用的工具
--save：用於上線時必要的套件
```

```
比方說 express 這就是我們開發時會用到的臨時伺服器，應該使用 --save-dev
而 jquery, react ... 等，是上線必備的套件，應該使用 --save
通常我們把把專案傳到 github 時，不會上傳套件（因為網路上有），只會上傳 package.json，然後看 package.json 裡有什麼 Dependencies(上線依賴) 與 devDependencies(開發依賴) 套件，再下載下來。
所以通常把專案 pull 到開發環境，你會使用 npm i 來安裝所有的依賴套件。
但如果 pull 到正式環境，你會使用 npm i --production 來安裝 Dependencies(上線依賴)的套件。
```