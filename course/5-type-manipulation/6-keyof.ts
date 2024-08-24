// Takes an object type and produces a string or numeric literal
// union of its keys

type Point = { x: number; y: number };
type P = keyof Point;
// type P = "x" | "y"


// If the type has a string or number index signature, keyof will
// return those types instead
// JavaScript object keys are always coerced to a string, so obj[0]
// is always the same as obj["0"]

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// type M = string | number

export { }