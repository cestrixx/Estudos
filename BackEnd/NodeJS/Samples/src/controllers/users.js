module.exports = app => {
    const add = (req, res) => {
        if (!req.body) {
            return res.status(400).send({
                message: "Error: O conteúdo da nota não pode estar vazio!"
            });
        }
        app.models.users.add({ nome: req.body.nome, cep: req.body.cep })
            .then(user => res.status(201).send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario existente!" }));
    };

    const getAll = (req, res) => {
        app.models.users.getAll()
            .then(users => res.send(users))
            .catch(() => res.status(400).send({ message: "Error: Nenhum usuario cadastrado!" }));
    };

    const getById = (req, res) => {
        app.models.users.getById(req.params.id)
            .then(user => res.send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
    };

    const update = (req, res) => {
        app.models.users.update(req.params.id, { "nome": req.body.nome, "preco": req.body.cep })
            .then(user => res.send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
    };

    const remove = (req, res) => {
        app.models.users.remove(req.params.id)
            .then(user => res.send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
    };

    return { add, getAll, getById, update, remove }
}