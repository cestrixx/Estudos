module.exports = (app) => {
    const users = require('../controllers/users');
    app.post('/users', users.create);
    app.get('/users', users.readAll);
    app.route('/users/:id')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
};