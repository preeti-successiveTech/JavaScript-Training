// 14. Write a program to reverse an array

var arr = [1, 2, 3, 4, 5, 6];
function reverseOfArray(arr) {
  var reverse = [];

  for (i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  console.log(reverse);
}
reverseOfArray(arr);
