const Servico = require("../../src/services/service");

describe('Teste função dividir', () => {
    let servico = new Servico();

    it('CT01 - Deve dividir 2 / 2', () => {
        const resultado = servico.Dividir(2, 2);
        expect(resultado).toBe(1);
    });

    it('CT02 - Deve dividir 2 / 0', () => {
        const resultado = servico.Dividir(2, 0);
        expect(resultado).toBe(0);
    });

    it('CT03 - Deve dividir -2 / 2', () => {
        const resultado = servico.Dividir(-2, 2);
        expect(resultado).toBe(-1);
    });

    it('CT04 - Deve dividir 1.5 / 2.3', () => {
        const resultado = servico.Dividir(1.5, 2.3);
        expect(resultado).toBeCloseTo(0.652, 3);  // Note que o valor esperado aqui é 0.652
    });

    it('CT05 - Deve dividir 1000000 / 2000000', () => {
        const resultado = servico.Dividir(1000000, 2000000);
        expect(resultado).toBeCloseTo(0.5, 5); // Note que o valor esperado aqui é 0.5
    });

    it('CT06 - Deve lançar erro ao dividir "a" / 2', () => {
        const resultado = () => servico.Dividir('a', 2);
        expect(resultado).toThrowError('Não dá para dividir letras');
    });

    it('CT07 - Deve lançar erro ao dividir null / 2', () => {
        const resultado = () => servico.Dividir(null, 2);
        expect(resultado).toThrowError('Não é possível fazer a divisão por nulo');
    });

    it('CT08 - Deve lançar erro ao dividir {} / 2', () => {
        const resultado = () => servico.Dividir({}, 2);
        expect(resultado).toThrowError('Entradas inválidas');
    });
});
