function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4);


// Using const context for tuples
const args = [8, 5];
// @ts-expect-error
const angle = Math.atan2(...args); // Error

const args2 = [8, 5] as const; // Inferred as 2-length tuple
const angle2 = Math.atan2(...args2);

export { }