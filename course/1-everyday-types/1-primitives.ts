// Type annotation = optional annotaiton to explicitly specify the type
// of a variable
// In most cases, though, this isn’t needed. Wherever possible,
// TypeScript tries to automatically infer the types in your code
// No distinction between ints or floats
// String, Number, and Boolean are legal, but refer to some special
// built-in types that will very rarely appear in your code.
// Always use string, number, or boolean for types.

// string
let name: string = "Alice";
const greeting: string = `Hello, ${name}!`;

// number
let age: number = 30;
const height: number = 5.9;
var largeNumber: number = 1_000_000;

// boolean
let isActive: boolean = true;
const isCompleted: boolean = false;

// bigint
const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n;

// symbol
const firstName = Symbol("name");
const secondName = Symbol("name");

export { }