let array = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105,79,100,110]

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      sortArr.push(leftArr.shift(0));
    } else {
      sortArr.push(rightArr.shift(0));
    }
  }
  return [...sortArr, ...rightArr, ...leftArr];
}

console.log(mergeSort(array));
console.log(mergeSort(array2));


