const name = 'Abdullah CH';

// Length
console.log(name.length); // 8

// Access character
console.log(name[0]); // 'A'

// Changing case
console.log(name.toUpperCase()); // 'ABDULLAH CH'
console.log(name.toLowerCase()); // 'abdullah ch'

// Finding a substring
console.log(name.indexOf('CH')); // 2
console.log(name.includes('Abdullah')); // true

// Extracting parts
console.log(name.slice(0, 3)); // 'Abdullah'