// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const obj = {
  name: "Angel",
  age: 30,
  phoneNo: "12345678",
  arr: [1, 2, 3, 4, 5],
  employee: {
    employeeid: 2,
    designation: "manager",
  },
};
const deepCloneObject = (obj) => {
  const newObj = {};
  for (let i in obj) {
    newObj[i] = obj[i];
  }
  console.log(newObj);
  newObj.name = "Preeti"; // change in the deep copy
  newObj.employee.employeeid = 3; // change in nested object
  console.log(newObj);
};

deepCloneObject(obj);
console.log(obj);