# CSS漸變：線性漸變(linear) 與徑向漸變(radial)

## linear

要建立一個線性漸變，你需要設置**漸變方向**，可以是簡單線性、對角線或是使用角度。你還要定義**終止色**，可以一次指定多個顏色供同產生漸變效果。

### 簡單線性漸變

![basic_linear_blueleft.png](https://developer.mozilla.org/@api/deki/files/3951/=basic_linear_blueleft.png)

```scss
// 加前綴字以支援舊版瀏覽器（-webkit-, -moz-, -o-, ...）
background: -prefix-linear-gradient(to bottom, blue, white);

// 寫法一： to <漸變方向>
background: linear-gradient(to right, blue, white);
// 寫法二： <漸變起點>
background: linear-gradient(left, blue, white);
```



### 對角線漸變

![basic_linear_bluetopleft.png](https://developer.mozilla.org/@api/deki/files/3952/=basic_linear_bluetopleft.png)

```scss
// 同時指定水平及垂直兩個方向的起始點
background: linear-gradient(left top, blue, white);
backgroung: linear-gradient(to right bottom, blue, white);
```



### 指定角度漸變

![圖片描述](http://img.mukewang.com/583d38db000133af02440247.png)

漸變方向也可以用**角度**表示的話，**0deg表示從下到上**，**90deg是從左到右*；漸變是水平線和漸變線之間的角度，逆時針計算。

![linear_redangles.png](https://developer.mozilla.org/files/3811/linear_red_angles.png)

```scss
background: linear-gradient( 0deg, red, white);
background: linear-gradient( 90deg, red, white);
background: linear-gradient( 180deg, red, white);
background: linear-gradient( -90deg, red, white);
```

**注意:** 幾個瀏覽器實現前綴，在舊稿的規格中 0deg 是指右部而不是頂部。當是混合前綴和標準線性漸變時要特別注意角度的值。一個簡單的公式：90 - x = y，x 是標準用法，而 y是非標準，瀏覽器引擎前綴用法。



### 色標

在特定位置有特定的顏色。

![linear_colorstops1.png](https://developer.mozilla.org/@api/deki/files/3955/=linear_colorstops1.png)

```scss
background: linear-gradient(to bottom, blue, white 80%, orange);
```

第一個和最後一個顏色並沒有指定位置，所以位置值0％和100%將分別自動的分配給第一個和最後一個色標 。



#### 等間距色標

沒有指定位置時顏色會自動均勻的隔開。

![linear_rainbow.png](https://developer.mozilla.org/@api/deki/files/3956/=linear_rainbow.png)

```scss
background: linear-gradient(to right, red, orange, yellow, green, blue);
```



### 透明漸變

![for Transparency and gradients example](https://developer.mozilla.org/files/4275/linear_multibg_transparent2.png)

```scss
background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1)), url(http://foo.com/image.jpg);
```

