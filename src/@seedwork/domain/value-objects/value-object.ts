import { deepFreeze } from "../utils/object";

export default abstract class ValueObject<Value = any> {
  protected _value: Value;

  constructor(value: Value) {
    this._value = deepFreeze(value);
  }

  get value(): Value {
    return this._value;
  }

  toString = () => {
    if (typeof this._value !== 'object' || this._value === null) {
      return this._value.toString();
    }
    const hasInvalidValue = Object.values(this._value).some(value => value === undefined || value === null);
    if (hasInvalidValue) {
      throw new Error('Erro ao tentar converter um objeto com um valor undefined ou null para string');
    }
  
    return JSON.stringify(this._value);
  }
}