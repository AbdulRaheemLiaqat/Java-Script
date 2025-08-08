const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));        // ["c", "d", "e"]
console.log(arr.slice(1, 4));     // ["b", "c", "d"]
console.log(arr.slice(-2));       // ["d", "e"]
console.log(arr.slice());         // ["a", "b", "c", "d", "e"] (copy)