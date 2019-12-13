module.exports = (app) => {
    const products = require('../controllers/products');
    app.post('/products', products.add);
    app.get('/products', products.getAll);
    app.get('/products/:id', products.get);
    // app.put('/products/:id', products.update);
    app.delete('/products/:id', products.remove);
};