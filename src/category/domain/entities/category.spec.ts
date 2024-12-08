import { Category } from "./category";

describe("Category unit test", () => {
    test('Construtor da entidade Category', () => {
        const created_at = new Date();

        const category = new Category({ name: 'movie', description: 'some description', is_active: true, created_at });

        expect(category.props).toStrictEqual(
            { name: 'movie', description: 'some description', is_active: true, created_at }
        );
    });
});
