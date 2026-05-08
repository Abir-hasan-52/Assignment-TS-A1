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

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Solution 4: Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// console.log(getProperty(user, "name"));

// solution 5: Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
// console.log(toggleReadStatus(myBook));

//Problem 6: Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student1 = new Student("Alice", 20, "A");

console.log(student1.getDetails());
