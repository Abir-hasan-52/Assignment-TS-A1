# The Four Pillars of OOP in TypeScript: Write Cleaner, Smarter Code

## Introduction

Object-Oriented Programming (OOP) is a way of organizing your code using **objects** and **classes**. It helps you manage complexity, especially in large projects.

TypeScript supports OOP very well. There are four main ideas (called "pillars") in OOP:

1. **Encapsulation**
2. **Inheritance**
3. **Polymorphism**
4. **Abstraction**

Let's learn each one with simple, easy-to-understand examples.

---

## 1. Encapsulation — Hiding the Details

**Encapsulation** means keeping the inner data of a class private and only allowing access through specific methods. It protects your data from being accidentally changed from outside.

Think of it like a **TV remote** — you press the button, you don't need to know the circuit inside.

```typescript
class BankAccount {
  private balance: number; // hidden from outside

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Public method to deposit money
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  // Public method to check balance
  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500

// myAccount.balance = 99999; // ❌ ERROR — balance is private
```

By making `balance` private, we make sure no one can change it in an unsafe way. All changes go through `deposit()`, which has its own rules.

---

## 2. Inheritance — Reusing Code from a Parent Class

**Inheritance** lets one class get the properties and methods of another class. The child class gets everything from the parent, and can also add its own things.

Think of it like a **child inheriting traits from a parent**.

```typescript
// Parent class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inherits from Animal
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // call parent constructor
    this.breed = breed;
  }

  // Dog has its own version of speak
  speak(): void {
    console.log(`${this.name} barks!`);
  }
}

const animal = new Animal("Animal");
animal.speak(); // Animal makes a sound.

const dog = new Dog("Rex", "Labrador");
dog.speak(); // Rex barks!
```

`Dog` extends `Animal`. It **reuses** the `name` property and can **override** the `speak()` method. No need to write the same code again.

---

## 3. Polymorphism — One Interface, Many Forms

**Polymorphism** means that different classes can be used through the **same interface**, but each class behaves differently.

The word "polymorphism" means "many forms." You call the same method name, but the result is different depending on the object.

```typescript
class Cat extends Animal {
  speak(): void {
    console.log(`${this.name} meows!`);
  }
}

class Bird extends Animal {
  speak(): void {
    console.log(`${this.name} chirps!`);
  }
}

// All animals in one array
const animals: Animal[] = [
  new Dog("Rex", "Husky"),
  new Cat("Luna"),
  new Bird("Tweety"),
];

// Call the same method — different results
animals.forEach((animal) => animal.speak());
// Rex barks!
// Luna meows!
// Tweety chirps!
```

We loop through the array and call `speak()` on each one. The **same method call** produces **different output** based on the object type. That's polymorphism!

This makes code very flexible and easy to extend. Want to add a `Fish` class? Just create it — the loop still works.

---

## 4. Abstraction — Show Only What Is Necessary

**Abstraction** means hiding the complex details and showing only what is needed. You define a structure (called an **abstract class** or **interface**) and let each class fill in the details.

Think of a **car** — you use the steering wheel and pedals, you don't see the engine internals.

In TypeScript, we use `abstract` classes for this:

```typescript
// Abstract class — defines a template
abstract class Shape {
  abstract getArea(): number; // each shape must implement this

  describe(): void {
    console.log(`This shape has an area of ${this.getArea()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
circle.describe(); // This shape has an area of 78.53...

const rect = new Rectangle(4, 6);
rect.describe(); // This shape has an area of 24
```

`Shape` is abstract — you **cannot** create a `new Shape()` directly. It forces every child class to define `getArea()`. The `describe()` method is shared and works for all shapes.

You cannot do `new Shape()` — TypeScript will give an error. This is by design.

---

## How All Four Work Together

Here is a small example that combines all four pillars:

```typescript
abstract class Employee {
  constructor(protected name: string, private salary: number) {} // Encapsulation

  abstract getRole(): string; // Abstraction

  getSalary(): number {
    return this.salary; // Encapsulation — salary is private
  }

  introduce(): void {
    console.log(`I am ${this.name}, a ${this.getRole()}.`);
  }
}

class Developer extends Employee { // Inheritance
  getRole(): string {
    return "Developer";
  }
}

class Designer extends Employee { // Inheritance
  getRole(): string {
    return "Designer";
  }
}

const team: Employee[] = [
  new Developer("Alice", 80000),
  new Designer("Bob", 75000),
];

team.forEach((member) => member.introduce()); // Polymorphism
// I am Alice, a Developer.
// I am Bob, a Designer.
```

In this example:
- **Encapsulation** — `salary` is private, accessed only via `getSalary()`
- **Abstraction** — `Employee` is abstract and forces `getRole()` to be defined
- **Inheritance** — `Developer` and `Designer` extend `Employee`
- **Polymorphism** — same `introduce()` call, different `getRole()` results

---

## Conclusion

The four pillars of OOP are not just theory — they are practical tools that help you write:

- **Cleaner code** — less repetition, better structure
- **Safer code** — private data, clear contracts
- **Flexible code** — easy to extend without breaking what already works

| Pillar | Purpose |
|---|---|
| Encapsulation | Hide internal data, protect it from outside |
| Inheritance | Reuse code from a parent class |
| Polymorphism | Same method, different behavior per class |
| Abstraction | Show only what is needed, hide complexity |

Start using these ideas in your TypeScript projects and your code will become much easier to read, maintain, and grow.

