module.exports = app => {
    app.post('/users', app.controllers.users.create);
    app.get('/users', app.controllers.users.readAll);
    app.route('/users/:id')
        .get(app.controllers.users.read)
        .put(app.controllers.users.update)
        .delete(app.controllers.users.delete);
};