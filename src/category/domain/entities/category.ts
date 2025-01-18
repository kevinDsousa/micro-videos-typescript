import Entity from '../../../@seedwork/domain/entity/entity';
import UniqueEntityID from '../../../@seedwork/domain/value-objects/unique-entity-id.vo';

export type CategoryProps = {
    name: string;
    is_active?: boolean;
    description?: string;
    created_at?: Date;
}

export class Category extends Entity<CategoryProps> {
    constructor(public readonly props: CategoryProps, id?: UniqueEntityID) {
        super(props, id);
        if (!props.name) {
            throw new Error('Name is required');
        }
        this.description = this.props.description;
        this.is_active = this.props.is_active ?? true;
        this.props.created_at = this.props.created_at ?? new Date();
    }

    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }

    public set description(description: string) {
        this.props.description = description;
    }

    get is_active(): boolean {
        return this.props.is_active;
    }

    public set is_active(is_active: boolean) {
        this.props.is_active = is_active;
    }

    get created_at(): Date {
        return this.props.created_at;
    }

    update(name: string, description: string): void {
        if (!name || name === '' && !description || description === '') {
            throw new Error('Name and description are required');
        }
        this.props.name = name;
        this.props.description = description;
    }

    activate(): void {
        this.props.is_active = true;
    }

    deactivate(): void {
        this.props.is_active = false;
    }
}