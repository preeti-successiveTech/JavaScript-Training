// 7. All of the above questions from 3-6 needs to be done with arrow functions also

const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");
const add = (num1, num2) => num1 + num2;
console.log("addition :" + add(num1, num2));

const checkEvenOdd = (num) => (num1 % 2 == 0 ? true : false);
console.log("Odd or even :" + checkEvenOdd(num1));

const square = (num) => num * num;
console.log("square of first number : " + square(num1));

const cube = (square, num) => square * num;
console.log("Cube of this number :" + cube(square(num1), num1));
