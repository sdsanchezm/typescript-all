// Goal: Create a function that works only with objects that have a length property.

// Expected Output
//     First two calls should work.
//     logLength(42) should show a TypeScript error.

// Constrain T to types that have a length property of type number
function logLength<T extends { length: number }>(arg: T): void {
    // code here
    console.log(`Lenght: ${arg.length}`);
}

// more constraints:
function logWithConstraints<T extends { length: number; slice: (start: number, end?: number) => T }>(arg: T): void {
    // Works for strings/arrays
    console.log(`Sliced: ${arg.slice(0, 1)}`);
}

// Defining an interface and use it in the constraint:
// interface Lengthy {
//   length: number;
//   name?: string;
// }
// function logLengthWithName<T extends Lengthy>(arg: T): void {
//   console.log(`Length: ${arg.length}, Name: ${arg.name || 'unknown'}`);
// }

// Test cases
// OK (string has `length`)
logLength("hello");

// OK (array has `length`)
logLength([1, 2, 3]);

// Should ERROR (number has no `length`)
// logLength(42);
