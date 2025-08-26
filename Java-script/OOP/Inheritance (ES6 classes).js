class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}
const jessica = new StudentCl('Jessica Lee', 1996, 'Math');
jessica.calcAge();
