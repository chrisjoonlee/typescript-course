// Used to describe the types of all possible values of a type's
// properties
// Can describe dictionary and array patterns
// Only some types are allowed for index signature properties:
// string, number, symbol, template string patterns, and union types
// consisting only of these
// Enforce that all properties match their return type
// Can be used to get around excess property errors

interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ["Mon", "Tue", "Wed"];
const secondItem = myArray[1];



interface NumberDictionary {
    [index: string]: number;

    length: number;
    // @ts-expect-error
    name: string; // Error
}


interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // Valid
    name: string; // Valid
}


// Can make index signatures readonly to prevent assignment to
// their indices

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

const myArray2: ReadonlyStringArray = ["Mon", "Tue", "Wed"];
// @ts-expect-error
myArray2[2] = "Thu";

export { }