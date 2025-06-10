// 9. Write a program to print fibonaaci series

// function printFibonaaci(num)
// {
//     let arr = [];
//     let num1=0;
//     let num2=1;
//     arr.push(num1);
//     arr.push(num2);
//     for(let i=0;i<num-2;i++)
//     {
//         let num3 = num1+num2 ;
//         arr.push(num3);
//         num1 = num2;
//         num2 = num3;
//     }
//     console.log(arr);
// }
// printFibonaaci(10);

function printFibonaaci(num) {
  //using recursion
  if (num == 0 || num == 1) {
    return num;
  }
  return printFibonaaci(num - 1) + printFibonaaci(num - 2);
}
for (let i = 0; i < 10; i++) {
  console.log(printFibonaaci(i));
}
