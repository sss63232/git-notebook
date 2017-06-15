# JavaScript 瀏覽器物件模型: window object

## 瀏覽器物件模型 (BOM, Browser Object Model)

是瀏覽器提供的物件，讓你可以透過 JavaScript 直接跟瀏覽器溝通或做操作。

## window object

JavaScript 的 `window` 物件讓你可以存取和操作瀏覽器的視窗。

window 物件內建提供很多不同的屬性 (properties) 和方法 (methods)。

## 取得瀏覽器視窗的寬高 (Window Size)

取得瀏覽器視窗的可見範圍的寬度和高度（不包含工具列、捲軸這些），單位是 `px` (pixels)：

```
// 視窗的可見寬度
window.innerWidth

// 視窗的可見高度
window.innerHeight
```

取得瀏覽器整個視窗的寬度和高度（包含工具列、捲軸這些），單位是 `px` (pixels)：

```
// 整個視窗的寬度
window.outerWidth

// 整個視窗的高度
window.outerHeight
```

## 瀏覽器開啟新視窗 window.open()

`window.open()` 方法可以用來開一個新視窗、新的網頁。

語法：

```javascript
var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);
```

- 參數 strUrl 表示你要開啟的網址

- 參數 strWindowName 是新視窗的名稱，可以用來設定給 `<a>` 和 `<form>` 標籤的 `target` 屬性。你也可以設定值為 `_blank`, `_parent`, `_self` 或 `_top`，效果跟 `<a>` 的 target 一樣

- 選擇性的參數 strWindowFeatures 用來設定新視窗的屬性 (attribute)，有這些值可以設定：

  | feature 屬性 | 用途                 |
  | ---------- | ------------------ |
  | width      | 視窗的寬度 (px)         |
  | height     | 視窗的高度 (px)         |
  | left       | 視窗位置距離螢幕左緣的距離 (px) |
  | top        | 視窗位置距離螢幕上緣的距離 (px) |
  | menubar    | 主選單是否出現            |
  | location   | 網址列是否出現            |
  | scrollbars | 捲軸是否出現             |
  | status     | 狀態列是否出現            |
  | toolbar    | 工具列是否出現            |
  | titlebar   | 標題列是否出現            |
  | resizable  | 可否改變視窗的大小          |
  | fullscreen | 是否打開成全螢幕模式         |

  將你想要的屬性指定為 yes，不想要屬性指定為 no 即可 (也可以用 1 或 0 表示)。不同的屬性用逗點 `,` 分隔開。

- window.open() 執行後會返回一個參考 (reference) 指向開啟的視窗 (新視窗的 window 物件)

用法：

```javascript
window.open('http://www.fooish.com/');

var windowObjectReference = window.open(
    'http://www.fooish.com/',
    'fooish',
    'width=800,height=600,resizable=no,scrollbars=yes,status=no,location=no'
);
```

## 關閉瀏覽器視窗 window.close()

`indow.close()` 方法用來關閉瀏覽器視窗。

`window.close()` 方法只能用來關閉透過 `window.open()` 方法開啟的視窗。

```
// 開啟視窗
var win = window.open('http://www.fooish.com/');

// 關閉視窗
```

## 移動瀏覽器視窗 window.moveTo(), window.moveBy()

`window.moveTo()`, `window.moveBy()` 方法用來移動瀏覽器視窗的位置。

`window.moveTo()`, `window.moveBy()` 方法只能用來移動透過 `window.open()` 方法開啟的視窗。

語法：

```javascript
window.moveTo(x, y) 
```

參數 x, y 的單位是 px，分別表示移動視窗位置至距離螢幕左緣和上緣多少的距離。

用法：

```javascript
var win = window.open('http://www.fooish.com/', '', 'width=200,height=100');

win.moveTo(100, 100);
```

`window.moveBy()` 方法則是做相對位置的移動：

```
window.moveBy(deltaX, deltaY)

```

以視窗目前的位置為基準，分別要往左和往下移動多少距離 px：

```javascript
var win = window.open('http://www.fooish.com/', '', 'width=200,height=100');

win.moveBy(200, 200);
```

基於瀏覽器安全限制，執行 `window.moveTo()`, `window.moveBy()` 指令所在的網頁和開啟的新網頁，必須在同樣的網域下才可以操作。

## 改變瀏覽器視窗的大小 window.resizeTo()

`window.resizeTo()` 方法用來改變瀏覽器視窗的大小。

`window.resizeTo()` 方法只能用來改變透過 `window.open()` 方法開啟的視窗。

```javascript
var win = window.open('http://www.fooish.com/');

window.resizeTo(800, 600);
```

## 資料來源

[JavaScript window Object](http://www.fooish.com/javascript/window.html)