

JavaScript provides seven different data types which are `undefined`, `null`, `boolean`, `string`,`symbol`, `number`, and `object`.

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an undefined variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of `undefined`.

## Array
### .push()
An easy way to append data to the end of an array is via the `push()` function. `push()` takes one or more parameters and "pushes" them onto the end of the array.
```javascript
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```
### .pop()
`.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable.

For example, for the code
```javascript
var oneDown = [1, 4, 6].pop();
```
the variable oneDown now holds the value 6 and the array becomes [1, 4].
### .shift()
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
### .unshift()
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

### Global Scope and Functions
In JavaScript, `scope` refers to the visibility of variables. Variables which are defined outside of a function block have `Global` scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared within a function, as well as the function parameters have `local` scope.
### Global vs Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

### Equality Operator
`==`
```
   1   ==  1    // true
   1   ==  2    // false
   1   == '1'   // true
  "3"  ==  3    // true
```
#### Strict Equality Operator
`===`
```
3 === 3   // true
3 === '3' // false
```
Unlike the equality operator, strict equality tests both the data type and value of the compared elements.