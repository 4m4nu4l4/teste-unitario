const app = require('../../index');
const request = require('supertest');

describe('Teste da API - DIVISÃO', () => {
    test('POST /api/dividir - (Teste01) Deve calcular -100 dividido por 10 e o resultado deve ser -10 ', async () => {
        const response = await request(app).post('/api/dividir').send({num1: -100, num2: 10});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -10 });
    });

    test('POST /api/dividir - (Teste02) Deve retornar erro ao tentar dividir 12 por null ', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 12, num2: null});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não é possível fazer a divisão por nulo' });
    });

    test('POST /api/dividir - (Teste03) Deve calcular 50 dividido por 100 e o resultado deve ser 0.5 ', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 50, num2: 100});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0.5 });
    });

    test('POST /api/dividir -  (Teste04) Deve calcular 0 dividido por 100 e o resultado deve ser 0', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 0, num2: 100});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0 });
    });

    test('POST /api/dividir - (Teste05) Deve calcular 100 dividido por -10 e o resultado deve ser -10 ', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 100, num2: -10});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -10 });
    });

    test('POST /api/dividir - (Teste06) Deve retornar erro ao tentar dividir 12 por "a" ', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 12, num2: 'a'});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não dá para dividir letras' });
    });

    test('POST /api/dividir - (Teste07) Deve retornar erro ao tentar dividir "a" por 13 ', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 'a', num2: 13});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não dá para dividir letras' });
    });
});
