type StringNumberPair = [string, number];

function doSoemthing(stringHash: StringNumberPair) {
    const [inputString, hash] = stringHash;

    // @ts-expect-error
    const c = pair[2]; // Error
}


// Equivalent to:
interface StringNumberPair2 {
    // specialized properties
    length: 2;
    0: string;
    1: number;
}


// Tuples with optional properties
type Either2dOr3d = [number, number, number?];


// Tuples with rest elements (no set length)
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

export { }