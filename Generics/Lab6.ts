// Goal: Create a type that extracts the return type of a function.

// Expected Output
//     GreetReturn resolves to string.
//     AddReturn resolves to number.

// type ReturnTypeAlternative<T> = T extends (...args: any[]) => infer R ? R : never;
// type GreetReturn = ReturnTypeAlternative<typeof greet>; // Should be `string`
// type AddReturn = ReturnTypeAlternative<typeof add>; // Should be `number`

// definition of MyReturnType here - THIS IS THE MAGIC
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;

// Test cases
function greet(): string {
    return "hello";
}

function add(a: number, b: number): number {
    return a + b;
}

function getUser(id: number): { id: number; name: string; email: string } {
    return { id, name: "John Doe", email: "john@example.com" };
}

function mightReturnUndefined(): string | undefined {
    return Math.random() > 0.5 ? "maybe" : undefined;
}

async function fetchData(): Promise<string> {
    return "data";
}

function logMessage(): void {
    console.log("message");
}

// type GreetReturn = ReturnType<typeof greet>; // Should be `string`
// type AddReturn = ReturnType<typeof add>; // Should be `number`

// Using our custom MyReturnType
type GreetReturn = MyReturnType<typeof greet>; // string
type AddReturn = MyReturnType<typeof add>; // number
type GetUserReturn = MyReturnType<typeof getUser>; // { id: number; name: string; email: string }
type MaybeUndefinedReturn = MyReturnType<typeof mightReturnUndefined>; // string | undefined
type FetchDataReturn = MyReturnType<typeof fetchData>; // Promise<string>
type LogMessageReturn = MyReturnType<typeof logMessage>; // void

// Test the inferred types
const greetResult: GreetReturn = "hello world";
const addResult: AddReturn = 42;
const userResult: GetUserReturn = { id: 1, name: "Alice", email: "alice@example.com" };
const maybeResult: MaybeUndefinedReturn = Math.random() > 0.5 ? "definitely" : undefined;
const fetchResult: FetchDataReturn = Promise.resolve("async data");

// void can only be assigned undefined
const logResult: LogMessageReturn = undefined;

console.log("Greet result:", greetResult);
console.log("Add result:", addResult);
console.log("User result:", userResult);
console.log("Maybe result:", maybeResult);
console.log("Fetch result:", fetchResult);
console.log("Log result:", logResult);

// Additional edge cases
function neverReturns(): never {
    throw new Error("Always throws");
}

function returnsAny(): any {
    return "could be anything";
}

type NeverReturn = MyReturnType<typeof neverReturns>; // never
type AnyReturn = MyReturnType<typeof returnsAny>; // any

// CONSTRAINT ENSURES ONLY FUNCTIONS CAN BE PASSED !!!!!
// This would cause a compile error:
// type Invalid = MyReturnType<string>;
