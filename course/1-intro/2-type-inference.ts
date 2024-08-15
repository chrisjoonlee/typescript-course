/*
TypeScript uses type inference to automatically determine the type of 
a variable or expression based on the value or context in which it is
used. This allows you to omit explicit type annotations while still
benefiting from TypeScript's strong typing. Here are some examples of
type inference in TypeScript:
*/

let x = 10;         // TypeScript infers `x` as `number`
let y = "Hello";    // TypeScript infers `y` as `string`
let isDone = false; // TypeScript infers `isDone` as `boolean`

// @ts-expect-error
x = "Hello"; // Causes an error
// Error: Type 'string' is not assignable to type



/*
When using const, TypeScript infers the most specific type possible,
often a literal type, while let infers a broader type.
*/

const pi = 3.14; // TypeScript infers `pi` as `3.14` (a literal type)
let radius = 10; // TypeScript infers `radius` as `number`

let area = pi * radius * radius; // TypeScript infers `area` as `number`

export { };