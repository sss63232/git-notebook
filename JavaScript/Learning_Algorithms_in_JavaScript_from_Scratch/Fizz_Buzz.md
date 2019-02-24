# Fizz Buzz 

## concept

給定一個數字 num，
輸出 1~ num，
但是遇到 3 的倍數時輸出 `Fizz`，
遇到 5 的倍數時輸出 `Buzz`，
遇到既是 3 又是 5 的倍數時輸出 `FizzBuzz`

## modulus operator

```javascript
console.log('------------------------------------');
console.log(7 % 3);
console.log(100 % 30);
console.log('------------------------------------');
```

![1531711223536](/home/newtchen/Documents/MyWorks/git-notebook/3. JavaScript/Learning Algorithms in JavaScript from Scratch/1531711223536.png)

## example code

```javascript
const fizzbuzz = num => {
    for (let i = 1; i <= num; i++) {
        const is3n = i % 3 === 0;
        const is5n = i % 5 === 0;
        if (is3n && is5n) console.log(`FizzBuzz`);
        else if (is3n) console.log(`Fizz`);
        else if (is5n) console.log(`Buzz`);
        else console.log(i);
    }
};

fizzbuzz(20);
```

