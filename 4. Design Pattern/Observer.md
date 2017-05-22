# Observer

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/1000px-Observer.svg.png)



![](observer.png)



As shown in the UML diagram, the necessary objects are the `subject`, `observer`, and `concrete`  objects. The subject contains references to the concrete observers to notify for any changes. The Observer object is an abstract class that allows for the concrete observers to implements the notify method.



We can create our own Subjects and Observers in JavaScript. Let's see how this is implemented:



```javascript

var Subject = function() {
  this.observers = [];

  return {
    subscribeObserver: function(observer) {
      this.observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers.splice(index, 1);
      }
    },
    notifyObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    },
    notifyAllObservers: function() {
      for(var i = 0; i < this.observers.length; i++){
        this.observers[i].notify(i);
      };
    }
  };
};

var Observer = function() {
  return {
    notify: function(index) {
      console.log("Observer " + index + " is notified!");
    }
  }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!

```



另外一個範例



```javascript
/**
 * Observer.js
 * This is a program to implement the Observer pattern in JavaScript.
 */


/**
 * The Subject "class" constructor.
 */
var Subject = function () {
    // The subject's observers are stored as an array.
    this.observerCollection = [];
}

/**
 * Register an observer with the subject.
 *
 * @param {Object} observer the observer resgistering with the subject
 */
Subject.prototype.registerObserver = function(observer) {
    // Add the observer to the observerCollection
    this.observerCollection.push(observer);
}

/**
 * Remove a previously registered observer from the subject's notification list.
 *
 * @param {Object} observer the observer detaching from the subject
 */
Subject.prototype.unregisterObserver = function(observer) {
    // First we find the Observer that wants to be removed
    var index = this.observerCollection.indexOf(observer);
    // Remove the item from the array
    this.observerCollection.splice(index, 1);
}

/**
 * Notify all observers of a change in the subject's data.
 */
Subject.prototype.notifyObservers = function() {
    // For all observers in the array...
    for (var i = 0, max = this.observerCollection.length; i < max; i += 1) {
    // Let the Observer know that there has been a change
    this.observerCollection[i].notify();
    }
}

/**
 * The Observer "class" constructor.
 */
var Observer = function() {
    // Each observer must implement their own version of notify (because observers will
    // be doing different things).
    function notify() {
        throw "Observer.notify() Not Implemented!";
    }
}

// Now try out the Observer/Subject pattern with some simple code displaying what is happening.
// The subject will be a number value that will be changed
var data = 0;
// A subject for the data
var s = new Subject();

// Two Observers that will do different things with this data
// The first Observer, "a" will simply display the data (console.log)
var a = new Observer();
a.notify = function() {
    console.log(data);
}
// The second Observer, "b" will take the data and multiply it by 3 and then console.log it
var b = new Observer();
b.notify = function() {
    console.log("" + (data*3));
}

// Register the observers
s.registerObserver(a);
s.registerObserver(b);

// Loop 4 times, changing the data each time, and notifying observers each time
for (var i = 0; i < 4; i += 1){
    data += 1;
    s.notifyObservers();
}

// Unregister observer a
s.unregisterObserver(a);
// Change the data one last time
data += 1;
// Notify observers of the change
s.notifyObservers();
```

