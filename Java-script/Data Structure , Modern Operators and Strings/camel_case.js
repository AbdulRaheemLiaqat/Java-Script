// Create textarea and button in DOM
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').textContent = 'Convert';
// Event listener for button click
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n'); // Split by new line
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const camelCase = first + second[0].toUpperCase() + second.slice(1);
    console.log(`${camelCase.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});