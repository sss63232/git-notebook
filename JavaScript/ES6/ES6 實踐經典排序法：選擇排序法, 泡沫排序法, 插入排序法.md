# ES6 實踐經典排序法：選擇排序法, 泡沫排序法, 插入排序法

最近覺得需要複習一下常用的排序方法，
因為已經發生好幾次工作的時候需要用到排序，
雖然記得各種排序大概架構，
寫起來卻好像不是很順手...

看來記憶需要更新一下、加深印象了，
同時也正好可以拿來熟悉一下 es6 的 array 處理方法

## 產生隨機測試陣列

為了測試排序結果，
需要每次產生一個隨機陣列

```javascript
// 產生 min 到 max 間的亂數，包含 min, max
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 產生長度為 length 的隨機陣列
const getTestArr = ({ length = 10, min = 0, max = 10 }) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomNum(min, max));
  }
  return arr;
};

// 產生一個 10項，每項為 0~100 的 array
const testArr = getTestArr({ max: 100 });
```

## 排序過程動畫

動畫解釋排序法可以看超猛網站：[VisuAlgo - Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix)](https://visualgo.net/en/sorting)，印象會更深刻

## 經典的排序法

剛好看到 Huli 大大的 [一起用 JavaScript 來複習經典排序法吧！](http://huli.logdown.com/posts/2223627-review-the-classical-sort-algorithm-with-javascript)，
所以我也決定要自己試著實做出這些排序法。

這次先實踐效率較差的三種演算法，
以下的範例程式碼，
可以直接貼到瀏覽器 console 中看結果

### 選擇排序法（Selection Sort）

一次次找到最小的值，
並把它丟到 array 最左邊，
也可以想成先找到最小的值，
然後找第二小的值、第三小的值...

整個排序法分為兩大迴圈，
外迴圈控制要把 testArr 每一項跑一遍，
內迴圈控制要把 minNum 與其後的每一項比大小

```javascript
const testArr = getTestArr({ max: 100 });
const selectionSort = arr => {
  let cloneArr = [...arr];
  // 外迴圈，整個 cloneArr 都要跑過一次，所以可以用 foreach
  cloneArr.forEach((num, i) => {
    // 每一次都會假設 i 最小
    let minIndex = i;
    let minNum = num;
    // 內迴圈，目的是要取出 i 項之後最小的值
    for (let j = i; j < cloneArr.length; j++) {
      const num = cloneArr[j];
      if (minNum > num) {
        minNum = num;
        minIndex = j;
      }
    }
    // 對調
    [cloneArr[i], cloneArr[minIndex]] = [cloneArr[minIndex], cloneArr[i]];
  });
  return cloneArr;
};

console.log('--------');
console.log('sort', selectionSort(testArr));
console.log('--------');

```

### 泡沫排序法（Bubble Sort）

兩兩比對，大的數往右邊丟，
所以邏輯是先找出最大的值，
然後找第二大的值、第三大的值...

也是基本分兩個迴圈：
外迴圈決定做幾輪比對，
沒有優化的狀況下，
array 有幾項就做幾輪。

內迴圈為"兩兩比對"迴圈，
要注意的是兩兩比對的終點 index 會隨每一輪外迴圈而左移，
因為每一輪的最右邊都是已知的最大值

```javascript
const testArr = getTestArr({ max: 100 });
const bubbleSort = arr => {
  let cloneArr = [...arr];

  const cloneLength = cloneArr.length;
  const cloneEndIndex = cloneLength - 1;
  // cloneArr 有幾項就做幾輪
  cloneArr.forEach((num, i) => {
    // 兩兩比對的最後一個 index，
    // 外迴圈每做完一輪，兩兩比對就可以少比一個
    const endIndex = cloneEndIndex - i;
    for (let j = 0; j < endIndex; j++) {
      const pre = cloneArr[j];
      const next = cloneArr[j + 1];
      if (pre > next) [cloneArr[j], cloneArr[j + 1]] = [cloneArr[j + 1], cloneArr[j]];
    }
  });
  return cloneArr;
};

console.log('--------');
console.log('bubbleSort', bubbleSort(testArr));
console.log('--------');
```

Bubble Sort 還可以增加對最佳狀況的判斷，
也就是大小一開始就排好的情形，
由內迴圈(兩兩比對迴圈)判斷，
只要某一輪兩兩比對都沒有成功交換過，
就代表 array 已經排序完成。

```javascript
const testArr = getTestArr({
  max: 100,
});
const bubbleSortWithFlag = arr => {
  let cloneArr = [...arr];

  const cloneLength = cloneArr.length;
  const cloneEndIndex = cloneLength - 1;

  // flag 預設為 false
  let isSorted = false;
  // 有機會可以中斷迴圈，所以不用 forEach
  for (let i = 0; i < cloneLength && !isSorted; i++) {
    const endIndex = cloneEndIndex - i;
    // 每進一輪就將 flag 設 true，
    // 這樣只要兩兩比對迴圈一次都沒有交換，
    // 外迴圈下一輪就不會進來了
    isSorted = true;

    for (let j = 0; j < endIndex; j++) {
      const pre = cloneArr[j];
      const next = cloneArr[j + 1];
      if (pre > next) {
        [cloneArr[j], cloneArr[j + 1]] = [cloneArr[j + 1], cloneArr[j]];
        // 只要兩兩比對有成功交換一次，
        // 就代表還不是最佳排序
        isSorted = false;
      }
    }
  }

  return cloneArr;
};

console.log('--------');
console.log(`unSorted arr`, testArr);
console.log('bubbleSortWithFlag arr', bubbleSortWithFlag(testArr));
console.log('--------');
```

外迴圈用倒數的，
這樣外迴圈的 index 可以直接當內迴圈的 endIndex 用

```javascript
const bubbleSort = arr => {
    arr = [...arr];

    const length = arr.length;

    // round
    let isSorted = false;
    for (let i = length - 1; i > 0 && !isSorted; i--) {
        // 比對換位
        isSorted = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }
    }

    return arr;
};
```



### 插入排序法（Insertion Sort）

打麻將或完撲克牌時我們很自然會用的排序法，
假設從牌面的最左邊開始好了，
第一輪就會從左邊數來第二張牌開始，
姑且稱它為 "unsortedCard"，
第二輪 "unsortedCard" 就是左邊數來第三張牌...以此類推，
有 n 項，便有共 n-1 輪

我們每一輪的任務便是，
讓 "unsortedCard" 一一跟它左邊的牌比大小並交換位置，
就像氣泡排序法一樣，
直到正確的位置

```javascript
//// 這是我一開始自己思考後的解法
const insertionSort = arr => {
  const cloneArr = [...arr];
  const cloneLength = cloneArr.length;
  // 第一張牌沒有可以比的對象，
  // 所以從第二張牌開始進行插入排序
  for (let i = 1; i < cloneLength; i++) {
    const unsortedCard = cloneArr[i];
    // 這一輪 "unSortedCard" 的位置，
    // 有機會往左移動
    let unsortedIndex = i;
    // j 是往前第幾張牌的 index
    for (let j = 1; j < i + 1; j++) {
      const sortedIndex = i - j;
      if (cloneArr[sortedIndex] > unsortedCard) {
        [cloneArr[unsortedIndex], cloneArr[sortedIndex]] = [cloneArr[sortedIndex], cloneArr[unsortedIndex]];
        // unsortedCard 與左邊一張牌交換後，
        // 位置 index 也要更新
        unsortedIndex--;
      } else {
        // 如果 unsortedCard 比 sortedCard 大的話，
        // 那就是位置正確了
        break;
      }
    }
  }
  return cloneArr;
};

//// 這是參考範例後的解法
// 主要差在，既然我的內迴圈有用 break，
// 代表迴圈次數並不固定，
// 那就可以使用 while 迴圈

const insertionSortWithWhile = arr => {
  const cloneArr = [...arr];
  const cloneLength = cloneArr.length;

  for (let i = 1; i < cloneLength; i++) {
    const unsortedCard = cloneArr[i];
    let unsortedIndex = i;

    while (cloneArr[unsortedIndex - 1] > unsortedCard) {
      [cloneArr[unsortedIndex - 1], cloneArr[unsortedIndex]] = [cloneArr[unsortedIndex], cloneArr[unsortedIndex - 1]];
      unsortedIndex--;
    }
  }

  return cloneArr;
};
console.log('--------');
console.log('unsorted arr', testArr);
console.log('insertionSort arr', insertionSort(testArr));
console.log(`insertionSortWithWhile arr`, insertionSortWithWhile(testArr));
console.log('--------');
```

## References

http://huli.logdown.com/posts/2223627-review-the-classical-sort-algorithm-with-javascript

https://visualgo.net/en/sorting

https://hiskio.com/courses/127