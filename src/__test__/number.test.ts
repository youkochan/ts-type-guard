import { number } from '../index';

test('number test', () => {
    expect(() => number(null)).toThrow(Error);
    expect(() => number(null)).toThrow('Expected number, got null');

    expect(() => number(undefined)).toThrow(Error);
    expect(() => number(undefined)).toThrow('Expected number, got undefined');

    expect(() => number('0')).toThrow(Error);
    expect(() => number('0')).toThrow('Expected number, got 0');

    expect(() => number({})).toThrow(Error);
    expect(() => number({})).toThrow('Expected number, got [object Object]');

    expect(() => number([])).toThrow(Error);
    expect(() => number([])).toThrow('Expected number, got ');

    expect(() => number(['0'])).toThrow(Error);
    expect(() => number(['0'])).toThrow('Expected number, got ');

    expect(() => number(true)).toThrow(Error);
    expect(() => number(true)).toThrow('Expected number, got true');

    expect(() => number(false)).toThrow(Error);
    expect(() => number(false)).toThrow('Expected number, got false');

    expect(number(123)).toBe(123);
});