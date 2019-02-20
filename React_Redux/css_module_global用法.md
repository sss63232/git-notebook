# css_module_global用法

在使用 CSS module 中，
要選擇外部 CSS 樣式表中的 class name 時，要用 global 關鍵字

## example

```scss
.WrappedFlatpickrInput, .FlatpickrInput {
  input {
    font-size: $inputFontSize;
    text-indent: 12px;
    height: $formElementHeight!important;
    border-radius: 2px!important;
    border: solid 1px #e0e4e9;
  }
  :global(.y-icon.fi-calendar) {
    color: #979ba7;
    line-height: $formElementHeight;
  }
}

```

