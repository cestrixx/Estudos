module.exports = app => {
    app.post('/products', app.controllers.products.add);
    app.get('/products', app.controllers.products.getAll);
    app.route('/products/:id')
        .get(app.controllers.products.getById)
        .put(app.controllers.products.update)
        .delete(app.controllers.products.remove);
};