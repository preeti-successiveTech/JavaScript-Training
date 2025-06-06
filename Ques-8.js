// 8. Write a program to dispaly number from 1-20 using all types of loops

function useForLoop() {
  let num = "";
  for (let i = 1; i <= 20; i++) {
    num += i + " ";
  }
  console.log(num);
}
function useWhileLoop() {
  let num = "";
  let i = 1;
  while (i <= 20) {
    num += i + " ";
    i++;
  }
  console.log(num);
}
function useDoWhileLoop() {
  let num = "";
  let i = 1;
  do {
    num += i + " ";
    i++;
  } while (i <= 20);
  console.log(num);
}
useForLoop();
useWhileLoop();
useDoWhileLoop();
