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

const deepCloneObject = (obj) =>{
  const cloneObject = structuredClone(obj);
  cloneObject.employee.employeeid =  3;
  console.log(cloneObject);
}

console.log(deepCloneObject(obj));
console.log(obj);