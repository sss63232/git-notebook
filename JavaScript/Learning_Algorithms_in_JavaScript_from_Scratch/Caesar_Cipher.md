# Caesar Cipher 凱撒密碼

## Concept

```javascript
// return a new string
function caesarCipher (string, num) {
    ...
}
```

給一字串與偏移量，
會返回經過偏移的新字串

string 有大小寫，
num 有正負數

### Caesar Cipher example

>  Bee, 3 => Ehh

B 向後三位變 E 
e 向後三位變 h 
以此類推...

![1531899604263](./1531899604263.png)
圖片來源：https://www.wikiwand.com/zh-tw/%E5%87%B1%E6%92%92%E5%AF%86%E7%A2%BC



## Solution code

```javascript
const caesarCipher = (str, num) => {
    // % 的計算不管正負，最後
    // 結果的正負號會與被除數一樣
    num = num % 26;
    const alphabet = [...`abcdefghijklmnopqrstuvwxyz`];

    const _getNewIndex = (currentIndex, shiftNum) => {
        const newIndex = (currentIndex + shiftNum) % 26;
        return newIndex < 0 ? newIndex + 26 : newIndex;
    };

    const _getLetterInCipher = (letter, i) => {
        const currentLetterIndex = alphabet.indexOf(letter);
        if (currentLetterIndex < 0) {
            // 如果找不到， indexOf 的結果會是 -1，代表該字非英文字母
            return letter;
        } else {
            const newIndex = _getNewIndex(
                currentLetterIndex,
                num
            );
            const newLetter = alphabet[newIndex];
            // 判斷該字母在原始 str 中是否為大寫
            const isUpperCase =
                str[i] === letter.toUpperCase();
            return isUpperCase
                ? newLetter.toUpperCase()
                : newLetter;
        }
    };

    // 將 str 一個個字母經過位移後，再組合成新 string
    let newStr = ``;
    str.toLowerCase()
        .split(``)
        .forEach(
            (letter, i) =>
                (newStr += _getLetterInCipher(letter, i))
        );

    return newStr;
};

console.log(caesarCipher('A*-*BcDe', 25));
console.log(caesarCipher('apple', 2));
console.log(caesarCipher('Bee!!', -28));
```

最需要注意的就是大小寫判斷的地方，
因為我們的 alphabet 陣列為了方便，
只有列出小寫的字母。



## Another Solution

```javascript
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  const getShiftedIndex = (charIndex, shiftDigit) => {
    if (charIndex === null) { return null }
    const shiftedIndex = (charIndex + shiftDigit) % 26
    return shiftedIndex < 0
      ? shiftedIndex + 26
      : shiftedIndex
  }

  const getCharSpec = char => {
    const charToLowerCase = char.toLowerCase()
    const indexInAlphabet = alphabet.indexOf(charToLowerCase)
    const isInAlphabet = indexInAlphabet !== -1
    const isCapital = isInAlphabet && char === charToLowerCase.toUpperCase()
    return {
      isCapital,
      originalValue: char,
      charIndex: isInAlphabet
        ? indexInAlphabet
        : null

    }
  }

  const caesarCipher = (originalString, shiftDigit) => originalString
    .split('')
    .map(char => getCharSpec(char))
    .map(({ charIndex, ...others }) => ({
      ...others,
      shiftedIndex: getShiftedIndex(charIndex, shiftDigit)
    }))
    .map(({ originalValue, isCapital, shiftedIndex }) => {
      if (shiftedIndex === null) {
        return originalValue
      }
      const shiftedChar = alphabet[shiftedIndex]
      return isCapital
        ? shiftedChar.toUpperCase()
        : shiftedChar
    })
    .join('')

  console.log(caesarCipher('A*-*BcDe', 25)) // Z*-*AbCd
  console.log(caesarCipher('apple', 2)) // crrng
  console.log(caesarCipher('Bee!!', -28)) // Zcc!!
```



## Code from `Learning Algorithms`

```javascript
function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  
  return newString;
}
caesarCipher('Zoo Keeper', 2);
```

<iframe
     src="https://codesandbox.io/embed/stoic-fire-fh82m?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="caesarCipher"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>



## References

https://www.wikiwand.com/zh-tw/%E5%87%B1%E6%92%92%E5%AF%86%E7%A2%BC

