// The type boolean itself is actually just an alias for the union
// true | false


// Inferred literals from const variables
const constantString = "Hello World";
let changingString = "Hello World";


// String literal types
function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}


// Numeric literal types
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}


// Combining literal types with non-literal types
interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}

export { }