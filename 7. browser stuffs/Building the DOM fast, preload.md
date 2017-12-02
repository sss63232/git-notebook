# Building the DOM fast, "preload"

## Build DOM

To make any sense of the HTML, browsers first have to convert it into a format they understand – the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), or DOM.

The browser builds up the DOM bit by bit. As soon as the first chunks of
 code come in, it starts parsing the HTML, adding nodes to the tree 
structure.

## `<script>` tage 

As the browser is constructing the DOM, if it comes across a `<script>...</script>` tag in the HTML, it must execute it right away. If the script is external, it has to download the script first.

![img](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/script-bold@2x-500x150.png)

## CSSOM

When the parser gets to a script tag, DOM construction cannot proceed 
until the JavaScript finishes executing, and the JavaScript cannot be 
executed until the CSS is downloaded, parsed, and the CSSOM is 
available.

![img](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/blocking-bold@2x-1-500x162.png)

## Back to the future – speculative parsing

If you have a few scripts and images to load, for example–

```html
<script src="slider.js"></script>
<script src="animate.js"></script>
<script src="cookie.js"></script>
<img src="slide1.png">
<img src="slide2.png">
```

the process used to go like this:

![img](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/waterfall-1-bold@2x-500x208.png)

today most browsers use this technique under different names. Chrome and
 Safari have “the preload scanner” and Firefox – the speculative parser.

![img](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/waterfall-2-bold@2x-500x208.png)

## (Pre)loading stuff

The set of things that can be preloaded varies between browsers. All major browsers preload:

- scripts
- external CSS
- and images from the `<img>` tag

Firefox also preloads the `poster` attribute of video elements, while Chrome and Safari preload `@import` rules from inlined styles.

There are limits to how many files a browser can download in parallel. 
The limits vary between browsers and depend on many factors, like 
whether you’re downloading all files from one or from several different 
servers and whether you are using HTTP/1.1 or HTTP/2 protocol. To render
 the page as quickly as possible, browsers optimize downloads by 
assigning priority to each file. To figure out these priorities, they 
follow complex schemes based on resource type, position in the markup, 
and progress of the page rendering.

## defer and async

![img](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/defer-bold@2x-500x164.png)

![img](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/async-bold@2x-500x151.png)

*Note: Attributes async and defer work only for external scripts. They are ignored if there’s no src.*

## preload

`async` and `defer` are great if you want to put 
off handling some scripts, but what about stuff on your web page that’s 
critical for user experience? 

Speculative parsers are handy, but they preload only a handful of 
resource types and follow their own logic. The general goal is to 
deliver CSS first because it blocks rendering. 

As an author, you know which resources are the most important for 
rendering your page. Some of them are often buried in CSS or scripts and
 it can take the browser quite a while before it even discovers them. 
For those important resources you can now use `<link rel="preload">` to communicate to the browser that you want to load them as soon as possible.

All you need to write is:

```html
<link rel="preload" href="very_important.js" as="script">
```

You can link pretty much anything and the `as` attribute tells the browser what it will be downloading. Some of the possible values are:

- `script`
- `style`
- `image`
- `font`
- `audio`
- `video`

You can check out the rest of the content types on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#What_types_of_content_can_be_preloaded).

One thing to pay attention to when preloading fonts is that you also have to set the `crossorigin` attribute even if the font is on the same domain:

```html
<link rel="preload" href="font.woff" as="font" crossorigin>
```

## 資料參考

http://www.jianshu.com/p/24ffa6d45087