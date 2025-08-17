'use strict';
const account1 = {
  owner: 'Abdullah',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movementsDates: [
    '2025-08-01T14:11:59.604Z',
    '2025-08-02T17:01:17.194Z',
    '2025-08-03T23:36:17.929Z',
    '2025-08-04T10:51:36.790Z',
    '2025-08-05T14:11:59.604Z',
    '2025-08-06T17:01:17.194Z',
    '2025-08-07T23:36:17.929Z',
    '2025-08-08T10:51:36.790Z'
  ]
};
const account2 = {
  owner: 'Maheen',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDates: [
    '2025-08-01T09:15:04.904Z',
    '2025-08-02T10:17:24.185Z',
    '2025-08-03T14:11:59.604Z',
    '2025-08-04T17:01:17.194Z',
    '2025-08-05T23:36:17.929Z',
    '2025-08-06T10:51:36.790Z',
    '2025-08-07T14:11:59.604Z',
    '2025-08-08T17:01:17.194Z'
  ]
};
const accounts = [account1, account2];
const containerMovements = document.querySelector('.movements');
const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
const displayMovements = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const daysPassed = calcDaysPassed(new Date(), date);
    let displayDate;
    if (daysPassed === 0) displayDate = 'Today';
    else if (daysPassed === 1) displayDate = 'Yesterday';
    else if (daysPassed <= 7) displayDate = `${daysPassed} days ago`;
    else {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      displayDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    }
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1);
