import capitalize from '../code/1-capitalize';

test('capitalize word', () => {
    const testWord = 'h';
    expect(capitalize(testWord)).toBe('H');
});

test('capitalize string', () => {
    const testString = 'hello my name is Victor and I like programming!';
    expect(capitalize(testString)).toBe('Hello my name is Victor and I like programming!');
});

test('capital string', () => {
    const capitalString = 'THIS IS AN EXAMPLE STRING';
    expect(capitalize(capitalString)).toBe('THIS IS AN EXAMPLE STRING');
});

test('invalid input', () => {
    const number = 1234567890;
    expect(capitalize(number)).toBe('Please provide a string');
});