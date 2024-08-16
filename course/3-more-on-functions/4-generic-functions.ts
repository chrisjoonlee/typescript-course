// Uses type parameters
// Always use as few type parameters as possible
// If a type parameter only appears in one location, strongly
// reconsider if you actually need it

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);

export { }