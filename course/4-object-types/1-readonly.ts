/*
Properties can also be marked as readonly for TypeScript. While it
won’t change any behavior at runtime, a property marked as readonly
can’t be written to during type-checking.
*/

interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    console.log(`prop has the value '${obj.prop}'.`);

    // @ts-expect-error
    obj.prop = "hello"; // Error
}


/*
Internal contents of a readonly property can change
*/

interface Home {
    readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}

function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    // @ts-expect-error
    home.resident = {
        name: "Victor the Evictor",
        age: 42,
    };
}


/*
TypeScript doesn’t factor in whether properties on two types are
readonly when checking whether those types are compatible
*/
interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

let readonlyPerson: ReadonlyPerson = writablePerson; // Valid

export { }