# Prototype design pattern

```javascript

var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}


TeslaModelS.prototype.go = function() {
  // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
  // Apply brake pads
}


// or

TeslaModelS.prototype = {
  go: function() {
    // Rotate wheels
  },
  stop: function() {
    // Apply brake pads
  }
}
```

