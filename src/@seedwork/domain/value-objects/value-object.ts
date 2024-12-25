export default abstract class ValueObject<Value = any> {
  protected _value: Value;

  constructor(value: Value) {
    this._value = value;
  }

  get value(): Value {
    return this._value;
  }

  toString = () => {
    if (this._value === undefined || this._value === null) {
      throw new Error('Erro ao tentar converter um objeto undefined ou null para string');
    }
    if (typeof this._value === 'object') {
      return JSON.stringify(this._value);
    }
    return this._value.toString();
  }
}