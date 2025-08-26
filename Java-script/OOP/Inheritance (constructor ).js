function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};
function Student(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}
Student.prototype = Object.create(Person.prototype);
const mike = new Student('Mahern', 2005, 'CS');
mike.calcAge();
