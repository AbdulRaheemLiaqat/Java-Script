const person1 = { name: 'Abdullah' };
const person2 = { name: 'maheen' };
function introduce(age, city) {
  console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}
introduce.call(person1, 25, 'Karachi'); // call: pass arguments normally
introduce.apply(person2, [22, 'Lahore']); // apply: pass arguments as array