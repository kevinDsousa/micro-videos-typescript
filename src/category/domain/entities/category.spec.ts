import { Category, CategoryProps } from "./category";
import { omit } from 'lodash';

describe("Category unit test", () => {
    let props: CategoryProps = { name: 'movie', description: 'some description', is_active: true, created_at: new Date()};

    describe("Fluxo de sucesso", () => {
        test("Construtor da entidade Category", () => {
            const created_at = new Date();

            const category = new Category({ name: 'movie', description: 'some description', is_active: true, created_at });

            expect(category.props).toStrictEqual(
                { name: 'movie', description: 'some description', is_active: true, created_at }
            );
        });

        test("Deve criar uma instância de Category passando somente o nome e validar os valores padrões", () => {
            const partialProps = omit(props, ['description', 'is_active', 'created_at']);
        
            const category = new Category(partialProps);
        
            expect(category.props).toMatchObject({
                name: 'movie',
                description: null,
                is_active: true,
            });
            expect(category.props.created_at).toBeInstanceOf(Date);
        });        

        test("Deve criar uma instância de Category passando nome e descrição", () => {
            const partialProps = omit(props, ['is_active', 'created_at']);
            const category = new Category(partialProps);

            expect(category.props).toMatchObject({
                name: 'movie',
                description: 'some description',
                is_active: true,
            });
            expect(category.props.created_at).toBeInstanceOf(Date);
        });

        test("Deve criar uma instância de Category passando nome, descrição e is_active", () => {
            const partialProps = omit(props, ['created_at']);
            const category = new Category(partialProps);

            expect(category.props).toMatchObject({
                name: 'movie',
                description: 'some description',
                is_active: true,
            });
            expect(category.props.created_at).toBeInstanceOf(Date);
        });

        test("Deve criar uma instância de Category passando nome, descrição, is_active e created_at", () => {
            const category = new Category(props);

            expect(category.props).toStrictEqual(props);
        });
    });

    describe("Fluxo de erros", () => {});
});
