# Mean Median Mode

## Concept

```javascript
// return an object, which contains the mean, median and mode of the arr
function meanMedianMode (arr) {
    ...
}
```

計算輸入 arr 的平均數, 中位數, 眾數

## Solution Code

```javascript
const meanMedianMode = arr => {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr),
    };
};

// 平均數
const getMean = arr => {
    // 用 Array.prototype.reduce() 來進行加總 array 的加總
    const sum = arr.reduce(
        (preValue, curValue) => preValue + curValue
    );
    return sum / arr.length;
};

// 中位數
const getMedian = arr => {
    // 由小到大排序，要注意 Array.prototype.sort() 中的參數 compareFunction 的寫法
    // 如果不給 Array.prototype.sort() 參數 compareFunction 的話，會將 array 每一項轉 string 後，再依照 ASCII 排序
    arr.sort((a, b) => a - b);

    const length = arr.length;
    const halfLength = length / 2;
    const isOddLength = length % 2 === 1;

    if (isOddLength) {
        return arr[Math.floor(halfLength)];
    } else {
        // 長度為偶數時，中位數是最中間兩項的平均數
        const sumOfMiddleTwo =
            arr[halfLength - 1] + arr[halfLength];
        return sumOfMiddleTwo / 2;
    }
};

// 眾數，出現最多次的數
const getMode = arr => {
    const hashTable = {};
    arr.forEach(num => (hashTable[num] = 0));
    arr.forEach(num => hashTable[num]++);

    let maxFrequencyValue = 0;
    // 最後輸出的眾數為 array 形式，因為有可能有出現次數相當的數
    let mode = [];
    Object.keys(hashTable).forEach(key => {
        const frequencyValue = hashTable[key];
        if (frequencyValue > maxFrequencyValue) {
            mode = [key];
            maxFrequencyValue = frequencyValue;
        } else if (frequencyValue === maxFrequencyValue) {
            mode.push(key);
        }
    });

    // 如果每一項的出現次數都相同，則沒有眾數
    if (mode.length === arr.length) mode = null;

    return mode;
};

console.log('--------');
console.log(testArr);
console.log(meanMedianMode(testArr));
console.log('--------');
```

## Code from `Learning Algorithms`

```javascript
function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}
 
function getMean(array) {
  var sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  
  var mean = sum / array.length;
  return mean;
}
 
function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;
  
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  
  return median;
}
 
function getMode(array) {
  var modeObj = {};
  
  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  
  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
 
 
meanMedianMode([9,10,23,10,23,9]);
```



## References

https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce