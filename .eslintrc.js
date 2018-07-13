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
    "node": true,
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