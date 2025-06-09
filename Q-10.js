// 10. Write a program to concatenate an input of array of arrays

let arr = [1, 2, 3, [4, [5], 6], 5, 6];
function concatenateArray(arr) {
  let arrOfArr = arr.flat(Infinity);
  console.log(arrOfArr);
}
concatenateArray(arr);



