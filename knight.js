function getPossibleSteps(arr) {
  let steps = [
    [arr[0] + 2, arr[1] - 1],
    [arr[0] + 1, arr[1] - 2],
    [arr[0] - 1, arr[1] - 2],
    [arr[0] - 2, arr[1] - 1],
    [arr[0] - 2, arr[1] + 1],
    [arr[0] - 1, arr[1] + 2],
    [arr[0] + 1, arr[1] + 2],
    [arr[0] + 2, arr[1] + 1],
  ];
  let newArr = [];
  for (let i = 0; i < 8; i++) {
    if (
      !(
        steps[i][0] > 7 ||
        steps[i][1] > 7 ||
        steps[i][0] < 0 ||
        steps[i][1] < 0
      )
    )
      newArr.push(steps[i]);
  }

  return newArr;
}
const table = ["A", "B", "C", "D", "E", "F", "G", "H"];

function findCoord(string) {
  let arr = string.split("");
  arr[1] = Number(arr[1]);
  for (let i = 0; i < 8; i++) {
    if (arr[0] === table[i]) {
      return [i, arr[1]];
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
  dest = findCoord(dest);
  let queue = [new LinkedNode(findCoord(from))];
  let possibleSteps = getPossibleSteps(queue[0].value);
  while (queue[0].value.toString() !== dest.toString()) {
    let current = queue.shift(0);
    possibleSteps = getPossibleSteps(current.value);
    for (i = 0; i < possibleSteps.length; i++) {
      queue.push(new LinkedNode(possibleSteps[i], current));
    }
  }
  let array = [queue[0].value];
  let current = queue[0];
  while (current.next) {
    array.unshift(current.next.value);
    current = current.next;
  }
  return array;
}

function printPath(from, dest) {
  let map = knight(from, dest);
  console.log(map);
  let Table = [[], [], [], [], [], [], [], []];
  for (let i = 0; i < 8; i++) {
    for (let y = 0; y < 8; y++) {
      Table[i][y] = "_";
    }
  }
  Table[map[0][0]][map[0][1]]="o"
  
  for (let m = 1; m < map.length; m++) {
    Table[map[m][0]][map[m][1]] = m;
  }
  Table[map[map.length-1][0]][map[map.length-1][1]]="X"
  console.log(Table);
  for (let i = 0; i < 8; i++) {
    console.log(Table[i].join("|"));
  }
}

printPath("A0", "H7");
