export type CategoryProps = {
    name: string;
    is_active?: boolean;
    description?: string;
    created_at?: Date;
}

export class Category {

    constructor(public readonly props: CategoryProps) {
        this.description = this.props.description;
        this.is_active = this.props.is_active;
        this.props.created_at = this.props.created_at ?? new Date();
    }

    get name (): string {
        return this.props.name;
    }

    get description (): string {
        return this.props.description;
    }

    private set description (description: string) {
        this.props.description = this.props.description ?? null;
    }

    get is_active () : boolean {
        return this.props.is_active;
    }

    private set is_active (is_active: boolean) {
        this.props.is_active = this.props.is_active ?? true;
    }

    get created_at () : Date {
        return this.props.created_at;
    }
    
}

//create
