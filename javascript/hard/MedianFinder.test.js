const MedianFinder = require('./MedianFinder');

function runTests(functionCalls, parameters, returnValues, verbose=false) {
  let obj = new MedianFinder();

  for(let i = 1; i < functionCalls.length; i++) {
    if(verbose) {
      console.log(" ");
      console.log(obj.list);
    }

    switch(functionCalls[i]) {
      case "addNum":
        if(verbose) console.log(`${i}: obj.addNum(${ parameters[i] }) => ${returnValues[i]}`)
        expect(obj.addNum(...parameters[i])).toBe(returnValues[i]);
        break;
      case "findMedian":
        if(verbose) console.log(`${i}: obj.findMedian(${ parameters[i] }) => ${returnValues[i]}`)
        expect(obj.findMedian(...parameters[i])).toBe(returnValues[i]);
        break; 
    }
  }
}

test('MedianFinder test 1', () => {
  let obj = new MedianFinder();

  obj.addNum(1);
  obj.addNum(2);
  expect(obj.findMedian()).toBe(1.5);
  obj.addNum(3);
  expect(obj.findMedian()).toBe(2);
});

test('MedianFinder test 2', () => {
  let functionCalls = ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"];

  let parameters = [[],[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]];

  let returnValues = [null,null,6.0,null,8.0,null,6.0,null,6.0,null,6.0,null,5.5,null,6.0,null,5.5,null,5.0,null,4.0,null,3.0];

  runTests(functionCalls, parameters, returnValues);
})