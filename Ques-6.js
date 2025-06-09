// 6. Write a program to find sum of an array

const arr = [10, 20, 2, 3, 3];
function sumOfArray(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  console.log(sum);
}
sumOfArray(arr);
