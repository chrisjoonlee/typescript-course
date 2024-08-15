/*
Intersection types in TypeScript allow you to combine multiple types
into one. This means that the resulting type will have all the
properties and methods of the intersected types. Intersection types
are useful when you want to merge multiple types into a single type
that must satisfy all the constraints of the combined types.
*/

type Person = {
    name: string;
    age: number;
}

type Employee = {
    employeeId: number;
    position: string;
}

type PersonEmployee = Person & Employee;

let john: PersonEmployee = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    position: "Software Engineer"
};


// Intersection with primitive types
type StringOrNumber = string & number; // Leads to "never"
type IdenticalType = string & string; // Valid
let example: IdenticalType = "This is a string";

export { };