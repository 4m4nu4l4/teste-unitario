const Servico = require("../../src/services/service");

describe('Teste função somar', () => {
  let servico = new Servico();

  it('CT01 - Deve somar 2 + 2', () => {
    const resultado = servico.Somar(2, 2)
    expect(resultado).toBe(4)
  })

  it('CT02 - Deve somar a + 2', () => {
    const resultado = () => servico.Somar('a', 2)
    expect(resultado).toThrowError('Não dá para somar letras')
  })

  it('CT03 - Deve somar -2 + 2', () => {
    const resultado = servico.Somar(-2, 2)
    expect(resultado).toBe(0)
  })

  it('CT04 - Deve somar 0 + 5', () => {
    const resultado = servico.Somar(0, 5)
    expect(resultado).toBe(5)
  })

  it('CT05 - Deve somar 1000000 + 2000000', () => {
    const resultado = servico.Somar(1000000, 2000000);
    expect(resultado).toBe(3000000);
  });

  it('CT06 - Deve lançar erro ao somar null + 2', () => {
    const resultado = () => servico.Somar(null, 2);
    expect(resultado).toThrowError('Não envia');
  });

  it('CT07 - Deve lançar erro ao somar {} + 2', () => {
    const resultado = () => servico.Somar({}, 2);
    expect(resultado).toThrowError('Impossível fazer soma com caracteres');
  });

})