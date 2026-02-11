// ===============================
// 1️⃣ Interface & Type Alias
// ===============================

interface User {
  id: number;
  name: string;
  email?: string;
}

type Admin = User & {
  role: "admin";
};

// ===============================
// 2️⃣ Utility Types
// ===============================

type PartialUser = Partial<User>;
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutEmail = Omit<User, "email">;

const preview: UserPreview = {
  id: 1,
  name: "Ravi",
};

// ===============================
// 3️⃣ Generics
// ===============================

function identity<T>(value: T): T {
  return value;
}

const str = identity<string>("Hello");
const num = identity<number>(100);

class ApiResponse<T> {
  constructor(public data: T, public success: boolean) {}

  getData(): T {
    return this.data;
  }
}

const userResponse = new ApiResponse<User>(
  { id: 1, name: "Ravi" },
  true
);

// ===============================
// 4️⃣ Class & Inheritance
// ===============================

class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, public department: string) {
    super(name);
  }

  greet() {
    super.greet();
    console.log(`I work in ${this.department}`);
  }
}

const emp = new Employee("Anu", "Engineering");
emp.greet();

// ===============================
// 5️⃣ Type Guard
// ===============================

function isUser(obj: any): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.name === "string"
  );
}

function printUser(data: unknown) {
  if (isUser(data)) {
    console.log("User:", data.name);
  } else {
    console.log("Invalid user data");
  }
}

printUser({ id: 2, name: "Kiran" });
printUser({ age: 25 });

// ===============================
// 6️⃣ Type Assertion (Use Carefully)
// ===============================

const inputElement = document.getElementById("username") as HTMLInputElement | null;

if (inputElement) {
  inputElement.value = "Test User";
}

// ===============================
// 7️⃣ Union Types + Narrowing
// ===============================

function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatValue("hello"));
console.log(formatValue(10.5));

// ===============================
// 8️⃣ Record Utility Type
// ===============================

type RolePermissions = Record<string, boolean>;

const permissions: RolePermissions = {
  read: true,
  write: false,
  delete: false,
};

console.log("Permissions:", permissions);
