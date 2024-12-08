import { v4 as uuidv4 } from 'uuid';

export type CategoryProps = {
    name: string;
    is_active?: boolean;
    description?: string;
    created_at?: Date;
}

export class Category {
    public readonly id: string;
    constructor(public readonly props: CategoryProps, id?: string) {
        this.id = id || uuidv4();
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
}
