# is Palindrome

## concept

```javascript
// return true/false
function isPalindrone (string) {
    ...
}
```

判斷字串是否為 Palindrome，
Palindrome 例子：

- race car
- Madam, I'm Adam

## example code

```javascript
const isPalindrome = string => {
    // 去除所有非英文字母
    const pureCharacters = (str => {
        const validCharacters = `abcdefghijklmnopqrstuvwxyz`.split(``);
        return str
            .toLowerCase()
            .split(``)
            .filter(char => validCharacters.includes(char));
    })(string);

    return (
        pureCharacters.join(``) ===
        pureCharacters.reverse().join(``)
    );
};

console.log('--------');
console.log(isPalindrome(`Madam, I'm Adam.`)); // true
console.log(isPalindrome(`race car`)); // true 
console.log(isPalindrome(`I'm Adam.`)); // false
console.log('--------');
```
