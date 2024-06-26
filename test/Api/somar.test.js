const app = require('../../index');
const request = require('supertest')

describe('Teste de API - SOMAR', () => {
  
  test('POST /api/somar - Deve somar 12 + 13 e o resultado deverá ser 25 (CT01)', async () => {
    const response = await request(app).post('/api/somar').send({num1: 12, num2: 13})

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ result: 25})
  })

  test('POST /api/somar - Deve somar -12 + 13 e o resultado deverá ser 1 (CT02)', async () => {
    const response = await request(app).post('/api/somar').send({num1: -12, num2: 13})

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ result: 1})
  })

  test('POST /api/somar - Deve somar 12 + -13 e o resultado deverá ser -1 (CT03)', async () => {
    const response = await request(app).post('/api/somar').send({num1: 12, num2: -13})

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ result: -1})
  })

  test('POST /api/somar - Deve somar 0 + 13 e o resultado deverá ser 13 (CT04)', async () => {
    const response = await request(app).post('/api/somar').send({num1: 0, num2: 13})

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ result: 13})
  })

  test('POST /api/somar - Deve somar 12 + 0 e o resultado deverá ser 12 (CT05)', async () => {
    const response = await request(app).post('/api/somar').send({num1: 12, num2: 0})

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ result: 12})
  })

  test('POST /api/somar - Deve somar a + 13 e o resultado deverá ser - Não dá para somar com valores inválidos! (CT06)', async () => {
    const response = await request(app).post('/api/somar').send({num1: 'a', num2: 13})

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual({ message: 'Não dá para somar com valores inválidos!'})
  })

  test('POST /api/somar - Deve somar 12 + a e o resultado deverá ser - Não dá para somar com valores inválidos! (CT07)', async () => {
    const response = await request(app).post('/api/somar').send({num1: 12, num2: 'a'})

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual({ message: 'Não dá para somar com valores inválidos!'})
  })

  test('POST /api/somar - Deve somar / + 12 e o resultado deverá ser - Não dá para somar com valores inválidos! (CT08)', async () => {
    const response = await request(app).post('/api/somar').send({ num2: 12})

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual({ message: 'Não dá para somar com valores inválidos!'})
  })
})