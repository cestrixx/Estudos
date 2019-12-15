const users = require('../models/users');

exports.add = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Error: O conteúdo da nota não pode estar vazio!"
        });
    }
    users.add({ nome : req.body.nome, 
                cep  : req.body.cep })
         .then(user => res.send(user))
         .catch(()  => res.status(400).send({ message: "Error: Usuario existente!" }));
};

exports.getAll = (req, res) => {
    users.getAll()
        .then(users => res.send(users))
        .catch(()   => res.status(400).send({ message: "Error: Nenhum usuario cadastrado!" }));
};

exports.get = (req, res) => {
    users.get(req.params.id)
        .then(user => res.send(user))
        .catch(()  => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
};

exports.update = (req, res) => {
    users.update(req.params.id, {"nome": req.body.nome, "preco": req.body.cep})
        .then(user => res.send(user))
        .catch(()   => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
};

exports.remove = (req, res) => {
    users.remove(req.params.id)
        .then(user => res.send(user))
        .catch(()   => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
};