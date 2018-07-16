# Ubuntu 利用 imwheel 加快滾輪速度

Ubuntu 系統預設設定無法調整滑鼠滾輪速度，
偏偏滾輪速度又很慢...
只好依靠第三方套件 `imwheel` 提昇滾輪速度

## 安裝 `imwheel`

```shell
sudo apt install imwheel
```

## 編輯配置

```shell
vim ~/.imwheelrc
```

```shell
".*"
None, Up, Button4, 4
None, Down, Button5, 4
Shift_L,   Up,   Shift_L|Button4, 4
Shift_L,   Down, Shift_L|Button5, 4
Control_L, Up,   Control_L|Button4
Control_L, Down, Control_L|Button5
None,  Thumb1,  Alt_L|Left
None,  Thumb2,  Alt_L|Right
```

2, 3 行最後的數字就是滾輪速度，
可以自行調整，
數字越大速度越快

最下面兩行用來開啟滑鼠側鍵功能，
沒有下面兩行的話，
在 imwheel 運行時，
側鍵會失去作用

## 執行

```shell
# 執行
imwheel
# 修改設定後的重新執行
killall imwheel
imwheel
```

