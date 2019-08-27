/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.list = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let pivot, start = 0, end = this.list.length;

  // Iterative binary search
  while(true) {
    pivot = Math.floor((start + end)/2);
    if(start >= end) break;
    if(this.list[pivot] === num) break;
    //Search left half
    if(this.list[pivot] > num) end = pivot;
    //Search right half
    if(this.list[pivot] < num) start = pivot + 1;
  }

  // Insert in order
  this.list.splice(pivot, 0, num);
  return null;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let length = this.list.length;
  if(length % 2 === 0) {
    return (this.list[(length/2) - 1] + this.list[length/2])/2;
  } else {
    return this.list[Math.floor(length/2)];
  }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 module.exports = MedianFinder;