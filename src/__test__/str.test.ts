import { str } from '../index';

test('string test', () => {
  expect(() => str(null)).toThrow(Error);
  expect(() => str(null)).toThrow('Expected string, got null');

  expect(() => str(undefined)).toThrow(Error);
  expect(() => str(undefined)).toThrow('Expected string, got undefined');

  expect(() => str(0)).toThrow(Error);
  expect(() => str(0)).toThrow('Expected string, got 0');

  expect(() => str({})).toThrow(Error);
  expect(() => str({})).toThrow('Expected string, got [object Object]');

  expect(() => str([])).toThrow(Error);
  expect(() => str([])).toThrow('Expected string, got ');

  expect(() => str(['0'])).toThrow(Error);
  expect(() => str(['0'])).toThrow('Expected string, got ');

  expect(() => str(true)).toThrow(Error);
  expect(() => str(true)).toThrow('Expected string, got true');

  expect(() => str(false)).toThrow(Error);
  expect(() => str(false)).toThrow('Expected string, got false');

  expect(str('')).toBe('');
  expect(str('123')).toBe('123');
});
