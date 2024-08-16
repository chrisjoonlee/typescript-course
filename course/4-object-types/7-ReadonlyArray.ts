// Describes arrays that shouldn't be changed
// Unlike Array, there isn’t a ReadonlyArray constructor that we can use.

function doStuff(values: ReadonlyArray<string>) {
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // @ts-expect-error
    values.push("hello!"); // Error
}

function doStuff2(values: readonly string[]) {
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // @ts-expect-error
    values.push("hello!"); // Error
}

const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
const roArray2: readonly string[] = ["orange", "yellow", "violet"];

export { }