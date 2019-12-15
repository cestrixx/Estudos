module.exports = (app) => {
    const users = require('../controllers/users');
    app.post('/users', users.add);
    app.get('/users', users.getAll);
    app.route('/users/:id')
        .get(users.get)
        .put(users.update)
        .delete(users.remove);
};