import ValueObject from "../value-object";

class StubValueObject extends ValueObject {
}

describe('Value Object Unit tests', () => {
  describe('Sucesso', () => {
    it('Deve setar um valor', () => {
      let vo = new StubValueObject('string value');
      expect(vo.value).toBe('string value');

      vo = new StubValueObject({prop1: 'value1'});
      expect(vo.value).toStrictEqual({prop1: 'value1'});
    });

    it('Deve retornar o valor como string', () => {
      let vo = new StubValueObject('string value');
      expect(vo.toString()).toBe('string value');
    });

    it('Deve retornar o valor como string passando um numero', () => {
      let vo = new StubValueObject(1);
      expect(vo.toString()).toBe('1');
    });

    it('Deve retornar o valor como string passando um boolean', () => {
      let vo = new StubValueObject(true);
      expect(vo.toString()).toBe('true');
    });

    it('Deve retornar o valor como string passando um objeto', () => {
      let vo = new StubValueObject({prop1: 'value1'});
      expect(vo.toString()).toBe('{"prop1":"value1"}');
    });

    it('Deve retornar o valor como string passando um array', () => {
      let vo = new StubValueObject([1, 2, 3]);
      expect(vo.toString()).toBe('[1,2,3]');
    });
  });

  describe('Falha', () => {
    it('Deve retornar um erro ao tentar converter um objeto undefined para string', () => {
      let vo = new StubValueObject(undefined);
      expect(() => vo.toString()).toThrow();
    });

    it('Deve retornar um erro ao tentar converter um objeto null para string', () => {
      let vo = new StubValueObject(null);
      expect(() => vo.toString()).toThrow();
    });
  });
});
