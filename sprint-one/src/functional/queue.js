var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add value to storage at index someInstance.size
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    // Retrieve and store value at index 0 in storage
    // Remove value at 0 index from storage
    // Re-name/number the indices for remaining storage items
    // Remove value at last index from storage
    // Return retrieved stored value at index 0
    var tempRet = storage[0];
    var tempSize = someInstance.size();

    delete storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    delete storage[tempSize - 1];

    return tempRet;
  };

  someInstance.size = function() {
    // Return the length of storage object keys
    return Object.keys(storage).length;
  };

  return someInstance;
};
