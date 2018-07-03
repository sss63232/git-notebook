# JS 專案 with eslint, prettier

我固定會使用 eslint 與 prettier 來進行 JavaScript 的程式碼檢驗，
而且希望可以在編輯器中存檔的同時幫我檢查並修正基本的問題。

## 整合過程

### 思路

ESLint 與 prettier 非常類似，只是 prettier 更專注在程式碼樣式風格的控制，也就是比起程式碼怎麼運作，它更在乎程式碼長什麼樣子。在無數次的採坑後，終於找到了在 VS Code 中整合 ESLint 與 prettier 的最佳方式：

在執行ESLint 中順道運行 prettier。

簡述一下步驟：
=> 安裝 eslint 與相關套件
=> 撰寫 `.eslintrc.js` ，並使用 prettier for ESLint 的 plugin
=> 編輯器( VSCode, Sublime )整合 eslint

## eslint 套件安裝

專案資料夾中

```shell
yarn add babel-eslint eslint eslint-config-prettier eslint-plugin-prettier prettier
# or
npm i -D babel-eslint eslint eslint-config-prettier eslint-plugin-prettier  prettier
```

## `.eslintrc.js` 設定

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

只是範例，細部規則的部份可以自己調整。

## 編輯器整合

目前主要使用 Sublime, VS Code

### Sublime

#### 安裝 package

1. SublimeLinter
2. SublimeLinter-eslint
3. ESlint-Formatter

#### 設定 user setting

```javascript
// 設定 package settings
// Preferences > Package Settings > ESlint-Formatter > Settings
{
	"format_on_save": true,
}
```

### VS Code

#### 安裝 extension

1. ESLint （ 我記得好像是預設就有裝～ ）


#### 設定 VS Code User Settings

如果希望在 VS Code 存檔（按下 ctrl + s）的時候的直接修正基本的樣式問題，就需要修改一下 User Settings。重點在於開啟 `eslint.autoFixOnSave`，關閉 VS Code 對 .js 的 `editor.formatOnSave`

```javascript
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
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
}
```

