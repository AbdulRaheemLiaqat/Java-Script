const num = 1234567.89;
console.log(new Intl.NumberFormat('en-US').format(num));  
console.log(new Intl.NumberFormat('de-DE').format(num));  
console.log(new Intl.NumberFormat('en-in').format(num)); 
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'pkr',
}).format(num));  // $1,234,567.89
