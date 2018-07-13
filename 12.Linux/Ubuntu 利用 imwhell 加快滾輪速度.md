# Ubuntu 利用 imwhell 加快滾輪速度

## 安裝 `imwheel`

```shell
sudo apt install imwheel
```

## 編輯配置

```shell
vim ~/.imwheelrc
```

```shell
None,      Up,   Button4, 4
None,      Down, Button5, 4
Control_L, Up,   Control_L|Button4
Control_L, Down, Control_L|Button5
Shift_L,   Up,   Shift_L|Button4
Shift_L,   Down, Shift_L|Button5
```

## 執行

```shell
imwheel
# 重新執行
imwheel kill
```

