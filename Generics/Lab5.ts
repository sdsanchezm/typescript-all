// Goal: Use TypeScript’s built-in generics (Partial, Pick, etc.).

// Expected Output
//     PartialUser should allow { id?: number, name?: string, age?: number }.
//     UserNameAndAge should include only name and age.
//     updatedUser should be { id: 1, name: "Alice", age: 31 }.

interface UserInitial {
    id: number;
    name: string;
    age: number;
    email: string;
}

// 1. Make all properties optional using `Partial`
type PartialUser = Partial<UserInitial>;

// 2. Pick only 'name' and 'age' using `Pick`
type UserNameAndAge = Pick<UserInitial, "name" | "age">;

// 3. Create a function that updates a user (accepts Partial<User>)
function updateUser(user: UserInitial, updates: Partial<UserInitial>): UserInitial {
    return { ...user, ...updates };
}

// 4. Bonus: Make all properties readonly using Readonly<T>
type ReadonlyUser = Readonly<UserInitial>;

// 5. Bonus: Create a type that omits 'id' from User
type UserWithoutId = Omit<UserInitial, "id">;

// Test cases
// const user: User = { id: 1, name: "Alice", age: 30 };
// const updatedUser = updateUser(user, { age: 31 }); // Should update only age

// Test cases
const user: UserInitial = {
    id: 1,
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

// PartialUser test
const partialUser: PartialUser = { name: "Bob" }; // Only name provided, others optional

// UserNameAndAge test
const nameAndAge: UserNameAndAge = { name: "Charlie", age: 25 }; // Only name and age

// updateUser test
const updatedUser = updateUser(user, { age: 31, email: "alice.new@example.com" });

// ReadonlyUser test
const readonlyUser: ReadonlyUser = user;
// readonlyUser.name = "David"; // ERROR
// "name" is a read-only property, can't assign

// UserWithoutId test
const userWithoutId: UserWithoutId = { name: "Eve", age: 28, email: "eve@example.com" };

console.log("user:", user);
console.log("partialUser:", partialUser);
console.log("nameAndAge:", nameAndAge);
console.log("UpdatedUser:", updatedUser);
console.log("userWithoutId", userWithoutId);