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
