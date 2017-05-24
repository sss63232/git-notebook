# SQL

## LIKE

**LIKE** 是另一個在 **WHERE** 子句中會用到的指令。基本上， **LIKE** 能讓我們依據一個模式 (pattern) 來找出我們要的資料。相對來說，在運用 **IN** 的時候，我們完全地知道我們需要的條件；在運用 **BETWEEN** 的時候，我們則是列出一個範圍。 **LIKE** 的語法如下：

```sql
SELECT 欄位名 

FROM 表格名 

WHERE 欄位名 LIKE {模式}

```

{模式} 經常包括萬用字元 (wildcard)。在上一頁中，我們看到了好幾個[萬用字元](http://www.1keydata.com/tw/sql/sql-wildcard.html)的例子。 以下我們用一個實例來看**萬用字元**和 **LIKE**是如何被運用的：

**Store_Information** **表格**

| store_name    | Sales | Date        |
| ------------- | ----- | ----------- |
| LOS ANGELES   | $1500 | Jan-05-1999 |
| SAN DIEGO     | $250  | Jan-07-1999 |
| SAN FRANCISCO | $300  | Jan-08-1999 |
| BOSTON        | $700  | Jan-08-1999 |

 要找出所有名稱內包含 **AN**這兩個字串的資訊，我們就鍵入，

```sql
SELECT * 
FROM Store_Information 
WHERE store_name LIKE '%AN%'
```

**結果 :**

| store_name    | Sales | Date        |
| ------------- | ----- | ----------- |
| LOS ANGELES   | $1500 | Jan-05-1999 |
| SAN FRANCISCO | $300  | Jan-08-1999 |
| SAN DIEGO     | $250  | Jan-07-1999 |

有的時候，我們需要依照由字串模式中找出相符的資料。要滿足這個需求，我們就需要用到**萬用字元 (wildcard)** 的做法。SQL 中有兩個萬用字元：

1. **% (百分比符號)**：代表零個、一個、或數個字母。
2. **_ (底線)**：代表剛好一個字母。

萬用字元是與 [**LIKE**](http://www.1keydata.com/tw/sql/sqllike.html) 關鍵字一起使用的。

以下是幾個**萬用字元**的例子：

* 'A_Z': 所有以 'A' 起頭，另一個任何值的字原，且以 'Z' 為結尾的字串。 'ABZ' 和 'A2Z' 都符合這一個模式，而 'AKKZ' 並不符合 (因為在 A 和 Z 之間有兩個字元，而不是一個字元)。
* 'ABC%': 所有以 'ABC' 起頭的字串。舉例來說，'ABCD' 和 'ABCABC' 都符合這個模式。
* '%XYZ': 所有以 'XYZ' 結尾的字串。舉例來說，'WXYZ' 和 'ZZXYZ' 都符合這個模式。
* '%AN%': 所有含有 'AN'這個模式的字串。舉例來說， 'LOSANGELES' 和 'SAN FRANCISCO' 都符合這個模式。
* '_AN%'： 所有第二個字母為 'A' 和第三個字母為 'N' 的字串。舉例來說，'SAN FRANCISCO' 符合這個模式，而 'LOS ANGELES' 則不符合這個模式。 

## ORDER BY

到目前為止，我們已學到如何藉由 **SELECT** 及 **WHERE** 這兩個指令將資料由表格中抓出。不過我們尚未提到這些資料要如何排列。這其實是一個很重要的問題。事實上，我們經常需要能夠將抓出的資料做一個有系統的顯示。這可能是由小往大 (ascending) 或是由大往小(descending)。在這種情況下，我們就可以運用**ORDER BY** 這個指令來達到我們的目的。

**ORDER BY** 的語法如下:

```sql
SELECT "**欄位名" 

FROM "表格名" 

[WHERE "條件"]

ORDER BY "欄位名" [ASC,DESC]

```

**[ ]** 代表 **WHERE** 子句不是一定需要的。 不過，如果 **WHERE** 子句存在的話，它是在 **ORDER BY** 子句之前。**ASC** 代表結果會以由小往大的順序列出，而 **DESC** 代表結果會以由大往小的順序列出。 如果兩者皆沒有被寫出的話，那我們就會用 **ASC**。

我們可以照好幾個不同的欄位來排順序。在這個情況下， **ORDER BY** 子 句的語法如下(假設有兩個欄位)：

**ORDER BY "欄位一" [ASC, DESC], "欄位二" [ASC, DESC]**

若我們對這兩個欄位都選擇由小往大的話，那這個子句就會造成結果是依據 "欄位一" 由小往大排。 若有好幾筆資料 "欄位一" 的值相等，那這幾筆資料就依據 "欄位二" 由小往大排。

舉例來說，若我們要依照 Sales 欄位的由大往小列出 Store_Information 表格中的資料，

**Store_Information 表格**

| store_name    | Sales | Date        |
| ------------- | ----- | ----------- |
| Los Angeles   | $1500 | Jan-05-1999 |
| San Diego     | $250  | Jan-07-1999 |
| San Francisco | $300  | an-08-1999  |
| Boston        | $700  | Jan-08-1999 |

 

我們就鍵入，

```sql
SELECT store_name, Sales, Date 

FROM Store_Information 

ORDER BY Sales DESC

```


**結果 :**

| store_name    | Sales | Date        |
| ------------- | ----- | ----------- |
| Los Angeles   | $1500 | Jan-05-1999 |
| Boston        | $700  | Jan-08-1999 |
| San Francisco | $300  | Jan-08-1999 |
| San Diego     | $250  | Jan-07-1999 |

在以上的例子中，我們用欄位名來指定排列順序的依據。除了欄位名外，我們也可以用欄位的順序 (依據 SQL 句中的順序)。在 **SELECT** 後的第一個欄位為 1，第二個欄位為 2， 以此類推。在上面這個例子中，我們用以下這句 SQL 可以達到完全一樣的效果：

```sql
SELECT store_name, Sales, Date 

FROM Store_Information 

ORDER BY 2 DESC

```



 


