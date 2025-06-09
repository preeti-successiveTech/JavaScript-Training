// 11. Write a program to sort an array (bubble sort)

let arr = [10, 2, 3, 4, 10, 5, 3, 20, 6];
function sortArray(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}
sortArray(arr);
