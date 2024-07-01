// 100-weak.js

// Create a WeakMap instance to store endpoint query counts
export const weakMap = new WeakMap();

// Function to query API and track the number of times it's called for each endpoint
export function queryAPI(endpoint) {
  // Get current count or initialize to 0
  let count = weakMap.get(endpoint) || 0;

  // Increment count
  count++;
  weakMap.set(endpoint, count);

  // Check if count >= 5, throw error if true
  if (count >= 5) {
    throw new Error("Endpoint load is high");
  }

  return count; // Optionally return the updated count
}
