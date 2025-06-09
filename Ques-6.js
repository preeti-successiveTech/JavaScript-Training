// 6. Write a program to display prime numbers from 1 to 50

function displayPrimeNo(range) {
  const arr = [];
  for (let i = 1; i <= range; i++) {
    let count = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 1) {
      arr.push(i);
    }
  }
  console.log(arr);
}
displayPrimeNo(50);
