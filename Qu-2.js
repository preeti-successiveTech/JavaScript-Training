<<<<<<< HEAD
// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const arrOfObject = [
    { name: "Angel", age: 30 },
    { name: "Beauty", age: 28 },
    { name: "Akriti", age: 24 },
    { name: "Aman", age: 25 },
    { name: "Priyanshu", age: 20 },
  ];
function sortArrayOfObject(arrOfObject) {
  
  for (let i = 0; i < arrOfObject.length; i++) {
    for (let j = 0; j < arrOfObject.length - i - 1; j++) {
      if (arrOfObject[j].age > arrOfObject[j + 1].age) {
        let temp = arrOfObject[j];
        arrOfObject[j] = arrOfObject[j + 1];
        arrOfObject[j + 1] = temp;
      }
    }
  }
  console.log(arrOfObject);
}
sortArrayOfObject(arrOfObject);
=======
// 2. Write a program to display following output as shown in figure
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

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
  let i = numOfRow;
  for (i = numOfRow; i >= 1; i--) {
    let mystr = "";
    for (let j = 1; j <= i; j++) {
      mystr += j + " ";
    }
    console.log(mystr);
  }
  for (i = i + 2; i <= numOfRow; i++) {
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
>>>>>>> develop
