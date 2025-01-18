import ValueObject from "../value-object";

class StubValueObject extends ValueObject {
}

describe('Value Object Unit tests', () => {
  describe('Sucesso', () => {
    let vo: StubValueObject;

    it('Deve setar um valor', () => {
      vo = new StubValueObject('value');
      expect(vo.value).toBe('value');
    });

    it('Deve retornar o valor como string', () => {
      vo = new StubValueObject('string value');
      expect(vo.toString()).toBe('string value');
    });

    it('Deve retornar o valor como string passando um numero', () => {
      vo = new StubValueObject(1);
      expect(vo.toString()).toBe('1');
    });

    it('Deve retornar o valor como string passando um boolean', () => {
      vo = new StubValueObject(true);
      expect(vo.toString()).toBe('true');
    });

    it('Deve retornar o valor como string passando um objeto', () => {
      vo = new StubValueObject({ prop1: 'value1' });
      expect(vo.toString()).toBe('{"prop1":"value1"}');
    });

    it('Deve retornar o valor como string passando um array', () => {
      vo = new StubValueObject([1, 2, 3]);
      expect(vo.toString()).toBe('[1,2,3]');
    });
  });

  describe('Falha', () => {
    let vo: StubValueObject;

    it('Deve retornar um erro ao tentar converter um objeto undefined para string', () => {
      vo = new StubValueObject(undefined);
      expect(() => vo.toString()).toThrow();
    });

    it('Deve retornar um erro ao tentar converter um objeto null para string', () => {
      vo = new StubValueObject(null);
      expect(() => vo.toString()).toThrow();
    });

    it('Deve retornar um erro ao tentar converter um objeto com um valor undefined para string', () => {
      vo = new StubValueObject({ prop1: undefined });
      expect(() => vo.toString()).toThrow();
    });

    it('Deve retornar um erro ao tentar converter um objeto com um valor null para string', () => {
      vo = new StubValueObject({ prop1: null });
      expect(() => vo.toString()).toThrow();
    });

      it('Precisa ter um objeto imutável', () => {
        const obj: { prop1: string; deep: { prop2: string; prop3: Date } } = deepFreeze(
          {
            prop1: 'value1',
            deep: {
              prop2: 'value2',
              prop3: new Date
            }
          });

        const vo = new StubValueObject(obj);
    
        expect(() =>
          (vo as any).value.prop1 = "test"
        ).toThrow(
          "Cannot assign to read only property 'prop1' of object '#<Object>'"
        );
    
        expect(() =>
          (vo as any).value.deep.prop2 = "test"
        ).toThrow(
          "Cannot assign to read only property 'prop2' of object '#<Object>'"
        );
    
        expect(vo.value.deep.prop3).toBeInstanceOf(Date);
      });
  });
});
function deepFreeze<T extends Record<string, any>>(obj: T): T {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (
      obj.hasOwnProperty(prop) &&
      obj[prop] !== null &&
      (typeof obj[prop] === "object" || typeof obj[prop] === "function") &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}

