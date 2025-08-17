const date1 = new Date(2025, 7, 17); 
const date2 = new Date(2025, 7, 10);
const diffMs = date1 - date2;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays);
const daysPassed = (d1, d2) => Math.abs((d2 - d1) / (1000*60*60*24));
console.log(daysPassed(new Date(2025,7,17), new Date(2025,7,1)));
