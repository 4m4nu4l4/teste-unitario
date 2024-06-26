const app = require('../../index');
const request = require('supertest');

describe('Testes da API - SOMA', () => {

  test('POST /api/somar - (Teste01) Deve calcular a soma de 12 e 13, resultando em 25 ', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 25 });
  });

  test('POST /api/somar - (Teste02) Deve calcular a soma de 0 e 13, resultando em 13 ', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 0, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 13 });
  });

  test('POST /api/somar - (Teste03) Deve calcular a soma de -12 e 13, resultando em 1 ', async () => {
    const response = await request(app).post('/api/somar').send({ num1: -12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 1 });
  });

  test('POST /api/somar - (Teste04) Deve calcular a soma de 12 e -13, resultando em -1 ', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: -13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -1 });
  });

  test('POST /api/somar - (Teste05) Deve calcular a soma de 12 e 0, resultando em 12 ', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: 0 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 12 });
  });

  test('POST /api/somar - (Teste06) Deve retornar erro ao tentar somar "a" e 13 ', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 'a', num2: 13 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ mensagem: 'Não dá para somar letras' });
  });

  test('POST /api/somar - (Teste07) Deve retornar erro ao tentar somar 12 e "a" ', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: 'a' });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ mensagem: 'Não dá para somar letras' });
  });

  test('POST /api/somar - (Teste08) Deve retornar erro ao tentar somar valor vazio e 12 ', async () => {
    const response = await request(app).post('/api/somar').send({ num2: 12 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ mensagem: 'Não é possível fazer a soma por nulo' });
  });

});