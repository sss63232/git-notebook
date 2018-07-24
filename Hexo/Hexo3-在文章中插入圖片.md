---
title: Hexo3 在文章中插入圖片
date: 2018-07-12 16:36:51
categories:
tags:
- hexo
---
Hexo 的文章都是以 .md 的形式存在，
要插入圖片有兩種方式：

1. 使用 markdown 語法插入圖片
2. Hexo `post_asset_folder` 搭配 Hexo 3 新增的外掛

<!--more-->
## markdown 語法

```markdown
![ alt text ]( 圖片位置 )
```

### alt text

就是 html 中的 Alt 標籤啦，用來描述圖片

### 圖片位置

圖片可以放在 local 或是網路上，

如果是網路位置的話，
就是直接填入 URL ，
沒有什麼特別的

要注意的如果是要把圖片放在 local 的話，
要在 source 資料夾中多開一個 image 資料夾，
到時候 `hexo g` 後，
整個資料夾會被直接複製到 public 中，
這樣就可以跟文章一起被 deploy 出去

## Hexo `post_asset_folder`

修改 `_config.yml`

```yaml
post_asset_folder: true
```

開啟 `post_asset_folder` 後，
在建立檔案時，
Hexo 會自動建立一個與文章同名的資料夾，
這個資料夾就是讓我們放圖片的

### 使用方式

在文章中使用以下程式碼

```
{% asset_img '檔名.png' %}
```

## References

https://www.zhihu.com/question/21065229

https://hexo.io/zh-tw/docs/asset-folders.html