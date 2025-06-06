// 4. Write a program to convert given string to upperCase OR lowerCase
const str1 = "preeti";
const str2 = "GaRG";

// var newStr1 = str1.toUpperCase();
// console.log(newStr1);

// var newStr2 = str2.toLowerCase();
// console.log(newStr2);
function upperCase(str) {
  var strUpper = " ";
  for (let i in str) {
    var code = str.charCodeAt(i); // charCodeAt to fetch the ASCII value of that character
    if (code >= 65 && code <= 91) {
      strUpper += str[i];
    } else {
      strUpper += String.fromCharCode(code - 32); // to fetch character from ASCII value
    }
  }
  return strUpper;
}
function lowerCase(str) {
  var strLower = " ";
  for (let i in str) {
    var code = str.charCodeAt(i);
    if (code >= 65 && code <= 91) {
      strLower += String.fromCharCode(code + 32);
    } else {
      strLower += str[i];
    }
  }
  return strLower;
}
console.log(upperCase(str1));
console.log(lowerCase(str2));
