class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(this.type + " makes a sound");
  }
}
class Dog extends Animal {
  constructor(name) {
    super("Dog"); 
    this.name = name;
  }
  bark() {
    console.log(this.name + " says Woof!");
  }
}
const d = new Dog("Buddy");
d.speak();
d.bark();  