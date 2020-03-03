# Max Stock Profit

## Concept

```javascript
// return max profit
function maxStockProfit (priceArr) {
    ...
}
    
```

輸入一個陣列，
代表股票一天各個時間點的價錢，
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



## References

https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/
