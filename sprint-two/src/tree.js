var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Constant, O(1)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // Linear, O(n)
  var result = false;

  var recurseTree = function(curr) {
    if ( curr.value === target ) {
      result = true;
    }
    if (result) {
      return;
    }
    if (curr.children.length > 0) {
      for (var child of curr.children) {
        recurseTree(child);
      }
    }
  };
  recurseTree(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
