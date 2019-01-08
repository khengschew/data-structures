

var HashTable = function() {
  // shrink size when 25% capacity, increase size when 75% capacity 
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.capacity = function() {
  return this._size / this._limit;
};

HashTable.prototype.needsResize = function() {
  if (this._size < 6) { // table will never be resized when less than 6
    return false;
  }

  var c = this.capacity();
  return c >= .75 || c <= .25;
};

HashTable.prototype.insert = function(k, v) {
  /*
  update counter
  check if too large
  hash key
  push into buckets array
  */
  this._size++;
  if (this.needsResize()) {
    this.resizeTable();
  }

  var index = getIndexBelowMaxForKey(k, this._limit);

  this._insert(index, [k, v]);
};

HashTable.prototype._insert = function(index, value) {
  // Inputs: hash table index to insert, value is a key value tuple
  // Check if buckets array exist
  // Worst case: O(n), Avg case: O(1)
  if (this._storage.get(index)) {
    // Push to existing buckets array
    var didUpdate = false;
    var result = this._storage.get(index);
    for (var [storedIndex, [storedKey, storedValue]] of Object.entries(result)) {
      if (storedKey === value[0]) {
        result[storedIndex] = value;
        didUpdate = true;
      }
    }
    if (!didUpdate) {
      result.push(value);
    }

    // TODO: try, this._storage.get(index).push(pair)

    this._storage.set(index, result);
  } else {
    // Set index value to equal buckets array containing new tuple
    this._storage.set(index, [value]);
  }
};

HashTable.prototype.retrieve = function(k) {
  // hash key
  // visit buckets
  // find bucket
  // return value
  // Worst case: O(n), Avg case: O(1)

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var [storedKey, storedValue] of bucket) {
    if (storedKey === k) {
      return storedValue;
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  // hash key
  // visit buckets
  // find bucket
  // splice buckets
  // update counter
  // check if too large
  // Note: No corresponding ._remove method because it's not necessary
  // Worst case: O(n), Avg case: O(1)

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var [bucketIndex, [storedKey, storedValue]] of Object.entries(bucket)) {
    if (storedKey === k) {
      bucket.splice(bucketIndex, 1);
      this._size--;
      if (this.needsResize()) {
        this.resizeTable();
      }
      return;
    }
  }
};

HashTable.prototype.resizeTable = function() {
  console.log('resizeTable() called...');
  console.log('Current capacity: ', this.capacity());

  if (this.capacity() >= .75) {
    this._limit = this._limit * 2;
    // Move things
    // Create a new limited array with new limit
  } else if (this.capacity() <= .25) {
    this._limit = this._limit / 2;
  }
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  oldStorage.each(function(bucket) {
    /*
    Loop through each buckets array
      Get new index for bucket key
      Add to new storage at new index
    */
    for (var [storedKey, storedValue] of bucket) {
      var index = getIndexBelowMaxForKey(storedKey, this._limit);
      this._insert(index, [storedKey, storedValue]);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


