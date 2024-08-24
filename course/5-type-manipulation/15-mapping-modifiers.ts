// Apply to readonly and ?
// + = adds modifiers (default)
// - = removes modifiers

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
//   type UnlockedAccount = {
//     id: string;
//     name: string;
// }



// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type User = Concrete<MaybeUser>;
//   type User = {
//     id: string;
//     name: string;
//     age: number;
// }

export { }