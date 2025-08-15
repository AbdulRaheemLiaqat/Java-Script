// flat(): flattens nested arrays
const arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat());      
console.log(arr.flat(2));     
// flatMap(): map + flat(1)
const words = ["hello world", "hi there"];
const splitWords = words.flatMap(str => str.split(" "));
console.log(splitWords); 
