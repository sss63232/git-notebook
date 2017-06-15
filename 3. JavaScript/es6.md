# es6

## 常數

```javascript
//這個a是不可變的(常數)
const a = 10

//這行程式碼會發生錯誤: "a" is read-only(只能讀不能寫)
a = 11

//這個b是可變的(變數)
let b = 5

//b可以再改變其中的值
b = 6
```

- 常數const/康死/: 裝入東西(值)之後就上鎖的盒子，之後不可以再更動裡面的值
- 變數let/累/: 暫時存放值的盒子，盒子是打開的，可以更動裡面的值

在JavaScript語言中，常數指是的"不能再次指定值"(not re-assigned)，而不是"完全無法改變值"(immutable)，這兩個是有差異的概念。在之後的內容中會說明，物件類型的常數內容屬性是可以改變的，而在這個情況下常數會是一個常數指標。基本上，JavaScript語言中並沒有immutable(不可改變的)的特性。

## 好的命名規則 Naming

### 變數、函式、類別命名

變數與函式，都用小駝峰式(camelCase)的命名。  
類別用巴斯卡(PascalCase)或大駝峰式命名法(CamelCase)命名:

```javascript
let numberOfStudents
const numberOfLegs
function setBackgroundColor()
class Student{}
```

### 英文單複數使用情況

陣列之類的集合結構，有數量很多的意思，大部份都用"複數"型態的字詞，或者資料的類型來分別，例如:

```javascript
studentArray
students
```

### 常見的英文單字使用情況

常見的英文計量字詞:

count  
numberOf  
amountOf  
price  
cost  
length  
width  
height  
speed

常見的布林值開頭字詞:

isEmpty  
hasBasket

常見的字串值開頭字詞:

string  
name  
description  
label  
text

常用的動作詞（函數用）開頭

make take 作某…事  
move 移動  
add 加上、相加  
delete/remove 移除  
insert 單體 splice 複合體  
extend append 展開  
set 設定  
get 獲得  
print 印出  
list 列出  
reset 重置  
link 連至  
repeat 重覆  
replace 取代  
find, search 尋找  

具時間意義或指示的字詞

will 通常指即將發生但未發生  
did 已發生  
should 應該發生

> 使用長一點的命名是可以提供更佳的閱讀性，而且與效能一點關係都沒有，JavaScript的程式碼最後都會再經過醜化與壓縮，變數名稱會用很短的名稱來取代，這點與程式開發中使用的名稱無關。

## 資料類型

JavaScript中有6種原始的原始資料類型(Primitive Data Type):

1. 數字(Number)
1. 字串(String)
1. 布林(Boolean)
1. 空(null)
1. 未定義(undefined)

ES6後加入了符號(Symbol)。另外還有另一個非常重要的第7種資料類型 - Object(物件)。

### 動態的程式語言(dynamic language)

你不需要為變數/常數在定義時，就規定要使用哪一種的資料類型。取而代之的是，只需要指定它的值，JavaScript會依照你所指定的值決定變數/常數的資料類型。

```javascript
let foo = 42    // foo現在是Number資料類型
let foo = 'bar' // foo現在是String資料類型
let foo = true // foo現在是Boolean資料類型
```

### 判斷資料類型 typeof

```javascript
console.log(typeof 37) //'number'
console.log(typeof NaN) //'number'
console.log(typeof '') //'string'
console.log(typeof (typeof 1)) //'string'
console.log(typeof true) //'boolean'
console.log(typeof null) //'object'
console.log(typeof function(){}) //'function'
```

註: 為何null資料類型的的typeof結果是'object'(物件)，而不是'null'呢？依據ECMAScript的標準章節11.4.3條對typeof的規定就是回傳'object'。不過目前有一些反對的聲音，認為null是原始資料類型，理應當回傳自己本身的資料類型。也有認為現在修改這個太晚了，一經改動的話會造成很多舊程式被影響。截至ES6標準這一規定仍然沒有更動。

註: typeof的回傳值還有一個特例，就是函式的回傳值是'function'，因為在JavaScript覺得它太特別了，所以另外給它獨有的回傳值。

