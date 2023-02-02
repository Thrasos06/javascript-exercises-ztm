// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return:
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// Answer for Question 1 + bonus

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// function for groupin same values in arrays
const sortArray = (array) => {
  let storeArray = [];
  let endArray = [];

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value === array[i + 1]) {
      storeArray.push(value);
    } else {
      storeArray.push(value);
      endArray.push(storeArray);
      storeArray = [];
    }
  }

  console.log(endArray);
  return endArray;
};

//final function that accepts an array and sort them
const filter = (a) => {
  const numArray = a
    .filter((a) => {
      return typeof a === "number";
    })
    .sort(function (a, b) {
      return a - b;
    });

  sortArray(numArray);

  const stringArray = a
    .filter((a) => {
      return typeof a === "string";
    })
    .sort();
  sortArray(stringArray);

  const endArray = [numArray, stringArray];
  return endArray;
};
