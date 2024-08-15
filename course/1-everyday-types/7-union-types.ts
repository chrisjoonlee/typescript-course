// TypeScript will only allow an operation if it is valid for every
// member of the union


function printId(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

printId(101);
printId("202");


function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

export { }