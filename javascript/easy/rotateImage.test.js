const rotateImage = require('./rotateImage');

test(`Receives 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
] 
and modifies it to be 
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]`, () => {
  let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  rotateImage(arr)
  expect(arr)
  .toStrictEqual(
    [
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ]
  )
});

test(`Receives 
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
] 
and modifies it to be
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]`, () => {

  let arr = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ];
  rotateImage(arr);
  expect(arr)
  .toStrictEqual([
      [15,13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7,10,11]
    ])
});