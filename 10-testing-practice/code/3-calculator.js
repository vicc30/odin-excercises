const checkIsNan = (nums) => {
    for (var i = 0; i < nums.length; i++) {
        if (isNaN(nums[i])) {
            return true;
        }
    }
}

const add = (...num) => {
    if (checkIsNan(num)) return 'Provide only numbers';
    return num.reduce((acc, val) => acc + val);
}

const rest = (...num) => {
    if (checkIsNan(num)) return 'Provide only numbers';
    return num.reduce((acc, val) => acc - val);
}

const divide = (num1, num2) => {
    const nums = [num1, num2];
    if (checkIsNan(nums)) return 'Provide only numbers';
    if (num2 === 0) return 'Error: Divided by zero';
    return num1 / num2;
}

const multiply = (...num) => {
    if (checkIsNan(num)) return 'Provide only numbers';
    return num.reduce((acc, val) => acc * val);
}

const calculator = {
    add: (...num) => add(...num),
    rest: (...num) => rest(...num),
    multiply: (...num) => multiply(...num),
    divide: (num1, num2) => divide(num1, num2)
}


export default calculator;