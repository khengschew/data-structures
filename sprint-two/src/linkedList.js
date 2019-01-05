var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Input : a data point
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
      return;
    }
    var newNode = Node(value);
    list.tail.next = newNode;
    list.tail = list.tail.next;
  };

  list.removeHead = function() {
    // Input : none
    // Ouput : removed head node value
    // Edge Cases : list.head is null, or list.head = list.tail

    if (list.head === null) {
      return null;
    }

    var retVal = list.head.value;

    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }

    return retVal;
  };

  list.contains = function(target) {
    // Input : target value
    // Ouput
    // Constraints
    // Edge Cases

    var curr = list.head;
    while (curr !== null) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
