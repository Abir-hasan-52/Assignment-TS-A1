
// problem1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const filterEvenNumbers = (num: number[]): number[] => {
  return num.filter((num) => num % 2 === 0);
};
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result);


