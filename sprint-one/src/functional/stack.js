var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Get the last index in storage
    // Add storage[last index + 1] = value
  };

  someInstance.pop = function() {
    // Get the last index in storage
    // Get and store the last index value in storage
    // Delete last index and value from storage
    // Return stored last index value
  };

  someInstance.size = function() {
    // Get the last index in storage
    // Return the last index in storage
  };

  return someInstance;
};
