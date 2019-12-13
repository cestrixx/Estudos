const products = require('../models/products');

exports.add = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Error: O conteúdo da nota não pode estar vazio!"
        });
    }
    products.add({ nome : req.body.nome, 
                   preco: req.body.preco })
         .then(product => res.send(product))
         .catch(()     => { return res.status(400).send({message:  "Error: Usuario existente!"}) });
};

exports.getAll = (req, res) => {
    products.getAll()
        .then(products => res.send(products))
        .catch(()      => { return res.status(400).send({message:  "Error: Nenhum usuario cadastrado!"}) });
}

exports.get = (req, res) => {
    products.get(req.params.id)
        .then(product => res.send(product))
        .catch(()     => { return res.status(400).send({message:  "Error: Usuario não cadastrado!"}) });
}

exports.remove = (req, res) => {
    products.remove(req.params.id)
        .then()
        .catch(() => { return res.status(400).send({message:  "Error: Usuario não cadastrado!"})});
}