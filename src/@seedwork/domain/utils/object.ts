export function deepFreeze<T>(object: T): T {
  if (object === null || object === undefined) {
    return object;
  }

  const propsNames = Object.getOwnPropertyNames(object);

  propsNames.forEach(name => {
    const prop = object[name as keyof T];

    if (typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}