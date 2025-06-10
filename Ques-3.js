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


