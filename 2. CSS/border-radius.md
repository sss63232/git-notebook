# border-radius 圓角值

基本語法

```css
border-radius: XX;
```

可以使用`長度單位(ex. 50px)`或`%`(ex. 50%)來設定，若只有設定一個數值則四個角都會套用同樣的圓角值。

如果要個別設定四個角的話，則有兩種作法：

```css
//第一種
border-top-left-radius: aa;
border-top-right-radius: bb;
border-bottom-right-radius: cc;
border-bottom-left-radius: dd;

//第二種
border-radius: aa bb cc dd;
```

