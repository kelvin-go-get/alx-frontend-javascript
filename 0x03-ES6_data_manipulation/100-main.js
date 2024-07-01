// 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: "http", name: "getUsers" };

console.log(weakMap.get(endpoint)); // should initially be undefined or 0

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // should print 1

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // should print 2

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint); // This call will throw an error

console.log(weakMap.get(endpoint)); // should not be reached due to error
