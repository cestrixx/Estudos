const supertest = require('supertest');
const request   = supertest('localhost:3003');

test('Responder na porta: 3003', () => {
    return request.get('/').then(res => expect(res.status).toBe(200));
})