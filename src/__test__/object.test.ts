import { object, string } from '../index';

test('object test', () => {
    const emptyObject = object({});
    expect(emptyObject({})).toEqual({});
    expect(emptyObject({ id: "123" })).toEqual({});

    const objectWithStringId = object({ id: string });
    expect(objectWithStringId({ id: "123" })).toEqual({ id: "123" });
    expect(() => objectWithStringId({ id: 123 })).toThrow(Error);
});