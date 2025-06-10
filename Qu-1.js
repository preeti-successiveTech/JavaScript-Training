<<<<<<< HEAD
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
=======
// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
function calculator(num1, num2, choice) {
  if (choice == "+") {
    return num1 + num2;
  } else if (choice == "-") {
    return num1 - num2;
  } else if (choice == "*") {
    return num1 * num2;
  } else if (choice == "/") {
    return num1 / num2;
  }
}
console.log(calculator(4, 2, "+"));
console.log(calculator(4, 2, "-"));
console.log(calculator(4, 2, "*"));
console.log(calculator(4, 2, "/"));
>>>>>>> develop
