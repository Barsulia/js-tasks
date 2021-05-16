const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {
  return num % 2 == 0;
}

const filterArray = (arr, func) => {
  var evenArray = [];
  for (let i=0; i<arr.length; i++) {
    if (func(arr[i]) == true) {
      evenArray.push(arr[i]);
    }
  }
   return evenArray;
}

console.log(filterArray(mixedArray, isEven));