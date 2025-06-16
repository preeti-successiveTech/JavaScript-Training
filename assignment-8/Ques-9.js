// 9.function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);

// we have to use new keyword to create an object , we can not directly call that method

function Person(name, age) {
  this.name = name;
  this.age = age;
  
}
var person = new Person("John Doe", 30);
console.log(person.name);
