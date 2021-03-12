import analize from '../code/5-array-analysis';

test('expected output: average:4 min:1 max:8 length:6', () => {
    expect(analize([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});