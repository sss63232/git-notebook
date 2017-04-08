What's the difference between these two lines of code?
```javascript
element.onclick = function() { /* do stuff */ }
element.addEventListener('click', function(){ /* do stuff */ }, false);
```


The main difference is that onclick is just a property, and like all object properties, if you write on more than once, it will be overwritten. With addEventListener() instead, we can simply bind an event handler to the element, and we can call it each time we need it without being worried of any overwritten properties.

```html
<button id="btn">Click me!</button>

<script>
var btn = document.getElementById('btn');
btn.onclick = function() { 
  // will be overwritten! 
  console.log('[onclick] foo'); 
}
btn.onclick = function() { 
  
  console.log('[onclick] bar');
}
btn.addEventListener('click', function() {
  // won't work on IE < 9  
  console.log('[EventListener] foo');
});
btn.addEventListener('click', function() {
  // won't work on IE < 9
  console.log('[EventListener] bar');
});
</script>
```