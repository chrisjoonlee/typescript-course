/*
Template literal types in TypeScript allow you to create string types
by combining other string types and literals, similar to how template
literals work in JavaScript. They provide a way to construct and infer
types based on string patterns. Template literal types are particularly
useful for creating complex string type patterns and constraints.
*/


// Basic template literal types
type Greeting = `Hello, ${string}!`;

const greet1: Greeting = "Hello, World!"; // Valid
const greet2: Greeting = "Hello, Alice!"; // Valid

// @ts-expect-error
const greet3: Greeting = "Hi, Alice"; // Error


// Conditional template literal types
type Status = "pending" | "completed" | "failed";
type Message<T extends Status> = `The task is ${T}`;

const message1: Message<"pending"> = "The task is pending"; // Valid
const message2: Message<"completed"> = "The task is completed"; // Valid

// @ts-expect-error
const message3: Message<"in-progress"> = "The task is in-progress"; // Error


// Dynamic string patterns
type Direction = "left" | "right" | "up" | "down";
type Command = `Move ${Direction}`;

const command1: Command = "Move left"; // Valid
const command2: Command = "Move right"; // Valid

// @ts-expect-error
const command3: Command = "Move forward"; // Error


// Nested template literal types
type EventType = "click" | "hover" | "focus";
type ElementType = "button" | "input" | "link";
type EventDescription = `${ElementType} ${EventType} event`;

const event1: EventDescription = "button click event"; // Valid
const event2: EventDescription = "input focus event"; // Valid

// @ts-expect-error
const event3: EventDescription = "div hover event"; // Error


// Validating function argument patterns
type Method = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = `/${string}`;

type Request<T extends Method, U extends Endpoint> = {
    method: T;
    endpoint: U;
};

const request1: Request<"GET", "/users"> = {
    method: "GET",
    endpoint: "/users"
};

const request2: Request<"POST", "/items"> = {
    method: "POST",
    endpoint: "/items"
};

// @ts-expect-error
const request3: Request<"PATCH", "/users"> = { // Error
    method: "PATCH",
    endpoint: "/users"
}


// ENFORCING STRING FORMATS
type Email = `${string}@${string}.${string}`;

const email1: Email = "user@example.com"; // Valid
const email2: Email = "admin@domain.org"; // Valid

// @ts-expect-error
const email3: Email = "invalid-email"; // Error


// USING TEMPLATE LITERALS IN OBJECT KEYS
type Action = "create" | "update" | "delete";
type Resource = "user" | "post";

type ApiEndpoints = {
    [K in `${Action}_${Resource}`]: string;
};

const apiEndpoints: ApiEndpoints = {
    create_user: "/api/users/create",
    update_user: "/api/users/update",
    delete_user: "/api/users/delete",
    create_post: "/api/posts/create",
    update_post: "/api/posts/update",
    delete_post: "/api/posts/delete"
};

const invalidEndpoints: ApiEndpoints = {
    create_user: "/api/users/create",
    // @ts-expect-error
    invalid_action_user: "/api/users/invalid" // Error
}

export { };