export function deepFreeze<T>(object: T): T {
  const propsNames = Object.getOwnPropertyNames(object);

  propsNames.forEach(name => {
    const prop = object[name as keyof T];

    if (prop && typeof prop === 'object') {
      deepFreeze(prop);
    }
  });
  return Object.freeze(object);
}