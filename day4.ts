/* =====================================================
   🚀 TypeScript Day 4 Practice
   Topics Covered:
   - Advanced Generics
   - Mapped Types
   - keyof & Indexed Access Types
   - Async Patterns
   - Real-world API Validation
===================================================== */


/* =====================================================
   1️⃣ Advanced Generics
===================================================== */

// Generic Function
function identity<T>(value: T): T {
  return value;
}

const numberResult = identity<number>(100);
const stringResult = identity<string>("TypeScript");

console.log("Identity:", numberResult, stringResult);


// Generic with Constraint
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log("Length:", getLength("Hello"));
console.log("Length:", getLength([1, 2, 3]));


// Multiple Generics
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const mergedObject = merge({ name: "Alice" }, { age: 25 });
console.log("Merged Object:", mergedObject);


/* =====================================================
   2️⃣ Mapped Types
===================================================== */

type User = {
  name: string;
  age: number;
};

// Make all properties optional
type OptionalUser = {
  [K in keyof User]?: User[K];
};

// Make all properties readonly
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// Custom Nullable utility
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;

const optionalUser: OptionalUser = { name: "Bob" };
const nullableUser: NullableUser = { name: null, age: 30 };

console.log("Optional User:", optionalUser);
console.log("Nullable User:", nullableUser);


/* =====================================================
   3️⃣ keyof & Indexed Access Types
===================================================== */

type UserKeys = keyof User; 
// "name" | "age"

type NameType = User["name"]; 
// string

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userExample: User = { name: "Charlie", age: 28 };
const userName = getProperty(userExample, "name");

console.log("User Name:", userName);


/* =====================================================
   4️⃣ Async Patterns in TypeScript
===================================================== */

// Simulated async API
async function fakeApiCall(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("API Data Loaded"), 1000);
  });
}

// Generic async function
async function fetchApi<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

// Safe async wrapper
async function safeFetch<T>(data: T): Promise<T | null> {
  try {
    return await fetchApi(data);
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

(async () => {
  const apiResult = await fakeApiCall();
  console.log("Fake API:", apiResult);

  const userData = await safeFetch<User>({ name: "David", age: 35 });
  console.log("Safe Fetch User:", userData);
})();


/* =====================================================
   5️⃣ Real-World API Validation Patterns
===================================================== */

// API Response Wrapper
type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};

// Type Guard
function isUser(data: any): data is User {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.name === "string" &&
    typeof data.age === "number"
  );
}

// Generic API Validator
function validateApiResponse<T>(
  data: unknown,
  validator: (data: unknown) => data is T
): T {
  if (validator(data)) {
    return data;
  }
  throw new Error("Invalid API response structure");
}

// Simulated API fetch with validation
async function fetchWithValidation<T>(
  data: unknown,
  validator: (data: unknown) => data is T
): Promise<ApiResponse<T>> {
  try {
    const validatedData = validateApiResponse(data, validator);
    return { success: true, data: validatedData };
  } catch (error) {
    return {
      success: false,
      data: null as any,
      error: (error as Error).message,
    };
  }
}

(async () => {
  const apiResponse = await fetchWithValidation<User>(
    { name: "Emma", age: 22 },
    isUser
  );

  console.log("Validated API Response:", apiResponse);

  const badResponse = await fetchWithValidation<User>(
    { name: "Wrong Data" },
    isUser
  );

  console.log("Invalid API Response:", badResponse);
})();


/* =====================================================
   ✅ End of Day 4 Practice
===================================================== */
