# DOM 事件傳遞：補或與冒泡

## 相關 function

```javascript
addEventListener()
preventDefault()
stopPorpagation()
```

## simple html structure

```
  <ul id="list">
    <li id="list_item">
      <a id="list_item_link" target="_blank" href="http://google.com">
        google.com
      </a>
    </li>
  </ul>
```
![](https://i.imgur.com/dwmpkhZ.png)

## 事件的三個 `Phase`（階段）

### 替 `#list` 加上 click 事件

一般狀況下：

```javascript
const $list = document.getElementById('list');
$list.addEventListener('click', (e) => {
  console.log('click!');
})
```

### `eventPhase` 事件階段

`e` 帶有事件的參數，其中一個是 `eventPhase`，它是一個數字，表示事件在哪一個 Phase 觸發。

```javascript
const $list = document.getElementById('list');
$list.addEventListener('click', (e) => {
  console.log(e.eventPhase);
})

// CAPTURING_PHASE                = 1;
// AT_TARGET                      = 2;
// BUBBLING_PHASE                 = 3;
```

### event flow

DOM 事件在傳遞時，會從根節點 Window 開始往下傳遞到 target，target 就是你所點擊的那個目標，在往下底達到 target 的這一段過程就是 CAPTURE_PHASE。

而 event 到達 target，是AT_TARGET這一個 Phase。

最後，事件再從 target 傳回去 Window，這時就是 BUBBLING_PHASE

![](https://i.imgur.com/axENqoG.png)

> 先捕獲，再冒泡
>

## 用 addEventListener 的第三個參數決定在哪個階段聆聽事件

addEventListener 其實有第三個參數，true代表把這個 listener 添加到捕獲階段，false或是沒有傳就代表把這個 listener 添加到冒泡階段。

![](https://i.imgur.com/uTX2Lq8.png)

試著在每一個元素的每一個階段都添加事件：

```javascript
const get = (id) => document.getElementById(id);
const $list = get('list');
const $list_item = get('list_item');
const $list_item_link = get('list_item_link');

// list 的捕獲
$list.addEventListener('click', (e) => {
  console.log('list capturing', e.eventPhase);
}, true)

// list 的冒泡
$list.addEventListener('click', (e) => {
  console.log('list bubbling', e.eventPhase);
}, false)

// list_item 的捕獲
$list_item.addEventListener('click', (e) => {
  console.log('list_item capturing', e.eventPhase);
}, true)

// list_item 的冒泡
$list_item.addEventListener('click', (e) => {
  console.log('list_item bubbling', e.eventPhase);
}, false)

// list_item_link 的捕獲
$list_item_link.addEventListener('click', (e) => {
  console.log('list_item_link capturing', e.eventPhase);
}, true)

// list_item_link 的冒泡
$list_item_link.addEventListener('click', (e) => {
  console.log('list_item_link bubbling', e.eventPhase);
}, false)
```

點下超連結後，console 結果：

```
list capturing
1
list_item capturing
1
list_item_link capturing
2
list_item_link bubbling
2
list_item bubbling
3
list bubbling
3
```

1 是CAPTURING_PHASE，2 是AT_TARGET，3 是BUBBLING_PHASE。

要注意的是，當事件傳遞到我們點擊的超連結（a#list_item_link）本身時，在這邊無論addEventListener 是 true 還是 false，這邊的 e.eventPhase 都是 AT_TARGET。

### 一律先捕獲，再冒泡

既然是先捕獲，再冒泡，意思就是無論那些addEventListener的順序怎麼變，輸出的東西應該還是會一樣才對。我們把捕獲跟冒泡的順序對調，看一下輸出結果是否一樣。

```javascript
const get = (id) => document.getElementById(id);
const $list = get('list');
const $list_item = get('list_item');
const $list_item_link = get('list_item_link');

// list 的冒泡
$list.addEventListener('click', (e) => {
  console.log('list bubbling', e.eventPhase);
}, false)

// list 的捕獲
$list.addEventListener('click', (e) => {
  console.log('list capturing', e.eventPhase);
}, true)

// list_item 的冒泡
$list_item.addEventListener('click', (e) => {
  console.log('list_item bubbling', e.eventPhase);
}, false)

// list_item 的捕獲
$list_item.addEventListener('click', (e) => {
  console.log('list_item capturing', e.eventPhase);
}, true)

// list_item_link 的冒泡
$list_item_link.addEventListener('click', (e) => {
  console.log('list_item_link bubbling', e.eventPhase);
}, false)

// list_item_link 的捕獲
$list_item_link.addEventListener('click', (e) => {
  console.log('list_item_link capturing', e.eventPhase);
}, true)
```

點超連結後的結果是：

```
list capturing
1
list_item capturing
1
list_item_link bubbling
2
list_item_link capturing
2
list_item bubbling
3
list bubbling
3
```

list_item_link 居然先執行冒泡階段的 listener，才執行捕獲階段的 listener。

原因正是上面提到的，當事件傳遞到點擊的真正對象，也就是 e.target 的時候，無論你使用addEventListener的第三個參數是true還是false，這邊的e.eventPhase都會變成AT_TARGET。

所以執行順序就會根據你addEventListener的順序而定，先添加的先執行，後添加的後執行。

## 取消事件傳遞 `e.stopPropagation`

```javascript
// list 的捕獲
$list.addEventListener('click', (e) => {
  console.log('list capturing', e.eventPhase);
  e.stopPropagation();
}, true)
```

這樣 console 只會輸出：

```
list capturing
1
```

因為事件的傳遞被停止，所以剩下的 listener 都不會再收到任何事件。

### 同一個節點上的取消事件傳遞

`e.stopPropagation` 的「事件傳遞被停止」，意思是說不會再把事件傳遞給「下一個節點」，但若是你在同一個節點上有不只一個 listener，還是會被執行到。

例如：

```javascript
// list 的捕獲
$list.addEventListener('click', (e) => {
  console.log('list capturing');
  e.stopPropagation();
}, true)

// list 的捕獲 2
$list.addEventListener('click', (e) => {
  console.log('list capturing2');
}, true)
```

輸出結果：

```
list capturing
list capturing2
```

要阻止同一層級的 listener 要使用 e.stopImmediatePropagation();

```javascript
// list 的捕獲
$list.addEventListener('click', (e) => {
  console.log('list capturing');
  e.stopImmediatePropagation();
}, true)

// list 的捕獲 2
$list.addEventListener('click', (e) => {
  console.log('list capturing2');
}, true)
```

結果:

```
list capturing
```

## 取消預設行為 e.preventDefault

e.preventDefault 是取消瀏覽器的預設行為，跟取消事件傳遞沒有任何關係。不要搞混 e.stopPropagation 跟 e.preventDefault。

常見的應用是阻止超連結：

```javascript
// list_item_link 的冒泡
$list_item_link.addEventListener('click', (e) => {
  e.preventDefault();
}, false)
```

這樣子，當點擊超連結的時候，就不會執行原本預設的行為（新開分頁或是跳轉），而是沒有任何事情發生，這就是preventDefault的作用。

所以呢，preventDefault跟 JavaScript 的事件傳遞「一點關係都沒有」，你加上這一行之後，事件還是會繼續往下傳遞。

### e.preventDefault() 也會傳遞下去

W3C 文件寫到：
> Once preventDefault has been called it will remain in effect throughout the remainder of the event's propagation.
>

白話文就是，一旦使用了 preventDefault，他會跟事件一起傳遞下去，所以依 event flow 後面的所有事件都會有 preventDefault 的效果。

假使我們在 `#list` 的捕獲事件裡面就先寫了 `e.preventDefault()：`

```javascript
// list 的捕獲
$list.addEventListener('click', (e) => {
  console.log('list capturing', e.eventPhase);
  e.preventDefault();
}, true)
```

之後點擊 `#list_item_link` 時，超連結一樣會沒有反應。

### `preventDefault` 實際應用，事件代理（Delegation）

今天有一個 ul，底下 1000 個 li，如果你幫每一個 li 都加上一個 eventListener，你就新建了 1000 個 function。

但我們剛剛已經知道，任何點擊 li 的事件其實都會傳到 ul 身上，因此我們可以在 ul 身上掛一個 listener 就好。

```

  <ul id="list">
    <li data-index="1">1</li>
    <li data-index="2">2</li>
    <li data-index="3">3</li>
    ...
  </ul>

    <script>
        document.getElementById('list').addEventListener('click', (e) => {
          console.log(e.target.getAttribute('data-index'));
        })
    </script>
```

好處是當你新增或是刪除一個 li 的時候，不用去處理跟那個元素相關的 listener，因為你的 listener 是放在 ul 身上。這樣透過父節點來處理子節點的事件，就叫做事件代理。

### 應用：停用所有元件

```javascript
window.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
}, true);
```

把頁面上所有的元素停用，點了都沒有反應，像是`<a>`點了不會跳出超連結，`<form>`按了submit也沒用，而且因為阻止事件冒泡，所以其他的onClick事件也都不會執行。

### 應用：偵測點擊目標

```javascript
window.addEventListener('click', (e) => {
  console.log(e.target);
}, true)
```

在window上面使用捕獲，就能保證一定是第一個被執行的事件，你就可以在這個 function 裡面偵測頁面中每一個元素的點擊，可以傳回去做數據統計及分析

## 資料來源

http://blog.techbridge.cc/2017/07/15/javascript-event-propagation/
