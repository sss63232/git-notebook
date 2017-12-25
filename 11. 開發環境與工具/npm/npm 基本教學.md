# npm 基本

## 安裝套件

### 兩種安裝類型：

1. Local 本地：安裝在該專案資料夾內，相關指令也只能在該專案資料夾中運作。
2. Global 全域：不管在哪個位置都可以使用該套件。



### npm 安裝指令

```bash
// 列出所有npm指令
npm
// 以本地模式安裝套件
npm install <package name>
npm install passport
//以全域模式安裝套件
npm install -g <package name>
npm install -g coffee-script
```



### 使用套件

通常是在自己的 code 前面加上

```javascript
var package-name = require("package-name");
```

就可以在下面的 code 中使用該套件了。當然，套件的詳細用法還是要好好閱讀該套件的 README 喔！

## 管理套件

### package.json

package.json 簡單來說就是一個套件的目錄，上面會紀錄套件的名稱與版本。

#### 為現有專案建立 package.json

如果你已經有一個既有專案，在專案資料夾裡面也已經抓了很套件，那你可以執行指令

```
npm init
```

回答一些設定問題（如專案名稱、作者之類的）後，npm 就會自動幫你依據現有的套件建立起一份 package.json 了。

通常專案在上傳至 GitHub 等地方時，為了節省空間，我們會在 .gitignore 中加一行 `node_modules/` 去忽略套件上傳，因為只要專案中有 package.json 在，clone 專案回去的人可以自行利用 `npm install` 把套件一次準備妥當。

#### 安裝套件指令 

```bash
// 純下載套件
npm install <package-name> 

// 下載同時紀錄到 package.json 中
npm install <package-name> --save 

// 下載同時紀錄到 package.json devDependencies中
npm install <package-name> --save-dev

// 安裝所有在 package.json 上的套件
npm install

// 安裝所有在 package.json 上非 devDependencies 的套件
NODE_ENV=production npm install
```

### 刪除套件指令

```bash
// 移除本地端套件，不移除package.json紀錄
npm uninstall <package name>
npm uninstall passport
// 移除套件同時刪除 package.json 紀錄
npm uninstall --save <package name>
npm uninstall --save passport

// 移除套件同時刪除 devDependencies
npm uninstall --save-dev mocha
npm uninstall --save-dev mocha

// 移除全域套件
npm uninstall -g <package name>
npm uninstall -g coffee-script
```





## 更新套件

### 版號命名規則

常看到三個數字連在一起的命名（如： version 2.5.9），那個 2.5.9 就代表著套件的版號。

- 第一個數字代表**主版本號**，通常跳一個主版本號都是有重大更新的時候，例如軟體架構大改、取消支援舊瀏覽器等等，容易有和舊版不相容的狀況。
- 第二個數字代表**次版本號**，通常是有新功能加入，或是某一個功能做了更動，算是比較小的改動，但是很有可能還是會對舊版的使用者造成影響。
- 第三個數字代表**修訂版號**，基本上就是做一些bug的維修，正常情況下是不會有相容性的問題的。

### 更新限制

在 package.json 檔中，會看到例如：`"gulp": "^1.1.2"`，1.1.2是版號，其他意義如下：

- 「^1.1.2」：表示這個套件的更新只會到最新的**次版本號**ex: 1.2->更新、1.5->更新、**2.0->不更新**
- 「~1.1.2」：表示這個套件的更新只會到最新的**修訂版號**ex: 1.1.3->更新、1.1.5->更新、**1.2.0->不更新**

這樣的限制在於減少自動更新所造成的相容性問題。

### 更新指令

```bash
// 查看套件是否需要更新
npm outdated 
npm outdated -g

// 更新全部
// 本地端更新：
npm update
// 全域更新：
npm update -g

// 更新特定套件
// 本地端更新：
npm update <package name>
// 全域更新：
npm update -g <package name>
```

