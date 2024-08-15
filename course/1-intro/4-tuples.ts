/*
Tuples in TypeScript are a type of array where the number of elements
is fixed, and the types of elements are known and can be different for
each position in the tuple. Tuples are useful when you need to work
with an array where the type of data at each position is known and
important.
*/

let person: [string, number] = ["Alice", 25];
let employee: [string, number, boolean] = ["Bob", 30, true];

// Tuple with rest elements
let statusReport: [string, number, ...boolean[]] =
    ["Project X", 3, true, false, true];

export { };