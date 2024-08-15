/*
In TypeScript, union types allow a variable to hold multiple types of
values. A union type is defined using the vertical bar (|) to separate
the possible types. This feature is useful when you want to allow a
variable, function parameter, or return type to accept more than one
type.
*/

let value: number | string;
value = 42;
value = "Hello";

// Union type with arrays
let mixedArray: (number | string)[] = [1, "apple", 2, "banana"];
mixedArray.push(3);
mixedArray.push("cherry");

// Using type guards
// @ts-expect-error
console.log(mixedArray[0].length); // Causes an error

if (typeof mixedArray[0] === "string") {
    console.log(mixedArray[0].length);
}

export { };