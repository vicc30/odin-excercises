import reverseString from '../code/2-reverseString';

test('reverse word', () => {
    expect(reverseString("palindrome")).toBe("emordnilap");
});

test('reverse string', () => {
    const str = "super Mega large STRING and 1234 number.";
    expect(reverseString(str)).toBe(".rebmun 4321 dna GNIRTS egral ageM repus");
});
