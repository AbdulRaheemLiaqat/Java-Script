// Selecting
const header = document.querySelector('h1');
// Creating
const message = document.createElement('div');
message.textContent = 'Welcome to the site!';
document.body.append(message);
// Deleting
message.remove();