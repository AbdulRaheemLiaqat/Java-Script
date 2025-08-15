const nums = [5, 1, 10, 2];
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // [1, 2, 5, 10]
nums.sort((a, b) => b - a); // Descending
console.log(nums); // [10, 5, 2, 1]
// String sort
const names = ["Hamza", "Abdullah", "Maheen"];
names.sort();
console.log(names); // ["Abdullah", "Hamza", "Maheen"]
