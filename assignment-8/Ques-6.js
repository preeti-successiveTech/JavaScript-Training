// 6. var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();


// getDetails is a function.

var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    return  this.name + " is " + this.age + " years old";
    
  },
};
// var getPersonDetails = person.getDetails();
var getPersonDetails = person.getDetails.call(person);   // using call method
console.log(getPersonDetails);


