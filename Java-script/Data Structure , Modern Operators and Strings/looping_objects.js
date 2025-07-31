const person = { name: 'Abdullah', age: 22, country: 'Pakistan' };
// Keys
for (const key of Object.keys(person)) {
  console.log(key);
}
// Values
for (const value of Object.values(person)) {
  console.log(value);
}
// Entries
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}