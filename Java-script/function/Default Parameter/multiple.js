function createUser(name = 'Unknown', age = 18) {
  console.log(`Name: ${name}, Age: ${age}`);
}
createUser();               // Name: Unknown, Age: 18
createUser('maha');         // Name: maha, Age: 18
createUser('hassan', 25);    // Name: hassan, Age: 25