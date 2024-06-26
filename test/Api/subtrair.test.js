const app = require('../../index');
const request = require('supertest');

describe('Testes da API - SUBTRAÇÃO', () => {

    test('POST /api/subtrair - (Teste01) Deve calcular 100 menos 50, resultado deve ser 50 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: 50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 50 });
    });

    test('POST /api/subtrair - (Teste02) Deve calcular 50 menos 100, resultado deve ser -50 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 50, num2: 100 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -50 });
    });

    test('POST /api/subtrair - (Teste04) Deve calcular 100 menos -50, resultado deve ser 150 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: -50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 150 });
    });

    test('POST /api/subtrair - (Teste03) Deve calcular -100 menos 50, resultado deve ser -150 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: -100, num2: 50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -150 });
    });

    test('POST /api/subtrair - (Teste05) Deve calcular 0 menos 50, resultado deve ser -50 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 0, num2: 50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -50 });
    });

    test('POST /api/subtrair - (Teste06) Deve calcular 100 menos 0, resultado deve ser 100 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: 0 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 100 });
    });

    test('POST /api/subtrair - (Teste07) Deve retornar erro ao tentar subtrair 100 e "abc" ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: 'abc' });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não dá para subtrair letras' });
    });

    test('POST /api/subtrair - (Teste08) Deve retornar erro ao tentar subtrair "abc" e 50 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 'abc', num2: 50 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não dá para subtrair letras' });
    });

    test('POST /api/subtrair - (Teste09) Deve retornar erro ao tentar subtrair valor vazio e 50 ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num2: 50 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não é possível fazer a subtração por nulo' });
    });

    test('POST /api/subtrair - (Teste10) Deve retornar erro ao tentar subtrair 100 e valor vazio ', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não é possível fazer a subtração por nulo' });
    });

});
