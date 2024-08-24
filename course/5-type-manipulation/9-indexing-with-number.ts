const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];
//   type Person = {
//     name: string;
//     age: number;
//   }

type Age = typeof MyArray[number]["age"];
// type Age = number


// Can only use types when indexing
const key = "age";
// @ts-expect-error
type Age2 = Person[key]; // Error

type key2 = "age";
type Age3 = Person[key2]; // Valid

export { }