function reverseString(arr) {
    let newArr = arr.split('');//?
    var reverse = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverse.push(newArr[i]);
    }
    return reverse.join(""); //?
}
const test = "pal";

reverseString(test) //?

export default reverseString;