// Conditional type constraints
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
    message: string;
}

interface Dog {
    bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
// type EmailMessageContents = string

type DogMessageContents = MessageOf<Dog>;
// type DogMessageContents = never


/*
EXERCISE #1
Write a type called Flatten that flattens array types to their 
element types, but leaves them alone otherwise.
*/

// @ts-expect-error
type Str = Flatten<string[]>;
// type Str = string

// @ts-expect-error
type Num = Flatten<number>;
// type Num = number



/* SOLUTIONS
type Flatten<T> = T extends any[] ? T[number] : T;
*/

export { }