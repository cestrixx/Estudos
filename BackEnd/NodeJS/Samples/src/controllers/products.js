var model = require('../models/products');

function add(req, res) {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const products = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    model.add(products);
    res.send(products);
}

function get(req, res) {
    model.get(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });

    return {}
}

function getAll() {
    return Object.values({})
}

function update(id, produto) {
    return {}
}

function remove(id) {
    return {}
}

module.exports = { add, get, getAll, update, remove }