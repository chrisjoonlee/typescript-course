let s = "hello";
let n: typeof s;
// let n: string


function f() {
    return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>; // ReturnType can only take a type, not a value

export { }