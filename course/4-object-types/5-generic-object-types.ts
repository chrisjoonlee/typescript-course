// Both interfaces and type aliases can be generic

interface Box<Type> {
    contents: Type;
}

let box: Box<string> = { contents: "hello" };

interface Apple {
    // ....
}

type AppleBox = Box<Apple>;

function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
}


// Generic type aliases
type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

type OneOrManyOrNull2<Type> = OneOrMany<Type> | null

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

export { }