// For functions that throw an exception or terminate execution of
// the program

function fail(msg: string): string | never {
    if (msg === "") {
        throw new Error(msg);
    }
    else {
        return msg;
    }
}

export { }