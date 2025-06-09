// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
let previousRandomNumber = randomNumber();
let currentRandomNumber = randomNumber();

while(previousRandomNumber == currentRandomNumber) {
  currentRandomNumber += 1;
}
console.log(currentRandomNumber);