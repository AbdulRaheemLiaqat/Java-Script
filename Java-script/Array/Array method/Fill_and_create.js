// fill(): replace elements in array
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); 
// Array.from(): create arrays
const x = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(x); 
