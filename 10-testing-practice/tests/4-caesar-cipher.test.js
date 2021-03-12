import cipher from '../code/4-caesar-cipher';

test('word ciphered lowercase', () => {
    expect(cipher('hello')).toBe('rovvy');
});

test('word ciphered with upper case', () => {
    expect(cipher('This is Only a TEST')).toBe('Drsc sc Yxvi k DOCD');
});
