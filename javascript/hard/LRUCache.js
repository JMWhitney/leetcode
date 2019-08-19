/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = Math.abs(capacity);
  this.numKeys = 0;
  this.cache = new Map();
  this.priorityQueue = [];
};

/** 
 * @param {number} key
 * @return {number} value
 * Returns the value of the passed in key, and pushes that key to the back of the queue. 
 */
LRUCache.prototype.get = function(key) {
  let value = this.cache.get(key);
  if(value) {
    let index = this.priorityQueue.indexOf(key);
    this.priorityQueue.splice(index, 1);
    this.priorityQueue.unshift(key);
    return value;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 * Inserts the key value pair on the map, and the key to the back of the queue.
 */
LRUCache.prototype.put = function(key, value) {
  // If there is room simply set the key value pair and add the key to the back of the queue
  if(this.numKeys < this.capacity) {
    this.cache.set(key, value);
    this.priorityQueue.unshift(key);
    this.numKeys++;
  } 
  // There is no room
  else {
    // Key already exists
    if(this.cache.has(key)) {
      let index = this.priorityQueue.indexOf(key);
      this.priorityQueue.splice(index, 1);
      this.priorityQueue.unshift(key);
    } 
    // Key doesn't exist
    else {
      // Remove LRU key from queue
      let LRUKey = this.priorityQueue.pop();
      // Remove key value pair from the cache
      this.cache.delete(LRUKey);
      // Add new key value pair
      this.priorityQueue.unshift(key);
    }
    this.cache.set(key, value);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;