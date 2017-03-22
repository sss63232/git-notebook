## Bootstrap

所以如果要大規模客製化調整 bootstrap.min.css的話，請記得使用 Bootstrap提供的 Less、Sass原始碼檔案。

未編譯的檔案結構：

```
bootstrap/
├── less/
├── js/
├── fonts/
├── dist/
│   ├── css/
│   ├── js/
│   └── fonts/
└── docs/
    └── examples/
```

`less/`、`js/`、`fonts/` 資料夾分別含有 CSS、JS 和圖標字型的原始碼。`dist/` 資料夾內含有上面所提到所有預編譯好的檔案。`docs/`資料夾含有此文件的原始碼檔案。`examples/` 資料夾含 Bootstrap 3 提供的大量範例介紹。除此之外，其他檔案還包含 grunt 套件、授權文件、開發的支援等。

## 基本全域設定
Bootstrap 3中的全域設定：
1. `body`設置了`background-color: #fff;`
2. 使用`@font-family-base`、`font-size-base`和`line-height-base`屬性（attribute）作為版面基礎。Bootstrap Sass 專案中是在`_scaffolding.scss`檔案，並且 Sass 是使用`＄`符號，變數名稱一樣。
3. 用 `@link-color` 設置全域連結顏色，連結處於 `:hover` 時才呈現下劃線。

Bootstrap 3 的全域設置中，預設 font-size 是 14px，line-height 是 1.428。這些屬性值被套用至 `<body>` 和` p（段落）`元素上。此外，`<p>` 設置了一個 1/2 行高（預設 10px）的底部邊距（margin）值。

## Normalize.css
為改善跨瀏覽器呈現效果，使用 Normalize.css。

## 兩種容器 .container
1. fixed layout：用 .container，自適應且寬度固定的容器。
![clipboard](http://i.imgur.com/AX52MFg.png)
2. fluid layout：用.container-fluid ，100%寬度，橫跨可是區域全部寬度。
![clipboard](http://i.imgur.com/7cA8iQS.png)

## 格線系統
+ row 必須放在 .container 裡面。
+ 如果超過 12 個 column 放在單一個 row 中，每個群組額外的 column 將作為一個單元包裝到新的一行。
+ 
## Bootstrap基本架構
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    
    <!-- HTML5 shim and Respond.js 讓 IE8 支援 HTML5 元素與媒體查詢 -->
    <!-- 警告：Respond.js 無法在 file:// 協定下運作 -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery (Bootstrap 所有外掛均需要使用) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- 依需要參考已編譯外掛版本（如下），或各自獨立的外掛版本 -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

## HTML5 doctype
`lang` 屬性用來標記網頁所使用的語系。中文有三種設法，
1. 賦予 `zh` 值，表示為通用中文。
2. 賦予`zh-Hant` 值，表示為正體中文。
3. 賦予 `zh-Hant-TW` 值，表示為台灣所使用的正體中文。
```HTML
<!DOCTYPE html>
<html lang="zh-Hant">
  ...
</html>
```
