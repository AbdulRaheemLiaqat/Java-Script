const user = {
  name: 'mahnoor',
  address: {
    city: 'Islamabad',
    zip: 54000
  }
};
const {
  address: { city, zip }
} = user;
console.log(city); // 'Islamabad'
console.log(zip);  // 54000