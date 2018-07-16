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
None,      Up,   Button4, 5
None,      Down, Button5, 5
Control_L, Up,   Control_L|Button4
Control_L, Down, Control_L|Button5
Shift_L,   Up,   Shift_L|Button4
Shift_L,   Down, Shift_L|Button5
```

2, 3 行最後的數字就是滾輪速度，
可以自行調整，
數字越大速度越快

## 執行

```shell
# 執行
imwheel
# 修改設定後的重新執行
killall imwheel
imwheel
```

