import calculator from '../code/3-calculator';

test('add two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('add more than two numbers', () => {
    expect(calculator.add(2, 3, 4, 5, 6)).toBe(20);
});

test('rest two numbers', () => {
    expect(calculator.rest(2, 2)).toBe(0);
});

test('rest more than two numbers', () => {
    expect(calculator.rest(20, 5, 5)).toBe(10);
});

test('divide 10/2', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('divided by 0 should return error', () => {
    expect(calculator.divide(10,0)).toBe('Error: Divided by zero');
});

test('multiply two numbers',() => {
    expect(calculator.multiply(10,20)).toBe(200);
    expect(calculator.multiply(0,10)).toBe(0);
});

test('multiply multiple numbers',() => {
    expect(calculator.multiply(-1,2,4,5,6)).toBe(-240);
})

test('input is not a number', () => {
    expect(calculator.add('a', 1, 2, 3)).toBe('Provide only numbers');
    expect(calculator.rest(20, 2, 3, 'z')).toBe('Provide only numbers');
    expect(calculator.divide(10,'w')).toBe('Provide only numbers');
    expect(calculator.multiply(4,50,10,'m')).toBe('Provide only numbers');
});