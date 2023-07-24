import List from "./models/List";

function createNonSortedArray(size: number) {
  let array = new List();
  for (let i = size; i > 0; i--) {
    array.insert(i)
  }
  return array;
}

let array = createNonSortedArray(8);
console.log(array.toString());
