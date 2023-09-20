const Person = require('./person');

// Your code here

class Student extends Person {
   constructor(firstName,lastName,age,major,GPA){
       super(firstName,lastName,age)
       this.GPA= GPA;
       this.major = major;
   }

   static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student1.GPA === student2.GPA) {
      return 'Both students have the same GPA';
    } else {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    }
  }
  
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}