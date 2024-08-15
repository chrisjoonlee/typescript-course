/*
In TypeScript, arrays are used to store multiple values in a single 
ariable. You can define arrays with different types of elements, such
as numbers, strings, or even custom types. Here are some examples of
how to work with arrays in TypeScript:
*/

// Array of primitives
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "cherry"];
let flags: boolean[] = [true, false, true];

// Array of objects
let users: { name: string; age: number }[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

// Multidimensional arrays
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

export { };