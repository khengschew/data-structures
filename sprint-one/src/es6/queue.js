class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.size()] = value;
  }

  dequeue() {
    var tempVal = this.storage[0];
    var tempSize = this.size();

    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[tempSize - 1];

    return tempVal;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
