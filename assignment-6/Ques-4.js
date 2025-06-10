// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.
const arrayOfObject = [
  { firstName: "John", lastName: "Doe", age: 20 },
  { firstName: "Enna", lastName: "western", age: 24 },
  { firstName: "Amma", lastName: "granger", age: 21 },
];
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
  averageAge(obj) {
    let average = 0,
      count = 0;
    for (let i of obj) {
      average += i.age;
      count++;
    }
    average = average / count;
    return average;
  }
}
const objPerson = new Person("John", "Doe", 20);
console.log(objPerson.fullName());
console.log("Average age is " + objPerson.averageAge(arrayOfObject));
