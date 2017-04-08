# SCSS技巧

## SCSS檔案結構

使用 Partials 把 CSS 分成若干個更小更易於管理的區塊。

以下為[大神文章](https://www.sitepoint.com/architecture-sass-project/)推薦結構

```
sass/ 
| 
|– base/ 
|   |– _reset.scss       # Reset/normalize 
|   |– _typography.scss  # Typography rules 
|   ...                  # Etc… 
| 
|– components/ 
|   |– _buttons.scss     # Buttons 
|   |– _carousel.scss    # Carousel 
|   |– _cover.scss       # Cover 
|   |– _dropdown.scss    # Dropdown 
|   |– _navigation.scss  # Navigation 
|   ...                  # Etc… 
| 
|– helpers/ 
|   |– _variables.scss   # Sass Variables 
|   |– _functions.scss   # Sass Functions 
|   |– _mixins.scss      # Sass Mixins 
|   |– _helpers.scss     # Class & placeholders helpers 
|   ...                  # Etc… 
| 
|– layout/ 
|   |– _grid.scss        # Grid system 
|   |– _header.scss      # Header 
|   |– _footer.scss      # Footer 
|   |– _sidebar.scss     # Sidebar 
|   |– _forms.scss       # Forms 
|   ...                  # Etc… 
| 
|– pages/ 
|   |– _home.scss        # Home specific styles 
|   |– _contact.scss     # Contact specific styles 
|   ...                  # Etc… 
| 
|– themes/ 
|   |– _theme.scss       # Default theme 
|   |– _admin.scss       # Admin theme 
|   ...                  # Etc… 
| 
|– vendors/ 
|   |– _bootstrap.scss   # Bootstrap 
|   |– _jquery-ui.scss   # jQuery UI 
|   ...                  # Etc… 
| 
| 
`– main.scss             # primary Sass file 
```

然後通過`@import`將各元素添加到`main.scss`文件中。將`main.scss`範例：

```scss
/* VENDOR - Default fall-backs and external files.
========================================================================== */

@import 'vendor/_normalize.scss';


/* BASE - Base Variable file along with starting point Mixins and Placeholders.
========================================================================== */

@import 'base/_variables.scss';
@import 'base/_mixins.scss';
@import 'base/_placeholders.scss';


/* FRAMEWORK - Structure and layout files.
========================================================================== */

@import 'framework/_grid.scss';
@import 'framework/_breakpoints.scss';
@import 'framework/_layout.scss';


/* MODULES - Re-usable site elements.
========================================================================== */

@import 'modules/_buttons.scss';
@import 'modules/_lists.scss';
@import 'modules/_tabs.scss';
```



## 更明確的變數名稱

```scss
$orange: #ffa600; 
$grey: #f3f3f3; 
$blue: #82d2e5;

$link-primary: $orange;
$link-secondary: $blue;
$link-tertiary: $grey;

$radius-button: 5px;
$radius-tab: 5px;

// 比下面好

$link: #ffa600;
$listStyle: none;
$radius: 5px;
```

## Mixins的使用時機要審慎思考

Mixins 適合那種需要通過**傳遞參數**來快速創建樣式的情形。否則`@include`定義好的 Mixins 和直接在 SCSS檔案中複製貼上沒差多少，因為它輸出成 CSS時，會生成很多重複的代碼，導致 CSS檔案越來越臃腫。

以下舉例好的狀況:

```scss
@mixin rounded-corner($arc) {
  -webkit-border-radius: $arc;  
     -moz-border-radius: $arc;
          border-radius: $arc;  
}

.tab-button {
     @include rounded-corner(5px); 
}

.cta-button {
     @include rounded-corner(8px); 
}
```

`rounded-corner`這個 Mixins 可以在任何情況下使用，僅僅通過改變其參數`$arc`的值，將得到不同的代碼。

下面是不好的 Mixins使用方式：

```scss
@mixin cta-button {
    padding: 10px;
    color: #fff;
    background-color: red;
    font-size: 14px;
    width: 150px;
    margin: 5px 0;
    text-align: center;
    display: block;
}

.btn{
  @include cta-button;
}
```

這個 Mixins 並沒有傳遞任何參數，輸出成 CSS 後的結果跟直接複製貼上沒什麼差別，更建議[使用`%placeholder`來創建](http://www.sitepoint.com/sass-mixin-placeholder/)，也就是下一點要提到的方式。



## 適時使用Placeholder

[%placeholder](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_) 可以用於會多次使用的 CSS區塊，它的最大優點在於不會產生重複的 CSS程式碼。

```scss
%bg-image {
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.image-one {
    @extend %bg-image;
    background-image:url(/img/image-one.jpg");
}

.image-two {
    @extend %bg-image;
    background-image:url(/img/image-two.jpg");
}
```

編譯出來的 CSS：

```CSS
.image-one, .image-two {
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.image-one {
    background-image:url(/img/image-one.jpg") ;
}

.image-two {
    background-image:url(/img/image-two.jpg") ;
}
```

就算多個 selector 都 @extend 了相同的`%placeholder`，%placeholder 裡面的 CSS 最後也只會輸出一遍。而沒有被 @extend 的`%placeholder`區塊是不會被編譯成 CSS的，可以放心的寫～

和第三點的 Mixins 配合在一起使用，既可保持 Mixins 靈活性，而且還可以保持代碼的簡潔與乾淨。

```scss
/* PLACEHOLDER 
============================================= */

%btn {
    padding: 10px;
    color:#fff;
    curser: pointer;
    border: none;
}

/* BUTTON MIXIN 
============================================= */

@mixin  btn-background($btn-background) {
    @extend %btn;
    background-color: $btn-background;
    &:hover {
        background-color: lighten($btn-background,10%);
    }
}

/* BUTTONS
============================================= */

.cta-btn {
    @include btn-background(green);
}

.main-btn {
    @include btn-background(orange);
}

.info-btn {
    @include btn-background(blue);
}
```

## 需要運算時，用 Function 

使用 [Functions](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions) 來進行計算。Sass 的函數不會輸出任何 CSS 代碼。

```scss
@function calculate-width ($col-span) {
    @return 100% / $col-span
}

.span-two {
    width: calculate-width(2); // spans 2 columns, width = 50%
}

.span-three {
    width: calculate-width(3); // spans 3 columns, width = 33.3%
}
```

## 元件分類歸納

將所有的 Mixins、Placeholder、Functions 和變量放置在一起。將他們放置一起，可以確認他們可以很快的編寫以及將來重複使用。

整站的元素應該放在一個`base`文件夾中。`base`文件夾應該包括全局的變量，如字體和顏色等：

```scss
$font-primary: 'Roboto', sans-serif; 
$font-secondary: Arial, Helvetica, sans-serif;

$color-primary: $orange;
$color-secondary: $blue;
$color-tertiary: $grey;
```

對於特定模塊的 Mixins、Functions 和變量，為了保證模塊能正常運行，需要將這些集中放置在`module`文件中：

```scss
$tab-radius: 5px;
$tab-color: $grey;
```