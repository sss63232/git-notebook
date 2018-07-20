# Fibonacci

## Concept

```javascript
// return the num at the position of Fibonacci Sequence
function fibonacci (position) {
    ...
}
    
```

Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13 ...

輸入一個位置，
return 對應 Fibonacci Sequence 該位置的數字

## Solution Code

```javascript
const fibonacci = index => {
    if (index < 0) {
        return null;
    } else if (index < 2) {
        return 1;
    } else {
        return fibonacci(index - 1) + fibonacci(index - 2);
    }
};
```

## Code from `Learning Algorithms`

```javascript
// 課程中把 Fibonacci Sequence 第一位的 position 當作 1
function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
 
fibonacci(6);
```



## References

https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/



```javascript
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

