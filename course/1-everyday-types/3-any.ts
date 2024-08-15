// Turns off type-checking
// The any type is useful when you don’t want to write out a long type
// just to convince TypeScript that a particular line of code is okay.
// When you don’t specify a type, and TypeScript can’t infer it from
// context, the compiler will typically default to any.
// Use the compiler flag noImplicitAny to flag any implicit any as an
// error.

let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

export { }