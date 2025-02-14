import { validate as validateUUID } from "uuid";
import InvalidUIDError from "../../../erros/invalid-uid.error";
import UniqueEntityID from "../unique-entity-id.vo"

const validateSpy = jest.spyOn(UniqueEntityID.prototype as any, 'validate')

describe('Unique entity id Unit tests', () => {

    it("Deve lançar erro quando uuid for inválido", () => {
        expect(() => new UniqueEntityID('Invalid UUID')).toThrow(new InvalidUIDError('Invalid UUID'));
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    it('should throw an InvalidUIDError when id is not valid', () => {
        expect(() => new UniqueEntityID('invalid-uuid')).toThrow(new InvalidUIDError('invalid-uuid'));
    });

    it("Deve validar quando cair em erro", () => {
        expect(() => new UniqueEntityID('invalid-uuid')).toThrow(new InvalidUIDError('invalid-uuid'));
    });

    it("Deve criar uma instância de UniqueEntityID com uuid válido no construtor e não gerar erros", () => {
        const uid = new UniqueEntityID("dc5fe8b7-f4f1-436b-88ac-56e59b94e972");
        expect(uid).toBeInstanceOf(UniqueEntityID);
        expect(uid.value).toBe("dc5fe8b7-f4f1-436b-88ac-56e59b94e972");
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    it("Deve validar um uuid válido", () => {
        const uid = new UniqueEntityID("dc5fe8b7-f4f1-436b-88ac-56e59b94e972");

        expect(validateSpy).toHaveBeenCalledTimes(1);
        expect(validateUUID(uid.value)).toBeTruthy();
    });

    it("Deve validar um uuid inválido", () => {
        const uid = new UniqueEntityID("dc5fe8b7-f4f1-436b-88ac-56e59b94e972");

        expect(validateSpy).toHaveBeenCalledTimes(1);
        expect(validateUUID(uid.value)).toBeTruthy();
    });
})