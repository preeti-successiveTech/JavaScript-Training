// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
class person{
    constructor(name, age)
    {
        this.name=name;
        this.age= age;
    }
    greeting()
    {
        console.log("name is "+this.name + ". and age is "+this.age);
    }
}
class Student extends person{
    super(name,age,studies)
    {
        this.name= name;
        this.age=age;
         this.studies = studies;
    }
   
    greeting()
    {
        
        console.log("name is "+this.name + ". and age is "+this.age+ " and studies in "+this.studies);
    }
}

const objPerson = new person("john", 20);
objPerson.greeting();
const objStudent = new Student("JavaScript");
objStudent.greeting();