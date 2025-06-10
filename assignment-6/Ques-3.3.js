// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  farewell() {}
}
class Teacher extends Person {
  constructor(name, age, subjectTaught) {
    super(name, age);
    this.subjectTaught = subjectTaught;
  }
  farewell() {
    console.log(
      "Teacher's name is " +
        this.name +
        ". Age is " +
        this.age +
        ". SubjectTaught is " +
        this.subjectTaught
    );
  }
}

const objTeacher = new Teacher("John", 25, "chemistry");
objTeacher.farewell();
