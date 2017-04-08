## HTML5 
用語義化的 tag取代過多無意義的`<div>`。

語意化的HTML結構可以讓網頁內容更具有意義，特別是對對搜尋引擎及裝置來說。當網頁內容被有正確的 HTML tag架構時，不同的裝置或許就能為使用者提供一些UI介面上的輔助功能，像是按 tab跳到下一個選項或是跳到主內文上，對使用者及網站親和力來說是很重要的改善。
### header
`<header>`
+ 用來表示區塊標題的區塊元素，這個區塊可以是一整個頁面、一個段落或一篇文章，可以把它當成一個放置介紹內容的容器。
+ 一個頁面中可以有多個header。
+ `<header>`不能放在`<footer>`、`<address>`或另一個`<header>`裡面。
### nav
`<nav> `
+ 裝 navigation link
### section
`<section>`
+ 文件中的一個專題群組或區塊。一般來說，裡面都會包含heading。
+ 如果這個區塊的內容可以分成幾個部分的話，那應該使用`<article>`。

>Examples of sections would be chapters, the various tabbed pages in a tabbed dialog box, or the numbered sections of a thesis. A Web site's home page could be split into sections for an introduction, news items, and contact information.

>Do not use the <section> element as a generic(一般的、通用的) container; this is what <div> is for, especially when the sectioning is only for styling purposes.

+ **不要把section當成div用**。section內裝的應該是有意義且附帶標題的一段內容。例如這樣：
```HTML
 <section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```
### article
`<article>`

+ 一個獨立的區塊，同樣必須帶有heading。舉例來說，像這篇文章本身就是一個article，下面每個回應也都是一個單獨的article。
+ article跟section的區分是，article有更高的獨立性及完整性。MDN裡面是這樣說明的：

> "The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication."

+ article本身就算脫離了整體也是一個可以獨立存在、具有完整內容的區塊，例如這篇文章；而section雖然也具有獨立表達內容的能力，但是對外層有一定的相依性，例如這篇文章中的一個章節。

### aside

`<aside>`

+ 從內容分離的部分。這些部分通常被表示為sidebar或interns。他們通常包含side explanations，像是術語定義。
+ 也可以放較為鬆散相關的東西，像廣告、個人資料信息、全站檢索或相關連結。像w3school舉的這個例子：
```HTML
<p>My family and I visited The Epcot center this summer.</p>

<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```
### footer
+ 代表一個區塊的結尾訊息。
+ footer內通常會包含作者、版權等資訊。
+ footer元素不是父區塊的內容之一，所以並不會出現在outline中。在address元素中的作者資訊也可以放在footer裡面。
```HTML
 <footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>
```
### figure
這也是一個常被誤用的標籤，頻率大概僅次於section。先看看它的定義：
>The figure element represents a unit of content, optionally with a caption, that is self-contained, that is typically referenced as a single unit from the main flow of the document, and that can be moved away from the main flow of the document without affecting the document's meaning.

+ figure是一個有完整內容的區塊，他是主要內容的一部分，而且可以任意移動位置而不影響整體內容的表達。
+ 常見的問題是把每個img都包上figure，這完全沒有意義。簡單的判斷方式是想想看＂我把這個figure拿掉會不會影響到上下文的閱讀？＂，如果會的話，他就絕對不該是一個figure。
+ figure絕對不是只拿來包圖片的，他可以包含影音檔、圖表（可能是canvas或是svg）或是一段code。
+ 跟aside的差別在於：
  1. aside和主內容有關，但不是主內容的一部分
  2. figure是主內容的一部分，但是他可以任意移動或刪除而不影響主內容的表達。
  3. 通常figure會搭配<figcaption>服用，他放在第一個或最後一個子元素，像這樣：
```HTML
 <figure>
  <img src="/macaque.jpg" alt="Macaque in the trees">
  <figcaption>A cheeky macaque, Lower Kintaganban River, Borneo. Original by <a href="http://www.flickr.com/photos/rclark/">Richard Clark</a></figcaption>
</figure>
```
+ 更多範例參考[HTML5 Doctor](http://html5doctor.com/the-figure-figcaption-elements/)

### 語義化 tag
HTML5里這幾個新的語義化tag其實大部分的行為及用法都和加了 ID, class的<div>沒什麼不同，但是有一個最大也是最重要的差異就是大網結構，<div>的意思只是一個單純的分開元素用的容器，是為了套用樣式或是做出區隔用的，並沒有任何語意上的差別，但是 <section>, <article>, <nav>…不同，這些tag 都會造成語意上的差別，而且他們都需要放上<h1>來當做語意的標題。

不同的tag會造成語意上不同的差別。這就是HTML5 和之前最大的不同之處，希望網頁的內容都是可以解讀的部分而不是單純的用<div>分開。