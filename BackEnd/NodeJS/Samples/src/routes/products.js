module.exports = app => {
    app.post('/products', app.controllers.products.create);
    app.get('/products', app.controllers.products.readAll);
    app.route('/products/:id')
        .get(app.controllers.products.read)
        .put(app.controllers.products.update)
        .delete(app.controllers.products.create);
};