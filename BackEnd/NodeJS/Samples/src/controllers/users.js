const users = require('../models/users');

exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Error: O conteúdo da nota não pode estar vazio!"
        });
    }
    users.create({ nome : req.body.nome, 
                cep  : req.body.cep })
         .then(user => res.status(201).send(user))
         .catch(()  => res.status(400).send({ message: "Error: Usuario existente!" }));
};

exports.readAll = (req, res) => {
    users.readAll()
        .then(users => res.send(users))
        .catch(()   => res.status(400).send({ message: "Error: Nenhum usuario cadastrado!" }));
};

exports.read = (req, res) => {
    users.read(req.params.id)
        .then(user => res.send(user))
        .catch(()  => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
};

exports.update = (req, res) => {
    users.update(req.params.id, {"nome": req.body.nome, "preco": req.body.cep})
        .then(user => res.send(user))
        .catch(()   => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
};

exports.delete = (req, res) => {
    users.delete(req.params.id)
        .then(user => res.send(user))
        .catch(()   => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
};