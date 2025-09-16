const CounterModule = (function () {
  let count = 0;
  return {
    increment() { count++; console.log(count); },
    reset() { count = 0; console.log('Reset!'); }
  };
})();
CounterModule.increment();
CounterModule.increment();
CounterModule.reset();    
