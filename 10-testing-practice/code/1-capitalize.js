/* 
* capitalize(string) takes a string and 
* returns that string with the first character capitalized.
*/
function capitalize(arr) {
    if (typeof arr === 'string') {
        const firstLetter = arr[0].toUpperCase();
        const restString = arr.slice(1, arr.length);
        return firstLetter + restString;
    } else return ("Please provide a string");
    
}
const test = "hello";
capitalize(test) //?
export default capitalize;
