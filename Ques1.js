// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

function randomnumber() {
  return Math.floor(Math.random() * 10) + 1;
}

let previousnumber = randomnumber();
let currentnumber = randomnumber();

while (previousnumber == currentnumber) {
  currentnumber += 1;
}
console.log(currentnumber);
