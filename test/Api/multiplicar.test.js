const app = require('../../index');
const request = require('supertest')

describe('Teste de API - MULTIPLICAR', () => {
    test('POST /api/multiplicar - Deve multiplicar 100 * 50 e o resultado deverá ser 50 (CT27)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 50})
    
        expect(response.statusCode).toBe(200)
       expect(response.body).toEqual({ result: 5000})
    })

    test('POST /api/multiplicar - Deve multiplicar 50 * 100 e o resultado deverá ser 50 (CT28)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 50, num2: 100})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 5000})
    })

    test('POST /api/multiplicar - Deve multiplicar -100 * 50 e o resultado deverá ser -5000 (CT29)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: -100, num2: 50})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: -5000})
    })

    test('POST /api/multiplicar - Deve multiplicar 0 * -50 e o resultado deverá ser -0 (CT30)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 0, num2: -50})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 0})
    })

    test('POST /api/multiplicar - Deve multiplicar 100 * 0 e o resultado deverá ser 0 (CT31)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 0})
    
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: 0})
    })

    test('POST /api/multiplicar - Deve multiplicar abc * 50 e o resultado deverá ser - Não dá para multiplicar com valores inválidos! (CT32)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 'abc', num2: 50})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para multiplicar com valores inválidos!'})
    })

    test('POST /api/multiplicar - Deve multiplicar 100 * abc e o resultado deverá ser - Não dá para multiplicar com valores inválidos! (CT33)', async () => {
        const response = await request(app).post('/api/multiplicar').send({num1: 100, num2: 'abc'})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para multiplicar com valores inválidos!'})
    })

    test('POST /api/multiplicar - Deve multiplicar  * 50 e o resultado deverá ser - Não dá para multiplicar com valores inválidos! (CT34)', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num2: 50})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para multiplicar com valores inválidos!'})
    })

    test('POST /api/multiplicar - Deve multiplicar 100 *  e o resultado deverá ser - Não dá para multiplicar com valores inválidos! (CT34)', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num1: 100})
    
        expect(response.statusCode).toBe(500)
        expect(response.body).toEqual({ message: 'Não dá para multiplicar com valores inválidos!'})
    })
 })