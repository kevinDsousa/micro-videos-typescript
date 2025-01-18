import UniqueEntityID from "../value-objects/unique-entity-id.vo";

export default abstract class Entity<Props> {
  public readonly uniqueEntityId: UniqueEntityID;

  constructor(public readonly props: Props, id?: UniqueEntityID) {
    this.uniqueEntityId = id || new UniqueEntityID();
  }

  public get id(): string {
    return this.uniqueEntityId.value;
  }

  public toJSON(): Required<{id: string} & Props> {
    return {
      id: this.id,
      ...this.props
    } as Required<{id: string} & Props>;
  }
}