let time = 10;
const timer = setInterval(() => {
  console.log(time);
  time--;

  if (time === 0) {
    console.log('⏰ Time is up!');
    clearInterval(timer);
  }
}, 1000);
