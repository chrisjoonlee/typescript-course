// Optional parameters have the type TYPE | undefined

function f(x?: number) {
    // ...
}
f(); // OK
f(10); // OK


// Default parameter values
function f2(x = 10) {
    // ...
}

export { }