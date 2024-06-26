const app = require('../../index');
const request = require('supertest');

describe('Teste da API - DIVISÃO', () => {
    test('POST /api/dividir - Deve calcular -100 dividido por 10 e o resultado deve ser -10 (Teste02)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: -100, num2: 10});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -10 });
    });

    test('POST /api/dividir - Deve retornar erro ao tentar dividir 12 por null (Teste07)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 12, num2: null});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para divisão!' });
    });

    test('POST /api/dividir - Deve calcular 50 dividido por 100 e o resultado deve ser 0.5 (Teste01)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 50, num2: 100});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0.5 });
    });

    test('POST /api/dividir - Deve calcular 0 dividido por 100 e o resultado deve ser 0 (Teste04)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 0, num2: 100});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0 });
    });

    test('POST /api/dividir - Deve calcular 100 dividido por -10 e o resultado deve ser -10 (Teste03)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 100, num2: -10});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -10 });
    });

    test('POST /api/dividir - Deve retornar erro ao tentar dividir 12 por "a" (Teste06)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 12, num2: 'a'});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para divisão!' });
    });

    test('POST /api/dividir - Deve retornar erro ao tentar dividir "a" por 13 (Teste05)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 'a', num2: 13});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Valores inválidos para divisão!' });
    });
});
