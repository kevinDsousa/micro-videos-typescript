import { deepFreeze } from "../object";

describe('objetc unit tests', () => {
  it('Não deve congelar um valor escalar', () => {
    const str = deepFreeze('a');
    expect(typeof str).toBe('string');

    let boolean = deepFreeze(true);
    expect(typeof boolean).toBe('boolean');
    boolean = deepFreeze(false);
    expect(typeof boolean).toBe('boolean');

    const numr: number = deepFreeze(1);
    expect(typeof numr).toBe('number');
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

    expect(() =>
      (obj as any).prop1 = "test"
    ).toThrow(
      "Cannot assign to read only property 'prop1' of object '#<Object>'"
    );

    expect(() =>
      (obj as any).deep.prop2 = "test"
    ).toThrow(
      "Cannot assign to read only property 'prop2' of object '#<Object>'"
    );

    expect(obj.deep.prop3).toBeInstanceOf(Date);
  });
});