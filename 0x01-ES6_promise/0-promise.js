// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // For now, we just resolve the promise immediately
    resolve();
  });
}
