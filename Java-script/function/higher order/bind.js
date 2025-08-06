const person = {
  name: 'Abdullah',
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};
const say = person.sayHi;
const sayBound = person.sayHi.bind(person);
say(); // ❌ undefined (this is lost)
sayBound(); // ✅ Hi, I am Abdullah