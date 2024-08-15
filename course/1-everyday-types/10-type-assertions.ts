// Because type assertions are removed at compile-time, there is no
// runtime checking associated with a type assertion. There won’t be
// an exception or null generated if the type assertion is wrong.

// If you might know that your page will always have an
// HTMLCanvasElement with a given ID
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;


// Angle bracket syntac
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

export { }