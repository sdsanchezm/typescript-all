//Goal: Create a function that returns the first element of an array, typed generically.

// Expected Output
//     firstNum should be of type number (value: 1).
//     firstStr should be of type string (value: "hello").


function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
// Goal: Create a function that returns the first element of an array, typed generically.
// Test cases
const numbersA = [1, 2, 3];
const firstNum = getFirstElement(numbersA); // Should infer `firstNum` as `number`
console.log(firstNum);

const strings = ["hello", "world"];
const firstStr = getFirstElement(strings); // Should infer `firstStr` as `string`
console.log(firstStr);