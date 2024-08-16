// Describes properties like bind, call, apply
// Can always be called
// This is an untyped function call and is generally best avoided
// because of the unsafe any return type.
// If you need to accept an arbitrary function but don’t intend to
// call it, the type () => void is generally safer.

function doSomething(f: Function) {
    return f(1, 2, 3);
}

export { }