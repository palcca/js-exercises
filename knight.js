const table = [
  ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
  ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
  ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
  ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
  ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
  ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
  ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
  ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
];

function getPossibleSteps(arr) {
  let steps = [];
  if (arr[0] + 2 <= 7 && arr[1] - 1 >= 0) steps.push(table[arr[0] + 2][arr[1] - 1]);
  if (arr[0] + 1 <= 7 && arr[1] - 2 >= 0) steps.push(table[arr[0] + 1][arr[1] - 2]);
  if (arr[0] - 1 >= 0 && arr[1] - 2 >= 0) steps.push(table[arr[0] - 1][arr[1] - 2]);
  if (arr[0] - 2 >= 0 && arr[1] - 1 >= 0) steps.push(table[arr[0] - 2][arr[1] - 1]);
  if (arr[0] - 2 >= 0 && arr[1] + 1 <= 7) steps.push(table[arr[0] - 2][arr[1] + 1]);
  if (arr[0] - 1 >= 0 && arr[1] + 2 <= 7) steps.push(table[arr[0] - 1][arr[1] + 2]);
  if (arr[0] + 1 <= 7 && arr[1] + 2 <= 7) steps.push(table[arr[0] + 1][arr[1] + 2]);
  if (arr[0] + 2 <= 7 && arr[1] + 1 >= 0) steps.push(table[arr[0] + 2][arr[1] + 1]);
  return steps;
}

function findCoord(string) {
  for (let i = 0; i < 8; i++) {
    for (let y = 0; y < 8; y++) {
       if (string === table[i][y]) return [i, y];
    }
  }
}

class LinkedNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function knight(from, dest) {
  if (from === dest) {    
    
    return null;
  }
  let current = new LinkedNode(from);
  let queue = [current];
  let possibleSteps = getPossibleSteps(findCoord(current.value));
  while (queue[0].value !== dest) {
    current = queue.shift(0);
    possibleSteps = getPossibleSteps(findCoord(current.value));
    for (let i = 0; i < possibleSteps.length; i++) {
      queue.push(new LinkedNode(possibleSteps[i], current));
    }
  }
  let array = [queue[0]];
  current=queue[0];
  while (current.next) {
    array.unshift(current.next);
    current = current.next;
  }

  return array;
}

console.log(knight("C2", "H7"));
