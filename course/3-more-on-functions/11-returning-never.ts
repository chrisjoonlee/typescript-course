// For functions that throw an exception or terminate execution of
// the program

function fail(msg: string): never {
    throw new Error(msg);
}

export { }