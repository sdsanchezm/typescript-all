// Goal: Define a generic KeyValuePair interface and use it in a function.

// Expected Output
//     numberPair should have types key: number, value: string.
//     stringPair should have types key: string, value: string.

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

function createPair<K, V>(key: K, value: V): KeyValuePair<K, V> {
    // code here
    const x: KeyValuePair<K, V> = {
        key: key,
        value: value
    };
    return x;
}

function createPair2<K, V>(key: K, value: V): KeyValuePair<K, V> {
    // Return an object with the provided key and value
    return { key, value };
}

// Test cases
const numberPair = createPair(1, "one"); // Should infer `KeyValuePair<number, string>`
const stringPair = createPair("name", "Alice"); // Should infer `KeyValuePair<string, string>`

console.log(numberPair);
console.log(stringPair);
