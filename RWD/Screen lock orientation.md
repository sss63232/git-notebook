# lock screen orientation

**HTML**

```html
<div class="wrap">
    <header></header>
</div>
```

**CSS**

```css
html, body {
    margin:0;
    position:relative;
}
.wrap {
    background-color:black;
    width:300px;
    margin:0 auto;
    height:500px;
}
header {
    background-color:red;
    width:100%;
    height:80px;
}
.rotate {
    float:left;
    transform: rotate(-90deg);
}
.rotate:after { content:'';clear:both;width:0;height:0; }
```

**JS**

```javascript
/**
 * rotatePage
 * Use isMobile() and isPortrait() to toggle classes, set w/h
 */
var rotatePage = function() {
    if ( isMobile() && !isPortrait() ) {
        console.log('Landscape')
        document.body.classList.add('rotate')

        document.getElementsByTagName('html')[0].style.height = window.innerHeight + 'px'
        document.body.style.height = window.innerHeight + 'px'
    }
    if ( isMobile() && isPortrait() ) {
        console.log('Portrait')
        document.body.classList.remove('rotate')

        document.getElementsByTagName('html')[0].style.height = 'auto'
        document.body.style.height = 'auto'
    }
}

/**
 * isPortrait
 * Check if viewport is in portrait by comparing window height/width
 * 
 * @return {Boolean}
 */
var isPortrait = function() {
    if ( window.innerHeight > window.innerWidth ) {
        return true;
    } else {
        return false;
    }
}

/**
 * isMobile
 * Check if the useragent string to verify mobile
 * 
 * @return {Boolean}
 */
var isMobile = function() {
    return (/Mobile|Android|iPhone|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera) ? true : false;
}


/**
 * Event Listeners
 */
document.addEventListener('DOMContentLoaded', rotatePage())
window.addEventListener('resize', rotatePage())
```

