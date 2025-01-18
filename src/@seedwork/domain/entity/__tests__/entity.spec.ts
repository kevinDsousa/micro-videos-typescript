import Entity from "../entity";
import UniqueEntityId from '../../value-objects/unique-entity-id.vo';
import { validate as uuidValidate } from 'uuid';

class StubEntity extends Entity<{prop1: string, prop2: number}> {}
describe('Entity unit tests', () => {
  it('Deve setar as props e id', () => {
    const entity = new StubEntity({ prop1: 'prop1', prop2: 2 });
    expect(entity.props).toStrictEqual({ prop1: 'prop1', prop2: 2 });
    expect(entity.id).toBeDefined();
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it("Deve acertar o valor de uuid", () => {
    const arrange = { prop1: "prop1", prop2: 2 };
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntity(arrange, uniqueEntityId);

    expect(entity.id).toBe(uniqueEntityId.toString());
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.uniqueEntityId.toString()).toBe(uniqueEntityId.toString());
  });

  it('Deve converter a entidade para JSON', () => {
    const entity = new StubEntity({ prop1: 'prop1', prop2: 2 });
    expect(entity.toJSON()).toStrictEqual({ id: entity.id, prop1: 'prop1', prop2: 2 });
  });
});