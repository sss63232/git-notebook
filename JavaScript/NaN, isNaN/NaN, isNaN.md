# NaN, isNaN

>  雖然 NaN 本身名字為非數字, 但是利用 typeof 來判斷 NaN 的時候, 卻會返回 number. 

## 產生 NaN 的時機

### 1. 計算失敗時

#### 錯誤計算

對於未定義的運算 (Infinity 相關) 或錯誤數學公式計算時 (對負數進行開偶次方; 對負數進行對數運算; 對小於 - 1 或大於 + 1 的數進行反正弦或反餘弦運算), 得到的計算結果為 NaN 

```javascript
document.write(Math.sqrt(-1));      // 結果為 NaN  
document.write(0/0);                // 結果為 NaN  
document.write(5/0);                // 結果為 Infinity  
document.write(Infinity/Infinity)   // 結果為 NaN  
document.write(0/Infinity);         // 結果為 0  
document.write(0*Infinity);         // 結果為 NaN  
```

#### 加法以外的四則運算

帶有減號 (-) 乘號 (*) 或 除號 (/) 運算符時, JavaScript  引擎會先嘗試將待計算單項轉換成 Number 類型 (使用 `Number(x)` 做轉換), 如果轉換失敗, 整個計算結果即為 `NaN`

```javascript
10 - '5a'           // NaN  
'5a' * 5            // NaN  
'10' / '5a';        // NaN  
  
undefined - 5;      // NaN  Number(undefined) == NaN  
'' * 5              // 0    Number('') == 0  
true * 5            // 5    Number(true) == 1  
[] * 5              // 0    Number([]) == 0  
null - 5;           // -5   Number(null) == 0  
```

 #### 加法四則運算

如果加號 (+) 兩端單項 有任意一個是字符串 js 會進行**拼接**操作, 只有加號 (+) 兩端單項都是**數字 Number 類型的時**, 才會進行相加計算

```javascript
document.write(1 + 2 + '3'         + "<br/>");    // 計算結果為 33  
document.write(1 + '2' + 3         + "<br/>");    // 計算結果為 123  
document.write(1 + undefined + 3   + "<br/>");    // 計算結果為 NaN  
document.write(1 + '' + 3          + "<br/>");    // 計算結果為 13  
```



### 2. 解析數字失敗 

任何一個字符串當**不能**被 parseInt, parseFloat 或 Number 成功轉換時, 就返回 NaN, 表示該字符串無法被識別為 Number 類型, 這是一個異常狀態, 並不是一個確切的值 : 

#### 被轉換值中不含任何數字

使用 parseInt, parseFloat 或 Number 進行轉換時, 直接返回 NaN 

```javascript
parseInt('bluetata')     // NaN  
parseFloat('bluetata')   // NaN  
Number('bluetata')       // NaN  
```

#### 被轉換值中含任何數字時 

parseInt 和 parseFloat 會將被轉換值中第一個無效字符之前的 數字字符串進行轉換; 

Number 會將被轉換值當做一個整體來轉換, 這樣對於 Number() 來說, 即使被轉換值中包含數字, 也**不會**將數字轉換出來

```javascript
parseInt('123abc')         // 轉換結果 123  
parseInt('123abc45')       // 轉換結果 123  
parseInt('abc123def')      // 轉換結果 NaN  
parseFloat('123.45abc')    // 轉換結果 123.45  
parseFloat('123abc')       // 轉換結果 123  
Number('123abc')           // 轉換結果 NaN  
```

### 3. 與 NaN 有關的計算

任何涉及與 NaN 的計算, 返回結果為 NaN 

```javascript
document.write("NaN === NaN     :" + (NaN === NaN)   + "<br/>");             // false  
  
document.write("isNaN(NaN + 10) :" + isNaN(NaN + 10) + "<br/>");             // true  
document.write("isNaN(NaN - 10) :" + isNaN(NaN - 10) + "<br/>");             // true  
document.write("isNaN(NaN * 10) :" + isNaN(NaN * 10) + "<br/>");             // true  
document.write("isNaN(0/NaN)    :" + isNaN(0/NaN)    + "<br/>");             // true  
document.write("isNaN(NaN/1)    :" + isNaN(NaN/1)    + "<br/>");             // true  
```

## isNaN 

### 為什麼要用 `isNaN` 函式

> 因為 NaN 不與任何值相等

NaN 不能通過相等操作符（== 和 ===）來判斷, 因為 NaN 不與任何值相等, 即使是 NaN 自己本身

isNaN 可以視為：

```javascript
isNaN = function(value) {  
    Number.isNaN(Number(value));  
}  
```

如果 isNaN 函數的參數不是 Number 類型, isNaN 函數會首先嘗試將這個參數轉換為數值, 然後才會對轉換後的結果是否是 NaN 進行判斷. 因此, 對於能被強制轉換為有效的非 NaN 數值來說（空字符串和布爾值分別會被強制轉換為數值 **0** 和 **1**）, 會返回 false 值 

## 一些 NaN 判ㄌ斷結果

```javascript
isNaN(NaN);                 // true  
isNaN(undefined);           // true  
isNaN({});                  // true  
  
isNaN(Infinity)             // false  
isNaN(5/0)                  // false  5/0 返回 Infinity 認為是無限大數字  
isNaN(0/0)                  // true   為 NaN 。零除以零的會是 NaN——不過把其他數字除以零則不是 NaN 
isNaN("0/0")                // true   為 NaN  
isNaN(Infinity/Infinity);   // true  
  
isNaN(true);                // false: true 被轉換成 1 同樣如果是'false'會被轉換成 0  
isNaN(null);                // false  null 被轉換成 0  
isNaN(37);                  // false  
  
// strings  
isNaN("37");                // false: 可以被轉換成數值 37  
isNaN("37.37");             // false: 可以被轉換成數值 37.37  
isNaN("");                  // false: 空字符串被轉換成 0  
isNaN(" ");                 // false: 包含空格的字符串被轉換成 0  
isNaN("bluetata")           // true: "blabla" 不能轉換成數值  
  
// dates  
isNaN(new Date());                // false 時間會被轉換成毫秒 + 1  
isNaN(new Date().toString());     // true  
```

## 資料參考

https://blog.csdn.net/dietime1943/article/details/79867562

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN