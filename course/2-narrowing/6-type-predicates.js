function isFish(pet) {
    return pet.swim !== undefined;
}
var fish = {
    swim: function () { }
};
var bird = {
    fly: function () { }
};
console.log(isFish(bird));
// export { }
