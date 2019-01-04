var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Get the size of storage
    // Add storage[size] = value
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    // Get the size of storage
    // Get and store the last index value in storage
    // Delete last index and value from storage
    // Return stored last index value
    var retVal = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return retVal;
  };

  someInstance.size = function() {
    // Get the length of keys array in storage
    // Return the length of storage
    return Object.keys(storage).length;
  };

  return someInstance;
};
