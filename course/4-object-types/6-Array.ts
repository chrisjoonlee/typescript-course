// number[] and string[] are shorthand for Array<number> and Array<string>
// Array = generic type

function doSomething(value: Array<string>) {
    // ...
}

let myArray: string[] = ["hello", "world"];
doSomething(myArray);
doSomething(new Array("hello", "world"));

export { }