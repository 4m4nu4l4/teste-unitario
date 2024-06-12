const Servico = require("../../src/services/service");

describe('Teste função Subtrair', () => {
    let servico;

    beforeEach(() => {
        servico = new Servico();
    });

    it('CT01 - Deve subtrair 2 - 2', () => {
        const resultado = servico.Subtrair(2, 2);
        expect(resultado).toBe(0);
    });

    it('CT02 - Deve lançar erro ao subtrair "a" - 2', () => {
        const resultado = () => servico.Subtrair('a', 2);
        expect(resultado).toThrowError('Não dá para subtrair letras');
    });

    it('CT03 - Deve subtrair -2 - 2', () => {
        const resultado = servico.Subtrair(-2, 2);
        expect(resultado).toBe(-4);
    });

    it('CT04 - Deve subtrair 0 - 5', () => {
        const resultado = servico.Subtrair(0, 5);
        expect(resultado).toBe(-5);
    });

    it('CT05 - Deve subtrair 2000000 - 1000000', () => {
        const resultado = servico.Subtrair(2000000, 1000000);
        expect(resultado).toBe(1000000);
    });

    it('CT06 - Deve lançar erro ao subtrair null - 2', () => {
        const resultado = () => servico.Subtrair(null, 2);
        expect(resultado).toEqual('Não é possível fazer a divisão por zero');
    });

    it('CT07 - Deve lançar erro ao subtrair {} - 2', () => {
        const resultado = () => servico.Subtrair({}, 2);
        expect(resultado).toThrowError('Não dá para subtrair letras');
    });
});
