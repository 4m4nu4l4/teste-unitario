const Servico = require("../../src/services/service");

describe('Teste função multiplicar', () => {
    let servico = new Servico();

    it('CT01 - Deve multiplicar 2 / 2', () => {
        const resultado = servico.Multiplicar(2, 2);
        expect(resultado).toBe(1);
    });

    it('CT02 - Deve multiplicar 2 / 0', () => {
        const resultado = servico.Multiplicar(2, 0);
        expect(resultado).toBe(0);
    });

    it('CT03 - Deve multiplicar -2 / 2', () => {
        const resultado = servico.Multiplicar(-2, 2);
        expect(resultado).toBe(-1);
    });

    it('CT04 - Deve multiplicar 1.5 / 2.3', () => {
        const resultado = servico.Multiplicar(1.5, 2.3);
        expect(resultado).toBeCloseTo(0,652, 1);
    });

    it('CT05 - Deve multiplicar 1000000 / 2000000', () => {
        const resultado = servico.Multiplicar(1000000, 2000000);
        expect(resultado).toBe(0,5);
    });

    it('CT06 - Deve lançar erro ao multiplicar "a" / 2', () => {
        const resultado = () => servico.Multiplicar('a', 2);
        expect(resultado).toThrowError('Não dá para multiplicar letras');
    });

    it('CT07 - Deve lançar erro ao multiplicar null / 2', () => {
        const resultado = () => servico.Multiplicar(null, 2);
        expect(resultado).toThrowError('Entrada inválida');
    });

    it('CT09 - Deve lançar erro ao multiplicar {} / 2', () => {
        const resultado = () => servico.Multiplicar({}, 2);
        expect(resultado).toThrowError('Entradas inválidas');
    });
});
