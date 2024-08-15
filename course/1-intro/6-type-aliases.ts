/*
Type aliases in TypeScript allow you to create a new name for a type.
This can be particularly useful for complex types or when you want to
give a more meaningful name to a type, making your code more readable
and maintainable. You can create type aliases for any type, including
primitive types, object types, union types, and function types.
*/


// Basic type alias
type Username = string;

let user1: Username = "Alice";
let user2: Username = "Bob";


// Type alias for an object type
type User = {
    id: number;
    name: string;
    email: string;
};

let user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};


// Type alias for a union type
type ID = number | string;

let userId1: ID = 101;
let userId2: ID = "A123";


// Type alias for tuple types
type Point = [number, number, number];

let point1: Point = [1, 2, 3];
let point2: Point = [4, 5, 6];


// Type alias for a complex object type
type Product = {
    id: number;
    name: string;
    price: number;
    options: {
        color: string;
        size: string;
    };
};

let product: Product = {
    id: 1,
    name: "T-shirt",
    price: 19.99,
    options: {
        color: "blue",
        size: "M"
    }
};


// Recursive type aliases
type TreeNode = {
    value: string;
    children?: TreeNode[];
};

let tree: TreeNode = {
    value: "Root",
    children: [
        {
            value: "Child 1",
            children: [
                { value: "Grandchild 1.1" },
                { value: "Grandchild 1.2" }
            ]
        },
        {
            value: "Child 2",
            children: [{ value: "Grandchild 2.1" }]
        }
    ]
};


// Combining type aliases
type Name = string;
type Age = number;
type Email = string;

type UserProfile = {
    name: Name;
    age: Age;
    email: Email;
};

let profile: UserProfile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

export { };