var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for (var storedItem of this._storage) {
    if (storedItem === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index !== -1) {
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
