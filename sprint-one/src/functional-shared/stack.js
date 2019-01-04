var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var tempRet = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return tempRet;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


