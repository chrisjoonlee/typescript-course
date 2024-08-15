// TypeScript will usually infer the function’s return type based on
// its return statements


// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}


// Return type annotation
function getFavoriteNumber(): number {
    return 26;
}


// Functions that return promises
async function getFavoriteNumber2(): Promise<number> {
    return 26;
}


// Anonymous functions - contextual typing
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s) {
    console.log(s.toUpperCase());
});

names.forEach((s) => {
    console.log(s.toUpperCase());
});

export { }