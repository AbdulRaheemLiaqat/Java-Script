const calcTip = function (bill) {
  return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};
console.log(`Tip for 100:`, calcTip(100)); 
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);