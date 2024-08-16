// == null actually not only checks whether it is specifically the
// value null - it also checks whether it’s potentially undefined. The
// same applies to == undefined: it checks whether a value is either
// null or undefined

function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}


// Null checking
function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}


// Checking for both null and undefined with !=
interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);
        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}

export { }