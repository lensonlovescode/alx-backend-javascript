export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  let i = 0;
  for (const value of array) {
    arr[i] = appendString + value;
    i += 1;
  }

  return arr;
}
