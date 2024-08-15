/*
Type aliases and interfaces are very similar, and in many cases you
can choose between them freely. Almost all features of an interface
are available in type, the key distinction is that a type cannot be
re-opened to add new properties vs an interface which is always
extendable.
*/

interface Point {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}


// Extending interfaces
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

export { }