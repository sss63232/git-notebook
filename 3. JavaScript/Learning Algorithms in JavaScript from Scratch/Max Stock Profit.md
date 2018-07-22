# Max Stock Profit

## Concept

```javascript
// return max profit
function maxStockProfit (priceArr) {
    ...
}
    
```

輸入一個陣列，
代表股票一天個時間點的價錢，
求最高利潤，

利潤 <  0 的話，一律給 -1

## Solution Code

```javascript
const maxStockProfit = arr => {
    const length = arr.length;
    const profitList = [];
    for (let i = 0; i < length - 1; i++) {
        const buyingPrice = arr[i];
        let profit = -1;
        for (let j = i + 1; j < length; j++) {
            const sellPrice = arr[j];
            const possibleProfit = sellPrice - buyingPrice;
            if (possibleProfit > profit) {
                profit = possibleProfit;
            }
        }
        profitList.push(profit);
    }
    return profitList.sort((a, b) => a - b).reverse()[0];
};
```

## Code from `Learning Algorithms`

```javascript
function maxStockProfit (pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  
  var changeBuyPrice = true;
  
  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
    
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  
  return maxProfit;
}
 
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);
```

## Fibonacci with Memorization

### 單純的 Fibonacci 函數屬於 O(n^2)

O(n^2) 的特性是當數入的數字越大時，
運算時間會爆炸性增長...

> fibonacci(10) ，需要執行 109 次該函式  
> fibonacci(20) ，需要執行 13259 次該函式 
> fibonacci(30) ，需要執行 1664079 次該函式

所以我們前面的函式還有很大的改善空間。

### Memoization, cache

我們可以使用類似 cache 的做法，
每次要運算 fibonacci(num) 時：

- 先檢驗 fibonacci(num) 在 cache 中是否已經有結果
- 如果有，則為該次 fibonacci(num) 之解
- 如果沒有，另行計算本次 fibonacci(num) 的解，而且算出來後要放到 cache 中

```javascript
// 原始的 fibonacci
const fibonacci = index => {
    if (index < 0) {
        return null;
    } else if (index < 2) {
        return 1;
    } else {
        return fibonacci(index - 1) + fibonacci(index - 2);
    }
};

const fibMemo = index => {
    const _cache = [];
    const _fib = index => {
        if (_cache[index]) {
            return _cache[index];
        } else if (index < 2) {
            _cache[0] = _cache[1] = 1;
        } else {
            _cache[index] =
                _fib(index - 1) + _fib(index - 2);
        }
        return _cache[index];
    };

    return _fib(index);
};

function fibMemoC(index, cache) {
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
        if (index < 3) return 1;
        else {
            cache[index] =
                fibMemo(index - 1, cache) +
                fibMemo(index - 2, cache);
        }
    }
    return cache[index];
}

console.log('--------');
console.time('a');
console.log(fibonacci(20));
console.timeEnd('a');
console.time('b');
console.log(fibMemo(20));
console.timeEnd('b');
console.time('c');
console.log(fibMemoC(20));
console.timeEnd('c');
console.log('--------');
```

output:

![1532185393345](/home/newtchen/Documents/MyWorks/git-notebook/3. JavaScript/Learning Algorithms in JavaScript from Scratch/1532185393345.png)

Fibonacci with Memorization 這種函式的演算法是屬於 O(n)，
運算的時間會只會以線性成長，
效率方面的表現優秀

## References

https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/

https://pjchender.blogspot.com/2017/09/fibonacci-cache-memoization.html
