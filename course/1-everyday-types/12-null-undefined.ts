// Always recommended to turn strictNullChecks on
// Only use ! when you know that the value can’t be null or undefined.

function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}


// Non-null assertion operator
function liveDangerously(x?: number | null) {
    console.log(x!.toFixed());
}

export { }