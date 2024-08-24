// Shortcut for applying constraints and extracting types

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;



// Extracting return types
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;

type Num = GetReturnType<() => number>;
// type Num = number

type Str = GetReturnType<(x: string) => string>;
// type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// type Bools = boolean[]


// Extracting return types from an overloaded function --> last signature
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;
// type T1 = string | number

export { }