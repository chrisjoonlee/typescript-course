/*
The any type in TypeScript is a special type that essentially disables
type checking for a value. It can be used when you are unsure of the
type of a value or when you need to bypass TypeScript's type system.
While any provides flexibility, it can also lead to less type safety
and should be used with caution.
*/


// Basic usage
let val: any;
val = 42;         // Valid
val = "hello";    // Valid
val = true;       // Valid
val = [1, 2, 3];  // Valid


// When dealing with objects where the properties may vary in type
let user: {
    name: string;
    age: number;
    [key: string]: any; // Allows additional properties with any type
};

user = {
    name: "Alice",
    age: 30,
    address: "123 Main St",
    isAdmin: true
};


// Arrays with "any" type
let items: any[] = [1, "string", true, { key: "value" }];

items.push([1, 2, 3]);  // Valid
items.push(null);      // Valid


// When integrating with JavaScript libraries without type definitions,
// any can be used.
declare var library: any;

library.doSomething();

export { };

/*
While any is powerful, overusing it can lead to loss of type safety and
make code harder to maintain. It's generally better to use more
specific types whenever possible. If you find yourself frequently
using any, consider using unknown, type assertions, or more specific
type definitions to improve type safety.
*/