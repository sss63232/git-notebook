## Use Responsive Design with Bootstrap Fluid Containers
You can add Bootstrap to any app by adding the following code to the top of your HTML:
`<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>`

### Make img responsive
Fortunately, with Bootstrap, all we need to do is add the `img-responsive` class to your image. Do this, and the image should perfectly fit the width of your page.

### Center text 
Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class `text-center`.
### Block Element 
Normally, your button elements with a class of btn are only as wide as the text that they contain. For example:
```html
<button class="btn">Submit</button>
```
This button would only be as wide as the word "Submit".

By making them block elements with the additional class of `btn-block`, your button will stretch to fill your page's entire horizontal space and any elements following it will flow onto a"new line" below the block.
```html
<button class="btn btn-block">Submit</button>
```
This button would take up 100% of the available width.

test