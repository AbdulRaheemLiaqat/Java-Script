const shop = new Map([
  ['name', 'SuperMart'],
  ['open', 9],
  ['close', 21]
]);
// Loop through keys
for (const key of shop.keys()) {
  console.log(key);
}
// Loop through values
for (const value of shop.values()) {
  console.log(value);
}
// Loop through entries
for (const [key, value] of shop.entries()) {
  console.log(`${key}: ${value}`);
}29