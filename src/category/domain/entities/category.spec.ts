import UniqueEntityID from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";
import { Category, CategoryProps } from "./category";
import { omit } from 'lodash';

describe("Category unit test", () => {
    let props: CategoryProps = { name: 'movie', description: 'some description', is_active: true, created_at: new Date() };

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

        test("Deve criar uma instância de Category com campo uuid gerado", () => {
            type CategoryData = { props: CategoryProps, id?: UniqueEntityID };
            const data: CategoryData[] = [
                { props: { name: 'movie' } },
                { props: { name: 'movie' }, id: null },
                { props: { name: 'movie' }, id: undefined },
                { props: { name: 'movie' }, id: new UniqueEntityID() },
            ]

            data.forEach(item => {
                const category = new Category(item.props, item.id);

                expect(category.id).toBeDefined();
                expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityID);
            });
        });
    });

    describe("Fluxo de erros", () => {
        test("Deve lançar um erro se o nome da categoria estiver em branco", () => {
            const data = { props: { name: '' } };

            expect(() => new Category(data.props)).toThrow('Name is required');
        });
    });

    describe("Getters e Setters", () => {
        describe("Getters", () => {
            test("Deve retornar o nome da categoria", () => {
                const categoria = new Category({ name: 'movie' });
                expect(categoria.name).toBe('movie');
            });

            test("Deve retornar a descrição da categoria", () => {
                const categoria = new Category({ name: 'movie', description: 'some description' });
                expect(categoria.description).toBe('some description');
            });

            test("Deve retornar o is_active da categoria", () => {
                const categoria = new Category({ name: 'movie', is_active: true });
                expect(categoria.is_active).toBe(true);
            });

            test("Deve retornar a data de criação da categoria", () => {
                const created_at = new Date();
                const categoria = new Category({ name: 'movie', created_at });
                expect(categoria.created_at).toBe(created_at);
            });

            test("Deve retornar o is_active da categoria como true", () => {
                const categoria = new Category({ name: 'movie' });
                expect(categoria.is_active).toBe(true);
            });

            test("Deve retornar a data de criação da categoria como uma instância de Date", () => {
                const categoria = new Category({ name: 'movie' });
                expect(categoria.created_at).toBeInstanceOf(Date);
            });
        });

        describe("Setters", () => {
            test("Deve setar a descrição da categoria", () => {
                const categoria = new Category({ name: 'movie' });
                categoria.description = 'description';
                expect(categoria.description).toBe('description');
            });

            test("Deve setar o is_active da categoria", () => {
                const categoria = new Category({ name: 'movie' });
                categoria.is_active = true;
                expect(categoria.is_active).toBe(true);
            });

            test("Deve setar o is_active da categoria como true", () => {
                const categoria = new Category({ name: 'movie', is_active: false });
                categoria.is_active = true;
                expect(categoria.is_active).toBe(true);
            });
        });
    });

    describe("Métodos", () => {
        describe("Sucesso", () => {
            it("Deve testar a função activate", () => {
                const category = new Category(props);
                category.deactivate();
                category.activate();
                expect(category.is_active).toBe(true);
            });

            it("Deve testar a função deactivate", () => {
                const category = new Category(props);
                category.activate();
                category.deactivate();
                expect(category.is_active).toBe(false);
            });

            it("Deve testar a função update", () => {
                const category = new Category(props);
                category.update('new name', 'new description');
                expect(category.name).toBe('new name');
                expect(category.description).toBe('new description');
            });
        });

        describe("Falha", () => {
            it("Deve lançar um erro se o nome da categoria estiver em branco", () => {
                const category = new Category(props);
                expect(() => category.update('', 'new description')).toThrow('Name and description are required');
                expect(() => category.update('new name', '')).toThrow('Name and description are required');
                expect(() => category.update('', '')).toThrow('Name and description are required');
            });
        });
    });
});
