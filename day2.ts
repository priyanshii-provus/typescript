// Day 2 - TypeScript Advanced Types
// Topics:
// Union Types & Optional Properties
// Enums & Literal Types
// Utility Types
// Generics & Type Parameters

export {};

// ----------------------------
// Union Types
// ----------------------------
let userId: number | string;

userId = 101;
userId = "A102";
// userId = true; // ❌ Error

function printId(id: number | string) {
  console.log("User ID:", id);
}

printId(1);
printId("B200");

// ----------------------------
// Optional Properties
// ----------------------------
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

const user1: User = {
  id: 1,
  name: "Alice"
};

const user2: User = {
  id: 2,
  name: "Bob",
  email: "bob@example.com"
};

console.log(user1, user2);

// ----------------------------
// Enums
// ----------------------------
enum UserRole {
  ADMIN,
  USER,
  GUEST
}

const currentRole: UserRole = UserRole.ADMIN;

console.log("Role:", currentRole); // outputs number (0)

// ----------------------------
// String Enums
// ----------------------------
enum Status {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING"
}

let apiStatus: Status = Status.SUCCESS;
console.log("API Status:", apiStatus);

// ----------------------------
// Literal Types
// ----------------------------
type Direction = "up" | "down" | "left" | "right";

let move: Direction = "up";
// move = "forward"; // ❌ Error

console.log("Move:", move);

// ----------------------------
// Utility Types - Partial
// ----------------------------
interface Product {
  id: number;
  name: string;
  price: number;
}

const updateProduct: Partial<Product> = {
  price: 45000
};

console.log("Updated Product:", updateProduct);

// ----------------------------
// Utility Types - Pick
// ----------------------------
type ProductPreview = Pick<Product, "id" | "name">;

const productPreview: ProductPreview = {
  id: 1,
  name: "Laptop"
};

console.log("Product Preview:", productPreview);

// ----------------------------
// Utility Types - Omit
// ----------------------------
type ProductWithoutPrice = Omit<Product, "price">;

const productWithoutPrice: ProductWithoutPrice = {
  id: 2,
  name: "Mobile"
};

console.log("Product Without Price:", productWithoutPrice);

// ----------------------------
// Utility Types - Record
// ----------------------------
type UserRoles = "admin" | "user" | "guest";

const rolePermissions: Record<UserRoles, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

console.log("Role Permissions:", rolePermissions);

// ----------------------------
// Generics
// ----------------------------
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));
console.log(identity<boolean>(true));

// ----------------------------
// Generic with Array
// ----------------------------
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));

// ----------------------------
// Generic Interface
// ----------------------------
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<User> = {
  data: {
    id: 3,
    name: "Charlie"
  },
  success: true
};

console.log("API Response:", userResponse);

// ----------------------------
// Generic Constraint
// ----------------------------
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3]));

// ----------------------------
// End of Day 2 Practice
// ----------------------------

