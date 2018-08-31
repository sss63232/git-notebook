# Reverse Words 倒反單字中的英文字母順序

## concept

```javascript
// return a new string
function reverseWords (string) {
    ...
}
```

輸入句中的單字順序不變，
但倒反每一個單字英文字母順序。

不可以使用 `array.reverse()` 

## example code

```javascript
const reverseWords = str => {
    const _getReversedWord = word => {
        let reversedWord = ``;
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        return reversedWord;
    };

    const _getReversedWordList = wordListArr => {
        const reversedWordList = [];
        wordListArr.forEach(word => {
            const reversedWord = _getReversedWord(word);
            reversedWordList.push(reversedWord);
        });
        return reversedWordList;
    };

    const reversedWordList = _getReversedWordList(
        str.split(` `)
    );

    return reversedWordList.join(` `);
};

console.log('--------');
console.log(reverseWords(`this is a string of words`));
console.log(reverseWords(`Coding JavaScript`));
console.log('--------');
```

## Code from `Learning Algorithms`

```javascript
function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });
  
  return reversedWordsArr.join(' ');
}
 
reverseWords('Coding JavaScript');
```



## References

https://www.wikiwand.com/zh-tw/%E5%87%B1%E6%92%92%E5%AF%86%E7%A2%BC

