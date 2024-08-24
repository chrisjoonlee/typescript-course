interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}

loggingIdentity("Hello");
loggingIdentity({ length: 10, value: 3 });
// @ts-expect-error
loggingIdentity(3); // Error

export { }