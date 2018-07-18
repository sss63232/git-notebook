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

const caesarCipher = (str, num) => {
    num = num % 26;
    const alphabet = [...`abcdefghijklmnopqrstuvwxyz`];

    const _getLetterInCipher = (letter, i) => {
        const letterIndex = alphabet.indexOf(letter);
        if (letterIndex < 0) {
            return letter;
        } else {
            const isUpperCase =
                str[i] === letter.toUpperCase();
            const newIndex = letterIndex + num;
            const newLetter =
                alphabet[
                    newIndex < 0 ? newIndex + 26 : newIndex
                ];
            return isUpperCase
                ? newLetter.toUpperCase()
                : newLetter;
        }
    };

    let newStr = ``;
    str.toLowerCase()
        .split(``)
        .forEach((letter, i) => {
            newStr += _getLetterInCipher(letter, i);
        });

    return newStr;
};

console.log(caesarCipher('Abc dD', -5));
```
