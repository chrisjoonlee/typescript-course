// Type-safe version of any
// Useful for describing functions that accept any value without
// having any values in the function body

function f1(a: any) {
    a.b(); // OK
}
function f2(a: unknown) {
    // @ts-expect-error
    a.b(); // Error
}


// Returning an unknown type
function safeParse(s: string): unknown {
    return JSON.parse(s);
}

export { }