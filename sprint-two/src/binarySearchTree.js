var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;
  _.extend(obj, objectMethods);
  return obj;
};

var objectMethods = {
  insert: function(value) {
    var traverse = function(node) {
      if (value > node.value) {
        if (node.right === null) {
          node.right = BinarySearchTree(value);
          return;
        }
        traverse(node.right);
      } else {
        if (node.left === null) {
          node.left = BinarySearchTree(value);
          return;
        }
        traverse(node.left);
      }
    };
    traverse(this);
  },
  contains: function(value) {
    var traverse = function(node) {
      if (value > node.value) {
        if (node.right === null) {
          return false;
        }
        return traverse(node.right);
      } else if (value < node.value) {
        if (node.left === null) {
          return false;
        }
        return traverse(node.left);
      } else {
        return true;
      }
    };
    return traverse(this);
  },
  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }

    /*
    this.depthFirstLog(this.left);
    this.depthFirstLog(this.right);
    */
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
