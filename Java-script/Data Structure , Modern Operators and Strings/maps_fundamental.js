const shop = new Map();
shop.set('name', 'SuperMart');
shop.set(1, 'Open');
shop.set(true, 'We are open today');
console.log(shop.get('name')); // "SuperMart"
console.log(shop.has(1)); // true
shop.delete(1);
console.log(shop.size); // 2