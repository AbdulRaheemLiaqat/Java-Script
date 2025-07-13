function printForecast(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    const day = i + 1;
    const plural = day === 1 ? 'day' : 'days';
    output += `... ${arr[i]}ºC in ${day} ${plural} `;
  }
  console.log(output + '...');
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);