# ES6 實踐經典排序法：合併排序法, 快速排序法

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

視覺化解釋排序法：[VisuAlgo - Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix)](https://visualgo.net/en/sorting)

## 經典的排序法

合併排序法與快速排序法都用到遞迴的概念，
執行起來比較快速，
在實務上經常使用。

以下的範例程式碼，
可以直接貼到瀏覽器 console 中看結果

### 合併排序法（Merge Sort）

將 Array 分成 arr1, arr2 兩份子集，
每一份子集再繼續分割成兩個子集，
直到子集中只剩下一個元素，無法再分割。

接著兩兩合併成一個新 Array，
同時進行排序。

![img](/home/newtchen/Documents/MyProjects/git-notebook/source/img/merge.png)

![](/home/newtchen/Documents/MyWorks/git-notebook/ResourceForArticles/img/merge.png)

來源：http://www.java2novice.com/java-sorting-algorithms/merge-sort/

```javascript
const mergeSort = arr => {
    /**
     * 將兩個 sorted array 合成一個 sorted array
     *
     * 這個 function 先提出來寫好，
     * 便於釐清後面 mergeSort 的主體邏輯
     */
    const getMergedSortedArr = (arr1, arr2) => {
        arr1 = [...arr1];
        arr2 = [...arr2];

        // 兩個 array 依序拿出第一個來比大小，
        // 小的就先放進最終的 finalArr 中
        const finalArr = [];
        while (arr1.length && arr2.length) {
            const arr1FirstNumIsSmaller = arr2[0] > arr1[0];
            const smallerNum = (arr1FirstNumIsSmaller
                ? arr1
                : arr2
            ).shift();
            finalArr.push(smallerNum);
        }

        // 執行到這裡代表 arr1, arr2 一個空了，一個沒空
        // 所以我們要找出沒空那一個 array，
        // 並把它剩下的數字全部填到 finalArr 的最後面

        return finalArr.concat(
            arr1.length > 0 ? arr1 : arr2
        );
    };

    /**
     * 正式開始進行 "合併排序"
     */
    const _mergeSort = arr => {
        const length = arr.length;
        // recursive 的跳出條件
        if (length <= 1) return arr;
        // 找中間點
        const medianIndex = Math.floor(length / 2);
        // 取第一項到中間點，不含中間點
        const arr1 = arr.slice(0, medianIndex);
        // 取中間點到最後
        const arr2 = arr.slice(medianIndex);
        return getMergedSortedArr(
            _mergeSort(arr1),
            _mergeSort(arr2)
        );
    };

    return _mergeSort(arr);
};

console.log('--------');
console.log('unsorted arr', testArr);
console.log('mergeSort arr', mergeSort(testArr));
console.log('--------');

```

### 快速排序法

很重要的一種排序方法！

運用 [分治法（Divide and conquer）](https://godbasin.github.io/2017/07/16/quick-sort/) 概念，
使用廣泛，需要好好了解。

排序邏輯：

#### 1. pivot

從 Array 中取一個數為 pivot，可以翻譯為 "基準"，
一個好的 pivot 可以讓排序更快速完成，
所以如何找到好的 pivot 是一個可以另外提出來研究的問題，
我們先暫時不考慮。

#### 2. partition

然後將 Array 切分成三組，
分別是 
left_array( 都是小於 pivot 的數 ), 
pivot( 自己一組 ), 
right_array( 都是大於 pivot 的數 )，
這個動作稱為 partition

#### 3. recursive

對 left_array, right_array 兩個子集重複進行第一步與第二步，
直到子集長度為 0 or 1，
該子集便是排序完成，
之後就可以向上合併

#### 簡單實現

假設第一個數是 pivot，
不影響原始 array，
直觀，但比較差勁

```javascript
const quickSort = arr => {
    arr = [...arr];

    if (arr.length < 2) return arr;

    // 假設第一個數是 pivot，
    // 同時將它移出主 arr
    const pivot = arr.splice(0, 1)[0];

    // arr 去除 pivot 後要分成兩堆，
    // 大於 pivot 跟小於 pivot
    const left_array = [];
    const right_array = [];
    arr.forEach(num => {
        if (num > pivot) {
            right_array.push(num);
        } else {
            left_array.push(num);
        }
    });

    // 遞迴
    return [
        ...quickSort(left_array),
        pivot,
        ...quickSort(right_array),
    ];
};

console.log('--------');
console.log('unsorted arr', testArr);
console.log('quickSort arr', quickSort(testArr));
console.log('--------');

```

#### in-place 版本



## References

http://huli.logdown.com/posts/2223627-review-the-classical-sort-algorithm-with-javascript

https://visualgo.net/en/sorting

https://hiskio.com/courses/127