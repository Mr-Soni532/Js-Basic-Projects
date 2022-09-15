// ?syntax of class
/*class Name_of_class {
     constructor(arguments)
     {
     constructor_Members
     }

     any other function which we want to use 
}*/

//Class with the Employee
class Employee {
  constructor(Name, Age, Experience) {
    this.name = Name;
    this.age = Age;
    this.experience = Experience;
  }
  //This is a function which is using the members of contructor in class Employee
  Introduction() {
    return `Hello! This is ${this.name}, I am a ${this.age} year old programmer with ${this.experience} years of sharpe experience`;
  }
}
let Bhupender = new Employee("Bhupender", 21, 2);
console.log(Bhupender);

//! Inheritance Syntax
//! class 'class_Name' extends 'class_Name which we want to inherit

//Now we make a new class with the name Programmer and will Inherit in class Employee
class Programmer extends Employee {
  //in this class we are inheriting Employee class
  //while giving the constructor arguments we also add the argumnets of Inherited class(Employee)
  constructor(Name, Age, Experience, language) {
    //now we use super() function to access all the memebers of Employee constructor
    super(Name, Age, Experience);
    this.language = language;
  }
  Programmer_intro() {
    return `Hello! This is ${this.name}, I am a ${this.age} year old programmer with ${this.experience} years of sharpe experience in ${this.language} `;
  }
  //!!! We can also use static keyword to perfom any mathermatical function in which we will not use this.anything
  static add(a,b) {
      return a + b;
  }
}
console.log(Programmer.add(2+2));// we will get addition of given arguments 
let Mr_Soni = new Programmer("Mr_Soni", 21, 2, "JavaScript");

