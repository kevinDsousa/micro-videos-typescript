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

    it('Deve tentar converter um objeto com um valor undefined para string e retornar o valor', () => {
      vo = new StubValueObject({ prop1: 'value1', prop2: undefined });
      expect(() => vo.toString()).toThrow('Erro ao tentar converter um objeto com um valor undefined ou null para string');
    });
  });
});
