# 前端框架比較

現代JS框架存在的根本原因是**保持UI與狀態同步**

為什麼在我們需要選擇框架，因為需求變了。如果只寫一個純展示信息的頁面，沒有任何交互功能的頁面，我們是不需要選擇框架的，我們只需要寫幾行CSS和HTML就可以完成任務。

所以是因為我們面臨的需求變得複雜了，我們的應用經常需要在**運行時**做一些交互。

## 聲明式與命令式

Vue, React, Angular 和jQuery之間的區別只有一點，**聲明式與命令式**。

用jQuery去操作DOM的目的是什麼？是為了**局部更新視圖**，換句話說是為了**局部重新渲染**。

### 命令式 jQuery

直接操作 DOM

```javascript
$('.box')  .append('<p>Test</p>')  .xxx()  .yyy() ...
```

### 聲明式

**描述狀態與視圖之間的映射關係**

用Vue來實現同樣的需求，如果細分來看，我們在邏輯上只有一個行為，只有狀態。而jQuery是兩個行為，狀態+DOM操作。

讓我們可以把關注點只放在狀態的維護上。這樣一來當應用複雜後，其實我們的思維，我們管理代碼的方式只在狀態上，所有的DOM操作都不用關心了，可以說大大降低代碼維護的複雜度。

## 頁面重新渲染

其實**現代主流框架要解決的最本質的問題是頁面重新渲染**，只是不同框架之間的解決方案有差異，那麼什麼是渲染？將狀態生成DOM插入到頁面展示在用戶界面上，這一套流程叫做渲染。

### 舊時代

不使用任何框架的話，常用的方式是用狀態生成一份新的DOM，然後用innerHTML把舊DOM替換了。

### VirtualDOM

JavaScript 模擬 DOM 然後進行 diff，

減少 Reflow 與 Repaint

## 現代框架的重點

- 資料與 UI 分離
- 模組化的 UI, Component
- 操作 DOM 上的效能提升

### Angular

- TypeScript
- 大而全

### React

- 單向數據流, Single Source of Truth (SSOT) 
- jsx 融合模板與樣式
- view = f(state)
- functional programming, immutable, 減少 side effect

### Vue

- 雙向數據綁定的mvvm框架， v-model
- 用 Object.defineProperty, getter, setter 實現數據劫持與訂閱模式
- 模板, 樣式和 JavaScript代碼的分開
- 依賴追蹤系統的存在，當任意數據變動的時，Vue的每一個組件都精確地知道自己是否需要重繪，所以並不需要手動優化。當數據特別多的時候vue中的watcher也會特別多，從而造成頁面卡頓