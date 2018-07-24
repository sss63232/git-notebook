# undefined 是一個特殊值
## 範例
```javascript
var a;
console.log(a);
console.log(b);
```

結果：

![](https://1.bp.blogspot.com/-lQ9UsweWv0U/VmfMSC_XnxI/AAAAAAAAc8c/RsM5J6BMkUc/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_120915_023914_PM.jpg)

a 已經宣告過(declaration)，只是沒有值時，我們會得到undefined；而b是完全沒有經過宣告，因此會出現錯誤訊息，並且顯示b is not defined。

更精確的來說，其實undefined也是一個值。

## 總結
在 JavaScript 中，undefined 和 not defined 是不同的，undefined 是尚未給定已宣告變項的值，但是 not defined 則是該變項尚未宣告過，執行後會出現錯誤訊息！
