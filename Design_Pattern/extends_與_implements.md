# extends 與 implements 差別

## extends 與 implements 的差別

```java
class 子類名 extends 父類名 implenments 接口名
{
    ...
}
```

- 對於 class 而言，extends 用於(單)繼承一個類（class），而 implements用於實現一個接口(interface)。
- extends 可以理解為全盤繼承了父類的功能。implements 可以理解為為這個類附加一些額外的功能。
- 在類的聲明中，通過關鍵字 extends 來創建一個類的子類。一個類通過關鍵字 implements 聲明自己使用一個或者多個接口。
- extends 是繼承某個類, 繼承之後可以使用父類的方法, 也可以重寫父類的方法;implements 是實現多個接口, 接口的方法一般為空的, 必須重寫才能使用.

## class 與 interface 差異

- interface 定義一些方法,並沒有實現,需要 implements 來實現才可用。
- 在interface中只需聲明方法頭，而將方法體留給實現的class來做。
- 這些實現的 class 的實例完全可以當作 interface 的實例來對待。
- 在 interface 之間也可以聲明為 extends（多繼承）的關係。
- 一個 interface 可以 extends 多個其他 interface。
- implements，實現父類，子類不可以覆蓋父類的方法或者變量。即使子類定義與父類相同的變量或者函數，也會被父類取代掉。
- extends， 可以實現父類，也可以覆蓋父類定義的變量或者函數。
- 這兩種實現的具體使用，是要看項目的實際情況，需要實現，不可以修改implements，只定義接口需要具體實現，或者可以被修改擴展性好，用extends。

### interface

接口可以比作協議，比如我說一個協議是「殺人」那麼這個接口你可以用 砍刀去實現，至於怎麼殺砍刀可以去實現，當然你也可以用搶來實現殺人接口，但是你不能用殺人接口去殺人，因為殺人接口只不過是個功能說明，是個協議，具體怎麼幹，還要看他的實現類。那麼一個包裡面如果有接口，你可以不實現。這個不影響你使用其他類。

JAVA中不支持多重繼承，但是可以用接口 來實現，這樣就要用到implements，繼承只能繼承一個類，但implements可以實現多個接口，用逗號分開就行了;比如 class A extends B implements C,D,E;

implements（實現接口就是在接口中定義了方法，這個方法要你自己去實現，接口可以看作一個標準，比如定義了一個動物的接口，它裡面有吃（eat()）這個方法，你就可以實現這個方法implements，這個方法是自己寫，可以是吃蘋果，吃梨子，香蕉，或者其他的。IMPLEMENTS就是具體實現這個接口。）

接口實現的注意點：
a.實現一個接口就是要實現該接口的所有的方法(抽象類除外)。
b.接口中的方法都是抽象的。
c.多個無關的類可以實現同一個接口，一個類可以實現多個無關的接口。

## upcasting 

```java
class A{
    int i;
    void f(){}
}
class B extends A{
    int j;
    void f(){}//重寫
    void g(){}
}

B b = new B();
```

b 就是子類對象的實例，不僅能夠訪問自己的屬性和方法，也能夠訪問父類的屬性和方法。諸如b.i,b.j,b.f(),b.g()都是合法的。此時 b.f()是訪問的B中的f()

A a = new B();
a雖然是用的B的構造函數，但經過upcast，成為父類對象的實例，不能訪問子類的屬性和方法。a.i,a.f()是合法的，而a.j,a.g()非 法。此時訪問a.f()是訪問B中的f()



##  資料來源

http://jeffjade.com/2015/05/11/2015-05-11-java-extends-implement/#

