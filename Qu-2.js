// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const arrOfObject = [
  { name: "Angel", age: 30 },
  { name: "Beauty", age: 28 },
  { name: "Akriti", age: 24 },
  { name: "Aman", age: 25 },
  { name: "Priyanshu", age: 20 },
];
function sortArrayOfObject(arrOfObject) {
  for (let i = 0; i < arrOfObject.length; i++) {
    for (let j = 0; j < arrOfObject.length - i - 1; j++) {
      if (arrOfObject[j].age > arrOfObject[j + 1].age) {
        let temp = arrOfObject[j];
        arrOfObject[j] = arrOfObject[j + 1];
        arrOfObject[j + 1] = temp;
      }
    }
  }
  console.log(arrOfObject);
}
sortArrayOfObject(arrOfObject);
