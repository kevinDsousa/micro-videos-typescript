import InvalidUIDError from '../../erros/invalid-uid.error';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import ValueObject from './value-object';

export default class UniqueEntityID extends ValueObject<string> {

  constructor(readonly id?: string) {
    super(id || uuidv4());
    this.validate();
  }

  private validate() {
    const isValid = uuidValidate(this._value);
    if (!isValid) {
      throw new InvalidUIDError(this._value);
    }
  }
}