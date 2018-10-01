# Jest 

## 單元測試概念

具體步驟：

- 準備階段：構造參數，創建 spy 等
- 執行階段：用構造好的參數執行被測試代碼
- 斷言階段：用實際得到的結果與期望的結果比較，以判斷該測試是否正常
- 清理階段：清理準備階段對外部環境的影響，移除在準備階段創建的 spy 等

### 基礎設定

```shell
yarn add --dev jest
```

package.json

```json
"scripts":{
    "test": "jest --color"
}
```

### Example

```javascript
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
  });
});
```

## mock

假設要測試一個迴圈函數

```javascript
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
```

就會需要建立一個特殊的 callback，
可以記錄每次被調用時的參數，
讓我們之後可以使用斷言進行驗證。

```javascript
describe('forEach', () => {
  it('should call callback with each item', () => {
    const callHistory = [];
    const specialCallback = (...args) => callHistory.push(args);
    forEach([1, 2], specialCallback);

    expect(callHistory.length).toBe(2);
    expect(callHistory[0][0]).toBe(1);
    expect(callHistory[1][0]).toBe(2);
  })

// 我們的目的是要收集每一次調用 callback 時的參數 
```

上面的 specialCallback 就是一個 mock



使用 Jest 內建 mock 的寫法

```javascript
describe('forEach', () => {
  it('should call callback with each item', () => {
    const mockFn = jest.fn();
    forEach([1, 2], mockFn);

    expect(mockFn.mock.calls.length).toBe(2);
    expect(mockFn.mock.calls[0][0]).toBe(1);
    expect(mockFn.mock.calls[1][0]).toBe(2);
  })
});
```

## spy

用於監聽物件身上的方法，
假設我們今天有一個物件：

```javascript
const bot = {
  sayHello: (name) => {
    console.log(`Hello ${name}!`);
  }
}
```



使用 Jest 中的 spy 對其進行測試：

```javascript
describe('bot', () => {
  it('should say hello', () => {
    const spy = jest.spyOn(bot, 'sayHello');

    bot.sayHello('Michael');

    expect(spy).toHaveBeenCalledWith('Michael');

    spy.mockRestore();
  })
```

我們通過 `jest.spyOn` 創建了一個監聽 `bot` 對象的 `sayHello` 方法的 spy。它就像間諜一樣監聽了所有對 `bot#sayHello`方法的調用。由於創建 spy 時，Jest 實際上修改了 `bot` 對象的 `sayHello` 屬性，所以在斷言完成後，我們還要通過 `mockRestore` 來恢復 `bot` 對象原本的 `sayHello` 方法。

## References

[单元测试与单元测试框架 Jest](https://loveky.github.io/2018/05/17/unit-test-and-jest/)