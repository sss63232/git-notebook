# JavaScript 語言核心（12）Closure 與一級函式

## 閒置變數（Free Variable）

Closure 是擁有閒置變數（Free variable）的運算式。

那麼何為閒置變數？閒置變數是指對於被建立的函式而言，既非區域變數也非參數的變數。舉個例子來說：

```javascript
function doSome() {
    var x = 10;
    function f(y) {
        return x + y;
    }
    return f;
}

var foo = doSome();
console.log(foo(20));  // 30
console.log(foo(30));  // 40
```

上面的函式 doSome 中，函式 f 建立了一個 Closure，如果你單看：

```javascript
function f(y) {
    return x + y;
}
```

看來起變數 x 似乎沒有定義。實際上，x 是從外部函式捕捉而來。 Closure 是個捕捉了外部函式變數（或使之繼續存活）的函式。在上例中，函式 f 建立了 Closure，因為它將變數 x 關入（close）自己的範圍，這也是 Closure 這個名稱的由來。如果形成 Closure 的函式物件持續存活，被關閉的變數 x 也會繼續存活。就像是延續了變數 x 的生命週期。

由於 doSome 傳回了函式物件並指定給 foo，就 doSome 而言已經執行完畢。單看 x 的話，理應 x 已結束其生命週期，但由於doSome 中建立了 Closure 並傳回，x 被關閉在 Closure 中，所以 x 的生命週期就與 Closure 的生命週期相同了。如上例所示，呼叫 foo(20) 結果就是 10 + 20（因為被閉關的 x 值是 10），呼叫 foo(30) 結果就是 10 + 30。

如果沒有捕捉任何變數，那麼就是單純的（一級）函式而已。例如，在下面的例子中，函式 f 沒有形成 Closure，因為它沒有捕捉外部任何變數：

```javascript
function doSome() {
    var x = 10;
    function f(y) {
        return y + 10;
    }
    return f;
}
```

注意！ Closure 關閉的是變數，而不是變數所參考的值。下面這個範例可以證明：

```javascript
function doSome() {
    var x = 10;
    function f(y) {
        x = x + y;
        return x;
    }
    return f;
}

var foo = doSome();
console.log(foo(20));  // 30
console.log(foo(30));  // 60
```

建立函式 f 時綁定了 x 變數，形成了一個 Closure，綁定的是 x 變數，而不是數值 10（x 變數的值），因此，第一次呼叫 foo(20) 後，x 的值成了 10 + 20，再次呼叫 foo(30) 時，x 的值原本是 30，在 x = x + y 之後，x 的值就成了 30 + 30。

由於 Closure 綁定的是變數，你才可以在 Closure 中改變了被綁定變數的值，以下是另一個例子：

```javascript
var sum = 0;
[1, 2, 3, 4, 5].forEach(function(elem) {
    sum += elem;
});
console.log(sum); // 15
```

你在 Closure 中改變了 sum 的值，forEach 執行完之後，取得 sum 的值也才會是 15。

你可能會有疑問的是，如果 Closure 關閉了某個變數，使得該變數的生命週期得以延長，那麼這個會怎麼樣？

```javascript
function doSome() {
    var x = 10;
    function f(y) {
        x = x + y;
        return x;
    }
    return f;
}

var foo1 = doSome();
var foo2 = doSome();
console.log(foo1(20));  // 30
console.log(foo2(20));  // 30
```

在這個範例中，doSome 被呼叫了兩次，每次呼叫時其實都建立了個別的區域變數 x，而個別建立的 Closure 關閉了個別的 x。foo1 與 foo2 中的 x 彼此並不影響。

Closure 的應用很多，在 JavaScript 中常見用於物件私用（private）的模擬，以及名稱空間的管理等，這之後還會再看到說明。

## 參考來源

http://www.codedata.com.tw/javascript/essential-javascript-12-closure-first-class-function/