## 如何置中 Bootstrap
### 常見的 Bootstrap Grid System：
```HTML
<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset1">
	<!-- something here-->
</div>
```
### col-md-8
`col-md-8`代表在 md解析度的狀況下，div要佔據8欄。
### col-md-offset-8
`col-md-offset-2`表示是將 div往右移動2個columns，如此一來，該行的配置便會變成：2欄空的 columns ＋ 8欄div ＋ 2欄空的columns，這樣 div就置中了。