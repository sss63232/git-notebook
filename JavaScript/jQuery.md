## jQuery
### addClass()， removeClass()
you can add classes to an element with jQuery's addClass() function, you can remove them with jQuery's removeClass() function.

### animate.css
[Animate.CSS](https://daneden.github.io/animate.css/)
### .css()
jQuery has a function called .css() that allows you to change the CSS of an element.
```javascript
$(document).ready(function(){
  $("#target").css("color",""red");
});
```
### .prop()
jQuery has a function called .prop() that allows you to adjust the properties of elements.

Here's how you would disable all buttons:
```javascript
$("button").prop("disabled", true);
```
### .html()
jQuery has a function called .html() that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.
### .text()
jQuery also has a similar function called .text() that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.
### .remove()
jQuery has a function called .remove() that will remove an HTML element entirely
### .appendTo()
jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.

For example, if we wanted to move target4 from our right well to our left well, we would use:
```javascript
$("#target4").appendTo("#left-well");
```
### .clone()
jQuery has a function called clone() that makes a copy of an element.

For example, if we wanted to copy target2 from our left-well to our right-well, we would use:
```javascript
$("#target2").clone().appendTo("#right-well");
```
### .parent()
Here's an example of how you would use the parent() function if you wanted to give the parent element of the left-well element a background color of blue:
```javascript
$("#left-well").parent().css("background-color", "blue")
```
