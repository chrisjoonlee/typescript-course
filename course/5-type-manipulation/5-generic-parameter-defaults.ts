type Container<T, U> = {
    // ...
}

declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
    element?: T,
    children?: U
): Container<T, U>;

const div = create();
// const div: Container<HTMLDivElement, HTMLDivElement[]>

const p = create(new HTMLParagraphElement());
// const p: Container<HTMLParagraphElement, HTMLParagraphElement[]>

export { }