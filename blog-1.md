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