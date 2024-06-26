const app = require('../../index');
const request = require('supertest')

describe('Teste de API - DIVIDIR', () => { 
    test('POST /api/dividir - Deve dividir 50 /100 e o resultado deverá ser 10 (CT19)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 50, num2: 100})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 0.5})
    })

    test('POST /api/dividir - Deve dividir -100 / 10 e o resultado deverá ser -10 (CT20)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: -100, num2: 10})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: -10})
    })

    test('POST /api/dividir - Deve dividir 100 / -10 e o resultado deverá ser -10 (CT21)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 100, num2: -10})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: -10})
    })

    test('POST /api/dividir - Deve dividir 0 / -10 e o resultado deverá ser 0 (CT22)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 0, num2: 100})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 0})
    })

    test('POST /api/dividir - Deve dividir a / 13 e o resultado deverá ser - Não dá para dividir com valores inválidos! (CT23)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 'a', num2: 13})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para dividir com valores inválidos!'})
    })

    test('POST /api/dividir - Deve dividir 12 / a e o resultado deverá ser - Não dá para dividir com valores inválidos! (CT24)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 12, num2: 'a'})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para dividir com valores inválidos!'})
    })

    test('POST /api/dividir - Deve dividir 12 / null  e o resultado deverá ser - Não dá para dividir com valores inválidos! (CT24)', async () => {
        const response = await request(app).post('/api/dividir').send({num1: 12, num2: null})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para dividir com valores inválidos!'})
    })
})