function printName(obj: { first: string; last?: string }) {
    // ...
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
}

export { }