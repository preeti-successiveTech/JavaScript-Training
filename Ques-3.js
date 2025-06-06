// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const str = "abcabcdabbcc";
function countVaribleString(str) {
  var arr = new Set(str); //to get the unique values
  var countStr = " ";
  var count = 0;
  for (let i of arr) {
    count = 0;
    for (let j = 0; j < str.length; j++) {
      if (i == str[j]) {
        count++;
      }
    }
    count = String(count);
    countStr += i + count;
  }
  console.log(countStr);
}
countVaribleString(str);
