// When possible, use the type parameter itself rather than
// constraining it

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
// @ts-expect-error
const notOK = longest(10, 100); // Error


// Specifying type arguments
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

// @ts-expect-error
const arr = combine([1, 2, 3], ["hello"]); // Error
const arr2 = combine<string | number>([1, 2, 3], ["hello"]);

export { }