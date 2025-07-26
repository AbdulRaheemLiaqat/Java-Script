let obj1 = { greeting: 'hello' };
let obj2 = obj1;
obj2.greeting = 'world';
console.log(obj1.greeting); // Output: 'world'
console.log(obj2.greeting); // Output: 'world'