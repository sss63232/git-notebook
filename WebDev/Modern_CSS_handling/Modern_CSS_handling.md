# Modern CSS handling

單頁應用，所以如果不加處理，直接 import css 文件的話最終打包生成一個 css 文件會導致樣式應用到全局，造成同類名樣式相互污染影響。



Facebook 積極探索 css in js 方式，但直接寫內聯樣式代碼可讀性太差。

## CSS modules

目前解決方案中應用最廣泛的是 css-modules，即在 webpack 配置中開啟 module 選項，使用 styles 對象來寫樣式。

解決的原理是將 css 類名在打包後編譯成哈希字符串，保持其唯一性。但當想要使用全局樣式時要再配置，稍顯繁雜，且它類名編寫的方式為對象的方式，需要整體修改，另外在使用它時，發現不支持 - 橫線的類命名方式，支持下劃線方式，推薦駝峰式，



Webpack css-loader 有個屬性 :local 加上之後類會變成局部作用域，即 webpack 會對該類型的類進行自動哈希轉碼處理，但顯然類名一個個加:local 是有些呆板的工作，於是想到可以利用 scss 的嵌套屬性將:local 在一個 css 文件中統一加到類名前。