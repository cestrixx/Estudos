module.exports = (app) => {
    const products = require('../controllers/products');
    app.post('/products', products.create);
    app.get('/products', products.readAll);
    app.route('/products/:id')
        .get(products.read)
        .put(products.update)
        .delete(products.create);
};