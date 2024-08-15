/*
Functions in TypeScript can be defined in several ways and can include
various features such as type annotations, optional parameters, default
parameters, and more. Here are some examples of how to define and use
functions in TypeScript:
*/

// Basic function declarations
function add(a: number, b: number): number {
    return a + b;
}

function helloWorld(): void {
    console.log("Hello World");
}


// Type aliases for function types
type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (x, y) => {
    return x - y;
};


// Function with rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50


// Function as a parameter
function processValues(values: number[], processor: (value: number) => number): number[] {
    return values.map(processor);
}

const double = (value: number): number => value * 2;

console.log(processValues([1, 2, 3], double)); // Output: [2, 4, 6]