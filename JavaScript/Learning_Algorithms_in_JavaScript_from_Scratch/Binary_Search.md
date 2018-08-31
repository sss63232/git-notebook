# Binary Search

Concept

```javascript
// return true of false to indicate that the sortedNumArr contains key
function binarySearch (sortedNumArr, key) {
    ...
}
    
```

輸入一個排序好的陣列，
找出裡面是否還有 key

## Solution Code

```javascript
const binarySearch = (sortedArr, num) => {
    const length = sortedArr.length;
    const middleIndex = Math.floor(length / 2);
    const middleOne = sortedArr[middleIndex];
    if (middleOne === num) {
        return true;
    } else if (length === 1) {
        return false;
    } else {
        if (middleOne > num) {
            return binarySearch(
                sortedArr.splice(0, middleIndex),
                num
            );
        } else {
            return binarySearch(
                sortedArr.splice(
                    middleIndex,
                    length - middleIndex
                ),
                num
            );
        }
    }
};

console.log('--------');
console.log(
    binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 3)
);
console.log('--------');

```

## Code from `Learning Algorithms`

```javascript
function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}
 
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
```



## References

https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice