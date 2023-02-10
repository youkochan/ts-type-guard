type TypeGuard<T> = (value: unknown) => T;

export const optional = <T>(guard: TypeGuard<T>): TypeGuard<T | undefined> => {
  return (value: unknown): T | undefined => {
    try {
      return guard(value);
    } catch {
      return undefined;
    }
  };
};

export const or = <T1, T2>(guard1: TypeGuard<T1>, guard2: TypeGuard<T2>): TypeGuard<T1 | T2> => {
  return (value: unknown): T1 | T2 => {
    try {
      return guard1(value);
    } catch (err1: any) {
      try {
        return guard2(value);
      } catch (err2: any) {
        throw new Error(`Both type not match. ${err1.message}; ${err2.message}`);
      }
    }
  };
};

export const str: TypeGuard<string> = (value: unknown): string => {
  if (typeof value === 'string') {
    return value;
  }

  throw new Error(`Expected string, got ${value}`);
};

export const num: TypeGuard<number> = (value: unknown): number => {
  if (typeof value !== 'number') {
    throw new Error(`Expected number, got ${value}`);
  }

  if (isNaN(value)) {
    throw new Error('Number is not a valid number. [NaN]');
  }

  if (!isFinite(value)) {
    throw new Error('Number is not a valid number. [Infinity]');
  }

  return value;
};

export const constStr = <T extends string>(constValue: T): TypeGuard<T> => {
  return (value: unknown) => {
    if (str(value) === constValue) {
      return constValue;
    }

    throw new Error(`Expected const string ${constValue}, got ${value}`);
  };
};

export const bool: TypeGuard<boolean> = (value: unknown): boolean => {
  if (typeof value === 'boolean') {
    return value;
  }

  throw new Error(`Expected bool, got ${value}`);
};

export const array = <T>(inner: TypeGuard<T>): TypeGuard<T[]> => {
  return (value: unknown): T[] => {
    if (Array.isArray(value)) {
      return value.map(inner);
    }

    throw new Error(`Expected array, got ${value}`);
  };
};

export const object = <T extends Record<string, TypeGuard<any>>>(inner: T) => {
  return (value: unknown): { [P in keyof T]: ReturnType<T[P]> } => {
    if (value === null) {
      throw new Error('Expected object, got null');
    }
    if (value === undefined) {
      throw new Error('Expected object, got undefined');
    }
    if (typeof value !== 'object') {
      throw new Error(`Expected object, got ${value}`);
    }

    const out: { [P in keyof T]: ReturnType<T[P]> } = {} as any;

    const get = (k: Extract<keyof T, string>, v: object): any => {
      const key = Object.keys(v).find((_) => _.toLowerCase() === k.toLowerCase());
      return key ? (v as any)[key] : undefined;
    };

    const keys = Object.keys(inner) as Extract<keyof T, string>[];

    for (const k of keys) {
      out[k] = inner[k](get(k, value));
    }

    return out;
  };
};
