function average(arr) {
    const sum = arr.reduce((acc, val) => {
        return acc + val; //?
    });
    return sum / arr.length; //?
}

function getMin(arr) {
    return arr.reduce((prev, curr) => {
        return prev < curr ? prev : curr;
    });
}

function getMax(arr) {
    return arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    });
}

function getLength(arr) {
    return arr.length;
}

function analize(arr) {

    return ({
        average: average(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: getLength(arr)
    })

}

analize([1, 8, 3, 4, 2, 6])//?

export default analize;