export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Promise type');
    } else {
      reject('No promise type');
    }
  });
}
