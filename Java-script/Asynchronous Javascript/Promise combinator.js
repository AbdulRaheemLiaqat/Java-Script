const p1 = new Promise(res => setTimeout(() => res('Fastest!'), 1000));
const p2 = new Promise(res => setTimeout(() => res('Slower...'), 2000));
Promise.race([p1, p2]).then(res => console.log('Race →', res));
Promise.allSettled([p1, Promise.reject('Error!')])
  .then(res => console.log('AllSettled →', res));
Promise.any([Promise.reject('Fail'), p1])
  .then(res => console.log('Any →', res));
