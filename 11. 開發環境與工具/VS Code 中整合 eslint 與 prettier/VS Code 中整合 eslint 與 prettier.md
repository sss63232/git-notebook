# VS Code 中整合 ESLint 與 prettier

## ESLint

程式碼質量檢查

## prettier

程式碼樣式控管

## 整合過程

### 思路

ESLint 與 prettier 非常類似，只是 prettier 更專注在程式碼樣式風格的控制，也就是比起程式碼怎麼運作，它更在乎程式碼長什麼樣子。在無數次的採坑後，終於找到了在 VS Code 中整合 ESLint 與 prettier 的最佳方式：在執行ESLint 中順道運行 prettier。

簡述一下步驟：

=> 使用 VS Code 自帶的 ESLint extension

=> 在 .ESLintrc 的配置中使用 prettier for ESLint 的 plugin

=> 

### VS Code ESLint extension

確認有裝這個，我記得應該是預設就有啦！這讓我們在開發的時候可以即時進行 ESLint 檢查。

![1528106074765](D:\MyProjects\git-notebook\11. 開發環境與工具\VS Code 中整合 ESLint 與 prettier\vscode_ESLint_extension)

### install 需要的套件

除了 ESLint 與 prettier 本體, plugin外，還需要 eslint-config-prettier，它主要是用來處理一些 ESLint 與 prettier 規則上的衝突。

```bash
npm i -D babel-eslint eslint eslint-config-prettier eslint-plugin-prettier  prettier
```

### 撰寫 .eslintrc

ESLint 設定檔大概長這樣：

```js
{
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
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
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120
      }
    ]
  },
  "plugins": [
    "prettier"
  ]
}
```

只是範例，細部規則的部份可以自己調整。

### 修改 VS Code User Settings

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

