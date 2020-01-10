const request = require('supertest');
const app = require('../src/app');
const users = require('../src/models/users');

beforeAll(() => {
    users.create({ nome : "Carlos Eduardo de Souza", cep  : "159000515" });
    users.create({ nome : "Paula Fernanda Florencio de Souza", cep  : "159000515" });
});

afterAll(() => {
    users.delete(1);
    users.delete(2);
});

test('Deve listar todos os usuarios', () => {
    return request(app).get('/users').then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual({"1": {"cep": "159000515", "id": 1, "nome": "Carlos Eduardo de Souza"}, "2": {"cep": "159000515", "id": 2, "nome": "Paula Fernanda Florencio de Souza"}});
    });
}); 