// 10. Write a program to concatenate an input of array of arrays

var arr = [1, 2, 3, [4, [5], 6], 5, 6];
function concatenateArray(arr) {
  var arrOfArr = arr.flat(3);
  console.log(arrOfArr);
}
concatenateArray(arr);
