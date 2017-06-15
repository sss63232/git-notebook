# 參數是「傳值」還是「傳址」

## "值"的變化

```javascript
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

/* 

輸出結果:

2
3

*/
```

## 物件屬性的變化

```javascript
var c = {
    greeting : 'hello'
};
var d;

d = c;
c.greeting = 'hi';

console.log(c);
console.log(d);

/*

輸出結果:

Object {greeting: 'hi'}
Object {greeting: 'hi'}

*/
```

## By Value 原理

![](https://3.bp.blogspot.com/-bb5r8MJtDtY/VuTiEDzWlsI/AAAAAAAAi-4/Lioa8D1BXPAFx1iihQHhiGFfqfkj1VOBg/s640/5.png)

把 a 指定成一個 primitive type（數字、字串、布林） 時，a 會在記憶體中存在一個自己的位置（假設叫做0x001）。這時候，當我指定另一個變數 b，它的值等同於 a 的時候，b 實際上會建立另一個獨立的記憶體位置（假設叫做0x002），接著再把 a 的值存在這個獨立的記憶體位置。

a 和 b 其實是存在於兩個不同的記憶體位置，彼此不會互相干擾，這種情況，我們就稱為 By Value。這種情形會發生在 primitive type 的變數。

## By Reference 原理

![](https://1.bp.blogspot.com/-oJMd3iCNRqA/VuTrlJ5HPXI/AAAAAAAAi_I/iTMEL1hmQlUKAymRhg34DGI4RQ3JXlZ-w/s1600/6.png)

將變數 a 設成一個 Object（或 function）時，一樣會在記憶體中給它一個位置（假設叫做 0x001）；但是當我建立一個變數 b，並且把變數 b 的值等同於 a 時，並不會再給它一個新的位置，而是一樣指定到物件 a 的位置（即 0x001），實際上是不會有新的東西被建立。

變數 a 和 b 都會被指稱到相同的位置（即 0x001），因此，當 a 的值改變的時候 b 的值也會改變，因為它們實際上是指稱到相同的位置，這種情形我們就稱為 By Reference，這樣情況會發生在 Object 和 Function 這種變數。

## 範例

```javascript
var x = 5;
var mystr = "string-1";
var myarray = ["Array0-1", "Array0-2"];
var myobj = {
    objstr: "test"
}

function changetest(intx, mystr, myattay, myobj) {
    intx = 7;
    mystr = "string-2";
    myarray[myarray.length] = "Array0-3";
    myobj.objstr = "test2";
}

changetest(x, mystr, myarray, myobj);

document.writeln(x);
document.writeln("<br/>");
document.writeln(mystr);
document.writeln("<br/>");
document.writeln(myarray);
document.writeln("<br/>");
document.writeln(myobj.objstr);
document.writeln("<br/>");
/*

輸出：

5
string-1
Array0-1,Array0-2,Array0-3
test2

*/ 
```

基本資料型態的數值，字串都無法在函式中改變其值，原因就是因為參數傳遞的方式是傳值。

而陣列與物件可以在函式中改變其值，原因是因為函式傳遞的方式是傳址。

## 例外

如果用 object literal 的方式指定物件的值，那麼會是by value。

```javascript
var c = {
    greeting: 'hello'
};
var d = c;

console.log(c);
console.log(d);

// = sets up new memory space(new address)
c = {
    greeting: 'hi'
};

console.log(c);
console.log(d);

/*

輸出結果:

Object {greeting: 'hello'}
Object {greeting: 'hello'}
Object {greeting: 'hi'}
Object {greeting: 'hello'}

*/
```

## 資料來源
[[筆記] 談談JavaScript中by reference和by value的重要觀念](https://pjchender.blogspot.tw/2016/03/javascriptby-referenceby-value.html)
