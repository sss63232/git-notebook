# CSS3 動畫效果



整理至 https://eyesofkids.gitbooks.io/css3/content/contents/transitions.html



## CSS動畫分兩種

使用 CSS製作網頁動畫，主要可以分成兩大類：

1. CSS3轉場/過渡(transitions): 主要以開始狀態、結束狀態與持續期間(duration)三種參數，以及可指定的漸變函數(transition timing function)，將DOM元素或網頁上的物件進行轉變。
2. CSS3動畫(animations): 又稱為關鍵影格(Keyframe)動畫，可以加入關鍵影格，提供許多動畫片段的組合。

## 兩者主要的相同與不同

### 同

- 都是使用CSS定義，然後監聽DOM元素的改變作出動畫效果
- 都可以設定漸變函數(transition timing function)，控制動畫的運動(效果展現)的曲線
- 都可以設定持續期間(duration)，控制動畫持續的時間
- 都有對應的event(事件)，可以送出動畫的狀態，可讓JavaScript再加以監聽或控制(可程式化)
- 都可以用視覺化方式看到CSS屬性正在改變的狀態

### 異

#### 觸發方式

轉場(transitions)觸發使用`:hover`僞(pseudo)類別為最經常使用，其他可觸發的還有`:active`、`:focus`、`:checked`等等，另一種方式是使用JavaScript語言動態加入或移除CSS類別，更多範例可以參考[這一篇範例](https://www.impressivewebs.com/css3-transitions-without-hover/)。

動畫(animations)不需要觸發，當你定義好後，頁面一載入就會開始進行動畫。

#### 重覆播放(Looping)

轉場(transitions)沒有指定循環播放的屬性可用。

動畫(animations)有`animation-iteration-count`屬性可指定循環播放的次數，或是用"infinite"指定為不停地重覆播放。

#### 定義關鍵影格(Keyframes)/中途點

轉場(transitions)沒有這特性。動畫的撥放就是從開始到結束。

動畫(animations)可以額外定義關鍵影格(Keyframes)，可以製作更複雜的動畫效果。

> 註: 有一個常會搞混的`transform`的CSS的新屬性，它可以把網頁上的物件或元素進行變形、翻轉或2d與3d的效果，它並不是與動畫有關的屬性，你可以把它當成是類似字體顏色大小、透明度(opacity)的屬性。也可以搭配CSS動畫來使用。

