import { Category } from "./category";

describe( "Category", () => {
    test('construtor da entidade', () => {
        const category = new Category('movie');
        expect(category.name).toBe('movie');
    }); 
});
