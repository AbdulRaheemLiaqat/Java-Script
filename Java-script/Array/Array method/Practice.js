const transactions = [200, -100, 340, -300, 50];
// Check if there’s any deposit above 300
console.log(transactions.some(t => t > 300)); // true
// Check if all are positive
console.log(transactions.every(t => t > 0)); // false
// Flatten array of arrays
const nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat()); // [1, 2, 3, 4, 5]
// Sort transactions ascending
transactions.sort((a, b) => a - b);
console.log(transactions);
