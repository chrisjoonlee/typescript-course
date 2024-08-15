/*
Type assertions in TypeScript allow you to specify a type for a value
explicitly. This can be useful when you have more information about
the type of a value than TypeScript can infer or when you want to
override TypeScript's type inference. Type assertions do not change
the runtime behavior of the code; they are purely a compile-time
feature to help TypeScript understand your intentions.
*/

// as syntax
let someValue: unknown = "Hello, TypeScript!";
let stringLength: number = (someValue as string).length;


// Angle bracket syntax
let someValue2: unknown = "Hello, TypeScript!";
let stringLength2: number = (<string>someValue2).length;


// DOM elements
// Assume there's an element with id 'myInput' in the HTML
let inputElement = document.getElementById('myInput') as HTMLInputElement;
inputElement.value = "TypeScript is awesome!";


// Narrowing down union types
type Car = { make: string; model: string };
type Truck = { make: string; payloadCapacity: number };

function getMake(vehicle: Car | Truck) {
    // Assert `vehicle` is of type `Car` to access `model`
    if ((vehicle as Car).model) {
        console.log((vehicle as Car).model);
    } else {
        console.log("Not a car");
    }
}

export { };