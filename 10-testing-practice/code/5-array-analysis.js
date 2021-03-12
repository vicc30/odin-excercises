function analize(arr) {

    return ({
        average: arr.reduce((acc, val) => { return acc + val; })/arr.length,
        min: arr.reduce((prev, curr) => { return prev < curr ? prev : curr; }),
        max: arr.reduce((prev, curr) => { return prev > curr ? prev : curr; }),
        length: arr.length
    })

}

analize([1, 8, 3, 4, 2, 6])//?

export default analize;