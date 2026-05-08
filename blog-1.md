 

 

````md
# How Generics Help Build Reusable and Type-Safe Code in TypeScript

## Introduction

Generics in TypeScript allow developers to write reusable code while keeping strong type safety. Instead of writing separate functions for different data types, we can create one flexible function that works with many types.

Generics make code cleaner, reusable, and safer.

---

## What is a Generic?

A generic allows us to create components or functions that can work with different data types.

Example without Generics:

```ts
function getString(value: string): string {
  return value;
}
````

This function only works with strings.

Using Generics:

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Now the function can work with any type.

---

## Example of Generics

```ts
function getValue<T>(value: T): T {
  return value;
}

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));
```

### Output

```ts
Hello
100
```

Here:

* `T` represents a type
* TypeScript automatically understands the data type

---

## Benefits of Generics

### 1. Reusable Code

One function can work with multiple types.

### 2. Type Safety

TypeScript checks errors during development.

### 3. Cleaner Code

Less duplicate code is needed.

---

## Conclusion

Generics are one of the most powerful features of TypeScript. They help developers write reusable, flexible, and type-safe code. In large projects, Generics reduce duplication and improve code quality.

````

---

# blog-2.md

```md
# The Four Pillars of OOP in TypeScript

## Introduction

Object-Oriented Programming (OOP) helps developers organize and manage complex applications. TypeScript supports OOP features that make code reusable and maintainable.

The four pillars of OOP are:
1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

---

# 1. Inheritance

Inheritance allows one class to use properties and methods of another class.

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, grade: string) {
    super(name);
    this.grade = grade;
  }
}
````

Here, `Student` inherits from `Person`.

---

# 2. Polymorphism

Polymorphism means one method can behave differently in different classes.

```ts
class Animal {
  makeSound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks");
  }
}
```

The same method behaves differently.

---

# 3. Abstraction

Abstraction hides unnecessary details and shows only important features.

```ts
abstract class Vehicle {
  abstract start(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log("Car started");
  }
}
```

---

# 4. Encapsulation

Encapsulation protects data from direct access.

```ts
class BankAccount {
  private balance: number = 1000;

  getBalance() {
    return this.balance;
  }
}
```

The `balance` cannot be changed directly.

---

## Conclusion

The four pillars of OOP help developers build scalable and maintainable applications. TypeScript makes these concepts powerful with strong typing and class support.

```
```
