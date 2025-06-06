// 6. Write a program to find sum of an array

const arr = [10, 20, 2, 3, 3];
function sumOfArray(arr) {
  var sum = 0;
  for (var i of arr) {
    sum += i;
  }
  console.log(sum);
}
sumOfArray(arr);
