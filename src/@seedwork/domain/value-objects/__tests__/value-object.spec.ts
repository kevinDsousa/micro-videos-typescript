import ValueObject from "../value-object";

class StubValueObject extends ValueObject { }

describe("Value Object Unit tests", () => {
  describe("Sucesso", () => {
    let vo: StubValueObject;

    const arrange = [
      { value: "value", expected: "value", description: "Deve setar um valor" },
      {
        value: "string value",
        expected: "string value",
        description: "Deve retornar o valor como string",
      },
      {
        value: 1,
        expected: "1",
        description: "Deve retornar o valor como string passando um numero",
      },
      {
        value: true,
        expected: "true",
        description: "Deve retornar o valor como string passando um boolean",
      },
      {
        value: { prop1: "value1" },
        expected: '{"prop1":"value1"}',
        description: "Deve retornar o valor como string passando um objeto",
      },
      {
        value: [1, 2, 3],
        expected: "[1,2,3]",
        description: "Deve retornar o valor como string passando um array",
      },
    ];

    arrange.forEach(({ value, expected, description }) => {
      it(description, () => {
        vo = new StubValueObject(value);
        expect(vo.toString()).toBe(expected);
      });
    });
  });

  describe("Falha", () => {
    let vo: StubValueObject;

    const arrange = [
      {
        value: undefined,
        description: "Deve retornar um erro ao tentar converter um objeto undefined para string",
      },
      {
        value: null,
        description: "Deve retornar um erro ao tentar converter um objeto null para string",
      },
      {
        value: { prop1: undefined as any },
        description:
          "Deve retornar um erro ao tentar converter um objeto com um valor undefined para string",
      },
      {
        value: { prop1: null },
        description:
          "Deve retornar um erro ao tentar converter um objeto com um valor null para string",
      },
    ];

    arrange.forEach(({ value, description }) => {
      it(description, () => {
        vo = new StubValueObject(value);
        expectToThrow(vo);
      });
    });
  });

  describe("Imutabilidade", () => {
    let vo: StubValueObject;

    it("Deve ser imutável", () => {
      vo = new StubValueObject({ prop1: "value1" });
      expect(() => {
        (vo as any)._value = { prop2: "value2" };
      });
    });
  });

  function expectToThrow(vo: StubValueObject) {
    expect(() => vo.toString()).toThrow();
  }
});
