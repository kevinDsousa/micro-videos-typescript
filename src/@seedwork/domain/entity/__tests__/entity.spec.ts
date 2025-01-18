import Entity from "../entity"; // Corrigir a importação

class StubEntity extends Entity<{prop1: string, prop2: number}> {}
describe('Entity unit tests', () => {
  it('Deve setar as props e id', () => {
    const entity = new StubEntity({ prop1: 'prop1', prop2: 2 });
    expect(entity.props).toStrictEqual({ prop1: 'prop1', prop2: 2 });
    expect(entity.id).toBeDefined();
  });

  it('Deve converter a entidade para JSON', () => {
    const entity = new StubEntity({ prop1: 'prop1', prop2: 2 });
    expect(entity.toJSON()).toStrictEqual({ id: entity.id, prop1: 'prop1', prop2: 2 });
  });
});