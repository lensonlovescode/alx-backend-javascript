export default function returnHowManyArguments(...args) {
    let count = 0;
    for (let arg of args) count += 1;
    return count;
}
