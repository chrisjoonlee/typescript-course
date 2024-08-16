function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}


// Type alias
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
    // ...
}

export { }