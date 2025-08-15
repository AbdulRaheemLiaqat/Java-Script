// some(): at least one element passes the test
const nums = [1, 2, 3, 4];
console.log(nums.some(n => n > 3)); // true
// every(): all elements pass the test
console.log(nums.every(n => n > 0)); // true
console.log(nums.every(n => n > 2)); // false
