// Find Error in below questions and rectify them

// 1. let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

// The erroe is Loop is executing out of the limit, we can simply use a for in loop .

let myArray = [1, 2, 3, 4];
for (let i in myArray) {
  console.log(myArray[i]);
}
