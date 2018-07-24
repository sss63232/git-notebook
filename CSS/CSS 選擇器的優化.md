# CSS 選擇器的優化

## selector讀取順序

「瀏覽器讀取你的選擇器，遵循的原則是從選擇器的右邊到左邊讀取。換句話說，瀏覽器讀取選擇器的順序是由右到左進行」

```scss
div.nav > ul li a
```

舉上面為例，瀏覽器會先找`所有 a元素`，然後再找出`其中被放在 ul li裡面的 a`，最後再進一部縮小範圍，`鎖定其中父元素為 div.nav的 a元素`。

## 關鍵選擇器 key selector

selector的最後一部份，在上例中就是 a，它將大幅決定 selector的效率。

「越具體的關鍵選擇器，其性能越高」，一個元素需要匹配的規則越少，效率越好。

## selector 效率排序

1.  id 選擇器（#myid）
2.  類選擇器（.myclassname）
3.  標籤選擇器（div,h1,p）
4.  相鄰選擇器（h1+p）
5.  子選擇器（ul > li）
6.  後代選擇器（li a）
7.  通配符選擇器（*）
8.  屬性選擇器（a[rel="external"]）
9.  偽類選擇器（a:hover,li:nth-child）


## 實例效率比較

1. ```scss
   div #id{
     ...
   }

   // 效率比下面好

   #id div{
     ...
   }
   ```

2. ```scss
   #id{
     ...
   }

   .className{
     ...
   }

   // 效率比下面好

   p#id{
     ...
   }

   p.className{
     ...
   }
   ```

3. ```scss
   #nav a{
     ...
   }

   // 效率比下面好

   #nav li a{
     ...
   }
   ```

