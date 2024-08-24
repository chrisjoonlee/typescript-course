type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
// type Age = number


// Indexing types with unions
type I1 = Person["age" | "name"];
// type I1 = string | number

type AliveOrName = "alive" | "name";
type I2 = Person[AliveOrName];
// type I3 = string | boolean


// Indexing types with keyof
type I3 = Person[keyof Person];
// type I2 = string | number | boolean


// Cannot index properties that don't exist
// @ts-expect-error
type I4 = Person["alve"]; // Error

export { }