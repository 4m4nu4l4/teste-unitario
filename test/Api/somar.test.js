const app = require('../../index');
const request = require('supertest');

describe('Testes da API - SOMA', () => {

  test('POST /api/somar - Deve calcular a soma de 12 e 13, resultando em 25 (Teste01)', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 25 });
  });

  test('POST /api/somar - Deve calcular a soma de 0 e 13, resultando em 13 (Teste04)', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 0, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 13 });
  });

  test('POST /api/somar - Deve calcular a soma de -12 e 13, resultando em 1 (Teste02)', async () => {
    const response = await request(app).post('/api/somar').send({ num1: -12, num2: 13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 1 });
  });

  test('POST /api/somar - Deve calcular a soma de 12 e -13, resultando em -1 (Teste03)', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: -13 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -1 });
  });

  test('POST /api/somar - Deve calcular a soma de 12 e 0, resultando em 12 (Teste05)', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: 0 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 12 });
  });

  test('POST /api/somar - Deve retornar erro ao tentar somar "a" e 13 (Teste06)', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 'a', num2: 13 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ mensagem: 'Valores inválidos para soma!' });
  });

  test('POST /api/somar - Deve retornar erro ao tentar somar 12 e "a" (Teste07)', async () => {
    const response = await request(app).post('/api/somar').send({ num1: 12, num2: 'a' });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ mensagem: 'Valores inválidos para soma!' });
  });

  test('POST /api/somar - Deve retornar erro ao tentar somar valor vazio e 12 (Teste08)', async () => {
    const response = await request(app).post('/api/somar').send({ num2: 12 });

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ mensagem: 'Valores inválidos para soma!' });
  });

});