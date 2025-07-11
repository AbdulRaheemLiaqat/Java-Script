let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];
let avgDolphins = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
let avgKoalas = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;
console.log("Dolphins Avg:", avgDolphins);
console.log("Koalas Avg:", avgKoalas);
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
  console.log("Both win the trophy 🏆 (Draw)");
} else {
  console.log("No team wins the trophy 😢");
}