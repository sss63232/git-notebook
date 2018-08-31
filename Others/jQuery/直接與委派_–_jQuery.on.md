# 直接與委派 – jQuery .on()

## Case 1 (direct)

```javascript
$("div#target span.green").on("click", function() {...});

// Hey! I want every span.green inside div#target to listen up: when you get clicked on, do X.
```

## Case 2 (delegated)

```javascript
$("div#target").on("click", "span.green", function() {...});
// Hey, div#target! When any of your child elements which are "span.green" get clicked, do X with them.
```

In other words...

In case 1, each of those spans has been individually given instructions. **If new spans get created, they won't have heard the instruction and won't respond to clicks.** Each span is directly responsible for its own events.

In case 2, only the container has been given the instruction; it is responsible for noticing clicks on behalf of its child elements. The work of catching events has been delegated. This also means that **the instruction will be carried out for child elements that are created in future.**

## jQuery .on() official document

.on(events [, selector] [, data ], handler )

### Example

```javascript
// 傳 data
$('body').on('click', 'a', {
    "var1": "aaa",
    "var2": "bbb"
}, function (event) {
    alert(event.data.var1);
    alert(event.data.var2);
});

// 傳參數
$('body').on('click', 'a', function (event, a, b) {
    alert(a);
    alert(b);
});
$('body a').trigger('click', ["ccc", "ddd"]);
```


## Reference

<https://stackoverflow.com/questions/8110934/direct-vs-delegated-jquery-on?answertab=votes>

<http://www.90chat.com/archives/445.html>