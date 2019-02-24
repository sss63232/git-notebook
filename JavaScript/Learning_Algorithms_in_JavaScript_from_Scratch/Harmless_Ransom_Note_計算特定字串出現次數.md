# Harmless Ransom Note 計算特定字串出現次數

## concept

```javascript
// return true/false
function harmlessRansomNote (noteText, magazineText) {
    ...
}
```

判斷 magazineText 中是否有足夠單詞供 noteText 使用。

## example code

```javascript
// 為了簡化問題，假設 text 都使用小寫的一般單字
const harmlessRansomNote = (noteText, magazineText) => {
    const note_array = noteText.split(` `);
    const magazine_array = magazineText.split(` `);
	
    // hash table like this:
    // {
    //   apple: 1,
    //   cat : 2,
    //   ...
    //	}
    const magazineHashTable = (words_array => {
        const table = {};
        words_array.forEach(word => {
            if (!table[word]) table[word] = 0;
            table[word]++;
        });
        return table;
    })(magazine_array);

    for (let i = 0; i < note_array.length; i++) {
        const word = note_array[i];
        if (magazineHashTable[word])
            magazineHashTable[word]--;
        else return false;
    }
    return true;
};

console.log('--------');
console.log(
    harmlessRansomNote(
        `this is for`,
        `this is a testing article for testing`
    )
);
console.log('--------');
```

## Another Solution

```javascript
  const harmlessRansomNote = (noteTxt, magazineTxt) => {
    const magazineTxtHashTable = magazineTxt
      .split(' ')
      .reduce((acc, cur) => {
        acc[cur] === undefined
          ? acc[cur] = 1
          : acc[cur]++

        return acc
      }, {})
    const splitedNoteTxt = noteTxt.split(' ')
    for (let i = 0; i < splitedNoteTxt.length; i++) {
      const noteFragment = splitedNoteTxt[i]
      if (magazineTxtHashTable[noteFragment] > 0) {
        magazineTxtHashTable[noteFragment]--
      } else {
        return false
      }
    }

    return true
  }
  console.log('--------')
  console.log(
    harmlessRansomNote(
      `this is for`,
      `this is a testing article for testing`
    )
  )
  console.log('--------')
```



## Time Complexity

`O(n)+O(m)`
=> `O(n+m)`
=>`O(n)`

有兩個 Linear 迴圈，
但是彼此沒有嵌套關係。

實務上，我們最終會把這種函數的時間複雜度寫成 O(n)