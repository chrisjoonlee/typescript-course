// void is not the same as undefined.

function noop(): void {
    return;
}

function helloWorld(): void {
    console.log("Hello World");
}


// When a literal function definition has a void return type, that
// function must not return anything.

function f4(): void {
    // @ts-expect-error
    return true;
}

const f5 = function (): void {
    // @ts-expect-error
    return true;
};

export { }


/*
Contextual typing with a return type of void does not force functions
to not return something. Another way to say this is a contextual
function type with a void return type (type voidFunc = () => void),
when implemented, can return any other value, but it will be ignored.
*/

type voidFunc = () => void;

const f1: voidFunc = () => {
    return true; // Valid
};

const f2: voidFunc = () => true; // Valid

const f3: voidFunc = function () {
    return true; // Valid
};

export { }