const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);  
console.log(Array.prototype.__proto__ === Object.prototype); 
console.log(Object.prototype.__proto__);  