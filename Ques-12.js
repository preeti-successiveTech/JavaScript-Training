// 12. Write a program to display intersection of two array

var firstArr = [10, 2, 13, 5, 3];
var secondArr = [2, 3, 11, 4, 8];
function intersactionOfArray(arr1, arr2) {
  var arr = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }
  intersaction = new Set(arr);
  console.log(intersaction);
}
intersactionOfArray(firstArr, secondArr);
