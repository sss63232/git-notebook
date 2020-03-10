# React 概念

## JSX

```javascript
class MyComponent extends React.Component {
  render() {
    return <p>Hello {this.props.someVar ?  'World' : 'Kitty'}</p>;
  }
}
```

## Props, State

### props

數據只能從父組件傳向子組件

```javascript
class ParentComponent extends React.Component {
  render() {
    return <ChildComponent message="Hello World"/>;
  }
}
class ChildComponent extends React.Component {
  render() {
    return <p>And then I said, “{this.props.message}”</p>;
  }
}
```

### state

組件自身的狀態，

必須通過一個叫setState的方法來修改state，
一般我們都會在事件處理的方法中調用它：

```js
class MyComponent extends React.Component {
  handleClick = (e) => { // 自動綁定 this
    this.setState({clicked: true});
  }
  render() {
    return <a href="#" onClick={this.handleClick}>Click me</a>;
  }
}
```

一般React應用當中的絕大多數數據都是prop，
只有當用戶輸入內容時才會使用state來處理。

## 生命週期

React還提供了一些列按照特定次序觸發的[生命週期函數](http://link.zhihu.com/?target=https%3A//facebook.github.io/react/docs/state-and-lifecycle.html)

## 容器組件和展示組件

開始將組件分為兩種角色，一種關注UI邏輯，用來展示或隱藏內容；

另一種關注數據交互，例如加載服務器端的數據

```js
//presentational component

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return <ul> {this.props.comments.map(renderComment)} </ul>;
  }

  renderComment({body, author}) {
    return <li>{body}—{author}</li>;
  }
}

//container component

class CommentListContainer extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: function(comments) {
        this.setState({comments: comments});
      }.bind(this)
    });
  }

  render() {
    return <CommentList comments={this.state.comments} />;
  }
}
```

這就又有點類似於view/controller的概念了。不過說來說去只是構建代碼的不同方式而已，區分邏輯當然有其好處（例如分離業務邏輯，更好的代碼復用），當然你也可以完全不吃這一套。