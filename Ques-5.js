// 5. Write a program to print all even number first and then all odd numbers using only one iteration

const arr = [2, 3, 4, 5, 7, 45, 67, 12, 23, 42, 51, 22];
function oddEvenNumber(arr) {
  let arrEven = [];
  let arrOdd = [];

  for (let i of arr) {
    if (i % 2 == 0) {
      arrEven += i + " ";
    } else {
      arrOdd += i + " ";
    }
  }
  let arrEvenOdd = arrEven + arrOdd;
  console.log(arrEvenOdd);
}
oddEvenNumber(arr);
