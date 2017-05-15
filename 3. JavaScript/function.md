# JavaScript 中的函式（function）

"函式是個物件"，就像是一般物件一樣，差別是他可以被呼叫。

```javascript
function helloWorld(){
  alert("嗨！歡迎來到Javascript的世界");
}
helloWorld(); // 呼叫該函式
```

## 建立 function 的三種方式

1. 宣告式

```javascript
function funname(param1,param2,.......paramX){
 some codes
}
```

2. 建構式

函式是個物件，所以也能像建立物件一樣來建立函式。

使用 new 與建構子來建立函式。函式建構式是在執行階段進行的，因此每一次呼叫都要重新建構一次。

```javascript
var functionName = new Function("param1","param2",...."paramX","function content");

var helloWorld = new Function("alert(\"嗨！歡迎來到Javascript的世界\");");
helloWorld(); // 呼叫該函式
```

3. 函式實字( function literal )

```javascript
var functionName1 = function functionName2(para1, para2...){
    // do something
}
```

functionName2 可有可無，它會影響到 function 的 name 屬性，有時候很有用，不過也可以不理它。事實上 functionName2 的存在在某些瀏覽器版本並不能正確運作，因此不用也好。

少了 functionName2 的函示，有時候會被稱之為匿名函式。

在建立物件方法時，函示實字是個很常用的方式。

```javascript
// 建立一個 player 物件，包含一個 getname() 方法：

var player={
name:"Vic",
getname:function(){
  return this.name;
 }
};
```