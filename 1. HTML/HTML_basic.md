## HTML element
```HTML
<h1>
  hello word
</h1>
```
That's an HTML `element`.



## CSS properties

With CSS, there are hundreds of CSS`properties` that you can use to change the way an element looks on your page.



## Text field

```html
<input type="text">
<!--Note that input elements are self-closing.-->
```


### text field placeholder

Your placeholder text is what appears in your text input before your user has input anything.You can create placeholder text like so:
```html
<input type="text" placeholder="this is placeholder text">
```


### Form action

You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your form element.

For example:
```html
<form action="URL">
  <input type="text" placeholder="cat photo URL">
  <button type="submit">Submit</button>
</form>
```


## Use HTML5 to Require a Field

You can require specific form fields so that your user will not be able to submit your form until he or she has filled them out.

For example, if you wanted to make a text input field required, you can just add the word required within your input element, you would use: 

````HTML
<input type="text" required>
````



## Radio button
You can use radio buttons for questions where you want the user to only give you one answer.

Radio buttons are a type of input

Each of your radio buttons should be nested within its own label element.

All related radio buttons should have the same name attribute.

Here's an example of a radio button:
```html
<label><input type="radio" name="indoor-outdoor"> Indoor</label>
```


## Check box

Forms commonly use checkboxes for questions that may have more than one answer.

Checkboxes are a type of input

Each of your checkboxes should be nested within its own label element.

All related checkbox inputs should have the same name attribute.

Here's an example of a checkbox:
```html
<label><input type="checkbox" name="personality"> Loving</label>
```
