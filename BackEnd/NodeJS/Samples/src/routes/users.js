module.exports = app => {
    app.post('/users', app.controllers.users.add);
    app.get('/users', app.controllers.users.getAll);
    app.route('/users/:id')
        .get(app.controllers.users.getById)
        .put(app.controllers.users.update)
        .delete(app.controllers.users.remove);
};