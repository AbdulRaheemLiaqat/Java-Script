const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(2));   // ["c", "d", "e"] removed
console.log(arr);             // ["a", "b"]
const arr2 = ['x', 'y', 'z'];
arr2.splice(1, 1, 'new');     // remove 1 element at index 1 and add "new"
console.log(arr2);            // ["x", "new", "z"]