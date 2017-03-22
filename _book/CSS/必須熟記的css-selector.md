---
title: 必須熟記的css selector
date: 2015-05-05 15:03:57
tags: CSS
categories: 前端技術
---

以下文章內容整理至 http://code.tutsplus.com/zh-hans/tutorials/the-30-css-selectors-you-must-memorize--net-16048。列舉了一些常用的CSS Selector
<!--more-->

# 1. X Y
```css
li a {
    text-decoration: none;
}
```
經驗分享 - 如果你的選擇器看起來像X Y Z A B.error這樣就錯了。問問自己是否真的需要加入這麼多負荷。

# 2. X:visited and X:link
使用:link偽類來定義所有還沒點擊的連結。
使用:visited偽類可以讓我們給曾經點擊過或者訪問過的連結添加樣式。

# 3. X + Y
選擇緊接在後的元素
```css
ul + p {
    color:red;
}
```
只有每個ul後面的第一個段落是紅色的。
# 4. X > Y
X Y和X > Y的區別在於後者只會選中直接後代。例如
```css
<div id="container">
    <ul>
        <li> List Item
            <ul>
                <li> Child </li>
            </ul>
        </li>
        <li> List Item </li>
        <li> List Item </li>
        <li> List Item </li>
    </ul>
</div>
```
以上code中，#container > ul只會定義id為container的div裡的ul元素，而不會定義第一個li裡的ul。

# 5. X ~ Y
跟X + Y很像，但沒有那麼嚴格。鄰近選擇器ul + p只會選擇緊接在前一個元素後的元素，但此選擇器更廣泛。比如，在上面的例子中，只要在ul後的p兄弟元素都會被選中。
# 6. X[href="foo"]
用標籤裡頭的屬性來選擇，Example:
```css
a[href="http://net.tutsplus.com"] {
    color: #1f6053; /* nettuts green */
}
```
# 7. X[href*="tuts"]
星號表示賦值出現在屬性的任意處。這樣就定義了指向nettuts.com，net.tutsplus.com甚至tutsplus.com的連結都會被選到。

```scss
div[class*="post-"] p {
  color: green;
}
```



# 8. X[href^="http"]
定義前綴字的選擇方法。

```scss
a[href^="http://"] {
  color: green;
}
```

This one uses the caret (^) character to tell the browser: 「If this link has an `href` attribute that starts with `http://`, make it green.」 Now, this specific example looks like an easy way to target external links.

# 9. X[href$=".jpg"]
定義後綴字的選擇方法。

範例：

```scss
[class$="face"] {
  margin: 16px;
  padding: 4px;
  
  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  
  box-shadow:
    inset 0 5px white, 
    inset 0 -5px #bbb,
    inset 5px 0 #d7d7d7, 
    inset -5px 0 #d7d7d7;
  
  border-radius: 10%;
}
```

下面兩個 div都會被選到

```html
<div class="first-face">
  <span class="pip"></span>
</div>
<div class="second-face">
  <span class="pip"></span>
  <span class="pip"></span>
</div>
```



# 10. X[data-*="foo"]
EX：
要先在圖片鏈接標籤中添加data-filetype屬性。
```css
<a href="path/to/image.jpg" data-filetype="image">Hello</a>
```
可以使用屬性選擇器選取自定義屬性
```css
a[data-filetype="image"] {
color: red;
}
```
# 11. X:not(selector)
希望選中所有的div元素，除了一個id為container的div。下面的代碼就很巧妙地做到了這一點。
```css
div:not(#container) {
     color: blue;
}
```
# 12. X::pseudoElement
我們可以使用偽元素（用::表示）來定義某些片段元素，比如第一行或第一個字母。要記住的是這只能用於塊狀（block）元素。偽元素使用兩個冒號::。下面匹配段落的第一個字母：
```css
p::first-letter {
       float: left;
       padding-right: 2px;
  }
```
類似地，下面使用::first-line來定義元素的第一行的樣式。
```css
p::first-line {
    font-weight: bold;
    font-size: 1.2em;
}
```
# 13. X:nth-child(n)
```css
li:nth-child(3) {
    color: red;
}
```
nth-child指序列裡的第n個元素，從1數起。如果你想匹配列表裡的第二個元素，可以使用li:nth-child(2)。甚至可以使用這種方法來選擇一系列的子元素。比如li:nth-child(4n)可以選擇排在4的倍數的元素
# 14. X:nth-last-child(n)
```css
li:nth-last-child(2) {
    color: red;
}
```
這個技巧跟上面的一樣，但是從集合的最後一個數起。
# 15. X:nth-of-type(n)
想定義第三個ul的樣式，但又沒有id來進行匹配，那麼可以使用偽類nth-of-type(n)。下面的代碼中，只有第三個ul會有邊框。
```css
ul:nth-of-type(3) {
    border: 1px solid black;
}
```
# 16. X:nth-last-of-type(n)
```css
ul:nth-last-of-type(3) {
    border: 1px solid black;
}
```
當然，我們也可以使用nth-last-of-type來選擇倒數第n個元素。
# 17. X:first-child
```css
ul li:first-child {
    border-top: none;
}
```
用於選中母元素的第一個子元素，常常用於去掉第一個或最後一個元素的邊框。
# 18. X:last-child
last-child是first-child的反面，可以匹配最後一個子元素。
# 19. X:only-child
```css
<div>
    <p> My paragraph here. </p>
</div>

<div>
 <p> Two paragraphs total. </p>
 <p> Two paragraphs total. </p>
</div>
```
在這種情況下，第二個div裡面的段落不會被選中，只有第一個div的段落才被選中。只要母元素含有超過一個子元素，only-child偽類就會失效。
# 20. X:first-of-type
first-of-type可以用來選擇該類型的第一個元素
