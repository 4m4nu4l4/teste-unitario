const app = require('../../index');
const request = require('supertest');

describe('Teste da API - MULTIPLICAÇÃO', () => {
    test('POST /api/multiplicar - Deve calcular 100 vezes 50 e o resultado deve ser 5000 (Teste08)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 50});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 5000 });
    });

    test('POST /api/multiplicar - Deve calcular -100 vezes 50 e o resultado deve ser -5000 (Teste10)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: -100, num2: 50});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -5000 });
    });

    test('POST /api/multiplicar - Deve retornar erro ao tentar multiplicar "abc" por 50 (Teste13)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 'abc', num2: 50});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para multiplicação!' });
    });

    test('POST /api/multiplicar - Deve calcular 50 vezes 100 e o resultado deve ser 5000 (Teste09)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 50, num2: 100});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 5000 });
    });

    test('POST /api/multiplicar - Deve calcular 0 vezes -50 e o resultado deve ser 0 (Teste11)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 0, num2: -50});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0 });
    });

    test('POST /api/multiplicar - Deve calcular 100 vezes 0 e o resultado deve ser 0 (Teste12)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 0});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0 });
    });

    test('POST /api/multiplicar - Deve retornar erro ao tentar multiplicar 100 por "abc" (Teste14)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 'abc'});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para multiplicação!' });
    });

    test('POST /api/multiplicar - Deve retornar erro ao tentar multiplicar sem valor para num1 (Teste15)', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num2: 50 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para multiplicação!' });
    });

    test('POST /api/multiplicar - Deve retornar erro ao tentar multiplicar 100 por valor vazio (Teste16)', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num1: 100 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para multiplicação!' });
    });
});
