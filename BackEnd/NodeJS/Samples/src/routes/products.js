module.exports = (app) => {
    const products = require('../controllers/products');
    app.post('/products', products.add);
    app.get('/products', products.getAll);
    app.route('/products/:id')
        .get(products.get)
        .put(products.update)
        .delete(products.remove);
};