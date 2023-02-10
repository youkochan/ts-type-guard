import { array, str } from '../index';

test('array test', () => {
  const stringArray = array(str);
  expect(stringArray([])).toEqual([]);
  expect(stringArray(['123', '456'])).toEqual(['123', '456']);

  expect(() => stringArray(['123', 456])).toThrow(Error);
  expect(() => stringArray(123)).toThrow(Error);
  expect(() => stringArray('123')).toThrow(Error);
  expect(() => stringArray({})).toThrow(Error);
  expect(() => stringArray(null)).toThrow(Error);
  expect(() => stringArray(undefined)).toThrow(Error);
  expect(() => stringArray(['123', {}])).toThrow(Error);
});
