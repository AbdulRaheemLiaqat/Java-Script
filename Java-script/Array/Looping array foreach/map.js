const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['PKR', 'Pakistani Rupee'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
