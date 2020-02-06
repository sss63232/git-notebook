## github
[sss63232/avoid_react_re-rendering](https://github.com/sss63232/avoid_react_re-rendering)


## Example Component: Counter

常見的範例 React Component: Counter
```jsx=
const Title = () => {
  console.log('Title rendering!');
  return (
    <div>
      <h1>Counter</h1>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Title />
      <span>{`目前計數：${count}`}</span>
      <button type="button" onClick={() => { setCount(count + 1); }}>
        點我加一
      </button>
    </div>
  );
};
```

每次點下 `add 1` 按鈕，  
`Counter` 的 `state` 都會更新，  
整個 `Counter` 會進行 re-render。  

連帶會使沒有任何改變的 `<Title />` 也進行 re-render。

<插入影片>

## PureComponent, shouldComponentUpdate

上述中的 `<Title />` 的 re-render 就沒有實質作用，  
可以被節省的情況。  

在傳統的 Class based Component 中，
可以用 `PureComponent` 或 `shouldComponentUpdate` 處理

## React.memo

## useMemo

## useCallback

## references
[React | 關於 Component 效能優化的那件小事 - StarBugs Weekly 技術專欄 - Medium](https://medium.com/starbugs/react-%E9%97%9C%E6%96%BC-component-%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96%E7%9A%84%E9%82%A3%E4%BB%B6%E5%B0%8F%E4%BA%8B-68e6e5ecc4d6)