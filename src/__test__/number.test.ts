import { num } from '../index';

test('number test', () => {
  expect(() => num(null)).toThrow(Error);
  expect(() => num(null)).toThrow('Expected number, got null');

  expect(() => num(undefined)).toThrow(Error);
  expect(() => num(undefined)).toThrow('Expected number, got undefined');

  expect(() => num('0')).toThrow(Error);
  expect(() => num('0')).toThrow('Expected number, got 0');

  expect(() => num({})).toThrow(Error);
  expect(() => num({})).toThrow('Expected number, got [object Object]');

  expect(() => num([])).toThrow(Error);
  expect(() => num([])).toThrow('Expected number, got ');

  expect(() => num(['0'])).toThrow(Error);
  expect(() => num(['0'])).toThrow('Expected number, got ');

  expect(() => num(true)).toThrow(Error);
  expect(() => num(true)).toThrow('Expected number, got true');

  expect(() => num(false)).toThrow(Error);
  expect(() => num(false)).toThrow('Expected number, got false');

  expect(num(123)).toBe(123);
});
