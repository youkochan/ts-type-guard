import { bool } from '../index';

test('bool test', () => {
    expect(() => bool(null)).toThrow(Error);
    expect(() => bool(null)).toThrow('Expected bool, got null');

    expect(() => bool(undefined)).toThrow(Error)
    expect(() => bool(undefined)).toThrow('Expected bool, got undefined');

    expect(() => bool('0')).toThrow(Error)
    expect(() => bool('0')).toThrow('Expected bool, got 0');

    expect(() => bool({})).toThrow(Error);
    expect(() => bool({})).toThrow('Expected bool, got [object Object]');

    expect(() => bool([])).toThrow(Error);
    expect(() => bool([])).toThrow('Expected bool, got ');

    expect(() => bool(['0'])).toThrow(Error);
    expect(() => bool(['0'])).toThrow('Expected bool, got ');

    expect(bool(true)).toBe(true);
    expect(bool(false)).toBe(false);
});