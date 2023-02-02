// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that,
// when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const targetNum = 2;

const answer = (array, targetNum) => {
  const addedTogether = [];
  for (let i = 0; i < array.length; i++) {
    for (let x = 1; x < array.length; x++) {
      if (array[i] + array[x] === targetNum) {
        addedTogether.push([array[i], array[x]]);
      }
    }
  }
  return addedTogether;
};
