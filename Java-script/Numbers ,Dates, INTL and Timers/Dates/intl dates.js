const now = new Date();
console.log(new Intl.DateTimeFormat('en-US').format(now)); // 8/17/2025
console.log(new Intl.DateTimeFormat('en-GB').format(now)); // 17/08/2025
console.log(new Intl.DateTimeFormat('ar-SY').format(now)); // ١٧‏/٨‏/٢٠٢٥
const options = {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
};
console.log(new Intl.DateTimeFormat('en-GB', options).format(now));
