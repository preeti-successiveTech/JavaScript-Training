// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.
const num = prompt("Enter the number");
const checkEvenOdd = function (num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(checkEvenOdd(num));
