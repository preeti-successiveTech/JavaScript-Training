// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const str = "Hello John";
function revseseStr(str) {
  const newstr = str.split(" ");
  let reverseStr = " ";
  for (let i of newstr) {
    for (let j = i.length - 1; j >= 0; j--) {
      reverseStr += i[j];
    }
    reverseStr += " ";
  }
  console.log(reverseStr);
}
revseseStr(str);
