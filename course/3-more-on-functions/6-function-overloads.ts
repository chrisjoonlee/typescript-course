// Overload signatures = actual signatures 
// Implementation signature = must be compatible with the overload
//  signatures; can't be called directly
// Always prefer parameters with union types instead of overloads
// when possible

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// @ts-expect-error
const d3 = makeDate(1, 3);

export { }