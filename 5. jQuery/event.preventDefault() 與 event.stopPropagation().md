# event.preventDefault() 與 event.stopPropagation()

## event.preventDefault()

### 定義與用法

就是**終止預設行為** (Stop Event Flow)；以「超連結」為例，瀏覽器看到頁面上有超連結，只要偵測到超連結被點擊到，隨即會幫我做「導向連結」的動作，「導向連結」即是超連結的預設行為。。

### Syntax

```javascript
event.preventDefault()
```

### Example

```javascript
// 防止鏈接打開 URL：
$("a").click(function(event){
  event.preventDefault();
});
```
## event.stopPropagation()

### 定義

這個語法是用來**終止事件傳導**

### Example

```html
<!-- html structure -->
<div id="div1">
    <a id="hyper" href="https://dotblogs.com.tw/harry">Harry's Tech World</a>
</div>

<!-- js code -->
<script type="text/javascript">
    $("#hyper").click(function () {
        //終止預設行為
        event.preventDefault();
        console.log("hyper click");
    });

    $("#div1").click(function () {
        console.log("div1 click");
    });
</script>
```

上例的執行結果：

```cmd
hyper click
div1 click
```

不希望 div1 也被按到，就要加入 event.stopPropagation() 阻止事件傳導

```html
<!-- js code -->
<script type="text/javascript">
    $("#hyper").click(function () {
        // 終止預設行為
        event.preventDefault();
        // 終止事件傳導
        event.stopPropagation();
        console.log("hyper click");
    });

    $("#div1").click(function () {
        console.log("div1 click");
    });
</script>
```

執行結果：

```cmd
hyper click
```