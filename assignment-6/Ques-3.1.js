// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    return (
      "Hii, My name is " +
      this.name +
      ". I am " +
      this.age +
      " year old. My hobbies are " +
      this.interests
    );
  }
  farewell() {
    return "Goodbye " + this.name;
  }
}
const obj = new person(
  "John",
  30,
  "male",
  "Playing chess, movies and travelling"
);

console.log(obj.greeting());
console.log(obj.farewell());
