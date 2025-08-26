class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log('Not a full name');
  }
  get fullName() {
    return this._fullName;
  }
}
const p1 = new Person('Maheen', 2005);
console.log(p1.age);
