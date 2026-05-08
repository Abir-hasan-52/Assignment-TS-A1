# How Generics Help You Write Reusable and Type-Safe Code in TypeScript

## Introduction

When you write code, you often find yourself writing the same logic again and again — just for different data types. TypeScript **Generics** solve this problem. They let you write one function or component that works with many types, while still keeping full type safety.

Think of Generics like a **template**. You write the logic once, and TypeScript fills in the actual type when you use it.

---

## The Problem Without Generics

Let's say you want a function that returns whatever value you pass into it.

```typescript
// Without Generics — you lose type information
function getValue(value: any): any {
  return value;
}

const result = getValue(42);
// TypeScript thinks result is `any` — no type safety!
```

If you use `any`, TypeScript stops checking the type. You lose all the benefits of TypeScript.

---

## The Solution: Generics

With Generics, you tell TypeScript: *"I don't know the type yet — use whatever type the caller provides."*

```typescript
// With Generics — type is preserved
function getValue<T>(value: T): T {
  return value;
}

const num = getValue(42);       // TypeScript knows: num is number
const str = getValue("hello");  // TypeScript knows: str is string
```

Here, `<T>` is a **type parameter**. It's like a variable, but for types. TypeScript automatically figures out what `T` is based on what you pass in.

---

## A Simple Real-World Example: A Wrapper Box

Let's build a simple "box" that can hold any type of value.

```typescript
// A generic Box that can hold any type
interface Box<T> {
  value: T;
  label: string;
}

const numberBox: Box<number> = {
  value: 100,
  label: "Number Box",
};

const stringBox: Box<string> = {
  value: "TypeScript",
  label: "String Box",
};

console.log(numberBox.value); // 100
console.log(stringBox.value); // "TypeScript"
```

The same `Box` interface works for both `number` and `string` — no duplication needed.

---

## Generic Functions with Arrays

Here is a very common use case — getting the first item from an array:

```typescript
function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstItem([10, 20, 30]);   // number
const firstWord   = getFirstItem(["cat", "dog"]); // string

console.log(firstNumber); // 10
console.log(firstWord);   // "cat"
```

Without Generics, you would have to write `getFirstNumber()`, `getFirstString()`, etc. With Generics, one function handles all cases.

---

## Using Multiple Type Parameters

You can use more than one type parameter at a time.

```typescript
// A function that pairs two values of different types
function makePair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const pair = makePair("age", 25);
// TypeScript knows: pair is [string, number]

console.log(pair); // ["age", 25]
```

---

## Constraining Generics with `extends`

Sometimes you want to limit what types are allowed. You can use `extends` for this.

```typescript
// Only allow types that have a `length` property
function logLength<T extends { length: number }>(item: T): void {
  console.log("Length:", item.length);
}

logLength("hello");        // works — string has .length
logLength([1, 2, 3]);      // works — array has .length
// logLength(42);          // ERROR — number has no .length ✅
```

This keeps your function flexible but still safe.

---

## Generic with a Default Value

You can also give a Generic type a **default**:

```typescript
interface ApiResponse<T = string> {
  data: T;
  success: boolean;
}

// Uses the default type (string)
const response1: ApiResponse = {
  data: "Hello!",
  success: true,
};

// Uses a custom type (number)
const response2: ApiResponse<number> = {
  data: 404,
  success: false,
};
```

---

## Conclusion

Generics are one of the most powerful features in TypeScript. They let you:

- **Reuse** the same function or interface for many types
- **Avoid** using `any`, which removes type safety
- **Catch errors** at compile time instead of at runtime

Once you understand Generics, you will find yourself writing cleaner, shorter, and safer TypeScript code. Start simple — just add `<T>` to a function — and build from there.

 