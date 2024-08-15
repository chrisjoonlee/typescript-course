/*
Literal types in TypeScript are used to specify that a value must be a
specific string, number, or boolean literal. Literal types are useful
for creating more precise and restrictive types, allowing TypeScript
to enforce that only certain values are allowed.
*/

// String literal types
type Greeting = "Hello" | "Hi" | "Hey";

let greet1: Greeting = "Hello"; // Valid
let greet2: Greeting = "Hi";    // Valid


// Number literal types
type StatusCode = 200 | 404 | 500;

let code1: StatusCode = 200; // Valid
let code2: StatusCode = 404; // Valid

export { };