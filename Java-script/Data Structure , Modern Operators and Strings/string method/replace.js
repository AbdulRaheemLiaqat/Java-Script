const price = 'Rs500';
console.log(price.replace('Rs', '$')); // '$500'
console.log('I like cats'.replace('cats', 'dogs')); // 'I like dogs'
// Replace all occurrences
const text = 'hi hi hi';
console.log(text.replace(/hi/g, 'hello')); // 'hello hello hello'