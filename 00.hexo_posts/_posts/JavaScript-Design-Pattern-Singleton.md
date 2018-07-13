---
title: 'JavaScript Design Pattern: Singleton'
date: 2018-06-26 00:43:00
tags: [javascript,design_pattern]
---

## 簡述 Singleton 單例

一個 class 只能有一個 instance，
就算多次 new 該 class，
也只會 return 第一次 new 出來的 instance

## from "Learning JavaScript Design Patterns" 

> Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.

## ES6 實踐方式

###  一般 class

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let man1 = new Person('Mike', 20);
let man2 = new Person('Newt', 99);
```
### singleton class

```javascript
class SingletonPerson{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  
  static getInstance(name, age){
    if(this.onlyIntance){
      this.onlyIntance = new SingletonPerson(name, age);
    }
    return this.onlyInstance;
  }
}

let man1 = SingletonPerson.getInstance('Bob', 99);
let man2 = SingletonPerson.getIntance('Peter', 77);
console.log(man1 === man2); // true
```

## References

https://zhuanlan.zhihu.com/p/34754447

https://addyosmani.com/resources/essentialjsdesignpatterns/book/