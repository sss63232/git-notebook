# Sieve of Eratosthenes

## Concept

```javascript
// return an array contains primes which is < num
function sieveOfEratosthenes(num){
    ...
}
```

輸入一個數 num，
找出所有小於 num 的質數(prime)

## 質數 Prime

- 質數 (prime number): 指在大於 1 的自然數中，除了 1 和該數自身外，無法被其他自然數整除的數。
- 合數 (composite number)：指在大於 1 的自然數中，因數除了 1 和其本身外具有另一因數的正整數。
- 0 和 1 既不是質數也不是合數。

![1532252982130](./1532252982130.png)

## Solution Code

先列出所有範圍內正整數，
0, 1 不為質數，先排除，
從 2 開始找質數，同時把它們倍數都篩掉。

所以從 2 開始，篩掉所有 2N，
再來是 3，篩掉所有 3N，
4 在 2N 時就已經被篩掉了，
所以再來是 5，篩掉所有 5N，
以此類推...

```javascript
const sieveOfEratosthenes = num => {
    // 我們要用 Array 的 index 來代表數字，所以要先建立一個長度為 num+1 的 array
    // 並先全預設為 true
    const isPrimeList = new Array(num + 1).fill(true);
    // 0, 1 不是 prime，一開始就可以先排除
    isPrimeList.fill(false, 0, 2);

    // 從 2 開始檢查起一個個檢查
    for (let i = 2; i <= num; i++) {
        const val = isPrimeList[i];
        // 如果 i 是 prime ，則它所有的倍數都會是 composite
        if (val) {
            for (let j = 2; i * j <= num; j++) {
                isPrimeList[i * j] = false;
            }
        }
    }

    // 收集 value 為 true 的 index
    const primesList = [];
    isPrimeList.forEach((val, index) => {
        if (val) primesList.push(index);
    });

    return primesList;
};

console.log(sieveOfEratosthenes(100));   
/*
[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
*/
```

## 優化

其實要找出 num 之前的所有 prime，
不需要一一對每一個數進行 `篩掉其所有倍數 `的動作，
只需要檢查到 num 的平方根就可以了。

要解釋這個需要先從如何判斷一個數是否為質數開始

### 判斷某數 N 是否為質數

要判斷某數 N 是否為質數的方法為：

> 判斷 (1 ～ N 的平方根) 這個範圍中有無 N 的因數，有的話，N 便是合數

原理在於，

> 先假設 N 是合數，a × b = N， 則 a, b 兩個數中必有一個大於或等於 √N，一個小於或等於 √N。 因此，只要小於或等於 √N 的數中（1 除外）找不到可以整除 N 的數，也就是 N 的因數，則 N 一定是質數。 
>
> [判斷質數合數的「開根號法」的數學原理？怎麼推導的？](https://zhidao.baidu.com/question/50140553.html) @ 百度

### `篩掉質數的所有倍數` 到 num 的平方根

要找 1~num 間的所以質數，
從 2 開始進行 `篩掉其所有倍數 ` 的動作，
一路篩到 num 的平方根就夠了

因為我們已經知道，
假設一個正整數 N 是合數，
則它必有至少一個小於或等於 √N 的質因數。

反過來說，
我們如果找到小於或等於 √N 的所有質數，
則 N 一定存在於這些質數的倍數中。

所以回到我們的函式 `sieveOfEratosthenes(num)` 中，
一開始我們有一堆數字，範圍是 1～ num，
只要我們找到（1 ～ num 的平方根）這個範圍中的所有質數，
並且篩掉所有它們小於或等於 num 的倍數，
就可以確保留下來的都是質數。

舉例來說，要找 1~25 間的質數，
只要先找到 1~5 之間的質數，
並且刪掉他們所有小於等於 25 的倍數，
剩下的就是答案。

要找 1~50 間的質數，
找到 1~7 間的質數，
刪掉它們所有小於等於 50 的倍數。

## Solution Code

總結而言：

> 要得到自然數 num 以內的全部質數，
> 必須把不大於 num 平方根的所有質數的倍數剔除，
> 剩下的就是質數

```javascript
// 基本作法與上面相同，只有檢查範圍縮小成 2~ num 的平方根
const sieveOfEratosthenesFaster = num => {
    const isPrimeList = new Array(num + 1).fill(true);
    isPrimeList.fill(false, 0, 2);

    // 從 2 開始檢查到 num 的平方根
    for (let i = 2; i <= Math.sqrt(num); i++) {
        const val = isPrimeList[i];
        if (val) {
            for (let j = 2; i * j <= num; j++) {
                isPrimeList[i * j] = false;
            }
        }
    }

    const primesList = [];
    isPrimeList.forEach((val, index) => {
        if (val) primesList.push(index);
    });

    return primesList;
};

const num = 1000;
console.time('a');
console.log(sieveOfEratosthenes(num));
console.timeEnd('a');
console.time('b');
console.log(sieveOfEratosthenesFaster(num));
console.timeEnd('b');
/*
[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
*/
```

## Code from *Stack Overflow*

目前看到最簡潔的實現方式，
效能也很好。

From https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100/12287599#12287599

```javascript
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
```



## Resources

https://www.wikiwand.com/zh-tw/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95

http://acm.nudt.edu.cn/~twcourse/PrimeNumberGeneration.html

