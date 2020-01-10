const request = require('supertest');
const app = require('../src/app');
const users = require('../src/models/users');

beforeAll(() => {
    users.create({ nome : "Carlos Eduardo de Souza", cep  : "15990515" });
    users.create({ nome : "Paula Fernanda Florencio de Souza", cep  : "15990515" });
});

afterAll(() => {
    users.delete(1);
    users.delete(2);
});

test('Deve listar todos os usuarios', () => {
    return request(app).get('/users').then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual([null,
                                 {"cep": "15990515", "id": 1, "nome": "Carlos Eduardo de Souza"}, 
                                 {"cep": "15990515", "id": 2, "nome": "Paula Fernanda Florencio de Souza"}]);
        expect(res.body).toHaveLength(3);
        expect(res.body[2]).toHaveProperty("nome", "Paula Fernanda Florencio de Souza");
    });
});

test('Deve inserir um usuario com sucesso', () => {
    return request(app).post('/users').send({"cep": "15997056", "nome": "Maria Luiza de Souza"}).then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.cep).toBe("15997056");
        expect(res.body.id).toBe(3);
        expect(res.body.nome).toBe("Maria Luiza de Souza");
    })
});