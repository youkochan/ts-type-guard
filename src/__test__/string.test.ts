import { string } from '../index';

test('string test', () => {
    expect(() => string(null)).toThrow(Error);
    expect(() => string(null)).toThrow('Expected string, got null');

    expect(() => string(undefined)).toThrow(Error);
    expect(() => string(undefined)).toThrow('Expected string, got undefined');

    expect(() => string(0)).toThrow(Error);
    expect(() => string(0)).toThrow('Expected string, got 0');

    expect(() => string({})).toThrow(Error);
    expect(() => string({})).toThrow('Expected string, got [object Object]');

    expect(() => string([])).toThrow(Error);
    expect(() => string([])).toThrow('Expected string, got ');

    expect(() => string(['0'])).toThrow(Error);
    expect(() => string(['0'])).toThrow('Expected string, got ');

    expect(() => string(true)).toThrow(Error);
    expect(() => string(true)).toThrow('Expected string, got true');

    expect(() => string(false)).toThrow(Error);
    expect(() => string(false)).toThrow('Expected string, got false');

    expect(string('')).toBe('');
    expect(string('123')).toBe('123');
});