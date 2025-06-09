// 1. Write a program to iterate over object.

function iterateObject() {
  const obj = {
    name: "John Doe",
    age: 30,
    designation: "Manager",
    phoneno: "123456789",
  };
  for (let i in obj) {
    console.log(i + " : " + obj[i]);
  }
}
iterateObject();
