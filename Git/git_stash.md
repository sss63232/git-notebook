# git_stash

## 常用

`git stash`就像是把手邊還沒整理好的東西，先全部放在一個箱子裡，等有空時再去箱子拿回來繼續處理。

1. `git stash save "RWDmobile"`
   把手邊的資料全部放進RWDmobile的箱子裡
2. `git stash pop "名字"`
   終於忙完了，回來繼續整理，取回RWDmobile的箱子，並把箱子丟掉。
3. `git stash drop`
   把箱子和裡面的資料，都一起丟掉。
4. `git stash apply 名字`
   和pop一樣，取回箱子的資料，但不把箱子丟掉。
5. `git stash list`
   查詢我有幾個暫存的箱子

## References

[Git 筆記：我想回到過去，到底要怎麼坐時光機？ \| Hazel Wu | 22'mm](https://wualnz.com/Git-%E7%AD%86%E8%A8%98%EF%BC%9A%E6%88%91%E6%83%B3%E5%9B%9E%E5%88%B0%E9%81%8E%E5%8E%BB%EF%BC%8C%E5%88%B0%E5%BA%95%E8%A6%81%E6%80%8E%E9%BA%BC%E5%9D%90%E6%99%82%E5%85%89%E6%A9%9F%EF%BC%9F/)