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

// console.log(reverseString("typescript"));

// Problem-3: Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

console.log(checkType("Hello"));
console.log(checkType(100));
