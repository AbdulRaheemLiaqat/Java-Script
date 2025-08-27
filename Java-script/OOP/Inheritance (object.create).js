const Person = {
  init(name, age) {
    this.name = name
    this.age = age
  },
  greet() {
    return `Hello, I'm ${this.name}`
  }
}
const Student = Object.create(Person)
Student.initStudent = function(name, age, grade) {
  this.init(name, age)
  this.grade = grade
}
Student.study = function() {
  return `${this.name} is studying`
}
const s = Object.create(Student)
s.initStudent("Maheen", 20, "A")
console.log(s.greet())
console.log(s.study())
