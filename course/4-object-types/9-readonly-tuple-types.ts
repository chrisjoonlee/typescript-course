// array literals with const assertions will be inferred with
// readonly tuple type

function doSomething(pair: readonly [string, number]) {
    // @ts-expect-error
    pair[0] = "hello!"; // Error
}


// Const assertions
let point = [3, 4] as const;