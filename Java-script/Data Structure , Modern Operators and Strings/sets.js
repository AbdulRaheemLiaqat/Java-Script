const numbers = new Set([1, 2, 3, 3, 4, 4]);
console.log(numbers); // Set { 1, 2, 3, 4 }
numbers.add(5);
numbers.delete(2);
console.log(numbers.has(3)); // true
console.log(numbers.size); // 4