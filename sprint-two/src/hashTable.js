

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  /*
  update counter
  check if too large
  hash key
  push into bucket
  */

  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  /*
  hash key
  visit buckets
  find bucket
  */

  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  /*
  hash key
  visit buckets
  find bucket
  splice buckets
  update counter
  check if too small
  */

  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


