## CSS多重選擇器

### CSS選擇器可能狀況

```CSS
.one.two{}     /*兩個 class 中沒有空格*/

.one .two{}    /*兩個 class 中有空格*/

.one, .two{}   /*兩個 class 中出現逗號*/

```

### 差別在於

- 第一個表示，某區塊必須同時具有 class one 和 class two，才會被 CSS 選擇到。
- 第二個指，必須是在 one 裡面的 two，才會被選擇到。
- 第三個的指 class 中有 one 或 two，都會被編輯器所選擇到。