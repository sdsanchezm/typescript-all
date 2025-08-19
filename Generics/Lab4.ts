// Goal: Create a generic Stack class with push and pop methods.

// Expected Output
//     numberStack.pop() returns 2.
//     stringStack.pop() returns "a".

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

// Test cases
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // log `2`

const stringStack = new Stack<string>();
stringStack.push("a");
console.log(stringStack.pop()); // log `"a"`