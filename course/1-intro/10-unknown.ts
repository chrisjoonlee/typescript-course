/*
In TypeScript, the unknown type is a type-safe counterpart to any. It
represents any value but requires type-checking before you can perform
operations on it. This makes unknown a more restrictive and safer
alternative to any, ensuring that values of type unknown are properly
checked before usage.
*/

// Basic usage
let value: unknown;

value = 42;          // Valid
value = "hello";     // Valid
value = true;        // Valid

// @ts-expect-error
value.toUpperCase(); // Error: Object is of type 'unknown'. 

if (typeof value === "string") {
    console.log(value.toUpperCase()); // Valid
}


// Switch statement
switch (typeof value) {
    case "string":
        console.log(`String: ${value}`);
        break;
    case "number":
        console.log(`Number: ${value}`);
        break;
    case "boolean":
        console.log(`Boolean: ${value}`);
        break;
    default:
        console.log("Unknown type");
}

export { };