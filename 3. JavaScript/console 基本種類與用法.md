# console 種類與用法

## console.debug(), console.info(), console.warn() and console.error()

基本上用法與 console.log() 一樣，差別在於輸出的圖標與顏色。

```javascript
console.log("log");
console.debug("debug");
console.info("info");
console.warn("warn");
console.error("error");
```

結果：

![](https://pic2.zhimg.com/v2-d1e8ef4d1dc11b72ca4ffd609b552161_b.png)

## console.table()

用表格顯示要輸出的資訊。

console.log():

![](https://pic2.zhimg.com/v2-f3cfb359d36ad454bf4042358eb0eff5_b.png)

console.table():

![](https://pic1.zhimg.com/v2-47e42c76d29825ad76e0f8db651be5b0_b.png)

## console.count()

計算執行了多少次。

```javascript
function func() {
    console.count("label");
}

for(let i = 0; i < 3; i++) {
    func();
}
```

## console.dir()

console.log() 會將 DOM 元素以 HTML 的形式輸出，而 console.dir() 則會以 JSON 對象的形式輸出。

![](https://pic4.zhimg.com/v2-d123b1c2cfff6ed6980bb1144438cae7_b.png)

在 chrome 與 firefox 上的效果不一樣。

![](https://pic4.zhimg.com/v2-69aefa31bdeb37cc4f5683b1a92c97ab_b.png)

