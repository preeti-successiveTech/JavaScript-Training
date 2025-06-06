// 2. Write a program to display following output as shown in figure
// 1
// 2 3
// 4 5 6
// 7 8 9 10

const pattern1 = (numOfRow) => {
  let current = 1;
  for (let i = 1; i <= numOfRow; i++) {
    let mystr = "";
    for (let j = 1; j <= i; j++) {
      mystr += current + " ";
      current++;
    }
    console.log(mystr);
  }
  console.log();
};

const pattern2 = (numOfRow) => {
  for (let i = 1; i <= numOfRow; i++) {
    let mystr = "";
    for (let j = 1; j <= i; j++) {
      mystr += i + " ";
    }
    console.log(mystr);
  }
  console.log();
};

const pattern3 = (numOfRow) => {
  for (let i = numOfRow; i >= 1; i--) {
    let mystr = "";
    for (let j = 1; j <= i; j++) {
      mystr += j + " ";
    }
    console.log(mystr);
  }
  console.log();
};

const pattern4 = (numOfRow) => {
  for (let i = 1; i <= numOfRow; i++) {
    let mystr = "";
    for (let j = 1; j <= i; j++) {
      mystr += j + " ";
    }
    console.log(mystr);
  }
  console.log();
};

pattern1(4);
pattern2(4);
pattern3(5);
pattern4(5);
