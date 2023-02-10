# TS Type Guard

@ts-type-guard/ts-type-guard is a TypeScript type guard library that helps you to convert any data to the expected type. It provides many built-in operators like 'str', 'object', 'num', 'optional', etc, which you can use to build complex data structures. If the conversion fails, an error will be thrown.

## Installation

To install the package, simply run the following command:

```shell
$ npm install @ts-type-guard/ts-type-guard
```

## Usage

Here is an example of how to use @ts-type-guard/ts-type-guard to convert a data to the expected type:

```typescript
import { str, num, optional, object } from '@ts-type-guard/ts-type-guard';

// Define the data sturcture
const User = object({
    name: str,
    age: num,
    address: optional(str)
});

/*
If you need to get the type of the data structure, just use `ReturnType`.
For example, the type of the user will be:

type User = {
    name: string;
    age: number;
    address: string | undefined;
}
*/
type User = ReturnType<typeof User>;

// This case will succeed since the data is valid
const user1 = User({
    name: 'John Doe',
    age: 32,
    address: '123 Main St'
});

// This case will fail since the data is invalid, missing the required age property
const user2 = User({
    name: 'John Doe',
})
```

## API Reference
| Operator | Description                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| optional | Makes the given value optional. If the value is undefined, the conversion will succeed with the result of undefined.                                                             |
| or       | Allows you to use multiple type guards and returns the first successful conversion result.                                                                                       |
| str      | Converts the given unknown value to a string type. If the converting is failed, an error will be thrown.                                                                         |
| num      | Converts the given unknown value to a number type. If the converting is failed, an error will be thrown.                                                                         |
| constStr | Converts the given unknown value to a string type and ensures that it matches a specific constant value. If the converting or the comparison is failed, an error will be thrown. |
| bool     | Converts the given unknown value to a boolean type. If the converting is failed, an error will be thrown.                                                                        |
| array    | Converts an unknown value to an array of expected types using the provided inner type guard. If the converting is failed, an error will be thrown.                               |
| object   | Converts an unknown object to the expected type using the provided inner type guards. If any of the conversions are failed, an error will be thrown.                             |
