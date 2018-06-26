# 專案初始 eslint 設定 with prettier

我固定會使用 eslint 與 prettier 來進行 JavaScript 的程式碼檢驗，
而且希望可以在編輯器中存檔的同時幫我檢查並修正基本的問題。

## 思路順序

安裝 eslint => 設定 eslint => 編輯器整合 eslint

## 專案套件安裝

專案資料夾中

```shell
npm init -y

yarn add babel-eslint eslint eslint-config-prettier eslint-plugin-prettier prettier
```

## 新增 `.eslintrc.js`

我的設定檔喜歡用成 .js ，
最主要的好處就是可以用 js 的方式寫註解

同時整合 prettier 在 eslint 中，
不再另外運行 prettier 

參考設定：

```javascript
module.exports={
  //此項是用來告訴eslint找當前配置文件不能往父級查找
  root: true,
  // 此項是用來配置標準的js風格，
  extends: [
    "eslint:recommended",
    "prettier"
  ],
  plugins: [
    "prettier"
  ],
  //此項是用來指定eslint解析器的，解析器必須符合規則，babel-eslint解析器是對babel解析器的包裝使其與ESLint解析
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  //此項指定環境的全局變量，有一些預設環境可以選擇
  env: {
    "browser": true,
    "node": true,
    "jquery": true,
    "webextensions": true
  },
  // 自訂規則
  // "off" -> 0 關閉規則
  // "warn" -> 1 開啟警告規則
  // "error" -> 2 開啟錯誤規則
  rules: {
    "semi": [
      2,
      "always"
    ],
    "eqeqeq": [
      2,
      "smart"
    ],
    "no-debugger": 0,
    "no-console": 0,
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      // customizing prettier rules (unfortunately not many of them are customizable)
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 60
      }
    ]
  }
};
```

## 編輯器整合

目前主要使用 sublime, VS Code

### sublime

安裝 package :

1. SublimeLinter

2. SublimeLinter-eslint

3. ESlint-Formatter

   ```javascript
   // 設定 package settings
   // Preferences > Package Settings > ESlint-Formatter > Settings
   {
   	"format_on_save": true,
   }
   ```

### VS Code

安裝 extionsion

1. ESLint 

   我記得好像是預設就有裝～

   ```javascript
   // 設定 user settings
   {
       // eslint
       "eslint.alwaysShowStatus": true,
       "eslint.autoFixOnSave": true,
       "eslint.options": {
           "extensions": [
               ".js",
               ".vue"
           ]
       },
       "eslint.validate": [
           "javascript",
           "javascriptreact",
           {
               "language": "vue",
               "autoFix": true
           },
           {
               "language": "html",
               "autoFix": true
           }
       ],
       // editor
       "[javascript]": {
           "editor.formatOnSave": false
       },
   }
       
   ```

   