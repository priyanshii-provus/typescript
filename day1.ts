// Day 1 - TypeScript Fundamentals
// Topics: TS vs JS, Type Safety, Primitive & Complex Types, Interfaces, Type Aliases

// ----------------------------
// TypeScript vs JavaScript
// ----------------------------
// JavaScript allows type changes
let jsValue = "Hello";
//isval = 10; // valid in JS

// TypeScript enforces types
let tsValue: string = "Hello";
// tsValue = 10; // ❌ Error: Type 'number' is not assignable to type 'string'

// ----------------------------
// Type Safety Fundamentals
// ----------------------------
function add(a: number, b: number): number {
  return a + b;
}

// add("2", 3); // ❌ Type error
console.log("Add result:", add(2, 3));

// ----------------------------
// Primitive Types
// ----------------------------
let username: string = "John";
let age: number = 22;
let isActive: boolean = true;
let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log(username, age, isActive, emptyValue, notAssigned);

// ----------------------------
// Complex Types - Arrays
// ----------------------------
let scores: number[] = [80, 90, 75];
scores.push(85);

console.log("Scores:", scores);

// ----------------------------
// Complex Types - Objects
// ----------------------------
let student: {
  name: string;
  age: number;
  isPassed: boolean;
} = {
  name: "Alice",
  age: 21,
  isPassed: true
};

console.log("Student:", student);

// ----------------------------
// Complex Types - Functions
// ----------------------------
const greet = (name: string): string => {
  return `Hello, ${name}`;
};

console.log(greet("TypeScript"));

// ----------------------------
// Interfaces
// ----------------------------
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "Bob",
  isAdmin: false
};

console.log("User:", user1);

// ----------------------------
// Type Aliases
// ----------------------------
type ID = number | string;

let userId1: ID = 101;
let userId2: ID = "A102";

console.log("User IDs:", userId1, userId2);

// ----------------------------
// Interface vs Type Alias (Usage)
// ----------------------------
interface Product {
  name: string;
  price: number;
}

type DiscountedPrice = number;

const product: Product = {
  name: "Laptop",
  price: 50000
};

const discount: DiscountedPrice = 5000;

console.log("Product:", product);
console.log("Discount:", discount);

// ----------------------------
// End of Day 1 Practice
// ----------------------------
