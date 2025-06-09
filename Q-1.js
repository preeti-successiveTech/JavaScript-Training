// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const str = "Hello Preeti";
function removeDuplicate(str) {
  const newstr = new Set(str); // remove the duplicate values
  let strWithoutDuplicate = "";
  for (let i of newstr) {
    // for of used for array
    strWithoutDuplicate += i;
  }
  console.log(strWithoutDuplicate);
}
removeDuplicate(str);
