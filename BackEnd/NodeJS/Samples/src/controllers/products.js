module.exports = app => {
    const add = (req, res) => {
        if (!req.body) {
            return res.status(400).send({
                message: "Error: O conteúdo do produto não pode estar vazio!"
            });
        }
        app.models.products.add({ nome: req.body.nome, preco: req.body.preco })
            .then(product => res.send(product))
            .catch(() => { return res.status(400).send({ message: "Error: Produto existente!" }) });
    };

    const getAll = (req, res) => {
        app.models.products.getAll()
            .then(products => res.send(products))
            .catch(() => { return res.status(400).send({ message: "Error: Nenhum produto cadastrado!" }) });
    }

    const getById = (req, res) => {
        app.models.products.getById(req.params.id)
            .then(product => res.send(product))
            .catch(() => { return res.status(400).send({ message: "Error: Produto não cadastrado!" }) });
    }

    const update = (req, res) => {
        app.models.products.update(req.params.id, { "nome": req.body.nome, "preco": req.body.preco })
            .then(product => res.send(product))
            .catch(() => { return res.status(400).send({ message: "Error: Produto não cadastrado!" }) });
    }

    const remove = (req, res) => {
        app.models.products.remove(req.params.id)
            .then(product => res.send(product))
            .catch(() => { return res.status(400).send({ message: "Error: Produto não cadastrado!" }) });
    }
    return { add, getAll, getById, update, remove }
}