// 9. Write a program to find the last duplicate index in an array

var arr = [1, 2, 3, 4, 5, 2, 3, 4, 1, 3, 4, 7];
function lastDuplicateIndex(arr) {
  var newArr = new Set(arr);
  count = 0;
  for (let i of newArr) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i == arr[j]) {
        count++;
        indexDup = j;
      }
    }
    if (count > 1) {
      console.log(" last duplicate index of " + i + " is " + indexDup);
    }
  }
}
lastDuplicateIndex(arr);
