// 13. Write a program to return inverse of an array

let arr = [1, 2, 3, 7, 5, 0];
function inverseOfArray(arr) {
  let inverse = [];
  for (let i = 0; i < arr.length; i++) {
    inverse[arr[i]] = i;
  }
  console.log(inverse);
}
inverseOfArray(arr);
