const app = require('../../index');
const request = require('supertest');

describe('Testes da API - SUBTRAÇÃO', () => {

    test('POST /api/subtrair - Deve calcular 100 menos 50, resultado deve ser 50 (Teste01)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: 50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 50 });
    });

    test('POST /api/subtrair - Deve calcular 50 menos 100, resultado deve ser -50 (Teste02)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 50, num2: 100 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -50 });
    });

    test('POST /api/subtrair - Deve calcular 100 menos -50, resultado deve ser 150 (Teste04)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: -50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 150 });
    });

    test('POST /api/subtrair - Deve calcular -100 menos 50, resultado deve ser -150 (Teste03)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: -100, num2: 50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -150 });
    });

    test('POST /api/subtrair - Deve calcular 0 menos 50, resultado deve ser -50 (Teste05)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 0, num2: 50 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -50 });
    });

    test('POST /api/subtrair - Deve calcular 100 menos 0, resultado deve ser 100 (Teste06)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: 0 });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 100 });
    });

    test('POST /api/subtrair - Deve retornar erro ao tentar subtrair 100 e "abc" (Teste07)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100, num2: 'abc' });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para subtração!' });
    });

    test('POST /api/subtrair - Deve retornar erro ao tentar subtrair "abc" e 50 (Teste08)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 'abc', num2: 50 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para subtração!' });
    });

    test('POST /api/subtrair - Deve retornar erro ao tentar subtrair valor vazio e 50 (Teste09)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num2: 50 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para subtração!' });
    });

    test('POST /api/subtrair - Deve retornar erro ao tentar subtrair 100 e valor vazio (Teste10)', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 100 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para subtração!' });
    });

});
