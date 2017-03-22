# Attribute selectors

## Syntax

`[*attr*]`

Represents an element with an attribute name of attr.

`[*attr*=*value*]`

Represents an element with an attribute name of attr and whose value is exactly "value".

`[*attr*~=*value*]`

Represents an element with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly "value".

`[*attr*|=*value*]`

Represents an element with an attribute name of attr. Its value can be exactly 「value」 or can begin with 「value」 immediately followed by 「-」 (U+002D). It can be used for language subcode matches.

`[*attr*^=*value*]`

Represents an element with an attribute name of attr and whose first value is prefixed by "value".

`[*attr*$=*value*]`

Represents an element with an attribute name of attr and whose last value is suffixed by "value".

`[*attr**=*value*]`

Represents an element with an attribute name of attr and whose value contains at least one occurrence of string "value" as substring.

`[*attr* *operator* *value* i]`

Adding an `i` (or `I`) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).

## Example

```html
<div class="hello-example">
    <a href="http://example.com">English:</a>
    <span lang="en-us en-gb en-au en-nz">Hello World!</span>
</div>
<div class="hello-example">
    <a href="#portuguese">Portuguese:</a>
    <span lang="pt">Olá Mundo!</span>
</div>
<div class="hello-example">
    <a href="http://example.cn">Chinese (Simplified):</a>
    <span lang="zh-CN">世界您好！</span>
</div>
<div class="hello-example">
    <a href="http://example.cn">Chinese (Traditional):</a>
    <span lang="zh-TW">世界您好！</span>
</div>
```

```css
/* All spans with a "lang" attribute are bold */
span[lang] {font-weight:bold;}
 
/* All spans in Portuguese are green */
span[lang="pt"] {color:green;}

/* All spans in US English are blue  */
span[lang~="en-us"] {color: blue;}

/* Any span in Chinese is red, matches
   simplified (zh-CN) or traditional (zh-TW) */
span[lang|="zh"] {color: red;}

/* All internal links have a gold background */
a[href^="#"] {background-color: gold;}

/* All spans whose first declared class begins with "main" have a yellow background */
/* Span with the class="banner main" would not be affected. */
span[class^="main"] {background-color: yellow;}

/* All links to urls ending in ".cn" are red */
a[href$=".cn"] {color: red;}

/* All links with "example" in the url have a grey background */
a[href*="example"] {background-color: #CCCCCC;}

/* All email inputs have a blue border */
/* This matches any capitalization of
   "email", e.g. "email", "EMAIL", "eMaIL", etc. */
input[type="email" i] {border-color: blue;}
```

![](result.png)


