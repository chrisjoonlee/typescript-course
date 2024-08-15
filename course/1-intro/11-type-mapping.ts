/*
Type mapping in TypeScript involves creating new types based on
existing ones by applying transformations or operations. This concept
is crucial for creating more flexible and reusable types. TypeScript
offers several ways to perform type mapping, including mapped types,
conditional types, and utility types.
*/

type Person = {
    name: string;
    age: number;
    email: string;
};

// Create a type with all properties set to `string`
type StringifiedPerson = {
    [K in keyof Person]: string;
};

// Equivalent to:
// type StringifiedPerson = {
//     name: string;
//     age: string;
//     email: string;
// }

export { };