module.exports = app => {
    const create = (req, res) => {
        if (!req.body) {
            return res.status(400).send({
                message: "Error: O conteúdo da nota não pode estar vazio!"
            });
        }
        app.models.users.create({ nome: req.body.nome, cep: req.body.cep })
            .then(user => res.status(201).send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario existente!" }));
    };

    const readAll = (req, res) => {
        app.models.users.readAll()
            .then(users => res.send(users))
            .catch(() => res.status(400).send({ message: "Error: Nenhum usuario cadastrado!" }));
    };

    const read = (req, res) => {
        app.models.users.read(req.params.id)
            .then(user => res.send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
    };

    const update = (req, res) => {
        app.models.users.update(req.params.id, { "nome": req.body.nome, "preco": req.body.cep })
            .then(user => res.send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
    };

    const delete = (req, res) => {
        app.models.users.delete(req.params.id)
            .then(user => res.send(user))
            .catch(() => res.status(400).send({ message: "Error: Usuario não cadastrado!" }));
    };

    return { create, readAll, read, update, delete }
}