import Add from '../Add';

describe('add', () => {
    it ('testing add', () => {
        const actual = Add(1,3);
        expect(actual).toBe(4);
    });//h
});

test.skip ('testing add - should be negative', () => {
    const actual = Add(-4,3);
    expect(actual).toBe(-1);
});

test ('testing add - should be negative2', () => {
    const actual = Add(-6,3);
    expect(actual).toBe(-3);
});