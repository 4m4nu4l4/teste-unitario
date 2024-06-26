const app = require('../../index');
const request = require('supertest');

describe('Teste da API - MULTIPLICAÇÃO', () => {
    test('POST /api/multiplicar - (Teste01) Deve calcular 100 vezes 50 e o resultado deve ser 5000 ', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 50});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 5000 });
    });

    test('POST /api/multiplicar - (Teste02) Deve calcular -100 vezes 50 e o resultado deve ser -5000 ', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: -100, num2: 50});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: -5000 });
    });

    test('POST /api/multiplicar - (Teste03) Deve retornar erro ao tentar multiplicar "abc" por 50 ', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 'abc', num2: 50});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não multiplica caracteres' });
    });

    test('POST /api/multiplicar - (Teste04) Deve calcular 50 vezes 100 e o resultado deve ser 5000 ', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 50, num2: 100});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 5000 });
    });

    test('POST /api/multiplicar - (Teste05) Deve calcular 0 vezes -50 e o resultado deve ser 0 ', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 0, num2: -50});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0 });
    });

    test('POST /api/multiplicar - (Teste06) Deve calcular 100 vezes 0 e o resultado deve ser 0 ', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 0});
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 0 });
    });

    test('POST /api/multiplicar - (Teste07) Deve retornar erro ao tentar multiplicar 100 por "abc" ', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 'abc'});
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não multiplica caracteres' });
    });

    test('POST /api/multiplicar - (Teste08) Deve retornar erro ao tentar multiplicar sem valor para num1 ', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num2: 50 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não é possível fazer a multiplicação por nulo' });
    });

    test('POST /api/multiplicar - (Teste09) Deve retornar erro ao tentar multiplicar 100 por valor vazio ', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num1: 100 });
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ mensagem: 'Não é possível fazer a multiplicação por nulo' });
    });
});
