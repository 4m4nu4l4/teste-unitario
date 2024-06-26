const app = require('../../index');
const request = require('supertest')

describe('Teste de API - SUBTRAIR', () => {
    test('POST /api/subtrair - Deve subtrair 100 - 50 e o resultado deverá ser 50 (CT09)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 100, num2: 50})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 50})
    })

    test('POST /api/subtrair - Deve subtrair 50 - 100 e o resultado deverá ser -50 (CT10)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 50, num2: 100})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: -50})
    })

    test('POST /api/subtrair - Deve subtrair -100 - 50 e o resultado deverá ser -150 (CT11)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: -100, num2: 50})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: -150})
    })

    test('POST /api/subtrair - Deve subtrair 100 - - 50 e o resultado deverá ser -50 (CT12)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 100, num2: -50})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 150})
    })

    test('POST /api/subtrair - Deve subtrair 0 - 50 e o resultado deverá ser -50 (CT13)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 0, num2: 50})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: -50})
    })

    test('POST /api/subtrair - Deve subtrair 100 - 0 e o resultado deverá ser 100 (CT14)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 100, num2: 0})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 100})
    })

    test('POST /api/subtrair - Deve subtrair 100 - abc e o resultado deverá ser - Não dá para subtrair com valores inválidos! (CT15)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 100, num2: 'abc'})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para subtrair com valores inválidos!'})
    })

    test('POST /api/subtrair - Deve subtrair abc - 50 e o resultado deverá ser - Não dá para subtrair com valores inválidos! (CT16)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 'abc', num2: 50})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para subtrair com valores inválidos!'})
    })

    test('POST /api/subtrair - Deve subtrair / - 50 e o resultado deverá ser - Não dá para subtrair com valores inválidos! (CT17)', async () => {
        const response = await request(app).post('/api/subtrair').send({num2: 50})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para subtrair com valores inválidos!'})
    })

    test('POST /api/subtrair - Deve subtrair 100 - / e o resultado deverá ser - Não dá para subtrair com valores inválidos! (CT17)', async () => {
        const response = await request(app).post('/api/subtrair').send({num1: 100})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para subtrair com valores inválidos!'})
    })
})