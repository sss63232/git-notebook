# Reverse Array In Place 就地倒反陣列

## Concept

```javascript
// return the same arr, but it has to be reversed
function reverseArrayInPlace (arr) {
    ...
}
```

不建立新的 arr，
直接將輸入的 arr 改變順序

不可以使用 `array.reverse()` 

## Solution Code

```javascript
const reverseArrayInPlace = arr => {
    const length = arr.length;

    // 使用 ES6 的交換語法，
    // 將第一個數與倒數第一個數交換,
    // 第二個數與倒數第二個數交換...
    // 要注意這個迴圈的結束條件，
    // 因為是前後交換，所以我們只需要做到 arr 長度一半就好
    for (let i = 0; i < length / 2; i++) {
        [arr[i], arr[length - 1 - i]] = [arr[length - 1 - i], arr[i]];
    }
    return arr;
};

console.log('--------');
console.log(reverseArrayInPlace([3, 4, 5, 6]));
console.log('--------');
```

## Code from `Learning Algorithms`

```javascript
function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  
  return arr;
}
 
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);
```



## References

https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/

