<<<<<<< HEAD
// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const arrOfObject = [
  { name: "Angel", age: 30, id: 1 },
  { name: "Beauty", age: 28, id: 2 },
  { name: "Akriti", age: 24, id: 3 },
  { name: "Aman", age: 25, id: 4 },
  { name: "Priyanshu", age: 20, id: 5 },
];
const removeId = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    delete obj[i].id;
  }
  console.log(obj);
};
removeId(arrOfObject);


=======
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
>>>>>>> develop
