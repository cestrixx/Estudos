const products = require('../models/products');

exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Error: O conteúdo do produto não pode estar vazio!"
        });
    }
    products.create({ nome : req.body.nome, 
                   preco: req.body.preco })
         .then(product => res.send(product))
         .catch(()     => { return res.status(400).send({message:  "Error: Produto existente!"}) });
};

exports.readAll = (req, res) => {
    products.readAll()
        .then(products => res.send(products))
        .catch(()      => { return res.status(400).send({message:  "Error: Nenhum produto cadastrado!"}) });
}

exports.read = (req, res) => {
    products.read(req.params.id)
        .then(product => res.send(product))
        .catch(()     => { return res.status(400).send({message:  "Error: Produto não cadastrado!"}) });
}

exports.update = (req, res) => {
    products.update(req.params.id, {"nome": req.body.nome, "preco": req.body.preco})
        .then(product => res.send(product))
        .catch(() => { return res.status(400).send({message:  "Error: Produto não cadastrado!"})});
}

exports.delete = (req, res) => {
    products.delete(req.params.id)
        .then(product => res.send(product))
        .catch(() => { return res.status(400).send({message:  "Error: Produto não cadastrado!"})});
}