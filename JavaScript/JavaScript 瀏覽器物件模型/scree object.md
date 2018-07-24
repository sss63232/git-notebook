# screen object

JavaScript 的 `screen` 物件讓你可以存取使用者的螢幕畫面相關資訊。

## 取得使用者螢幕的寬高大小

`screen.width` 和 `screen.height` 屬性可以用來取得使用者螢幕的寬度和高度，單位是 px：

```
// 1440
var screenWidth = screen.width;

// 900
var screenHeight = screen.height;

```

`screen.availWidth` 和 `screen.availHeight` 屬性可以用來取得使用者瀏覽器可以使用的寬度和高度，單位是 px：

```
// 1436
var screenAvailWidth = screen.availWidth;

// 877
var screenAvailHeight = screen.availHeight;

```

瀏覽器可用的寬度和高度的意思像是要扣除作業系統本身固定的工具列等等。

## 取得使用者螢幕的色彩深度 screen.colorDepth

`screen.colorDepth` 屬性可以取得使用者螢幕的色彩深度/位數：

```
// 24
screen.colorDepth;

```

## screen.pixelDepth

`screen.pixelDepth` 屬性可以取得使用者螢幕的像素深度/位數：

```
// 24
screen.pixelDepth;
```

## 資料來源

http://www.fooish.com/javascript/screen.html

