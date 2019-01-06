

// Instantiate a new graph
var Graph = function() {
  // Use node as index
  var nodes = [];
  var edges = []; // [[a, b], [a, c], [c, d]]
};

// Add a node to the graph, passing in the node's value.
// Assumption: node is not a special node class but anything that is passed in
  // This means that there is the possibility of having duplicate nodes
  // Duplicate nodes could be problematic especially if they're connected to different things
Graph.prototype.addNode = function(value) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return this.nodes.indexOf(node) !== -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  // Remove node from this.nodes
  // Remove edges that contain node
  
};

Graph.prototype.findEdge = function(fromValue, toValue) {
  var destination = [fromValue, toValue].sort();

  var retVal = -1;
  this.edges.forEach(function(coord, index) {
    if (_.isEqual(destination, coord)) {
      retVal = index;
    }
  });
  return retVal;

  // for (var coord of this.edges) {
  //   if (_.isEqual(destination, coord)) {
  //     return coord;
  //   }
  // }
  // return coord;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  return this.findEdge(fromValue, toValue) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  this.edges.push([fromValue, toValue].sort());
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  var edgeIdx = this.findEdge(fromValue, toValue);

  if (edgeIdx > -1) {
    this.edges.splice(edgeIdx, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


