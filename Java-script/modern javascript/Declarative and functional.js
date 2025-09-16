const numbers = [1, 2, 3, 4];
let squared = [];
for (let i = 0; i < numbers.length; i++) {
  squared.push(numbers[i] * numbers[i]);
}
const squared2 = numbers.map(n => n * n);
console.log(squared);
console.log(squared2);
