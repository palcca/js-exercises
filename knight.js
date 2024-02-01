function getPossibleSteps(arr) {
  let steps = [[arr[0]+2, arr[1]-1], [arr[0]+1, arr[1]-2], [arr[0]-1, arr[1]-2],[arr[0]-2, arr[1]-1],
               [arr[0]-2, arr[1]+1], [arr[0]-1, arr[1]+2], [arr[0]+1, arr[1]+2],[arr[0]+2, arr[1]+1]]
  let newArr=[];
  for (let i = 0; i < 8; i++){
    if(!(steps[i][0] > 7 || steps[i][1] > 7 || steps[i][0] < 0 || steps[i][1] < 0)) newArr.push(steps[i]);
  }

  return newArr;
}
const table = ["A","B","C","D","E","F","G","H"]

function findCoord(string) {
  let arr = string.split("");
  arr[1]=Number(arr[1]);
  for (let i = 0; i < 8; i++){
    if (arr[0] === table[i]) {
      
      return [i, arr[1]]
    }
  }
}

class LinkedNode {
  constructor(value, next) { this.value = value; this.next = next; }
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
    possibleSteps = getPossibleSteps((current.value));
    for ( i = 0; i < possibleSteps.length; i++) {
      queue.push(new LinkedNode(possibleSteps[i], current));
    }
  }  
  let array = [[table[queue[0].value[0]],queue[0].value[1]].join("")];
  let current=queue[0];
  while (current.next) {
    array.unshift([table[current.next.value[0]],current.next.value[1]].join(""));
    current = current.next;
  }

  return array;
}

console.log(knight("A1", "H7"))