'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0] more dynamically
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Prompt user for input
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // Validate input and update answers array
    if (typeof input === 'number' && input >= 0 && input < this.answers.length) {
      this.answers[input]++;
    } else {
      alert('Invalid option! Please choose a number between 0 and 3.');
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }); // array
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // string
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); // array
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); // string