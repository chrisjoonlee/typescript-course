type ID = number | string;


// Type aliases for object types
type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

export { }