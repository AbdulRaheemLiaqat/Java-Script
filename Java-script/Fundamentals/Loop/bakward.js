const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];
for (let i = listOfNeighbours.length - 1; i >= 0; i--) {
  for (let j = listOfNeighbours[i].length - 1; j >= 0; j--) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}