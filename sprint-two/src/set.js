var Set = function() {
  var set = Object.create(setMethods);
  // set._storage = []; // fix me

  // Constant time variant
  set._storage = {};

  return set;
};

var setMethods = {};

setMethods.add = function(item) {
  // // Time: linear, O(n) (contains loops through array)
  // if (!this.contains(item)) {
  //   this._storage.push(item);
  // }

  // Constant time variant
  var newKey = typeof item + JSON.stringify(item);
  this._storage[newKey] = true;

};

setMethods.contains = function(item) {
  // // Time: linear, O(n)
  // for (var storedItem of this._storage) {
  //   if (storedItem === item) {
  //     return true;
  //   }
  // }
  // return false;

  // Constant time variant
  var newKey = typeof item + JSON.stringify(item);
  var storedValue = this._storage[newKey];
  return storedValue ? storedValue : false;

};

setMethods.remove = function(item) {
  // // Time: linear, O(n) (indexOf loops through array)
  // var index = this._storage.indexOf(item);
  // if (index !== -1) {
  //   this._storage.splice(index, 1);
  // }

  // Constant time variant
  var newKey = typeof item + JSON.stringify(item);
  delete this._storage[newKey];

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
