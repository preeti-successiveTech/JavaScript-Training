// 4. Write a program to print all even number first and then all odd numbers
const arr = [2, 3, 4, 5, 7, 45, 67, 12, 23, 42, 51, 22];
function oddEvenNumber(arr) {
  let strEven = " ";
  let strOdd = " ";

  for (let i of arr) {
    if (i % 2 == 0) {
      strEven += i + " ";
    }
  }
  for (let i of arr) {
    if (i % 2 != 0) {
      strOdd += i + " ";
    }
  }
  let res = strEven + strOdd;
  console.log(res);
}
oddEvenNumber(arr);
