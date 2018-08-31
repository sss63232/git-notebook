# 字級單位：px、em或 rem

## em

單純指一個大寫字母「M」所佔有的寬度。因為M是所有字母裡最接近全尺寸滿格的一個，所以把它拿來當作衡量字體大小的單位。

使用 em時，一般會先宣告body的字級大小

```css
body { font-size:75% } /* 16px*75%=12px */
```

這麼一來，網頁上的1em就不再是預設的16px，而是12px。

以 em為單位設定文字大小：

```css
body { font-size:75% } /* 16px*75%=12px */
h1 {font-size:2em} /* 2*12px=24px */
p{font-size:1.25em} /* 1.25*12px=15px */
li, span{font-size:1.25em} /* 1.25*12px=15px */
```

## 注意，使用 em存在一個問題！

那就是`字大小會隨著巢狀層級而疊加`。

譬如說：li的字級是15px，但li裡的li則會因為1.25*15px而疊加到18.75px，若再有一層li li li則會進一步1.25*18.75疊加上去……。

## rem = root em

事前在 html宣告一個所有網頁元件都共用的em單位：

```css
html{
  font-size: 75%; /* 16px*75%=12px */
}
```

之後的所有字體大小都可以依此標準來設定

```css
body { font-size:1rem } /* 1*12px=12px */
h1 {font-size:2rem} /* 2*12px=24px */
p{font-size:1.25rem} /* 1.25*12px=15px */
li, span{font-size:1.25rem} /* 1.25*12px=15px */
```

由於所有網頁元件都共用同一個em單位，所以也不會產生em的疊加問題。



