 const score0El = document.getElementById('score--0');
  const score1El = document.getElementById('score--1');
  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--1');
  const player0El = document.getElementById('player--0');
  const player1El = document.getElementById('player--1');
  const diceEl = document.getElementById('dice');
  const rollBtn = document.querySelector('.roll');
  const holdBtn = document.querySelector('.hold');
  const newBtn = document.querySelector('.new');
  let scores, currentScore, activePlayer, playing;
  function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.querySelector('p').classList.add('active');
    player1El.querySelector('p').classList.remove('active');
    diceEl.src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg";
  }

  function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.querySelector('p').classList.toggle('active');
    player1El.querySelector('p').classList.toggle('active');
  }

  rollBtn.addEventListener('click', function () {
    if (playing) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      diceEl.src = `https://upload.wikimedia.org/wikipedia/commons/${dice === 1 ? "1/1b" : dice === 2 ? "5/5f" : dice === 3 ? "b/b1" : dice === 4 ? "f/fd" : dice === 5 ? "0/08" : "2/26"}/Dice-${dice}-b.svg`;

      if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      } else {
        switchPlayer();
      }
    }
  });

  holdBtn.addEventListener('click', function () {
    if (playing) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

      if (scores[activePlayer] >= 100) {
        playing = false;
        alert(`🎉 Player ${activePlayer + 1} wins!`);
      } else {
        switchPlayer();
      }
    }
  });
  newBtn.addEventListener('click', init);
  init();
