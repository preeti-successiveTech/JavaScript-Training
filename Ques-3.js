// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

function pattern(num) {
  let space = num;
  for (let i = 1; i <= num; i++) {
    let mystr = "";
    for (let k = 2 * space; k >= 1; k--) {
      mystr += " ";
    }
    for (let j = 1; j <= i; j++) {
      mystr += " *  ";
    }
    console.log(mystr);
    space--;
  }
  for (let i = num; i >= 1; i--) {
    space++;
    let mystr = "  ";
    for (let k = 1; k <= 2 * space; k++) {
      mystr += " ";
    }
    for (let j = i; j > 1; j--) {
      mystr += " *  ";
    }
    console.log(mystr);
  }
}
pattern(5);
