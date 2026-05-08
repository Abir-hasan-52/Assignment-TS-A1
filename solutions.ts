
// problem1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const filterEvenNumbers = (num: number[]): number[] => {
  return num.filter((num) => num % 2 === 0);
};
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result);


//Problem2: Write a function reverseString that takes a string as input and returns the reversed version of that string.


const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

console.log(reverseString("typescript"));
 